module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        ts: "never",
        vue: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@pkg", "./.packages"]],
        extensions: [".ts", ".js", ".vue"],
      },
    },
  },
};
