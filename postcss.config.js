const globalVariables = require('./src/css/global-variable.json');

module.exports = (ctx)=>{
  return {
    "plugins": {
      "postcss-import": {
        root: ctx.file.dirname
      },
      "postcss-advanced-variables": {
        variables: globalVariables
      },
      "precss": {},
      "autoprefixer": {
        "browsers": [
          "ie >= 11",
          "last 2 versions",
          "android >= 4"
        ]
      },
      "cssnano": {
        "zindex": false
      },
    }
  };
};