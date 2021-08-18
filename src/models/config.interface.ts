export interface IConfig {
    env: string,
    api: {
        version: number,
        port: number
    },
    logger: {
        level: string
    },
    db: {
        //db config model
    }
}