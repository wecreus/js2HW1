let plants = [{
    name: "Aloe Vera",
    desc: "In Mini Dolores Planter",
    price: 80,
}, {
    name: "Air Plant",
    desc: "In Tillinadz Stand Planter",
    price: 75
}, {
    name: "Aloe Plant Trio",
    desc: "In Mini Dolores Planter",
    price: 50
}, {
    name: "Aloe Vera",
    desc: "In Big Dolores Planter",
    price: 78
}, {
    name: "Aloe Vera",
    desc: "In Mini Quirk Planter",
    price: 59
}, {
    name: "Air Plant Trio",
    desc: "In Mini Dolores Planter",
    price: 90
}];

function changeView() {
    let itemsHolder = document.getElementById("Items-Holder");

    //clearing the div
    while (itemsHolder.lastElementChild) {
        itemsHolder.removeChild(itemsHolder.lastElementChild);
    }
    itemsHolder.classList.remove("items-holder-tile");
    itemsHolder.classList.remove("items-holder-list");

    if(document.getElementById("view-type").value === "tiles"){
        appendPlants(itemsHolder, "tile");
    } else {
        appendPlants(itemsHolder, "list");
    }
}

function appendPlants(itemsHolder, className){
    let c = 0;
    itemsHolder.classList.add(`items-holder-${className}`);

    for(let i = 0; i <= 20; i++){

        // block div
        let block = document.createElement("div");
        block.classList.add(className);
        itemsHolder.appendChild(block);

        // image
        c = i;
        while(c > 5){
            c -= 6;
        }

        let helper = document.createElement("span");
        helper.classList.add("helper");

        let img = document.createElement("img");
        img.classList.add(`image-${className}`);
        if(c === 0) {
            img.src = "img/colors/lulred.jpg";
        } else {
            img.src = "img/plant" + c +  ".jpg";
        }


        let imageTileHelper = document.createElement("div");
        imageTileHelper.classList.add(`image-${className}-helper`);
        imageTileHelper.appendChild(helper);
        imageTileHelper.appendChild(img);
        block.appendChild(imageTileHelper);

        // title block
        let titleBlock = document.createElement("div");
        titleBlock.classList.add(`title-${className}`);
        block.appendChild(titleBlock);

        // name
        while(c >= plants.length){
            c -= plants.length;
        }

        let spanName = document.createElement("span");
        spanName.appendChild(document.createTextNode(plants[c].name));
        spanName.classList.add(`name-${className}`);
        titleBlock.appendChild(spanName);

        // color choosing thingy
        let spanColor;
        if(c === 0){
            spanColor = document.createElement("span");
            spanColor.classList.add(`color-${className}`);
            let redColor = document.createElement("div");
            redColor.classList.add("color-red");
            redColor.classList.add("color-circle");
            redColor.classList.add("selected");
            redColor.addEventListener("click", function () {
                changeColor.call(redColor, "red");
            });
            spanColor.appendChild(redColor);
            let greenColor = document.createElement("div");
            greenColor.classList.add("color-green");
            greenColor.classList.add("color-circle");
            greenColor.addEventListener("click", function () {
                changeColor.call(greenColor, "green");
            });
            spanColor.appendChild(greenColor);
            let yellowColor = document.createElement("div");
            yellowColor.classList.add("color-yellow");
            yellowColor.classList.add("color-circle");
            yellowColor.addEventListener("click", function () {
                changeColor.call(yellowColor, "yellow");
            });
            spanColor.appendChild(yellowColor);
            if(className === "tile") {
                titleBlock.appendChild(spanColor);
            }
        }



        // desc
        let spanDesc = document.createElement("span");
        spanDesc.appendChild(document.createTextNode(plants[c].desc));
        spanDesc.classList.add(`desc-${className}`);
        titleBlock.appendChild(spanDesc);

        // price
        let spanPrice = document.createElement("span");
        spanPrice.appendChild(document.createTextNode(plants[c].price));
        spanPrice.classList.add(`price-${className}`);
        titleBlock.appendChild(spanPrice);

        if(className === "list" && c === 0) {
            titleBlock.appendChild(spanColor);
        }
    }

}

function changeColor(color) {
    let parent = this.parentElement;
    let children = parent.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("selected");
    }
    this.classList.add("selected");

    let parentOfParentOfParent = this.parentElement.parentElement.parentElement;
    let imageElement;
    if(parentOfParentOfParent.classList.contains("list")){
        imageElement = parentOfParentOfParent.getElementsByClassName("image-list");
    } else {
        imageElement = parentOfParentOfParent.getElementsByClassName("image-tile");
    }

    imageElement[0].src = `img/colors/lul${color}.jpg`;
}

function addElement() {
    let modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "block";
}

function closeModal() {
    let modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "none";
}


document.getElementById("view-type").addEventListener("change", changeView);

window.onload = function() {
    changeView();
};