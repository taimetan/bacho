async function loadFragment(id, url) {
    const resp = await fetch(url);
    if (resp.ok) {
        document.getElementById(id).innerHTML = await resp.text();
    }
}
loadFragment('header-container', '/src/components/header.html');
loadFragment('footer-container', '/src/components/footer.html');