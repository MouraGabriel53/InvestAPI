import 'dotenv/config'
import readline from 'readline-sync'
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` })

export async function askToInvestAI() {

    console.log("\n😁 Let's get started! What's your name?':\n")
    const userName = readline.question('-> Answer: ')

    while (1) {
        console.log('\n🤓 Type what you want ask to InvestAI:\n')
        const content = readline.question('-> Answer: ')

        console.log('\nInvestAI thinking... 🤔\n')

        const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: `Imagine you are a virtual investment advisor called InvestAI. Based on the prompt the user has typed below, help them think about the best investment. Be friendly and introduce yourself. User name: ${userName}. User asked: ${content}`,
        })

        console.log(`🤖 ${response.text}`)

        console.log('\n🧠 Do you want to continue the conversation? (s/n)\n')
        const res = readline.question('-> Answer: ').toLowerCase()

        if (res == 's') {
            continue
        } else {
            return 0
        }
    }
}