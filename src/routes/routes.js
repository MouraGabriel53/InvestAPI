import { getRate } from '../controller/controller.js'

const routes = (app) => {
    app.get('/rate/:type', getRate)
}

export default routes