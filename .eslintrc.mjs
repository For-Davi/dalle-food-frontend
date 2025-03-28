export default {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },

    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};