//-- NodeJS
import os from 'node:os';
import path from 'node:path';

//-- NPM Packages
import replacePlugin from '@rollup/plugin-replace';
import {type ViteUserConfig, defineConfig} from 'vitest/config';

const config = defineConfig(({mode}) => {
    const conf: ViteUserConfig = {
        mode,
        resolve: {
            extensions: ['.ts', '.js']
        },
        base: mode !== 'development' ? '/webcraft/' : '/',
        build: {
            outDir: path.resolve(import.meta.dirname, './dist/'),
            minify: mode !== 'development',
            sourcemap: mode !== 'development' ? 'hidden' : true,
            emptyOutDir: true
        },
        test: {
            alias: {
                '@src': path.resolve(import.meta.dirname, './src/ts/')
            },
            browser: {
                enabled: true,
                provider: 'playwright',
                instances: [
                    {
                        browser: 'chromium',
                        headless: true
                    }
                ]
            },
            mockReset: true,
            clearMocks: true,
            unstubGlobals: true,
            unstubEnvs: true,
            dir: './tests/',
            name: 'Webcraft',
            maxConcurrency: Math.max(Math.floor(os.cpus().length / 2), 1),
            coverage: {
                enabled: true,
                all: true,
                provider: 'istanbul',
                reporter: ['text'],
                exclude: [
                    'scripts/**',
                    'templates/**',
                    'coverage/**',
                    '**/dist/**',
                    '**/[.]**',
                    'packages/*/test?(s)/**',
                    '**/*.d.ts',
                    '**/virtual:*',
                    '**/__x00__*',
                    '**/\x00*',
                    'cypress/**',
                    'test?(s)/**',
                    'test?(-*).?(c|m)[jt]s?(x)',
                    '**/*{.,-}{test,spec}?(-d).?(c|m)[jt]s?(x)',
                    '**/__tests__/**',
                    '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
                    '**/vitest.{workspace,projects}.[jt]s?(on)',
                    '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}'
                ]
            },
            passWithNoTests: true,
            reporters: 'default'
        },
        server: {
            fs: {
                strict: process.env['VITEST_VSCODE'] === undefined
            }
        },
        plugins: [
            replacePlugin({
                preventAssignment: true,
                values: {
                    FAKER_SEED: JSON.stringify(process.env['FAKER_SEED'])
                }
            })
        ]
    };
    return conf;
});

export default config;
