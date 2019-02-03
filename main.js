#!/usr/bin/env node

'use strict'

const minimist = require('minimist')

console.log('hello worl comman line interface')
const args = minimist(process.argv)
console.log(args)
