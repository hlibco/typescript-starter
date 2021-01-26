import dotenv from 'dotenv'

class Config {
  port: number

  constructor() {
    dotenv.config()

    this.port = Number(process.env.PORT)

    // TODO: Validate all your configs and properly prevent your app from bootstrapping in an misconfigured state.
  }
}

export const config = new Config()
