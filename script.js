let plants = [{
    name: "Aloe Vera",
    desc: "In Mini Dolores Planter",
    price: 80
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
let itemsHolder = document.getElementById("Items-Holder");

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

    for(let i = 1; i <= 20; i++){

        // block div
        let block = document.createElement("div");
        block.classList.add(className);
        itemsHolder.appendChild(block);





        // image
        c = i;
        while(c > 9){
            c -= 9;
        }

        let helper = document.createElement("span");
        helper.classList.add("helper");

        let img = document.createElement("img");
        img.classList.add(`image-${className}`);
        img.src = "img/plant" + c +  ".jpg";


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
        c = i - 1;
        while(c >= plants.length){
            c -= plants.length;
        }

        let spanName = document.createElement("span");
        spanName.appendChild(document.createTextNode(plants[c].name));
        spanName.classList.add(`name-${className}`);
        titleBlock.appendChild(spanName);

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
    }

}


document.getElementById("view-type").addEventListener("change", changeView);

window.onload = function() {
    changeView();
};