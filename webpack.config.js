const path = require('path');

const srcPath = path.join(__dirname, './src/');
const distPath = path.join(__dirname, './dist/');

const entries = {
    'entry-a': 'entry-a',
    'entry-b': 'entry-b'
};

const configs = Object.keys(entries).map(entryName => ({
    entry: {
        [entryName]: path.join(srcPath, entries[entryName])
    },
    output: {
        path: distPath,
        filename: `scripts/${entryName}-bundle.js`,
        library: `library-${entryName}`,
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.js(\?.*$|$)/,
                use: ['file-loader'],
                include: srcPath,
                exclude: '/node_modules/'
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}));
module.exports = configs
