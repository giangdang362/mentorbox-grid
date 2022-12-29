
function handleOpenPopup(){
    const menuBtn = document.getElementById('moblieMenu');
    const bgBlur = document.getElementById('bg-blur');
    const hambergerBtn = document.getElementById('hamberger-btn');
    bgBlur.style.display = "block";
    hambergerBtn.style.visibility = 'hidden';
    menuBtn.style.left = "0";
    menuBtn.style.transitionDuration = '0.5s';
}
function handleClickOutside() {
    const hambergerBtn = document.getElementById('hamberger-btn');
    const menuBtn = document.getElementById('moblieMenu');
    const bgBlur = document.getElementById('bg-blur');
    hambergerBtn.style.visibility = 'visible';
    menuBtn.style.left = "-1000px";
    bgBlur.style.display = "none";
    menuBtn.style.transitionDuration = '0.8s';
}