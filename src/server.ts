import Fastify from 'fastify'
import * as Routes from './routes.js'

const fastify = Fastify({
  logger: true
})

Routes.bindAll(fastify)

export const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
