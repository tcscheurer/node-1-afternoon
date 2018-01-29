const contr = require('./controllers/controllers');

module.exports = (app) => {
    app.get('/api/messages', contr.read);
    app.post('/api/messages', contr.create);
    app.put('api/messages/:id', contr.update);
    app.delete('/api/messages/:id', contr.delete);
}