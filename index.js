const express = require('express')
const expressHandlebars = require('express-handlebars')

const fortunes = [
    "Każda wrózba kończy się śmiercią",
    "Co cie nie zabije to Cie pokaleczy",
    "Nie wchodzi się dwa razy do tego samego grobu",
    "Jebać PIS"
];

const app = express()

app.use(express.static(__dirname + "/public"));

// konfiguracja silnika widoków Handlebars
app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
})

// niestandardowa strona 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// niestandardowa strona 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express został uruchomiony pod adresem http://localhost:${port}; ` +
    `naciśnij Ctrl-C, aby zakończyć.`))
