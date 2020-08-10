
const init = () => {
    main = document.createElement("main");
    button = createButton();
    link = createLink();
    image = createImage();
    main.append(image);
    main.append(link);
    document.body.append(button);
    document.body.append(main);

    registerEvents();
}

const createButton = () => {
    const btn = document.createElement("button");
    btn.append("Click Me");
    return btn;
}




const createImage = () => {
    const img = document.createElement("img");
    img.src = "./script/Myimg.jpg";
    img.classList = ["image"];
    return img;
}

const createLink = () => {
    const link = document.createElement("a");
    link.classList = ["link"];
    link.href = "https://www.google.com/";
    link.append("Link to Google");
    return link;
}

function registerEvents() {
    button.addEventListener('click', function() {
        document.body.removeChild(main);
    })
}

document.addEventListener('DOMContentLoaded', init);













