import fastify from 'fastify';

const app = fastify()

app.get('/hello', (req, res) => { 
  return 'Hello NLW' 
})

app.listen({ port: 3333 }).then(() => { 
  console.log('HTTP server running!')
})