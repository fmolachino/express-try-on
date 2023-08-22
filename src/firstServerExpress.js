const express=require('express')

const PORT=3000

const app=express()

app.get('/', (req, res)=>{
    res.send('Im a server implemented on node js')
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})