module.exports = function(app) {
    var index = require('../controllers/public.server.controller');
    app.use('/public', index);
}