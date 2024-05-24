import eslintConfig from '@eslint/js'

import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

import prettier from 'eslint-config-prettier'

export default [
    eslintConfig.configs.recommended,
    {
        plugins: {
            react: react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'prettier': prettier,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.2' } },
        rules: {
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
]
