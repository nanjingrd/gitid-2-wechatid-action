// ncc build index.js --license licenses.txt
const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
var path = require("path");
var absolutePath = path.resolve("./");

console.log(absolutePath)


import { idmap } from './idmap.js'
realidmap =  JSON.parse(JSON.stringify(idmap).replaceAll("_",""))
console.log(realidmap) // 'variableValue'

try {

  const github_id = core.getInput('github_id');
  console.log(`Github id is ${github_id}!`);
  const time = (new Date()).toTimeString();
  wecaht_id = realidmap[github_id]
  core.setOutput("wechat_id", wecaht_id);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}