#!/usr/bin/env node

const JavaScriptObfuscator = require("javascript-obfuscator");
const glob = require("glob");
const fs = require("fs");

glob(`${process.cwd()}/**/*`, (er, files) => {
  files.forEach(filePath => {
    if (filePath.endsWith(".js")) {
      fs.readFile(filePath, (err, content) => {
        content = content.toString();
        const obfuscatedContent = JavaScriptObfuscator.obfuscate(
          content
        ).getObfuscatedCode();
        fs.writeFileSync(filePath, obfuscatedContent);
      });
    }
  });
});
