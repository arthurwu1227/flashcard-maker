import { OpenAI } from "openai";

export async function completeMessage(givenMessage) {
    const client = new OpenAI(
        {
            apiKey: import.meta.env.VITE_GPT_API_KEY,
            dangerouslyAllowBrowser: true,
        }
    );
    
    const completion = await client.chat.completions.create({
        messages: [{"role": "user", "content": `Please define the following term: ${givenMessage}. Make the definition short (no more than two sentences.)`}], 
        model: "gpt-3.5-turbo"
    });

    return completion.choices[0].message.content;
}