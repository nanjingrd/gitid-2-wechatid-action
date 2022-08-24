// ncc build index.js --license licenses.txt
const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
var path = require("path");
var absolutePath = path.resolve("./");

console.log(absolutePath)


import { idmap } from './idmap.js'
idmap =  JSON.parse(JSON.stringify(idmap).replaceAll("_",""))
console.log(idmap) // 'variableValue'

try {

  const nameToGreet = core.getInput('github_id');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("wechat_id", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}