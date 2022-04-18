import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"
import { v4 as uuid } from 'uuid'

class CreateUserController {
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUserService()

        const { nome } = request.body
        const { email } = request.body
        const id = uuid()

        if (!nome) {
            return response.status(400).json({ Mensagem: "Nome obrigatório" })
        }

        const user = await createUserService.execute({ id, nome, email })

        return response.status(201).json(user)
    }
}

export { CreateUserController }