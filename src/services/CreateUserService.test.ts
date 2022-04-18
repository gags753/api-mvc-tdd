import { getConnection } from "typeorm"
import createConnection from "../database"
import { CreateUserService } from "./CreateUserService"

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    it('deve retornar o id do usuário criado', async () => {
        const createUserService = new CreateUserService()

        const result = await createUserService.execute({
            id: 'e79aad2a-7389-4d2e-a31e-931e25de90fd',
            nome: 'Algum usuário',
            email: 'email@email.com'
        })

        console.log(result.id)

        expect(result).toHaveProperty('id')
    })
})

// js/ts, express, jest, TDD, SOLID, sequelize/typeorm, banco de dados
// docker, aws/azure

// react, next, vue, styled components, muii