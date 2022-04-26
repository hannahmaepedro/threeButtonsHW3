let origArray = [2, 3, 4];

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
        
    document.getElementById("Cube").addEventListener("click", cube )
    document.getElementById("ToTheFourth").addEventListener("click", fourth )
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
