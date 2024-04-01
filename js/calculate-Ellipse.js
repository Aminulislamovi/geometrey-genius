function calculateEllipseArea (){
 const majorRadius = getInputValueById ('major-radius')
   const minorRadius = getInputValueById ('minor-radius')
   const area = 3.14 * majorRadius * minorRadius ;
    setInnerTextById ('ellipse-area',area)
}

