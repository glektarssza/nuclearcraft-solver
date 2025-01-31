/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />

//-- NodeJS
import os from 'node:os';
import path from 'node:path';

//-- NPM Packages
import {svelte} from '@sveltejs/vite-plugin-svelte';
import replacePlugin from '@rollup/plugin-replace';
import {sveltePreprocess} from 'svelte-preprocess';
import {type ViteUserConfig, defineConfig} from 'vitest/config';

/**
 * The ViteJS configuration.
 */
const config = defineConfig(({mode}) => {
    const conf: ViteUserConfig = {
        mode,
        resolve: {
            extensions: ['.svelte', '.ts', '.js']
        },
        base: mode !== 'development' ? '/nuclearcraft-solver/' : '/',
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
                        browser: 'edge',
                        headless: true
                    }
                ]
            },
            coverage: {
                all: true,
                provider: 'istanbul',
                reporter: ['text', 'html']
            },
            passWithNoTests: true,
            reporters: 'default',
            mockReset: true,
            clearMocks: true,
            unstubGlobals: true,
            unstubEnvs: true,
            dir: './tests/',
            name: 'Nuclearcraft Solver',
            maxConcurrency: Math.max(Math.floor(os.cpus().length / 2), 1)
        },
        server: {
            fs: {
                strict: process.env['VITEST_VSCODE'] === undefined
            }
        },
        plugins: [
            svelte({
                compilerOptions: {
                    dev: mode === 'development',
                    hmr: mode === 'development',
                    preserveComments: mode === 'development',
                    preserveWhitespace: mode === 'development',
                    modernAst: true
                },
                inspector: mode === 'development',
                preprocess: [
                    sveltePreprocess({
                        sourceMap: true,
                        typescript: {
                            tsconfigDirectory: path.resolve(
                                __dirname,
                                './src/ts/'
                            ),
                            tsconfigFile: path.resolve(
                                __dirname,
                                './src/ts/tsconfig.json'
                            )
                        },
                        scss: {
                            linefeed: 'lf',
                            indentWidth: 4,
                            indentType: 'space',
                            outputStyle:
                                mode !== 'development' ? 'compressed' : (
                                    'expanded'
                                ),
                            quietDeps: true,
                            sourceMapEmbed: mode === 'development',
                            sourceMap: true,
                            omitSourceMapUrl: mode !== 'development',
                            sourceMapContents: true
                        }
                    })
                ]
            }),
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
