'use strict';

const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

async function bundle() {
  const bundle = await rollup({
    input: './src/main.js',
    plugins: [babel(), resolve(), commonjs()],
  });

  return bundle.write({
    file: './dist/output.js',
    format: 'iife',
  });
}

const gessoBundle = (exports.gessoBundle = bundle);

exports.default = gessoBundle;
