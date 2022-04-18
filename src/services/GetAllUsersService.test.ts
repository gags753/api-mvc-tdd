import { getConnection } from "typeorm"
import createConnection from "../database"
import { GetAllUsersService } from "./GetAllUsersService"
import { FakeData } from "../utils/mocks/fakeData/fakedata"

describe('GetAllUsersService', () => {
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

    it('Deve retornar todos os usuários cadastrados', async () => {

        await fakeData.execute()

        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'algumusuario@algumusuario.com'
            },
            {
                nome: 'Outro usuário',
                email: '',
            }
        ]

        const getAllUsersService = new GetAllUsersService()

        const result = await getAllUsersService.execute()

        expect(result).toMatchObject(expectedResponse)
    })
})