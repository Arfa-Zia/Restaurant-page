import './style.css';
import * as webpage from './dom func.js';
webpage.Navbar();
webpage.HomePage();

const navbarLinks = document.querySelectorAll('.navbar-links');
navbarLinks.forEach(element => element.addEventListener('click', (event) => {
    let linkId = event.target.id;
    switch(linkId){
        case "link1" :
            ClearMainPage();
            webpage.HomePage();
            break;
        case "link2":
            ClearMainPage();
            webpage.StoryPage();
            break;
            case "link3" :
            ClearMainPage();
            webpage.Menu();
            break;
        case "link4" :
            ClearMainPage();
            webpage.ContactUs();
            break;
        }
}));
function ClearMainPage(){
    const content = document.querySelector('#main-content');
    content.textContent = " ";
}

