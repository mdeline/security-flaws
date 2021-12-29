const express = require('express')
const app = express()
const port = 8080

const cors = require('cors')
const bodyParser = require('body-parser')

const { Pool } = require('pg')

const pool = new Pool({
    user: 'db_manager',
    host: 'localhost',
    database: 'securityflawsprod',
    password: 'manager',
    port: 5432,
})

app.use(bodyParser.json())
app.use(cors())

app.get('/subscribers/all', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM securityflaws.subscriber')
    res.status(200).json(rows)
})

/*
    insert the following line on the 'Subscribe' page's email field to test SQL injection:
    email'); update securityflaws.subscriber set name = 'You Have Been Hacked' where id = 1; --
*/
app.post('/subscribers/add', async (req, res) => {
    const { name, email } = req.body
    await pool.query(`INSERT INTO securityflaws.subscriber (name, email) VALUES ('${name}', '${email}')`)
    res.status(201)
})

app.listen(port, () => {
    console.log(`API listening to http://localhost:${port}`)
})