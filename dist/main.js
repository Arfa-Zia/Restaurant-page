(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([e.id,"*{\n    overflow-x: hidden;\n    padding: 0px;\n    margin: 0px;\n}\n#back-cover{\n    background-image: url(https://thumbs.dreamstime.com/b/textile-traditional-allover-pattern-design-print-small-mughal-flower-background-art-fabric-268789523.jpg);\n    mix-blend-mode: multiply;\n    opacity: .2;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n}\n.navbar{\n    display: flex;\n    flex:  1 1 auto;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n    list-style: none;\n    gap: 35px;\n    font-family:  'josefin sans', 'Times New Roman', Times, serif;\n    padding: 45px;\n    background-color: goldenrod;\n    z-index: 10;\n}\n.navbar > li {\n    color: maroon;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid goldenrod;\n}\n.navbar > li > a{\n    position: relative;\n    z-index: 2000;\n    text-decoration: none;\n}\n.navbar > li > a:hover{\n    color: white;   \n    cursor: pointer;\n}\n\n.hero{\n    background-color: maroon;\n    height: 78vh;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 20;\n}\n.hero > img {\n    width: 80%;\n    padding: 40px;\n    border-radius: 100px;\n}\n#hero-description > p{\n   color: goldenrod;\n   padding: 50px;\n   font-size: 26px;\n   position: relative;\n   top: 70px;\n   margin-left: 20px;\n}\n#hero-description {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 100px;\n    font-family: 'josefin sans' , 'Times New Roman', Times, serif;\n    gap: 20px;\n}\n#hero-description > button {\n    background-color: goldenrod;\n    cursor: pointer;\n    border: none;\n    border-radius: 10px;\n    color: maroon;\n    box-shadow: 0px 7px 9px -4px rgba(0,0,0,.5);\n    padding: 10px;\n    font-size: 22px;\n    margin: 40px 40px 40px 70px;\n    font-family: 'cabin sketch' , 'Times New Roman', Times, serif;\n    z-index: 200;\n}\n#hero-description > h1 {\n    font-size: 50px;\n    padding: 20px;\n    background-color: goldenrod;\n    color: maroon;\n    font-weight: normal;\n    position: absolute;\n    left: 3%;\n    top: 42%;\n    font-family: 'cabin sketch', 'Times New Roman', Times, serif;\n}\n#our-story{\n    display: flex;\n    background-color: maroon;\n    flex-direction: column;\n    flex-wrap: wrap;\n    padding-inline: 40px;\n    height: 100vh;\n    \n}\n#our-story > img{\n    width: 25%;\n    margin: 20px 30px;\n    border-radius: 20px;\n}\n#our-story > h2 {\n    font-size: 40px;\n    padding: 20px;\n    margin: 60px 20px 20px 40px;\n    background-color: goldenrod;\n    color: maroon;\n    font-weight: normal;\n    font-family: 'josefin sans', 'Times New Roman', Times, serif;\n    width: 270px;\n}\n#story{\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: flex-start;\n    padding: 70px 20px 20px 60px;\n    flex: 1 1 auto;\n    gap: 20px;\n}\n#story > p {\n    width: 50%;\n    color: goldenrod;\n    font-size: 18px;\n    font-family: 'josefin sans' , 'Times New Roman', Times, serif;\n}\n#menu {\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n    background-color: maroon;\n    color: goldenrod;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n#menu > h2 {\n    font-size: 40px;\n    padding: 20px;\n    margin: 60px 20px 20px 40px;\n    background-color: goldenrod;\n    color: maroon;\n    font-weight: normal;\n    font-family: 'josefin sans', 'Times New Roman', Times, serif;\n    align-self: flex-start;\n}\n\n#dishes {\n    display: grid;\n    grid-template: 1fr 3fr 1fr / 1fr 1fr ;\n    border: 5px solid goldenrod;\n    border-radius: 20px;\n    width: 65%;\n    margin-bottom: 50px;\n}\n.beverages >div >  figure > img{\n    width: 350px; \n    height: 350px;\n    z-index: 1000;\n    position: relative;\n}\n.main-course > div> figure >  img , .desserts > div > figure > img{\n  width: 400px;\n  height: 300px;\n}\n#dishes > div > div > figure > figcaption {\n    text-align: center;\n    font-size: 25px;\n    background-color: goldenrod;\n    color: maroon;\n    font-family: \"josefin sans\" , 'Times New Roman', Times, serif;\n    padding: 20px;\n}\n#dishes > div > h3 {\n    font-size: 35px;\n    background-color: goldenrod;\n    color: maroon;\n    padding: 15px;\n    font-family: 'josefin sans', 'Times New Roman', Times, serif;\n    align-self: flex-start;\n    width: 100%;\n    text-align: center;\n    position: relative;\n    z-index: 200;\n}\n.beverages {\n    display: flex;\n    grid-area: 1 / 1 / 1 / 2 span;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.beverages  > div {\n   display: flex;\n   gap: 40px;\n   flex: 1 1 auto;\n   justify-content: center;\n   align-items: center;\n   padding: 50px;\n   flex-wrap: wrap;\n}\n.main-course{\n    grid-area: 2 / 1 / 3 / 2 span;\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.main-course > div {\n    display: flex;\n    gap: 40px;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n }\n\n.desserts {\n    grid-area: 3 / 1 / 3 / 2 span;\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.desserts > div {\n    display: flex;\n    gap: 40px;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n#contact {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80vh;\n    width: 100vw;\n    background-color: maroon;\n    color:goldenrod;\n}\n#info{\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    background-color: rgb(5, 5, 87);\n    padding: 40px;\n    height: 350px;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n#info > div > h3 {\n   font-size: 20px;\n   color : rgb(233, 146, 17);\n   padding-bottom: 5px;\n   font-family: \"josefin sans\" , 'Times New Roman', Times, serif;\n}\n#info > div > p {\n    font-size: 12px;\n    color : white;\n    line-height:  18px;\n    font-family: \"josefin sans\" , 'Times New Roman', Times, serif;\n}\n#map{\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    position: relative;\n    z-index: 1000;\n    border: none;\n}\n",""]);const d=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},r=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=i(u,o);o.byIndex=d,n.splice(d,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var d=t(a[r]);n[d].references--}for(var c=o(e,i),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),r=t.n(a),d=t(565),c=t.n(d),s=t(216),p=t.n(s),l=t(589),m=t.n(l),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=document.querySelector("#content"),g=document.createElement("div");function x(){const e=document.createElement("div");e.classList="hero";const n=document.createElement("div");n.id="hero-description";const t=document.createElement("h1");t.innerHTML="TASTE THE AUTHENTIC PAKISTANI CUISINE";const o=document.createElement("p");o.innerHTML="Welcome to our restaurant! We offer a wide variety of delicious Pakistani dishes that are sure to satisfy your taste. Book your reservation now! ";const i=document.createElement("button");i.textContent="Book Now!";const a=document.createElement("img");a.src="https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52233.jpg",g.appendChild(e),f.appendChild(g),e.appendChild(n),e.appendChild(a),n.appendChild(t),n.appendChild(o),n.appendChild(i)}function C(){document.querySelector("#main-content").textContent=" "}g.id="main-content",f.appendChild(g),function(){const e=document.createElement("nav"),n=document.createElement("ul");n.classList="navbar";const t=document.createElement("li"),o=document.createElement("a");o.classList="navbar-links",o.id="link1",o.textContent="Home";const i=document.createElement("li"),a=document.createElement("a");a.classList="navbar-links",a.id="link2",a.textContent="Our Story";const r=document.createElement("li"),d=document.createElement("a");d.classList="navbar-links",d.id="link3",d.textContent="Menu";const c=document.createElement("li"),s=document.createElement("a");s.classList="navbar-links",s.id="link4",s.textContent="Contact";const p=document.createElement("div");p.id="back-cover",e.appendChild(n),f.appendChild(e),n.appendChild(t),n.appendChild(i),n.appendChild(r),n.appendChild(c),t.appendChild(o),i.appendChild(a),r.appendChild(d),c.appendChild(s),f.appendChild(p)}(),x(),document.querySelectorAll(".navbar-links").forEach((e=>e.addEventListener("click",(e=>{switch(e.target.id){case"link1":C(),x();break;case"link2":C(),function(){const e=document.createElement("div");e.id="our-story";const n=document.createElement("h2");n.textContent="OUR STORY:";const t=document.createElement("img");t.src="https://th.bing.com/th/id/R.9b5d0d32360e1ee89ba561d3dd4b5138?rik=dqpwe%2fuAldHaKg&pid=ImgRaw&r=0";const o=document.createElement("div");o.id="story";const i=document.createElement("p");i.textContent="Nestled in the heart of Pakistan, Pak Cuisine stands as a testament to the rich culinary heritage of our beloved country. Our restaurant is a  cherished destination for those seeking the authentic flavors of Pakistani cuisine.";const a=document.createElement("p");a.textContent="From the bustling streets of Lahore to the scenic valleys of Swat, our menu is a mosaic of dishes that celebrate the diversity and depth of our nation’s cooking traditions. Each recipe is meticulously perfected, and served with pride.";const r=document.createElement("p");r.textContent="At Pak Cuisine, we believe that food is more than just sustenance; it is a narrative of culture, a bridge between communities, and a source of joy. Our chefs, with their profound expertise and passion, craft each dish using the finest local ingredients, ensuring that every bite resonates with the soul of Pakistan.";const d=document.createElement("p");d.textContent="As you step into our restaurant, you are not just a customer but a part of our ever-growing family. We invite you to savor the rich, spicy, and aromatic dishes that have made us a household name. From the succulent Seekh Kebabs to the comforting warmth of Nihari, each dish is a celebration of our country’s love affair with food.";const c=document.createElement("p");c.textContent=" Join us at Pak Cuisine, where every meal is a journey through the heart of Pakistan’s culinary landscape, and every visit is a memory in the making.";const s=document.createElement("p");s.textContent="We look forward to welcoming you and sharing our story—one plate at a time.",f.appendChild(g),g.appendChild(e),e.appendChild(n),e.appendChild(t),e.appendChild(o),o.appendChild(i),o.appendChild(a),o.appendChild(r),o.appendChild(d),o.appendChild(c),o.appendChild(s)}();break;case"link3":C(),function(){const e=document.createElement("div");e.id="menu";const n=document.createElement("h2");n.textContent="Discover our Menu:";const t=document.createElement("div");t.id="dishes";const o=document.createElement("div");o.className="beverages";const i=document.createElement("h3");i.textContent="Beverages";const a=document.createElement("div"),r=document.createElement("figure"),d=document.createElement("img");d.src="https://homechefscooking.files.wordpress.com/2020/03/filmora-4.png?w=1000";const c=document.createElement("figcaption");c.textContent="Lassi";const s=document.createElement("figure"),p=document.createElement("img");p.src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/iozilsbidivu7zqx2k9b";const l=document.createElement("figcaption");l.textContent="Chai";const m=document.createElement("div");m.className="main-course";const u=document.createElement("h3");u.textContent="Main Course";const h=document.createElement("div"),x=document.createElement("figure"),C=document.createElement("img");C.src="https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-004-735x490.jpg.webp";const v=document.createElement("figcaption");v.textContent="Chicken Karahai";const y=document.createElement("figure"),b=document.createElement("img");b.src="https://th.bing.com/th/id/R.7020cdb352da2f066a057b9f114919f9?rik=JLlSHymq54Jhig&riu=http%3a%2f%2fwww.recipesaresimple.com%2fwp-content%2fuploads%2f2015%2f10%2fnihari-pakistan.jpg&ehk=TRMiDMcvDX9XSXuCqckMq%2f0LV944iuSAwynNO%2fhmDt0%3d&risl=&pid=ImgRaw&r=0";const E=document.createElement("figcaption");E.textContent="Nihari";const w=document.createElement("figure"),k=document.createElement("img");k.src="https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-10-735x490.jpg.webp";const T=document.createElement("figcaption");T.textContent="Sindhi Biryani";const j=document.createElement("figure"),N=document.createElement("img");N.src="https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-005-735x490.jpg.webp";const A=document.createElement("figcaption");A.textContent="Balochi Sajji";const z=document.createElement("figure"),S=document.createElement("img");S.src="https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-16-735x490.jpg.webp";const L=document.createElement("figcaption");L.textContent="Peshawari Chapli Kebab";const M=document.createElement("figure"),P=document.createElement("img");P.src="https://4.bp.blogspot.com/-0j3KXlKrqCk/WJuNj8AJK4I/AAAAAAAACt4/eTFGpd7r6iABR5-9-dIQX3NT1z3mrMt6QCLcB/s1600/Chicken%2BTikka%2BKebab.JPG";const R=document.createElement("figcaption");R.textContent="Chicken Tikka";const I=document.createElement("div");I.className="desserts";const q=document.createElement("h3");q.textContent="Desserts";const H=document.createElement("div"),K=document.createElement("figure"),O=document.createElement("img");O.src="https://static.toiimg.com/thumb/80332213.cms?width=400&height=300&resizemode=4&imgsize=252430";const B=document.createElement("figcaption");B.textContent="Gajar ka Halwa";const F=document.createElement("figure"),J=document.createElement("img");J.src="https://nomadparadise.com/wp-content/uploads/2021/03/pakistani-food-015-735x490.jpg.webp";const D=document.createElement("figcaption");D.textContent="Kheer",f.appendChild(g),g.appendChild(e),e.appendChild(n),e.appendChild(t),t.appendChild(o),t.appendChild(m),t.appendChild(I),o.appendChild(i),o.appendChild(a),a.appendChild(r),r.appendChild(d),r.appendChild(c),a.appendChild(s),s.appendChild(p),s.appendChild(l),m.appendChild(u),m.appendChild(h),h.appendChild(x),x.appendChild(C),x.appendChild(v),h.appendChild(y),y.appendChild(b),y.appendChild(E),h.appendChild(w),w.appendChild(k),w.appendChild(T),h.appendChild(j),j.appendChild(N),j.appendChild(A),h.appendChild(z),z.appendChild(S),z.appendChild(L),h.appendChild(M),M.appendChild(P),M.appendChild(R),I.appendChild(q),I.appendChild(H),H.appendChild(K),K.appendChild(O),K.appendChild(B),H.appendChild(F),F.appendChild(J),F.appendChild(D)}();break;case"link4":C(),function(){const e=document.createElement("div");e.id="contact";const n=document.createElement("div");n.id="info";const t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("h3");a.textContent="Working hours";const r=document.createElement("h3");r.textContent="Location";const d=document.createElement("h3");d.textContent="Contact us";const c=document.createElement("p"),s=document.createElement("p"),p=document.createElement("p"),l=document.createElement("p"),m=document.createElement("p"),u=document.createElement("p"),h=document.createElement("p"),x=document.createElement("p"),C=document.createElement("p"),v=document.createElement("p");c.textContent="Sunday to Saturday",s.textContent="9:00 AM to 11:00 PM",p.textContent="Friday",l.textContent="2:00 PM to 01:00 AM",m.textContent=" Street-123, Lahore,",u.textContent="Pakistan",h.textContent="05499",x.textContent=" 0333-4444555,",C.textContent="0333-5555666,",v.textContent="totallyrealemail@notfake.com";const y=document.createElement("div");y.id="map";const b=document.createElement("iframe");b.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435616.16679459787!2d73.87165709295905!3d31.46227253712129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702111843026!5m2!1sen!2s",b.width="750",b.height="422",b.allowFullscreen="",b.loading="lazy",b.referrerPolicy="no-referrer-when-downgrade",f.appendChild(g),g.appendChild(e),e.appendChild(n),e.appendChild(y),n.appendChild(t),n.appendChild(o),n.appendChild(i),y.appendChild(b),t.appendChild(a),t.appendChild(c),t.appendChild(s),t.appendChild(p),t.appendChild(l),o.appendChild(r),o.appendChild(m),o.appendChild(u),o.appendChild(h),i.appendChild(d),i.appendChild(x),i.appendChild(C),i.appendChild(v)}()}}))))})()})();