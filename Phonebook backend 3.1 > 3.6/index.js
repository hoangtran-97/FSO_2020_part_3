const express = require("express");
const app = express();
app.use(express.json());

let persons = [
    {
        name: "Arto Hellas",
        number: "123",
        id: 1,
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2,
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3,
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4,
    },
];
const generateId = () => {
    return Math.floor(Math.random() * Math.floor(200));
};
//All
app.get("/api/persons", (req, res) => {
    res.json(persons);
});
//Info
app.get("/info", (req, res) => {
    const today = new Date();
    res.send(`<p>Phonebook has info for ${persons.length} persons.</p>
            <p>${today}</p>
                `);
});
//by ID
app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find((person) => person.id === id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});
//Delete
app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter((person) => person.id !== id);

    response.status(204).end();
});
//Post
app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.name) {
        return response.status(400).json({
            error: "name is missing",
        });
    }
    if (!body.number) {
        return response.status(400).json({
            error: "number is missing",
        });
    }
    const checkPerson = persons.find((person) => person.name === body.name);
    if (checkPerson) {
        return response.status(400).json({
            error: "name must be unique",
        });
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    };

    persons = persons.concat(person);

    response.json(person);
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
