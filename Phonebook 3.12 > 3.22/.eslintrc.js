module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        eqeqeq: "error",
        indent: ["error", 4],
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-unused-vars": [1],
        "arrow-spacing": ["error", {before: true, after: true}],
        "no-console": 0,
    },
};
