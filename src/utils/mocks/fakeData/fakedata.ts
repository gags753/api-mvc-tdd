import { CreateUserService } from "../../../services/CreateUserService"
import { v4 as uuid, v4 } from 'uuid'

class FakeData {
    private createUserService = new CreateUserService()

    async execute() {

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'algumusuario@algumusuario.com'
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Outro usuário',
            email: '',
        })
    }

    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'algumusuario@algumusuario.com'
        })

        return user

    }
}

export { FakeData }