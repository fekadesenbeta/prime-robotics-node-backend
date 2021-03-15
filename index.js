const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(express.json());

const customers = [
    {id: 1, name: "John Smith", robot: "machine1"},
    {id: 2, name: "Bill Joe", robot: "machine2"},
    {id: 3, name: "Fekade Senbeta", robot: "machine3"},
    {id: 4, name: "Joe Hunt", robot: "machine4"},
    {id: 5, name: "Shane Shuffield", robot: "machine5"},
    {id: 6, name: "Megersa Edeye", robot: "machine6"},
    {id: 7, name: "Brook Senbeta", robot: "machine7"},
]

app.get('/', (request, response) => {
    response.send({message: "welcome to the home page"})
})

app.get('/customers', (requeste, response) => {
    response.send({customers})
})

app.get('/customers/:id', (request, response) => {
    const customer = customers.find(c => c.id === parseInt(request.params.id));
    if (!customer) response.status(404).send('customer not found')
    response.send(customer)
})

app.listen('4000', () => console.log('working on port'))