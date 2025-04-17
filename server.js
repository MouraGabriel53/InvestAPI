import startMenu from './view/menu.js'
import express from 'express'
import routes from './src/routes/routes.js'

const PORT = 3000
const app = express()

console.time("⏳ Server starts in")
app.listen(PORT, () => {
    console.timeLog("⏳ Server starts in")
    console.log(`👂 Server listening in http://localhost:${PORT}`)
    routes(app)
    startMenu()
})

export default PORT
