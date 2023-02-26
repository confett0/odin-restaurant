import { createNewElement, loadContact } from "./website";

const createHomeContent = () => {
    
    const home = createNewElement("div","","home-wrap");
    const cta = createNewElement("div", "", "cta");
    const title = createNewElement("h1", "Slow down and enjoy your coffee.")
    const para = createNewElement("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus ut faucibus pulvinar elementum integer enim neque.")
    const button = createNewElement("button", "Book your table");

    button.addEventListener("click", loadContact);

    cta.append(title,para,button);
    home.appendChild(cta);
    
    return home;
};

export { createHomeContent };