function CalculateRectangleArea (){
 const rectangleWidth = document.getElementById('rectangle-width')
  const rectangleText = rectangleWidth.value;
   const width =parseFloat(rectangleText)
    // console.log( width)
const rectangleLength = document.getElementById('rectangle-Length')

const lengthText = rectangleLength.value;
const length =parseFloat(lengthText)

const area = width*length;
console.log(area)

  const areaSpan  = document.getElementById('area-span') 
  areaSpan.innerText = area;

}
