#!/usr/bin/env node
const core = require("@actions/core");
const github = require("@actions/github");
const JavaScriptObfuscator = require("javascript-obfuscator");
const glob = require("glob");
const fs = require("fs");

try {
  var path = process.cwd() + core.getInput("file");
  fs.readFoe(path, (err, content) => {
    content = content.toString();
    var obf = JavaScriptObfuscator.obfuscate(content).getObfuscatedCode();
    fs.writeFileSync(path, obfuscatedContent);
  });
} catch (err) {
  core.setFailed(err.message);
}
