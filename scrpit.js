function tabuada() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("selttab");

  if (num.value.length == 0) {
    window.alert("Por favor digite um numero");
  } else {
    let n = Number(num.value);
    let c = 0;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = ` ${n}  x  ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
