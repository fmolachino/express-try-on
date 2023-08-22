const express=require('express')

const PORT=3000

const app=express()

let jsonExample = [{"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}    ]

app.get('/', (req, res)=>{
    res.send('Im a server implemented with ExpressJS')
})

app.get('/contact', (req, res)=>{
    res.send('Contact page')
})

//returning a h1 component
app.get('/test', (req, res)=>{
    res.send('<h1 style="color:blue">Welcome!</h1>')
})

app.post('/create', (req, res)=>{
    res.send('Called a POST method.')
})


//returning json data
app.get('/data', (req, res)=>{
    res.json({status:'ok', data:jsonExample})
})


//If the url is not defined, ill land in this part, so 404
app.get('*', (req, res)=>{
    res.send('error 404 - page not found')
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})