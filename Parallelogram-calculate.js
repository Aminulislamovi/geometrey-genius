// function calculateParallelogramArea (){
    //   const parallelogram =document.getElementById('parallelogram-base')
    //   const base =parallelogram.value;
    //  const baseText =parseFloat(base)
//     //   console.log(baseText)

//     const parallelogramHeight = document.getElementById ('parallelogram-height')
//     const height =parallelogramHeight.value;
//     const heightText =parseFloat(height)
//     // console.log(heightText)
//      const  area = baseText*heightText;

// //  display area 
//     areaText =document.getElementById('area')
//     areaText.innerText = area;
 
//  const base = getParallelogramBase ();
//  console.log(base)

// }

// function getParallelogramBase (){
//         const parallelogram =document.getElementById('parallelogram-base')
//       const base =parallelogram.value;
//      const baseText =parseFloat(base)
//     return baseText;
// }

function calculateParallelogramArea (){
    const base = getInputValueById('parallelogram-base')
    // console.log(base)
  const height = getInputValueById('parallelogram-height')
//   console.log(height)


  const area = base * height 
  console.log(area)

  setInnerTextById ( 'parallelogram-area', area);


}

function getInputValueById (inputFieldId){
    const inputField =document.getElementById(inputFieldId)
   
    const inputValueText =inputField.value;
    const inputValue =parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
 
}

function  setInnerTextById (elementId, area){
    const element =document.getElementById (elementId);
    element.innerText = area;
}