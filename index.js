const express= require('express')
const bodyParser= require('body-parser')

const userRoute= require('./crud')
const port =3000				 

const app= express()


app.use(bodyParser.urlencoded({extended: false}))


userRoute(app)
app.get('/',(req,res)=>res.send('Olá Mundo'))

app.listen(port,()=>console.log('APi Rodando na Porta 3000'))

