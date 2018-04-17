module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "es6": true
  },
  "plugins": ["node"],
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "rules": {
    "node/exports-style": ["error", "module.exports"],
    "no-console": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "parserOptions": {
    "sourceType": "module"
  },
};

// {
//     "rules": {
//         "no-console": 0,
//         "indent": 2,
//         "quotes": [
//             2,
//             "single"
//         ],
//         "linebreak-style": [
//             2,
//             "unix"
//         ],
//         "semi": [
//             2,
//             "always"
//         ]
//     },
//     "env": {
//         "es6": true,
//         "node": true
//     },
//     "ecmaFeatures": {
//         "modules": true,
//         "experimentalObjectRestSpread": true
//     },
//     "extends": "eslint:recommended"
// }
