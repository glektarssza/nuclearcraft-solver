module.exports = {
    experimentalTernaries: true,
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: false,
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
    htmlWhitespaceSensitivity: 'css',
    jsxSingleQuote: true,
    overrides: [
        {
            files: ['*.{yml,yaml}'],
            options: {
                tabWidth: 2
            }
        }
    ],
    printWidth: 80,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    semi: true,
    singleAttributePerLine: true,
    singleQuote: true,
    trailingComma: 'none',
    useTabs: false,
    tabWidth: 4,
    vueIndentScriptAndStyle: true
};
