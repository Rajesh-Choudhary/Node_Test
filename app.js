const PORT = process.env.PORT || 80
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.time('get')
    const html = `<H1>Hello World RC!</H1>`;
    try {
        res.status(200).send(html.replace('{{output}}', ''))
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Error occured on server")
    }
    console.timeEnd('get')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
