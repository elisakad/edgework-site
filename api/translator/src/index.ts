interface Env {
    GEMINI_API_KEY: string;
}

interface TranslationRequest {
    material: string;
    question: string;
    url?: string;
}

interface GeminiResponse {
    candidates?: Array<{
        content?: {
            parts?: Array<{
                text?: string;
            }>;
        };
    }>;
}

const GEMINI_MODEL = "gemini-3.6-flash";

function corsHeaders(): HeadersInit {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };
}

function jsonResponse(data: unknown, status = 200): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            ...corsHeaders(),
        },
    });
}

export default {
    async fetch(
        request: Request,
        env: Env,
    ): Promise<Response> {
        if (request.method === "OPTIONS") {
            return jsonResponse({ ok: true });
        }

        if (request.method !== "POST") {
            return jsonResponse(
                {
                    error: "Method not allowed. Use POST /translate.",
                },
                405,
            );
        }

        let body: TranslationRequest;

        try {
            body = (await request.json()) as TranslationRequest;
        } catch {
            return jsonResponse(
                {
                    error: "Request body must be valid JSON.",
                },
                400,
            );
        }

        if (!body.material?.trim() || !body.question?.trim()) {
            return jsonResponse(
                {
                    error: "Both material and question are required.",
                },
                400,
            );
        }

        if (!env.GEMINI_API_KEY) {
            return jsonResponse(
                {
                    error: "Gemini API key is not configured.",
                },
                500,
            );
        }

        const prompt = `
You are the Edgework Translation Desk.

Your purpose is to make unfamiliar AI policy, legal,
technical, and governance information understandable
to non-experts.

The user has encountered something they do not fully
understand.

Answer their question in clear, accessible language.

IMPORTANT:
- Explain what the material means rather than merely repeating it.
- Preserve important nuance and uncertainty.
- Distinguish explicit claims from reasonable interpretation.
- Do not invent facts that are not supported by the material.
- Do not provide legal advice.
- Do not pretend that a voluntary framework is legally binding.
- Explain why the information matters when appropriate.
- Be concise enough to be useful, but substantive enough to
  provide context.

MATERIAL:
${body.material}

USER QUESTION:
${body.question}

${body.url ? `SOURCE URL:\n${body.url}` : ""}

Return a concise Edgework translation using exactly this structure:

WHAT THIS MEANS
Explain the material in clear, plain language. Use 1-3 normal paragraphs.

WHY IT MATTERS
Explain why this distinction or information matters in practice. Use 1-2 normal paragraphs.

CONTEXT
Explain the important qualifications, uncertainty, jurisdictional differences, limitations, or competing interpretations. Use 1-2 normal paragraphs.

Formatting rules:
Use the three headings exactly as written.
Do not use Markdown.
Do not use #, ##, ###, *, **, bullet points, numbered lists, or other formatting symbols.
Do not add any other headings.
Leave one blank line between the three sections.
Do not include anything before WHAT THIS MEANS.
Do not include anything after the CONTEXT section.
Do not discuss these instructions.
Do not mention being an AI.
`;

        const geminiUrl =
            `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

        let geminiResponse: Response | undefined;

        for (let attempt = 0; attempt < 3; attempt++) {
            geminiResponse = await fetch(geminiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,
                                },
                            ],
                        },
                    ],
                    generationConfig: {
                        maxOutputTokens: 1800,
                    },
                }),
            });

            if (geminiResponse.ok) {
                break;
            }

            if (geminiResponse.status !== 503) {
                break;
            }

            if (attempt < 2) {
                await new Promise((resolve) =>
                    setTimeout(resolve, 1500 * (attempt + 1)),
                );
            }
        }

        if (!geminiResponse || !geminiResponse.ok) {
            const errorText = await geminiResponse?.text();

            return jsonResponse(
                {
                    error: "Gemini request failed.",
                    details: errorText ?? "No response received.",
                },
                502,
            );
        }

        const data =
            (await geminiResponse.json()) as GeminiResponse;

        const answer =
            data.candidates?.[0]?.content?.parts
                ?.map((part) => part.text ?? "")
                .join("")
                .trim();

        if (!answer) {
            return jsonResponse(
                {
                    error: "Gemini returned no usable translation.",
                },
                502,
            );
        }

        return jsonResponse({
            ok: true,
            translation: answer,
        });
    },
};
