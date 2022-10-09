const express = require("express");
const { Cars } = require('../models');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/cars', (req, res) => {
    const body = req.body

    Cars.create(body).then(car => {
        res.status(200).json({ data: car })
    }).catch(err => {
        res.status(500).json(err)
    })
});

app.get('/cars', (req, res) => {
    Cars.findAll().then(car => {
        res.status(200).json({ data: car })
    }).catch(err => {
        res.status(500).json(err)
    });
});

app.get('/cars/:id', (req, res) => {
    const id = req.params.id;

    Cars.findByPk(id).then(car => {
        res.status(200).json({ data: car })
    }).catch(err => {
        res.status(500).json(err)
    });
})

app.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body

    Cars.update(body, { where: { 'id': id } }).then(car => {
        res.status(200).json({ data: car })
    }).catch(err => {
        res.status(500).json(err)
    })
})

app.delete('/cars/:id', (req, res) => {
    const id = req.params.id;

    Cars.destroy({ where: { 'id': id } }).then(car => {
        res.status(200).json({ data: car })
    }).catch(err => {
        res.status(500).json(err)
    })
});

app.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
  });