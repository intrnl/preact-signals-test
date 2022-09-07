import * as esbuild from 'esbuild';

import buildAnalysis from '@intrnl/esbuild-plugin-build-analysis';
import env from '@intrnl/esbuild-plugin-env';
import vanillaExtract from '@intrnl/esbuild-plugin-vanilla-extract';


/** @type {esbuild.BuildOptions} */
export let config = {
	entryPoints: ['src/app.jsx'],
	outdir: 'dist/_assets',
	publicPath: '/_assets/',

	sourcemap: true,

	loader: {
		'.svg': 'file',
	},

	plugins: [
		buildAnalysis(),
		env(),
		vanillaExtract(),
	],
};
