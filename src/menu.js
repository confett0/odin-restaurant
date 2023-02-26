import { createNewElement } from "./website";

const createMenuContent = () => {

    const menu = createNewElement("div", "", "menu");

    const menuHeader = createNewElement("div", "", "menu-header");
    const title = createNewElement("div", "", "title");
    const h1 = createNewElement("h1", "Our menu");
    const para = createNewElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam minima reiciendis mollitia voluptate vel amet soluta aspernatur consequuntur eum debitis?");

    title.append(h1, para);
    menuHeader.appendChild(title);
    menu.appendChild(menuHeader);

    const menuMain = createNewElement("div", "", "menu-main");

    menuMain.appendChild(createNewElement("h3", "Buttermilk pancakes"));
    menuMain.appendChild(createNewElement("p", "Choose from chocolate and banana, bacon and syrup, or yoghurt and berries"));

    menuMain.appendChild(createNewElement("h3", "Granola bowl"));
    menuMain.appendChild(createNewElement("p", "Yogurt with strawberry compote"));

    menuMain.appendChild(createNewElement("h3", "Eggs Benedict"));
    menuMain.appendChild(createNewElement("p", "Poached eggs, avocado, bacon, toasted bread"));

    menuMain.appendChild(createNewElement("h3", "Eggs Florentine"));
    menuMain.appendChild(createNewElement("p", "Poached eggs, avocado, spinach, toasted bread"));

    menuMain.appendChild(createNewElement("h3", "Smashed avocado"));
    menuMain.appendChild(createNewElement("p", "Roast tomatoes, poached eggs"));

    menuMain.appendChild(createNewElement("h3", "Sweet toast"));
    menuMain.appendChild(createNewElement("p", "Cocoa or hazelnut cream with toast, served with fruit"));

    menuMain.appendChild(createNewElement("h3", "Cheese bagel"));
    menuMain.appendChild(createNewElement("p", "Homemade bagel, cream cheese, spinach, dried tomatoes and hummus"));
    
    menu.appendChild(menuMain);
    
    return menu;
};

export { createMenuContent };