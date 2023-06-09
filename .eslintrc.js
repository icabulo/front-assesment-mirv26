module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": 0,
    quotes: [2, "double"],
    semi: [2, "never"],
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": 0,
  },
}
