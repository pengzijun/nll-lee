// https://github.com/shelljs/shelljs

require('shelljs/global')
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for ' + env.NODE_ENV);
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
cp(path.posix.resolve(__dirname, '../favicon.png'), config.build.assetsRoot);
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
})
