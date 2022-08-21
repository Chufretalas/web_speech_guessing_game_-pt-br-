const path = require('path');

module.exports = {
    entry: "./src/js",
    output: {
        path: path.resolve(__dirname, "src/dist"),
        filename: "bundled.js"
    }
}