import { UpdateUserController } from "./UpdateUserController";
import createConnection from "../database";
import { getConnection } from "typeorm";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { Request } from "express";
import { FakeData } from "../utils/mocks/fakeData/fakedata";

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData()

    it('Deve retornar o status 204 quando o usuário for editado', async () => {
        const updateUserController = new UpdateUserController()

        const mockUser = await fakeData.createUser()

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Daniel',
                email: 'daniel@email.com'

            }
        } as Request

        const response = makeMockResponse()

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(204)
    })
})