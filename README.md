# karma-sinon-chrome-plugin

karma-sinon-chrome-plugin is a plugin for karma that enable `sinon-chrome` which is exposing chrome extension api as `sinon stub`

## Setup

Install package as dev dependency
> npm install karma-sinon-chrome-plugin --save-dev

Then add it t karma config file

    module.exports = function (config) {
        config.set({
            // ...
            frameworks: [
                'sinon-chrome',
                // ...
            ],
            plugins: [
                require('karma-sinon-chrome-plugin'),
                // ...
            ],
            // ...
        });
    };


Thats it. Now you can follow usage steps described at [sinon-chrome README](https://github.com/acvetkov/sinon-chrome)

## Version

Currently karma-sinon-chrome-plugin is using `sinon-chrome@3.0.1`.