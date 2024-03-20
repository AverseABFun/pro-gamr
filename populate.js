const shell = require('shelljs')
const fs = require('fs');
shell.mkdir("gams");

function gitClone(repo) {
    shell.exec(`git clone ${repo} temp`);
    shell.mv("temp/*", "./gams");
    shell.rm("-rf", "temp");
    shell.rm("-rf", "gams/.git");
}
const repos = {
    "https://gitlab.com/3kh0/3kh0-assets.git/": gitClone
}
shell.rm("-rf", "gams/*");
for (var item of Object.keys(repos)) {
    repos[item](item)
}
fs.writeFileSync("gams/files.json", JSON.stringify(fs.readdirSync("gams")));