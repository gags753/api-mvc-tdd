import { Request, response, Response } from "express"
import { GetAllUsersService } from "../services/GetAllUsersService"

class GetAllUsersController {
    async handle(request: Request, reponse: Response) {
        const getAllUsersService = new GetAllUsersService()

        const users = await getAllUsersService.execute()

        return reponse.status(200).json(users)
    }
}
export { GetAllUsersController }