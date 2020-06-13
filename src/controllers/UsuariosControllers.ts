import {Request, Response} from 'express'
import knex from '../database/connection'

class UsuariosControllers {

    async index(req: Request, res: Response){

        const usuarios = await knex('usuarios').select('*')
        return res.json(usuarios)
    }

    async create(req: Request, res: Response){

        const usuario = req.body
        await knex('usuarios').insert(usuario)
        return res.json(usuario)
    }

    async show(req: Request, res: Response){

       const idUsuario = req.params.id

       const horas = await knex('usuarios')
            .join('horas', 'usuarios.id', '=', 'horas.id_usuario')
            .where('usuarios.id', idUsuario)
            .distinct()
            .select('*')

            res.json(horas)
    }

    
}

export default UsuariosControllers