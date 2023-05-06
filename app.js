const fastify = require('fastify')({ logger: true })
const Redis = require("ioredis")

// 共用schema
fastify.addSchema({
    $id: 'auth',
    type: 'object',
    required: ['id', 'secret'],
    properties: {
        id: { type: 'string' },
        secret: { type: 'string' },
    }
})
// 创建剪贴
fastify.route({
    method: 'POST',
    url: '/create',
    schema: {
        querystring: { $ref: 'auth#' }
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

// 获取剪贴
fastify.route({
    method: 'GET',
    url: '/get',
    schema: {
        querystring: { $ref: 'auth#' }
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

//更新剪贴
fastify.route({
    method: 'POST',
    url: '/update',
    schema: {
        querystring: { $ref: 'auth#' }
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

//删除剪贴
fastify.route({
    method: 'POST',
    url: '/delete',
    schema: {
        querystring: { $ref: 'auth#' }
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

// 启动服务器
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
