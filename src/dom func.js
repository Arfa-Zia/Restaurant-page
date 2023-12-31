
const mainContent = document.querySelector('#content');
const content = document.createElement('div');
content.id = "main-content"
mainContent.appendChild(content);
//navbar setup
export function Navbar(){
const navbar = document.createElement('nav');
const ul = document.createElement('ul');
ul.classList = "navbar";
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.classList = "navbar-links";
a1.id = "link1";
a1.textContent = "Home";

const li2= document.createElement('li');
const a2 = document.createElement('a');
a2.classList = "navbar-links";
a2.id = "link2";
a2.textContent = "Our Story";

const li3= document.createElement('li');
const a3 = document.createElement('a');
a3.classList = "navbar-links";
a3.id = "link3";
a3.textContent = "Menu";

const li4= document.createElement('li');
const a4 = document.createElement('a');
a4.classList = "navbar-links";
a4.id = "link4";
a4.textContent = "Contact";

const backCover = document.createElement("div");
backCover.id = 'back-cover';

navbar.appendChild(ul);
mainContent.appendChild(navbar);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);

mainContent.appendChild(backCover);

}
//Home page setup
export function HomePage(){

    
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
    
    
    content.appendChild(heroSection);
    mainContent.appendChild(content);
    heroSection.appendChild(heroDescription);
    heroSection.appendChild(heroImage);
    heroDescription.appendChild(h1);
    heroDescription.appendChild(p);
    heroDescription.appendChild(button);
}
//Our Story page setup
export function StoryPage(){
    const OurStory = document.createElement("div");
    OurStory.id= "our-story";
    const h2 =document.createElement("h2");
    h2.textContent = "OUR STORY:";
    const img = document.createElement('img');
    img.src = "https://th.bing.com/th/id/R.9b5d0d32360e1ee89ba561d3dd4b5138?rik=dqpwe%2fuAldHaKg&pid=ImgRaw&r=0";
    const story = document.createElement('div');
    story.id = "story";
    const p1 = document.createElement('p');
    p1.textContent = "Nestled in the heart of Pakistan, Pak Cuisine stands as a testament to the rich culinary heritage of our beloved country. Our restaurant is a  cherished destination for those seeking the authentic flavors of Pakistani cuisine.";
    const p2 = document.createElement('p');
    p2.textContent = "From the bustling streets of Lahore to the scenic valleys of Swat, our menu is a mosaic of dishes that celebrate the diversity and depth of our nation’s cooking traditions. Each recipe is meticulously perfected, and served with pride.";
    const p3 = document.createElement('p');
    p3.textContent = 'At Pak Cuisine, we believe that food is more than just sustenance; it is a narrative of culture, a bridge between communities, and a source of joy. Our chefs, with their profound expertise and passion, craft each dish using the finest local ingredients, ensuring that every bite resonates with the soul of Pakistan.';
    const p4 = document.createElement('p');
    p4.textContent = "As you step into our restaurant, you are not just a customer but a part of our ever-growing family. We invite you to savor the rich, spicy, and aromatic dishes that have made us a household name. From the succulent Seekh Kebabs to the comforting warmth of Nihari, each dish is a celebration of our country’s love affair with food.";
    const p5 = document.createElement('p');
    p5.textContent = " Join us at Pak Cuisine, where every meal is a journey through the heart of Pakistan’s culinary landscape, and every visit is a memory in the making.";
    const p6 = document.createElement('p');
    p6.textContent = "We look forward to welcoming you and sharing our story—one plate at a time.";

    mainContent.appendChild(content);
    content.appendChild(OurStory);
    OurStory.appendChild(h2);
    OurStory.appendChild(img);
    OurStory.appendChild(story);
    story.appendChild(p1);
    story.appendChild(p2);
    story.appendChild(p3);
    story.appendChild(p4);
    story.appendChild(p5);
    story.appendChild(p6);
    
}
//Menu page setup
export function Menu(){
    const menu = document.createElement("div");
    menu.id = "menu";

    const h2 = document.createElement("h2");
    h2.textContent = "Discover our Menu:";

    const dishes = document.createElement('div');
    dishes.id = "dishes";
    //Beverages section
    const beverages = document.createElement('div');
    beverages.className = "beverages";
    const hB = document.createElement('h3');
    hB.textContent = "Beverages";
    const divB = document.createElement('div');

    const figureB1 = document.createElement("figure");
    const imgB1 = document.createElement('img');
    imgB1.src = "https://homechefscooking.files.wordpress.com/2020/03/filmora-4.png?w=1000";
    const capB1 = document.createElement('figcaption');
    capB1.textContent = 'Lassi';

    const figureB2 = document.createElement("figure");
    const imgB2 = document.createElement('img');
    imgB2.src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/iozilsbidivu7zqx2k9b";
    const capB2 = document.createElement('figcaption');
    capB2.textContent = 'Chai';
    
    //Main Course Section
    const mainCourse = document.createElement('div');
    mainCourse.className = "main-course";
    const hMC = document.createElement('h3');
    hMC.textContent = "Main Course";
    const divMC = document.createElement('div');

    const figureMC1 = document.createElement("figure");
    const imgMC1 = document.createElement('img');
    imgMC1.src = "https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-004-735x490.jpg.webp";
    const capMC1 = document.createElement('figcaption');
    capMC1.textContent = 'Chicken Karahai';

    const figureMC2 = document.createElement("figure");
    const imgMC2 = document.createElement('img');
    imgMC2.src = "https://th.bing.com/th/id/R.7020cdb352da2f066a057b9f114919f9?rik=JLlSHymq54Jhig&riu=http%3a%2f%2fwww.recipesaresimple.com%2fwp-content%2fuploads%2f2015%2f10%2fnihari-pakistan.jpg&ehk=TRMiDMcvDX9XSXuCqckMq%2f0LV944iuSAwynNO%2fhmDt0%3d&risl=&pid=ImgRaw&r=0";
    const capMC2 = document.createElement('figcaption');
    capMC2.textContent = 'Nihari';

    const figureMC3 = document.createElement("figure");
    const imgMC3 = document.createElement('img');
    imgMC3.src = "https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-10-735x490.jpg.webp";
    const capMC3 = document.createElement('figcaption');
    capMC3.textContent = 'Sindhi Biryani';

    const figureMC4 = document.createElement("figure");
    const imgMC4 = document.createElement('img');
    imgMC4.src = "https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-005-735x490.jpg.webp";
    const capMC4 = document.createElement('figcaption');
    capMC4.textContent = 'Balochi Sajji';

    const figureMC5 = document.createElement("figure");
    const imgMC5 = document.createElement('img');
    imgMC5.src = "https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-16-735x490.jpg.webp";
    const capMC5 = document.createElement('figcaption');
    capMC5.textContent = 'Peshawari Chapli Kebab';

    const figureMC6 = document.createElement("figure");
    const imgMC6 = document.createElement('img');
    imgMC6.src = "https://4.bp.blogspot.com/-0j3KXlKrqCk/WJuNj8AJK4I/AAAAAAAACt4/eTFGpd7r6iABR5-9-dIQX3NT1z3mrMt6QCLcB/s1600/Chicken%2BTikka%2BKebab.JPG";
    const capMC6 = document.createElement('figcaption');
    capMC6.textContent = 'Chicken Tikka';

    //Desserts Section
    const desserts = document.createElement('div');
    desserts.className = "desserts";
    const hD = document.createElement('h3');
    hD.textContent = "Desserts";
    const divD = document.createElement('div');

    const figureD1 = document.createElement("figure");
    const imgD1 = document.createElement('img');
    imgD1.src = "https://static.toiimg.com/thumb/80332213.cms?width=400&height=300&resizemode=4&imgsize=252430";
    const capD1 = document.createElement('figcaption');
    capD1.textContent = 'Gajar ka Halwa';

    const figureD2 = document.createElement("figure");
    const imgD2 = document.createElement('img');
    imgD2.src = "https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-015-735x490.jpg.webp";
    const capD2 = document.createElement('figcaption');
    capD2.textContent = 'Kheer';

    //Appending all the nodes to the main div
    mainContent.appendChild(content);
    content.appendChild(menu);
    menu.appendChild(h2);
    menu.appendChild(dishes);
    dishes.appendChild(beverages);
    dishes.appendChild(mainCourse);
    dishes.appendChild(desserts);

    beverages.appendChild(hB);
    beverages.appendChild(divB);
    divB.appendChild(figureB1);
    figureB1.appendChild(imgB1);
    figureB1.appendChild(capB1);
    divB.appendChild(figureB2);
    figureB2.appendChild(imgB2);
    figureB2.appendChild(capB2);

    mainCourse.appendChild(hMC);
    mainCourse.appendChild(divMC);
    divMC.appendChild(figureMC1);
    figureMC1.appendChild(imgMC1);
    figureMC1.appendChild(capMC1);
    divMC.appendChild(figureMC2);
    figureMC2.appendChild(imgMC2);
    figureMC2.appendChild(capMC2);
    divMC.appendChild(figureMC3);
    figureMC3.appendChild(imgMC3);
    figureMC3.appendChild(capMC3);
    divMC.appendChild(figureMC4);
    figureMC4.appendChild(imgMC4);
    figureMC4.appendChild(capMC4);
    divMC.appendChild(figureMC5);
    figureMC5.appendChild(imgMC5);
    figureMC5.appendChild(capMC5);
    divMC.appendChild(figureMC6);
    figureMC6.appendChild(imgMC6);
    figureMC6.appendChild(capMC6);

    desserts.appendChild(hD);
    desserts.appendChild(divD);
    divD.appendChild(figureD1);
    figureD1.appendChild(imgD1);
    figureD1.appendChild(capD1);
    divD.appendChild(figureD2);
    figureD2.appendChild(imgD2);
    figureD2.appendChild(capD2);

}
//Contact page setup
export function ContactUs(){
    const contactUs = document.createElement('div');
    contactUs.id = "contact";

    const info = document.createElement('div');
    info.id = 'info';
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    
    const hI1 = document.createElement('h3');
    hI1.textContent = "Working hours";
    const hI2 = document.createElement('h3');
    hI2.textContent = "Location";
    const hI3 = document.createElement('h3');
    hI3.textContent = "Contact us";
   
    const pI1 = document.createElement('p');
    const pI2 = document.createElement('p');
    const pI3 = document.createElement('p');
    const pI4 = document.createElement('p');
    const pI5 = document.createElement('p');
    const pI6 = document.createElement('p');
    const pI7 = document.createElement('p');
    const pI8 = document.createElement('p');
    const pI9 = document.createElement('p');
    const pI10 = document.createElement('p');
    
    pI1.textContent = 'Sunday to Saturday';
    pI2.textContent =  '9:00 AM to 11:00 PM';
    pI3.textContent =  'Friday';
    pI4.textContent =  '2:00 PM to 01:00 AM';
    pI5.textContent = ' Street-123, Lahore,';
    pI6.textContent = 'Pakistan';
    pI7.textContent = '05499';
    pI8.textContent = ' 0333-4444555,';
    pI9.textContent = '0333-5555666,';
    pI10.textContent = 'totallyrealemail@notfake.com';


    const map = document.createElement( 'div');
    map.id = "map";
    const mapIframe = document.createElement('iframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435616.16679459787!2d73.87165709295905!3d31.46227253712129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702111843026!5m2!1sen!2s";
    mapIframe.width = "900";
    mapIframe.height = "500";
    mapIframe.allowFullscreen = "";
    mapIframe.loading = "lazy";
    mapIframe.referrerPolicy = "no-referrer-when-downgrade";

    //Appending all the nodes
    mainContent.appendChild(content);
    content.appendChild(contactUs);
    contactUs.appendChild(info);
    contactUs.appendChild(map);
    info.appendChild(div1);
    info.appendChild(div2);
    info.appendChild(div3);
    map.appendChild(mapIframe);
    
    div1.appendChild(hI1);
    div1.appendChild(pI1);
    div1.appendChild(pI2);
    div1.appendChild(pI3);
    div1.appendChild(pI4);

    div2.appendChild(hI2);
    div2.appendChild(pI5);
    div2.appendChild(pI6);
    div2.appendChild(pI7);

    div3.appendChild(hI3);
    div3.appendChild(pI8);
    div3.appendChild(pI9);
    div3.appendChild(pI10);
   
}
