const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./models/data');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.get('/zoom', function(req, res) {
    data.findAll().then((data) => {
        res.json(data);
    })
})

app.get('/zoom/:id', function(req, res) {
    let {id} = req.params;

    data.findByPk(id).then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.status(404).send();
        }
    })
});

app.post('/zoom/add', function(req, res) {
     return data.create({
         subject: req.body.subject,
         MEETINGID: req.body.MEETINGID,
         Password: req.body.Password
     }).then(function (data) {
         if (data) {
             res.send(data)
         } else {
             res.status(400).send('Error')
         }
     })
})

app.delete('/zoom/:id', async (req, res) => {
    data.destroy({
        where: {
            id: req.params.id
        },
        force: true
      });
      res.render("deleted");
});

app.listen(8080, () => console.log(`Listening on port ${8080}`));
