let origArray = [2, 3, 4];

// document.addEventListener("DOMContentLoaded", function (event) {
// document.getElementById("Square").addEventListener("click", function () {
//     let x = origArray.map(Math.pow(textbox1,2));
//     document.getElementById("textbox1").value = x;
//     });
// }

// document.addEventListener("DOMContentLoaded", function (event) {
// document.getElementById("Cube").addEventListener("click", function () {
//     let y = origArray.map(Math.pow(textbox2,3));
//     document.getElementById("textbox2").value = y;
//     });
// }

// document.addEventListener("DOMContentLoaded", function (event) {
// document.getElementById("firstLetter").addEventListener("click", function () {
//     let z = origArray.map(Math.pow(textbox3,4))
//     document.getElementById("textbox3").value = x;
//     });
// });

// function firstBox(Square) {
//     document.getElementById("textbox1").value = x
// }

// function secondBox(Cube) {
//     document.getElementById("textbox2").value = y
// }

// function thirdBox(ToTheFourth) {
//     document.getElementById("textbox3").value = z
// }

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("textbox1").value = origArray[0];
    document.getElementById("textbox2").value = origArray[1];
    document.getElementById("textbox3").value = origArray[2];
    

    document.getElementById("Square").addEventListener("click", function () {
        newArray = origArray.map(cubeBox);
        document.getElementById("textbox1").value = newArray[0];
        document.getElementById("textbox2").value = newArray[1];
        document.getElementById("textbox3").value = newArray[2];
        });

    document.getElementById("ToTheFourth").addEventListener("click", toTheFourth )
});

function square()
{
    newArray = origArray.map(squareBox);
    document.getElementById("textbox1").value = newArray[0];
    document.getElementById("textbox2").value = newArray[1];
    document.getElementById("textbox3").value = newArray[2];
}

function cube()
{
    newArray = origArray.map(cubeBox);
    document.getElementById("textbox1").value = newArray[0];
    document.getElementById("textbox2").value = newArray[1];
    document.getElementById("textbox3").value = newArray[2];
}

function fourth()
{
    newArray = origArray.map(toTheFourth);
    document.getElementById("textbox1").value = newArray[0];
    document.getElementById("textbox2").value = newArray[1];
    document.getElementById("textbox3").value = newArray[2];
}

function squareBox(valueOne){
    return valueOne * valueOne;
}

function cubeBox(valueOne){
    return valueOne * valueOne * valueOne;
}

function toTheFourth(valueOne){
    return  valueOne * valueOne * valueOne * valueOne;
}