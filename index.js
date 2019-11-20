const fastify = require('fastify')
const exec = require('child_process').exec
const server = fastify()

server.get('/health', (req, res) => {
  res.send('OK')
})

server.post('/hash', (req, res) => {
  const {
    memCost,
    rounds,
    saltSeparator,
    signerKey,
    salt,
    password
  } = req.body

  exec(
    `scrypt "${signerKey}" "${salt}" "${saltSeparator}" "${rounds}" "${memCost}" -P <<< "${password}"`,
    { shell: '/bin/bash' },
    (err, out) => {
      if (err) {
        throw new Error(err.message)
      } else {
        res.send(out)
      }
    }
  )
})

server.listen(3000, '0.0.0.0', (err, addr) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server ready on ${addr}`)
})
