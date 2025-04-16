export async function searchRate(type) {
    const url = `https://brasilapi.com.br/api/taxas/v1/${type}` 
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json()
        return json
    } catch (error){
        console.error('❌ Function searchRate error', error.message)
        throw error
    }
}