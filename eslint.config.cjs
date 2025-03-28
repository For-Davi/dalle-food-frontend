const vue = require("eslint-plugin-vue");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");

module.exports = [
    {
        files: ["**/*.{js,ts,vue}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module"
            }
        },
        plugins: {
            vue,
            "@typescript-eslint": ts,
            prettier
        },
        rules: {
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

            "prettier/prettier": ["error"],

            "vue/multi-word-component-names": "off",
            "vue/no-v-html": "off",
            "vue/attribute-hyphenation": ["error", "always"],

            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-module-boundary-types": "off"
        }
    },
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: require("vue-eslint-parser"),
            parserOptions: {
                parser: tsParser,
                ecmaVersion: 2021,
                sourceType: "module"
            }
        }
    }
];
