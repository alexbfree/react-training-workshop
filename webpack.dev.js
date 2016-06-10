var WebpackNotifierPlugin = require('webpack-notifier');
var fs = require('fs');
var path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isFile() &&
      file.indexOf('.js') > -1;
  });
};

var entryPoints = {};
getDirectories('exercises').forEach(function(dir) {
  entryPoints[dir] = path.join(
    process.cwd(),
    'exercises',
    dir,
    'src',
    'app.js'
  );
});
getFiles('beginning/src').forEach(function(file) {
  entryPoints['beginning-' + file.split('.')[0]] = path.join(
    process.cwd(),
    'beginning',
    'src',
    file
  );
});

module.exports = {
  entry: entryPoints,
  output: {
    path: path.join(process.cwd(), './webpack'),
    filename: '[name]-build.js',
  },
  devtool: 'cheap-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015'],
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
}
