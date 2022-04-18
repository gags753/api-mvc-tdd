import { getRepository } from "typeorm"
import { Usuario } from "../entities/usuario"

class GetAllUsersService {
    async execute() {
        const users = await getRepository(Usuario)
            .createQueryBuilder('usuarios')
            .select()
            .getMany()
        return users
    }
}

export { GetAllUsersService }