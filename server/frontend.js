const express = require("express");
const path = require('path');
const app = express();
const axios = require('axios');
const uploadOnMemory = require("../middleware/uploadOnMemory");
const cloudinary = require("../middleware/cloudinary");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", async (req, res) => {
  try {
      const Cars = await axios.get('http://localhost:3001/cars');
      res.render('home', Cars.data)
  } catch (err) {
      res.status(500).json(err)
  }
});

app.get("/addCars", (req, res) => {
  res.render('addcars', {})
});

app.post(
  "/addCars",
  uploadOnMemory.single("picture"),
  (req, res) => {
      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      cloudinary.uploader.upload(file, { folder: 'Cars' }, async function (err, result) {
          if (!!err) {
              console.log(err);
              return res.status(400).json({
                  message: "Gagal upload file!",
              });
          }

          const body = req.body;
          body.image = result.url;
          try {
              const Cars = await axios.post('http://localhost:3001/cars', body);
              return res.redirect("/")
          } catch (err) {
              return res.status(500).json(err)
          }
      });
  }
);

app.get('/editCars/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const Cars = await axios.get(`http://localhost:3001/cars/${id}`);
      res.render('editcars', Cars.data)
  } catch (err) {
      res.status(500).json(err)
  }
});

app.post(
  "/editCars/:id",
  uploadOnMemory.single("picture"),
  (req, res) => {
      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      cloudinary.uploader.upload(file, { folder: 'Cars' }, async function (err, result) {
          if (!!err) {
              console.log(err);
              return res.status(400).json({
                  message: "Gagal upload file!",
              });
          }

          const id = req.params.id;
          const body = req.body;
          body.image = result.url;
          try {
              const Cars = await axios.put(`http://localhost:3001/cars/${id}`, body);
              return res.redirect("/")
          } catch (err) {
              return res.status(500).json(err)
          }
      });
  }
);

app.get("/deleteCars/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const Cars = await axios.delete(`http://localhost:3001/cars/${id}`);
      res.redirect("/")
  } catch (err) {
      res.status(500).json(err)
  }
});

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
