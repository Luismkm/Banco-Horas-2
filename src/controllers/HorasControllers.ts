import { Request, Response } from 'express'
import knex from '../database/connection'

class HorasControllers {

    async create(req: Request, res: Response){
        const {id_usuario, data, hora, turno, banco} = req.body

        const dados = {id_usuario, data, hora, turno, banco}

        await knex('horas').insert(dados)

        return  res.json(dados)
    }

}

export default HorasControllers