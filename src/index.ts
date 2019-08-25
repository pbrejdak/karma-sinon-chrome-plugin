import { FilePattern } from 'karma';
import { resolve } from 'path';

const factoryFn = (files: FilePattern[]) => {
    const sinonChromePath = resolve(
        require.resolve('sinon-chrome'),
        '../bundle',
        'sinon-chrome-webextensions.min.js',
    );

    const desc: FilePattern = {
        included: true,
        pattern: sinonChromePath,
        served: true,
        watched: false,
    };

    files.unshift(desc);
};

factoryFn.$inject = ['config.files'];

module.exports = {
    'framework:sinon-chrome': ['factory', factoryFn],
};
