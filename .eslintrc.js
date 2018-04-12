module.exports = {
  "env": {
    "browser": true,
    "amd": true
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
  }
};
