const Articles = require('../models/Articles');

module.exports = (app) => {
    // Servers index.html file on the root route
    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });
}