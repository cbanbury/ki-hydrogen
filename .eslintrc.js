module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    'no-console': ['error', { allow: ['error'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 0,
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/attribute-hyphenation': 'off',
  },
};
