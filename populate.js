const shell = require('shelljs')
function gitClone(repo) {
    shell.exec(`git clone ${repo} temp`);
    shell.mv("temp/*", "./gams");
    shell.rm("-rf", "temp");
    shell.rm("-rf", "gams/.git");
}
const repos = {
    "https://gitlab.com/3kh0/3kh0-assets.git/": gitClone
}
for (var item of Object.keys(repos)) {
    repos[item](item)
}