import express from 'express'

const app = express()
const port = 3000

// Route utama
app.get('/', (req, res) => {
    res.send('Selamat Datang...')
})

// Route home
app.get('/home', (req, res) => {
    res.send('Halaman Beranda (Home)..')
})

// Route profil
app.get('/profil', (req, res) => {
    res.send('Halaman Profil..')
})

// Route snack
app.get('/user/snack', (req, res) => {
    res.send('Halaman Produk Snack..')
})

// Route drink
app.get('/user/drink', (req, res) => {
    res.send('Halaman Produk Soft Drink..')
})

// Route snack dengan id
app.get('/user/snack/1234', (req, res) => {
    res.send('Halaman Produk Snack.. (id = 1234)')
})

// Route drink dengan id
app.get('/user/drink/5678', (req, res) => {
    res.send('Halaman Produk Soft Drink.. (id = 5678)')
})

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
})