import { getRepository } from 'typeorm'
import { Usuario } from '../entities/usuario';

interface IUsuario {
    id: string
    nome: string
    email?: string
}

class CreateUserService {
    async execute({ id, nome, email }: IUsuario) {
        const usuario = await getRepository(Usuario)
            .createQueryBuilder("user")
            .insert()
            .into(Usuario)
            .values([
                { id, nome, email }
            ])
            .execute();

        console.log(usuario.identifiers[0])

        return usuario.identifiers[0]
    }
}

export { CreateUserService }