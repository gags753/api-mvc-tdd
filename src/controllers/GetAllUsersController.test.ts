import { GetAllUsersController } from "./GetAllUsersController";
import createConnection from "../database";
import { getConnection } from "typeorm";
import { FakeData } from "../utils/mocks/fakeData/fakedata";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";

describe('GetAllUsersController', () => {
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

    it('Deve retornar status 200 quando retornar todos os usuários', async () => {
        await fakeData.execute()

        const getAllUsersController = new GetAllUsersController()

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllUsersController.handle(request, response)

        expect(response.state.status).toBe(200)
    })
})