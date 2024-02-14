// function parallelogramArea(){
    // get base of the parallelogram
    // const parallelogramBaseInput = document.getElementById('parallelogram-base');
    // const baseText = parallelogramBaseInput.value ;
    // const base = parseFloat(baseText);
    // console.log(base)

//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase (){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value ;
//     const base = parseFloat(baseText);
//     return base;
// }

// Calculate button call function
function parallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log(base);

    const height = getInputValueById('parallelogram-height');
    // console.log(height);

    const area = base * height;
    // console.log('parallelogram area is :', area);

    setInnerTextById('parallelogram-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area ;
    // console.log(areaValue)
}