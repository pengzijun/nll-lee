var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    http: {
        root: "'http://192.168.0.90:22025'"
    }
});
