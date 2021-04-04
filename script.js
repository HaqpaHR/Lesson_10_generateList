function generateList(arr){
  let ul = document.createElement("ul");
  
  arr.forEach((element)=>{
    if (Array.isArray(element)) {
        ul.appendChild(generateList(element));
        } else {
        const li = document.createElement("li");
        li.innerText = element;
        ul.appendChild(li);
      }
  })
  return ul
}
   
  const array = [1, 2, [1.1, 1.2, [5.1, 5.2],[6.1, 6.2], 1.3], 3];
   
  const s = generateList(array);
  document.body.appendChild(s)


    