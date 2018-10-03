const items = require('../model/app_schema');
module.exports = (app) => {
    // @ GET route;
    app.get('/api/items', (req, res) => {
        items
        .find()
        .sort({date: -1})
        .then(item => res.json(item))
        .catch(err => console.log('ERROR:'+err));
    });
    // @ POST route;
    app.post('/api/item_add', (req, res) => {
      items.find()
        .then(item=> {
          if(item.length >= 10){
            console.log('limit exceeded!')
            return null
          }else {
            const newItem = new items({
                item: req.body.item
            });
              newItem.save()
              .then((data) => res.json(data))
              .catch(err => console.log(err));
          }
        })
    });
    // @ DELETE route;
    app.delete('/api/item_delete/:id', (req, res) => {
        items.findById(req.params.id)
          .then(item => item.remove().then(id => res.json(id._id)))
          .catch(err => console.log(err));
    })
}
