const Articles = require('../models/Articles');
const helpers = require('../app/utils/helpers');

module.exports = (app) => {
    // Servers index.html file on the root route
    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });

    app.get('/api/saved', (req, res) => {
        Articles.find({}).exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    })

    app.post('/api/saved', (req, res) => {
        Articles.create(req.body, (err) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Article was saved!')
            }
        })
    })

    app.delete('/api/saved', (req,res) => {
        Articles.remove({_id: req.body},  (err) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Article was Deleted!")
            }
        });
    })

    // May use this later -- currently unused and axios is handling the query
    // app.post('/search', (req, res) => {
    //     // params are nty-api parameters
    //     let params = {
    //         q: req.body.term,
    //     };
    //     // If optional fields are submitted, add them to the params object to be queried
    //     if(req.body.start) {
    //         params['begin_date'] = req.body.start
    //     }
    //     if(req.body.end) {
    //         params['end_date'] = req.body.end
    //     }

    //     params['api-key'] = 'e6b6647ed9334bf3b2cb197b3c8fa0e6';
    //     params['fl'] = 'web_url, headline';

    //     // Returns an array of objects that has title and url as keys
    //     helpers.getArticles(params, (data) => {
    //         switch (req.body.limit) {
    //             case 1:
    //                 res.json(data[0])
    //                 break;
    //             case 5:
    //                 res.json(data.slice(0,5))
    //                 break;
    //             // Default is all 10 results
    //             default:
    //                 res.json(data)
    //         }

    //     })
    // })
}