function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major');
    const minorRadius = getInputValueById('ellipse-minor');
    const area = 3.14 * majorRadius * minorRadius ;
    setInnerTextById('ellipse-area', area);
}