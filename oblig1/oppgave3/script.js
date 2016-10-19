window.onload = oppstart;

function oppstart() {
  document.getElementById("btnPluss").onclick = pluss;
  document.getElementById("btnMinus").onclick = minus;
  document.getElementById("btnGange").onclick = gange;
  document.getElementById("btnDele").onclick = dele;
}
function pluss() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  var sum = input1 + input2;

  document.getElementById("utskrift").innerHTML = "Summen av tallene du skrev inn er: " + sum;
}
function minus() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  var sum = input1 - input2;

  document.getElementById("utskrift").innerHTML = "Differansen mellom tallene du skrev inn er: " + sum;
}
function gange() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  var sum = input1 * input2;

  document.getElementById("utskrift").innerHTML = "Produktet av tallene du skrev inn er: " + sum;
}
function dele() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  var sum = input1 / input2;

  document.getElementById("utskrift").innerHTML = "Kvotienten til tallene du skrev inn er: " + sum;
}
