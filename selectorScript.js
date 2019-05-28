
function ShowSheet() {
    ElementRef = document.getElementsByClassName('selectorList')[0];
    if (ElementRef.classList.contains('selectorListVisible'))
        document.getElementsByClassName('selectorList')[0].classList.remove('selectorListVisible');
    else
        document.getElementsByClassName('selectorList')[0].classList.add('selectorListVisible');

}

function ElementClick(event) {
    document.getElementsByClassName('selectorList')[0].classList.remove('selectorListVisible');
    document.getElementsByClassName('selectorTitleText')[0].textContent = event.target.textContent;
}