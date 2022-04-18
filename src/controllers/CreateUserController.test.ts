import createConnection from "../database"
import { CreateUserController } from "./CreateUserController"
import { Request } from "express"
import { makeMockResponse } from "../utils/mocks/mockResponse"
import { getConnection } from "typeorm"

describe('CreateUserController', () => {

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    const createUserController = new CreateUserController()
    const response = makeMockResponse()

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM USUARIOS')
        await connection.close()

    })
    it('deve retornar status 201 quando o usuário for criado', async () => {

        const request = {
            body: {
                nome: 'Algum usuário',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('deve retornar status 400 quando o nome não for informado', async () => {

        const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 201 quando o email não for informado', async () => {
        const request = {
            body: {
                nome: 'Algum usuário',
                email: ''
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

})