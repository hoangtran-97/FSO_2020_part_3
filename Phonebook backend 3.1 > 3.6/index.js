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

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/info", (req, res) => {
    const today = new Date();
    res.send(`<p>Phonebook has info for ${persons.length} persons.</p>
            <p>${today}</p>
                `);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});