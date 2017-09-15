window.onload = function () {
    var hideSide = document.getElementById('hide-side');
    var siteName = document.getElementById('pc-site-name');
    var sidebarBg = document.getElementsByClassName('sidebar-bg').item(0);
    var personalInfo = document.getElementsByClassName('personal-info-wrapper').item(0);
    var content = document.getElementsByClassName('main').item(0);
    var originalMargin = content.style.margin;

    content.style.height = window.innerHeight + 'px';

    hideSide.onclick = function () {
        hideSide.style.opacity = 0;
        sidebarBg.style.width = 0;
        content.style.width = '100%';
        content.style.margin = '0';
        siteName.style.display = 'inline';

        setTimeout(function () {
            hideSide.style.display = 'none';
            siteName.style.opacity = 1;
        }, 400);

        setTimeout(function () { personalInfo.style.display = 'none'; }, 100);
    };

    siteName.onclick = function () {
        siteName.style.opacity = 0;

        sidebarBg.style.width = '26%';
        personalInfo.style.display = 'block';
        content.style.width = '74%';
        content.style.margin = originalMargin;
        hideSide.style.display = 'inline';

        setTimeout(function () {
            siteName.style.display = 'none';
            hideSide.style.opacity = 1;
        }, 400);
    }
};
