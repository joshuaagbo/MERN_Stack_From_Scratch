// @desc: bring in schema;
const items = require('../model/app_schema');
module.exports = (app) => {
   // @ GET route;
    app.get('/api', (req, res) => {
        items.find()
            .then((item) => res.json(item))
            .catch(err => console.log(err));
    });
    // @ POST route;
    app.post('/api', (req, res) => {
       const newItem = new items({item:req.body.item});
        newItem.save()
            .then(item => res.json(item))
            .then(() => console.log('item added'))
            .catch(err => console.log(err));
    });
    // @ DELETE route;
    app.delete('/api/:id', (req, res) => {
        items.findOneAndRemove(req.params.id)
            .then((item) => res.send(item))
            .catch(err => console.log(err));
    })

}