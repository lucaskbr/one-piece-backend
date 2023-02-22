import { FastifyInstance } from 'fastify'

export async function bindAll (fastify: FastifyInstance, options?: object): Promise<void> {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
