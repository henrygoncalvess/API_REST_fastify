import { FastifyTypedInstance } from "../types/fastify";
import { UserController } from "../controllers/UserController";
import z from 'zod'

export async function routes(app: FastifyTypedInstance) {
    app.get('/', {
        schema: {
            tags: ['users'],
            description: 'List users',
            response: {
                200: z.array(z.object({
                    name: z.string(),
                    age: z.number()
                }))
            }
        }
    }, UserController.index)

    app.post('/users', {
        schema: {
            tags: ['users'],
            description: 'Create a new user',
            body: z.object({
                name: z.string(),
                age: z.number()
            }),
            response: {
                201: z.object({
                    name: z.string(),
                    age: z.number()
                })
            }
        }
    }, UserController.new)

    app.put('/users', {
        schema: {
            tags: ['users'],
            description: 'Update a user',
            body: z.object({
                currentUsername: z.string(),
                newUsername: z.string()
            }),
            response: {
                200: z.object({
                    currentUsername: z.string(),
                    newUsername: z.string()
                })
            }
        }
    }, UserController.update)

    app.delete('/users', {
        schema: {
            tags: ['users'],
            description: 'Delete a user',
            body: z.object({
                name: z.string()
            }),
            response: {
                200: z.string()
            }
        }
    }, UserController.remove)
}