const Articles = require('../models/Articles');
const helpers = require('../app/utils/helpers')
module.exports = (app) => {
    // Servers index.html file on the root route
    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });

    app.post('/search', (req, res) => {
        // params are nty-api parameters
        let params = {
            q: req.body.term,
        };
        // If optional fields are submitted, add them to the params object to be queried
        if(req.body.start) {
            params['begin_date'] = req.body.start
        }
        if(req.body.end) {
            params['end_date'] = req.body.end
        }

        // Returns an array of objects that has title and url as keys
        helpers.getArticles(params, (data) => {
            switch (req.body.limit) {
                case 1:
                    res.json(data[0])
                    break;
                case 5:
                    res.json(data.slice(0,5))
                    break;
                // Default is all 10 results
                default:
                    res.json(data)
            }
            
        })
    })
}