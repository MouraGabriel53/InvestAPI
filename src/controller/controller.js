import { searchRate } from '../models/models.js'

export async function getRate(req, res) {
    const { type } = req.params
    try {
        const result = await searchRate(type.toLowerCase())
        res.send(result)
    } catch (error) {
        res.status(500).send('❌ Function getRate error', error.message)
    }
}
