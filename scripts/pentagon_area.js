function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-peri');
    const base = getInputValueById('pentagon-base');

    const area = 0.5 * perimeter * base ;
    calculatePentagonArea('pentagon-area', area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const value = parseFloat(inputValueText);
    return value;
}

function calculatePentagonArea(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area ;
}