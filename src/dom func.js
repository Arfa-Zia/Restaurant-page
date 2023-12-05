const mainContent = document.querySelector('#content');
//Home page setup
export function HomePage(){

    //navbar setup
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList = "navbar";
    const li1 = document.createElement('li');
    li1.classList = "navbar-links";
    li1.id = "link1";
    li1.textContent = "Home";
    const li2= document.createElement('li');
    li2.classList = "navbar-links";
    li2.id = "link2";
    li2.textContent = "About";
    const li3= document.createElement('li');
    li3.classList = "navbar-links";
    li3.id = "link3";
    li3.textContent = "Menu";
    const li4= document.createElement('li');
    li4.classList = "navbar-links";
    li4.id = "link4";
    li4.textContent = "Contact";
    
    navbar.appendChild(ul);
    mainContent.appendChild(navbar);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    
    //hero section setup
    const heroSection = document.createElement("div");
    heroSection.classList="hero";
    
    const heroDescription = document.createElement("div");
    heroDescription.id = "hero-description";
    
    const h1 = document.createElement("h1");
    h1.innerHTML ="TASTE THE AUTHENTIC PAKISTANI CUISINE";
    
    const p = document.createElement("p");
    p.innerHTML = "Welcome to our restaurant! We offer a wide variety of delicious Pakistani dishes that are sure to satisfy your taste. Book your reservation now! ";
    
    const button = document.createElement("button")
    button.textContent = "Book Now!";
    
    const heroImage = document.createElement("img");
    heroImage.src = 'https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52233.jpg';
    
    const backCover = document.createElement("div");
    backCover.id = 'back-cover';
    
    heroSection.appendChild(heroDescription);
    heroSection.appendChild(heroImage);
    heroDescription.appendChild(h1);
    heroDescription.appendChild(p);
    heroDescription.appendChild(button);
    mainContent.appendChild(heroSection);
    mainContent.appendChild(backCover);
}
