// JavaScript to handle the button click event 
function resume()
{
    window.open('benGivensResume.pdf', '_blank');
}
function battleShipButton(){
    window.location.href ='https://github.com/ryebsgiv/BattleShip';
}
function parserButton(){
    window.location.href ='https://github.com/ryebsgiv/String-Parser';
}
function tailButton(){
    window.location.href ='https://github.com/ryebsgiv/Tail-function';
}
function navigateToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
        });
    }
}