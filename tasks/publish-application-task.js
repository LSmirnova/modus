const publishRootFiles = require('./publish-root-files.js');
const publishImages = require('./publish-images.js');
const publishFonts = require('./publish-fonts.js');
const publishJs = require('./publish-js.js');
const {publishCssAndAddBrowserPrefixes, stylesheetsSources} = require('./publish-css-and-add-browser-prefixes');
const publishLib = require('./publish-lib');

let publishApplication = () => {
    let destinationDir = 'dist/';
    publishRootFiles(destinationDir);
    publishImages(destinationDir);
    publishFonts(destinationDir);
    publishJs(destinationDir);
    publishLib(destinationDir);
    publishCssAndAddBrowserPrefixes(destinationDir)
};

let PublishApplicationTask = () => {return publishApplication()};

module.exports = PublishApplicationTask;