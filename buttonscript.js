// JavaScript to handle the button click event 
function resume()
{
    window.open('benGivensResume.pdf', '_blank');
}
function battleShipButton(){
    window.location.href ='https://github.com/bsgive/BattleShip';
}
function parserButton(){
    window.location.href ='https://github.com/bsgive/String-Parser';
}
function tailButton(){
    window.location.href ='https://github.com/bsgive/Tail-function';
}
function navigateToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
        });
    }
}