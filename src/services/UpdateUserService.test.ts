import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from "../utils/mocks/fakeData/fakedata";
import createConnection from '../database'
import { getConnection } from 'typeorm'

describe('UpdateUserService', () => {

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

    it('Deve editar o nome do usuário', async () => {

        const mockUser = await fakeData.createUser()

        const updateUserService = new UpdateUserService()

        const result = await updateUserService.execute({ id: mockUser.id, nome: 'Gabriel' })

        console.log(result)

        expect(result).toHaveLength(0)
    })

})