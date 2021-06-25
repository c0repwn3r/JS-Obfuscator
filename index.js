#!/usr/bin/env node
const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");

try {
  var path = process.cwd() + core.getInput("file");
  fs.readFile(path, (err, content) => {
    content = content.toString();
    var obf = JavaScriptObfuscator.obfuscate(content).getObfuscatedCode();
    fs.writeFileSync(path, obfuscatedContent);
  });
} catch (err) {
  core.setFailed(err);
}
