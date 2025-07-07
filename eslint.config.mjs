// @ts-check

//-- NPM Packages
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['*.{js,cjs,mjs,jsx,cjsx,mjsx}']
    },
    {
        settings: {
            react: {
                version: '19'
            }
        },
        ...pluginReact.configs.flat.recommended,
        ...pluginReact.configs.flat['jsx-runtime']
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            react: pluginReact
        }
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    prettierConfig,
    {
        files: ['**/*.{tsx,ctsx,mtsx}'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: 'React'
                }
            ]
        }
    },
    {
        files: ['**/tests/*.ts', '**/tests/**/*.ts'],
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off'
        }
    }
);
