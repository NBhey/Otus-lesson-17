export default function drawList(el,input) {
   el.innerHTML = input.map((el) => `<p>${el}</p>`).join('');
   if (input.length > 4){
      input.splice(0,1);
   }
}
    