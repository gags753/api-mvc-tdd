import { Request, Response } from "express"
import { UpdateUserService } from "../services/UpdateUserService"

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService()
        const { id, nome, email } = request.body

        if (id.length === 0) {
            return response.status(400).json({ message: "id não informado" })
        }

        if (id.length === 0) {
            return response.status(400).json({ message: "Informe um nome" })
        }

        await updateUserService.execute({ id, nome, email })

        return response.status(204)
    }
}

export { UpdateUserController }