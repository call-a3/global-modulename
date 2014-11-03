var transformTools = require('browserify-transform-tools');
var test = require('tape');
var transform = require('./');

test('specification test', function (t) {
    t.plan(4);
    
    t.equal(typeof transform, "function", 'transform should be a function');
    
    transformTools.runTransform(transform, '/random/path/foo.js', {
		content: 'console.log(__modulename);'
		}, function (err, transformed) {
			t.equal(transformed, 'console.log("foo");', '__modulename should be replaced by the filename of the file that contains it');
		});
    
    transformTools.runTransform(transform, '/random/path/bar/index.js', {
		content: 'console.log(__modulename);'
		}, function (err, transformed) {
			t.equal(transformed, 'console.log("bar");', 'Occurence in a file that is named index.* should be replaced by the name of the containing folder');
		});
    
    transformTools.runTransform(transform, 'dummy.js', {
		content: 'console.log("__modulename");'
		}, function (err, transformed) {
			t.equal(transformed, 'console.log("__modulename");', 'String that contains __modulename should not be replaced.');
		});
});