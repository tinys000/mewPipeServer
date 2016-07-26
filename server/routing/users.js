var users = require('../controller/users.js');

app
    .get('/user', users.getAll)
    .get('/user/:id', users.getOne)

    .post('/user/', users.create)

    .delete('/user/:id', users.delete)

    .put('/user/:id', users.update);