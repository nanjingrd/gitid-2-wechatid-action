// ncc build index.js --license licenses.txt
const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
var path = require("path");
var absolutePath = path.resolve("./");

console.log(absolutePath)


import { idmap } from './idmap.js'
console.log(idmap.replace("_","")) // 'variableValue'

try {

    fs.readdir("./", (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
  
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