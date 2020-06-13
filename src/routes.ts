import express from 'express'

import UsuariosControllers from './controllers/UsuariosControllers'
import HorasControllers from './controllers/HorasControllers'

const routes = express.Router()
const usuariosControllers = new UsuariosControllers()
const horasControllers = new HorasControllers()


routes.get('/usuarios',usuariosControllers.index)

routes.post('/',usuariosControllers.create)

routes.get('/meuBanco/:id',usuariosControllers.show)

routes.post('/salvarHoras', horasControllers.create)

export default routes