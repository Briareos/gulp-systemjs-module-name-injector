'use strict';

var Transform = require('readable-stream/transform');
var rs = require('replacestream');

module.exports = function () {
    return new Transform({
        objectMode: true,
        transform: function (file, encoding, callback) {
            if (file.isNull()) {
                return callback(null, file);
            }
            if (!file.isBuffer()) {
                return callback(new Error('Only file buffers are supported'), file);
            }

            var name = file.name.replace(/\.js/, '');
            file.contents = file.contents.pipe(rs(/^System\.register\(\[/, "System.register('" + name + '",['));
            return callback(null, file);
        }
    })
};
