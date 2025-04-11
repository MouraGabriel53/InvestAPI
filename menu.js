import PORT from './server.js'
import fetch from 'node-fetch'
import {  askToInvestAI } from './src/services/services.js'
import readline from 'readline-sync'


const startMenu = async () => {
    while (true) {
        const options = ['Selic', 'CDI', 'IPCA', 'Ask to InvestAI', 'Exit']

        console.log('\n==================== Welcome | InvestAPI ====================\n')
        console.log('💰 Select a rate to view the value 💰\n')

        for(let i = 0; i < options.length; i++){
            console.log(`[${i}] - ${options[i]}`)
        }

        console.log('\n🔍 Type the number:\n')
        const choice = readline.question('-> Answer: ');

        console.log(`\n✅ Selected option: [${options[choice]}]`)
        const type = options[choice]
        
        if (!type) {
            console.log('\n❌ Invalid option!')
            continue
        }

        if (type == 'Ask to InvestAI') {
            try{
                await askToInvestAI()
            } catch (error) {
                console.error('❌ Function askToInvestAI error', error.message)
            }
            continue
        }

        if (type == 'Exit') {
            console.log('\n👋 You are welcome! Leaving...')
            return 0 
        }

        try {
            const response = await fetch(`http://localhost:${PORT}/rate/${type}`)
            const data = await response.json() 
            console.log(`\n🤑 Rate: ${data.nome}\n📈 Value: ${data.valor}%\n`)
            console.log('=============================================================')
        } catch (error) {
            console.error('❌ Requisition data error', error.message)
        }
    }    
}

export default startMenu