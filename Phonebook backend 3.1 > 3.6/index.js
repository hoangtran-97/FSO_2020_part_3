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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
