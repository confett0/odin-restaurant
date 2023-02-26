import { createHomeContent } from "./home";
import { createMenuContent } from "./menu";
import { createContactContent } from "./contact";

// helper function to create html elements with textcontent and classes
const createNewElement = (el, content, className) => {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
  }

  const homeLink = createNewElement("li","Home");
    const menuLink = createNewElement("li","Menu");
    const contactLink = createNewElement("li","Contacts");

  const createNav = () => {
    const nav = createNewElement("nav");
    const ul = createNewElement("ul");

    homeLink.addEventListener("click", loadHome);
    menuLink.addEventListener("click", loadMenu);
    contactLink.addEventListener("click", loadContact);

    ul.append(homeLink, menuLink, contactLink);
    nav.appendChild(ul);

    return nav;
  }

  const createHeader = () => {
    const header = createNewElement("header");
    const logo = createNewElement("h1", "Cozy Café");

    header.appendChild(logo);
    header.appendChild(createNav()); 

    return header;
  };

 
    const main = createNewElement("main");

  const createFooter = () => {
    const footer = createNewElement("footer");
    const credits = createNewElement("p");
    credits.innerHTML = "Copyright © <a href='https://github.com/confett0' target='_blank'>confetto</a>";
    footer.appendChild(credits);

    return footer;
  };

  const loadWebsite = () => {
    const siteWrapper = document.getElementById("content");
    siteWrapper.appendChild(createHeader());
    siteWrapper.appendChild(main);
    siteWrapper.appendChild(createFooter());
  };

  const loadHome = () => {
    main.innerHTML = "";
    main.appendChild(createHomeContent());
    homeLink.setAttribute("class","active");
    menuLink.removeAttribute("class");
    contactLink.removeAttribute("class");

    return main;
  };

  const loadMenu = () => {
    main.innerHTML = "";
    main.appendChild(createMenuContent());
    menuLink.setAttribute("class","active");
    homeLink.removeAttribute("class");
    contactLink.removeAttribute("class");

    return main;
  };

  const loadContact = () => {
    main.innerHTML = "";
    main.appendChild(createContactContent());
    contactLink.setAttribute("class","active");
    menuLink.removeAttribute("class");
    homeLink.removeAttribute("class");

    return main;
  };

  loadHome();


  export { createNewElement, loadContact, loadWebsite };

  




