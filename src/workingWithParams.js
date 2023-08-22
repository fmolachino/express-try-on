const express=require('express')

const PORT=3000

const app=express()

let jsonExample = [
	{
		"title": "producto 1",
		"description": "description",
		"price": 99,
		"thumbnail": "sin-imagen",
		"code": "a",
		"stock": 10,
		"id": 0
	},
	{
		"title": "producto 2",
		"description": "description",
		"price": 90,
		"thumbnail": "sin-imagen",
		"code": "b",
		"stock": 10,
		"id": 1
	},
	{
		"title": "producto 3",
		"description": "description",
		"price": 88,
		"thumbnail": "sin-imagen",
		"code": "c",
		"stock": 10,
		"id": 2
	},
	{
		"title": "producto 4",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "d",
		"stock": 10,
		"id": 3
	},
	{
		"title": "producto 5",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "e",
		"stock": 10,
		"id": 4
	},
	{
		"title": "producto 6",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "f",
		"stock": 10,
		"id": 5
	},
	{
		"title": "producto 7",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "g",
		"stock": 10,
		"id": 6
	},
	{
		"title": "producto 8",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "h",
		"stock": 10,
		"id": 7
	},
	{
		"title": "producto 9",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "i",
		"stock": 10,
		"id": 8
	},
	{
		"title": "producto 10",
		"description": "description",
		"price": 80,
		"thumbnail": "sin-imagen",
		"code": "j",
		"stock": 10,
		"id": 9
	}
]

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

//returning json data - with id filtering
app.get('/data/:id', (req, res)=>{

    //special attencion here, the id from the browser url is taken as string, so must be parse to logical work with it
    let id = parseInt(req.params.id)

    //check for id data type
    if (isNaN(id)) {
        res.json({status: 'error', message: 'Id must be a numerical value, please try again.'})
        return
    }

    let productById=jsonExample.filter(product=>product.id===id)

    if(productById.length>0){
        res.json({status:'ok', data:productById})
    } else {
        res.json({status: 'error', message: `Product with id: ${id} doesn't exists.`})
        
    }

    
})


//If the url is not defined, ill land in this part, so 404
app.get('*', (req, res)=>{
    res.send('error 404 - page not found')
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})