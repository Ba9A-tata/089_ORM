const express = require('express')
const app = express();
const PORT =3000;
const db = require ("./models");
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(PORT , () => {
    console.log('Server started on port 3000');
})

db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server Starterd');
        })
    })
    .catch((err) => {
        console.log(err);
    })


app.post("/Komik", async (req,res) => {
    const data = req.body;
    try{
        const Komik = await db.Komik.create(data);
        res.send(komik);
    }catch (err) {
        res.send(err);
    }
})

app.get('/Komik', async (req,res) => {
    try{
        const Komik = await db.komik.findAll();
        res.send(err);
    }catch (err) {
        res.send(err);
    }
});

