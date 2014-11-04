var transformTools = require('browserify-transform-tools');
var path = require('path');

module.exports = transformTools.makeFalafelTransform('global-modulename', {
    jsFilesOnly: true
  },
  function (node, opts, done) {
    if (node.type === 'Identifier' && node.source() === '__modulename') {
      var name = path.basename(opts.file, path.extname(opts.file));
      if (name === 'index') {
        name = path.basename(path.dirname(opts.file));
      }
      node.update('"' + name + '"');
    }
    done();
  });