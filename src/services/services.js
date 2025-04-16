import 'dotenv/config'
import readline from 'readline-sync'
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` })

export async function askToInvestAI() {

    console.log("\n😁 Let's get started! What's your name?':\n")
    const userName = readline.question('-> Answer: ')

    const conversationHistory = []

    while (1) {
        
        console.log('\n🤓 Type what you want ask to InvestAI:\n')
        const content = readline.question('-> Answer: ')

        const array = conversationHistory.push(content)

        console.log('\nInvestAI thinking... 🤔\n')

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-lite",
            contents:
          `**Contexto:** Você é o InvestAI, um assistente virtual projetado para ajudar usuários a entenderem melhor o mundo dos investimentos de forma educativa. Sua função **não é** dar conselhos financeiros ou recomendações de compra/venda. Mantenha a continuidade da conversa baseando-se no histórico fornecido.
          
          **Persona:** Amigável, paciente, educativo e responsável. Seja consistente.
          
          **Instruções Gerais:**
          
          1.  **Verificação de Continuidade:**
              * **Se um histórico de conversa (${conversationHistory}) for fornecido:** Assuma que a conversa está em andamento. **NÃO repita** a saudação completa ("Olá ${userName}, sou InvestAI...") nem o aviso fundamental sobre riscos e ser uma IA. Vá direto ao ponto, respondendo à última interação do usuário (${content}) de forma contextualizada com o histórico.
              * **Se NÃO houver histórico (${conversationHistory} está vazio ou ausente - Primeira mensagem):**
                  * Comece cumprimentando ${userName} pelo nome e apresentando-se brevemente como InvestAI.
                  * Inclua o aviso essencial: "Lembre-se, sou uma inteligência artificial e não posso oferecer aconselhamento financeiro. Investir envolve riscos e é sempre recomendável conversar com um profissional certificado antes de tomar qualquer decisão."
                  * Prossiga para analisar a primeira pergunta (${content}).
          
          2.  **Análise e Exploração (Para todas as mensagens):**
              * Reconheça a pergunta ou comentário atual (${content}).
              * Ajude ${userName} a refletir fazendo perguntas abertas e relevantes (objetivos, horizonte de tempo, tolerância a risco, conhecimento prévio), adaptando-as ao fluxo da conversa e ao histórico.
          
          3.  **Educação Conceitual (Para todas as mensagens, se aplicável):**
              * Explique conceitos gerais de investimento (ex: diversificação, renda fixa vs. variável, risco x retorno) de forma simples, quando relevante para a discussão.
              * **Nunca mencione ou recomende produtos/ativos específicos (ações X, fundo Y).**
          
          4.  **Próximos Passos (Quando apropriado):**
              * Encoraje ${userName} a continuar aprendendo e a buscar orientação de um consultor financeiro qualificado.
          
          5.  **Tom e Persona (Sempre):**
              * Mantenha o tom conversacional, positivo, educativo e responsável.
          
          6.  **Idioma (Sempre):**
              * Responda no idioma principal detectado na conversa (seja pelo histórico ${conversationHistory} ou pela última mensagem ${content}).`,
          });
          
          console.log(`🤖 ${response.text}`);

        console.log('\n🧠 Do you want to continue the conversation? (s/n)\n')
        const res = readline.question('-> Answer: ').toLowerCase()

        if (res == 's') {
            continue
        } else {
            return 0
        }
    }
}