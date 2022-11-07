/* var fslist = document.querySelectorAll(".multip");

for (var i = 0; i < fslist.length; i++) {
  initMultiplefs(fslist[i]);
}

function initMultiplefs(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";

  fs.appendChild(addButton);

  var firstInput = fs.querySelector("input");
  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firstInput.name;
    newInput.type = firstInput.type;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addButton);
  });
}

// botão do site da tendenci
var caixa = document.getElementById("caixa");
var cx, cy;
function setPos(x, y) {
  //caixa.style = "top:" + y + "px; left:" + x + "px";
  caixa.style.left = x + "px";
  caixa.style.top = y + "px";
}

caixa.addEventListener("mousedown", iniciaArraste);
document.addEventListener("mouseup", terminaArraste);

function iniciaArraste(evt) {
  cx = evt.clientX - pxParaNum(caixa.style.left);
  cy = evt.clientY - pxParaNum(caixa.style.left);
  caixa.classList.add("arrastando"); //chama classe sem perder
  document.addEventListener("mousemove", arrasta);
}

function terminaArraste(evt) {
  caixa.classList.remove("arrastando");
  document.removeEventListener("mousemove", arrasta);
}

function arrasta(evt) {
  var x = evt.clientX;
  var y = evt.clientY;
  setPos(x - cx, y - cy);
}

function pxParaNum(s) {
  return +s.replace("px", "");
}

*/
let formularioMostrar = {
  selecao2: [".aa"],
};

/*function mostrar(els) {
  els.forEach((sel) => {
    let el = "$('" + sel + "').show()";
    eval(el);
    alert("passou aqui 4");
  });
}*/
function esconder() {
  $(".aa").hide();
}

function mostrar(el) {
  console.log(el);
  for (prop in el) {
    let els = "$('" + prop + "').show()";
    eval(els);
  }
}

function selecionar() {
  switch (true) {
    case $(".selecao").val() == 1:
      mostrar(formularioMostrar.selecao2);
      break;
  }
}
