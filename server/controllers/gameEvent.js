var    Article = require('../models/article');

function route(expressApp){
    expressApp.get('/gameEvent', 'gameEvent', function (req, res, next) {
        var articles = [new Article(), new Article()];
        res.render('home', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
}

module.exports = route;