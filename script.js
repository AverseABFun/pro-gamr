try {
const gams = await fetch('gams/files.json').then(res => res.json());
for (var gam of gams) {
    (function (gam) {
        var gamEl = document.querySelector('#first').cloneNode(true);
        gamEl.id = gam;
        gamEl.querySelector('.gam-title').innerText = gam;
        gamEl.querySelector('.play-btn').onclick = function () {
            document.location.href = `gams/${gam}/index.html`;
        }
        document.querySelector('#gams').appendChild(gamEl);
    })(gam)
}
} catch (e) {
    alert(e);
}