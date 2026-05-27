// import express from 'express'

// const app = express()
// const port = 3000

// // menentukan root dasar
// app.get('/', (req, res) => {
//     res.send('Halo, ini adalah latihan dasar Express.js!')
// })

// app.listen(port, () => {
//     console.log(`Server berjalan di http://localhost:${port}`)
// })

import express from 'express'

const expressApp = express()
const port = 3000

// Middleware
expressApp.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// Route GET untuk halaman utama
expressApp.get('/', (req, res) => {
    res.send('Ini adalah halaman pembuka')
})

// Route GET untuk /home
expressApp.get('/home', (req, res) => {
    res.send('Ini adalah halaman home!')
})

// Route GET untuk /api/users
expressApp.get('/api/users', (req, res) => {
    res.send('Ini adalah halaman user!')
})

// Route GET dengan parameter
expressApp.get('/api/users/:userId', (req, res) => {
    const userId = req.params.userId

    res.send(`Detail untuk pengguna ID: ${userId}`)
})

// Menjalankan server
expressApp.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`)
})