// Axios dependencies for GET/POST requests
const axios = require('axios');

module.exports = {
    // Axios functions go here NTY API
    getArticles(params, cb) {
        // paramas are: q (search), begin(date), end_date, page
        params['api-key'] = 'e6b6647ed9334bf3b2cb197b3c8fa0e6';
        params['fl'] = 'web_url, headline';

        // Removes optional keys if they do not exist in order for the API to function correctly
        if(!params['begin_date']) {
            delete params['begin_date']
        }
        if(!params['end_date']) {
            delete params['end_date']
        }

        let limit = params.limit;
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {params})
            .then((result) => {
                let queryResult = result.data.response.docs;
                let filteredResult = [];

                queryResult.forEach((data) => {
                    filteredResult.push({
                        title: data.headline.main,
                        url: data.web_url
                    })
                })
                switch (limit) {
                    case '1':
                        cb(filteredResult.splice(0, 1));
                        break;
                    case '5':
                        filteredResult.splice(0, 5);
                        cb(filteredResult)
                        break;
                    default:
                        cb(filteredResult)
                }

            })
    },

    findSavedArticles() {
        return axios.get('/api/saved');
    },

    saveArticle(article) {
        return axios.post('/api/saved', article);
    },

    deleteArticle(article) {
        return axios({
            method: 'delete',
            url: '/api/saved',
            data: article
        });
    }
}