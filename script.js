function generateList(arr){
    return `<ul>${arr.map((element)=>{
        return `<li>${Array.isArray(element) ? generateList(element) : element}</li>`
    }).join('')}</ul>`
}
   
  const array = [1, 2, [1.1, 1.2, [5.1, 5.2],
    [6.1, 6.2], 1.3
  ], 3];
   
  const s = generateList(array);
  document.body.innerHTML = s;


// function generateList(array) {
//     let s = "<ul>";
//     const count = array.length;
//     for (let i = 0; i < count; ++i) {
//         let row = array[i];
//         if (Array.isArray(row)) {
//             s += "<li><ul>";
//             for (let j = 0; j < row.length; ++j) {
//                 s += `<li>${row[j]}</li>`;
//                 let row2 = row[j];
//                 if (Array.isArray(row2)) {
//                     s += "<li><ul>";
//                     for (let z = 0; z < row2.length; ++z) {
//                         s += `<li>${row2[z]}</li>`;
//                     }s += "</ul></li>";
//                 }
//             }
//             s += "</ul></li>";
//         }
//         else
//             s += `<li>${row}</li>`;
//     }
//     s += "</ul>";
//     document.body.innerHTML = s;
// }