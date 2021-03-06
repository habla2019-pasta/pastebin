/* eslint-disable sort-keys */
module.exports = ({
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      {
        property: 'freeze',
        object: 'Object',
      },
    ],
    linkComponents: [
      // custom "a" tag aliases across repo to be mentioned here
      // example <Link to="" /> from react-router-dom
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
  },
  globals: {
    // disables any lint errors when using chance directly
    chance: 'writable',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:jest-dom/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'json',
    'react-hooks',
    'jsx-a11y',
    'flowtype',
  ],
  rules: {
    //general
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2 ],
    'no-trailing-spaces': 'error',
    'semi': 'error',
    'quotes': [ 'error', 'single' ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'no-whitespace-before-property': 'error',
    'keyword-spacing': 'error',
    'space-in-parens': 'error',
    'array-bracket-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'no-unused-vars': 'error',
    'sort-vars': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
        allowSeparatedGroups: false,
      },
    ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    //react
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-uses-vars': 'error',
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)',
        validateNested: true,
        message: 'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
      },
    ],
  },
});
