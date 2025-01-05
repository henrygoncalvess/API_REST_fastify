import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { routes } from './routes/users';
import { fastifySwagger } from '@fastify/swagger';

class App {
    public fastify

    constructor(){
        this.fastify = fastify().withTypeProvider<ZodTypeProvider>()
        this.#middlewares()
    }

    #middlewares(){
        this.fastify.register(fastifyCors, { origin: '*' });

        this.fastify.setValidatorCompiler(validatorCompiler);

        this.fastify.setSerializerCompiler(serializerCompiler);

        this.fastify.register(fastifySwagger, {
            openapi: {
                info: {
                    title: "API auto-documentável",
                    version: '1.0.0'
                }
            },
            transform: jsonSchemaTransform
        });

        this.fastify.register(fastifySwaggerUi, {
            routePrefix: '/docs'
        });
        
        this.fastify.register(routes);
    }
}

export default new App().fastify