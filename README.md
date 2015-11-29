# Gulp systemjs module name injector

This plugin was created to aid with the TypeScript module system.
When TypeScript files are compiled using the `--module system` flag, the compiler does not output module names.

An example:

    System.register(["./other/module/dependency"], function($_export) {
      // ... module
    });

The output is totally unusable, since the module doesn't have a name. This plugin converts the output to this:

    System.register("module/path", ["./other/module/dependency"], function($_export) {
      // ... module
    });

## Usage

Install the plugin:

    npm install gulp-systemjs-module-name-injector --save-dev
    
In your gulpfile:

    var systemjsModuleName = require('gulp-systemjs-module-name-injector');
    
    function buildTypescript() {
        return gulp.src(/* ... */)
            .pipe(typescript(tsProject))
            .pipe(systemjsModuleName())
            .pipe(/* ... */);
    }
