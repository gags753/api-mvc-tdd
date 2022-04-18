import { getRepository } from "typeorm"
import { Usuario } from "../entities/usuario";

interface IUser {
    id: string;
    nome: string;
    email?: string;
}

class UpdateUserService {
    async execute({ id, nome, email }: IUser) {
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .update()
            .set({ nome, email })
            .where("id = :id", { id })
            .execute()

        console.log(user)
        return user.raw
    }
}

export { UpdateUserService }