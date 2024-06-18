// function printAllDivs(){
//     console.log(document.querySelectorAll("div"))
//     }
//     window.addEventListener("load", printAllDivs);
//     document.addEventListener("mouseover", function (evento) {
//       evento.target.classList.add("blackBackground")
//     })
//     document.addEventListener("mouseout", function (evento) {
//       evento.target.classList.remove("blackBackground")
//     })


// window.addEventListener("selectionchange", () => {
//   const selectedText = window.getSelection().toString();
//   if (selectedText) {
//     console.log("Texto seleccionado:", selectedText);
//   }
// });

document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    console.log("Texto seleccionado:", selectedText);
  }
});
  