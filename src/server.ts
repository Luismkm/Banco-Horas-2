import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)




app.listen(3003,(err)=>{
    if(err) console.log('Erro ao connectar')
    else{ console.log('Server is running')}
})