/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    semi: "off",
    "import/prefer-default-export": "off",
    indent: ["error", 2],
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", "tsx"] },
    ],
  },
  plugins: ["react"],
  extends: [
    "prettier",
    "eslint:recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "react-app",

    /* "plugin:prettier/recommended", */
    "eslint-config-prettier",
  ],
};
