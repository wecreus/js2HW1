let a, b;
console.log(performance.now());


function evaluateNumbers() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    // converting to number so then we can check if it is an integer
    a = Number(a);
    b = Number(b);

    if(((a >= 2 && b >= 2) && (a <= 10 && b <= 10)) && (Number.isInteger(a) && Number.isInteger(b))){
        doSomething();
    }
}






function doSomething(){
    // removing outline of table placeholder
    let tableHolder = document.getElementsByClassName("tableHolder");
    tableHolder[0].classList.remove("emptyTableHolder");


    // initializing array
    let c = a * b;
    let mas = new Array(a);
    for (let i = 0; i < mas.length; i++) {
        mas[i] = new Array(b);
    }

    // filling array
    let tempA = 0;
    let tempB = 0;
    let maxA = a - 1;
    let maxB = b - 1;
    let minA = 0;
    let minB = 0;
    let counter = 1;// counter switches vert and horz way of filling the array
    let direction = 1; // when direction is -1 then array will fill backwards (from right to left or from bottom to top)
    let numberItself = 1;
    while(true){
        if(counter%2 === 0){

            //vertical moving
            if(direction > 0) {

                //moving from top to bottom
                for(let i = minA; i <= maxA; i++){
                    mas[i][tempB] = numberItself;
                    numberItself++;
                }
                tempA = maxA;
                maxA--;

                if(numberItself > c){
                    break;
                }
            } else {

                //moving from bottom to top
                for(let i = maxA; i >= minA; i--){
                    mas[i][tempB] = numberItself;
                    numberItself++;
                }
                minB++;
                tempA = minA;

                if(numberItself > c){
                    break;
                }
            }
            direction *= -1;


        } else {

            if(direction > 0){

                //moving from left to right
                for(let i = minB; i <= maxB; i++){
                    mas[tempA][i] = numberItself;
                    numberItself++;
                }
                minA++;
                tempB = maxB;
                maxB--;

                if(numberItself > c){
                    break;
                }
            } else {

                //moving from right to left
                for(let i = maxB; i >= minB; i--){
                    mas[tempA][i] = numberItself;
                    numberItself++;
                }
                tempB = minB;

                if(numberItself > c){
                    break;
                }
            }
        }
        counter++;
    }

    let table = document.querySelector("table");

    // clearing table
    let child = table.lastElementChild;
    while (child) {
        table.removeChild(child);
        child = table.lastElementChild;
    }

    // filling table

    let checkboxHolder = document.getElementById("checkbox");

    for(let i = 0; i < a; i++){
        let row = table.insertRow();
        for(let j = 0; j < b; j++){
            let cell = row.insertCell();


            if(checkboxHolder.checked){
                let percent = 50/c;
                percent = mas[i][j] * percent * 2.5;
                percent = 250 - percent;
                cell.style.backgroundColor = `rgb(${percent}, ${percent}, ${percent})`;
                cell.style.border = "0";
            } else {
                let text = document.createTextNode(mas[i][j]);
                cell.appendChild(text);
            }
        }
    }
    

}

