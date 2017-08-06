// Axios dependencies for GET/POST requests
const axios = require('axios');
const request = require('request');


module.exports = {
    // Axios functions go here
    // API KEY: e6b6647ed9334bf3b2cb197b3c8fa0e6

    // NTY API
    getArticles(params,cb) {
        // paramas are: q (search), begin(date), end_date, page
        params['api-key'] = 'e6b6647ed9334bf3b2cb197b3c8fa0e6';
        params['fl'] = 'web_url, headline';

        request.get({
            url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
            qs: params
        },  (err, response, body) => {
            body = JSON.parse(body);
            queryResult = body.response.docs;
            let filteredResult = [];
            queryResult.forEach( (data) => {
                filteredResult.push({
                    title: data.headline.main,
                    url: data.web_url
                })
            })
            cb(filteredResult) 
        })
    }
}