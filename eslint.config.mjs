export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
