function rectangleCalculateArea (){
    // get width of the rectangle 
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value ;
    const width = parseFloat(rectangleWidthText);
    // console.log(width)

    // get length of the rectangle 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value ;
    const length = parseFloat(rectangleLengthText);
    // console.log(length)

    // Calculate rectangle area 
    const area = width * length ;
    // console.log(area) ; 

    // Display rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area ;
}