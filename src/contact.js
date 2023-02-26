import { createNewElement } from "./website";

const createContactContent = () => {

    const contact = createNewElement("div","","contact")

    const contactHeader = createNewElement("div", "", "contact-header");
    const title = createNewElement("div", "", "title");
    const h1 = createNewElement("h1", "Get in touch");
    const para = createNewElement("p", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fugit officia iste eius itaque sed odit quisquam debitis. Qui officiis laudantium veritatis, nulla beatae labore eveniet!");

    title.append(h1, para);
    contactHeader.appendChild(title);
    contact.appendChild(contactHeader);

    const contactMain = createNewElement("div", "", "contact-main");

    contactMain.appendChild(createNewElement("h3", "Address"));
    contactMain.appendChild(createNewElement("p", "123 Fake Street"));
    contactMain.appendChild(createNewElement("p", "Vancouver, BC"));
    contactMain.appendChild(createNewElement("p", "V06 0E1"));

    contactMain.appendChild(createNewElement("h3", "Hours"));
    contactMain.appendChild(createNewElement("p", "Tuesday: 12:00 - 22:00"));
    contactMain.appendChild(createNewElement("p", "Wednesday: 12:00 - 22:00"));
    contactMain.appendChild(createNewElement("p", "Thursday: 12:00 - 22:00"));
    contactMain.appendChild(createNewElement("p", "Friday: 12:00 - 23:30"));
    contactMain.appendChild(createNewElement("p", "Saturday: 12:00 - 23:30"));
    contactMain.appendChild(createNewElement("p", "Sunday: 12:00 - 23:30"));

    contactMain.appendChild(createNewElement("h3", "Contacts"));
    contactMain.appendChild(createNewElement("p", "Phone: +123456789"));
    contactMain.appendChild(createNewElement("p", "Email: hello@cozycafe.com"));
    
    contact.appendChild(contactMain);
    
    return contact;
};

export { createContactContent };