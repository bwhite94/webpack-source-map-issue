const path = require('path');
const srcPath = path.join(__dirname, './src/');
const distPath = path.join(__dirname, './dist/');

module.exports = {

    target: 'web',

    entry: {

        'entry-a': [path.join(srcPath, 'entry-a')],

        'entry-b': [path.join(srcPath, 'entry-a')],

    },

    output: {

        path: distPath,

        filename: 'scripts/[name]-bundle.js',

        library: 'library-[name]',

        libraryTarget: 'window'

    },

    module: {

        rules: [
            {
                test: /\.js(\?.*$|$)/, use: ['file-loader'], include: srcPath, exclude: '/node_modules/'
            }
        ]

    },

    devtool: 'source-map',

    mode: 'development'

}