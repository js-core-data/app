#! /usr/bin/env node
const program = require("commander");

program.option("-f, --force", "force installation").parse(process.argv);

require("../index.js");