import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './dist';
const srcFolder = './src'


export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/`
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}