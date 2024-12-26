import { FastifyTypedInstance } from "../types/fastify";
import { UserController } from "../controllers/UserController";
import z from 'zod'

export async function routes(app: FastifyTypedInstance) {
    app.get('/', {
        schema: {
            tags: ['users'],
            description: 'List users'
        }
    }, UserController.index)

    app.post('/users', {
        schema: {
            tags: ['users'],
            description: 'Create a new user',
            body: z.object({
                name: z.string(),
                age: z.number()
            })
        }
    }, UserController.new)
}