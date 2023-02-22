import * as Server from './server.js'

export async function greeter(name: string): Promise<string> {
  return `Hello, ${name}`
}

Server.start()
