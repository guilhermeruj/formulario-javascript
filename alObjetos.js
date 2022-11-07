function retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

var r1 = new retangulo(3, 4);
var r2 = new retangulo(7, 2);

function retanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}

retanguloV2.prototype.area = function () {
  return this.altura * this.largura;
};

var r3 = new retanguloV2(3, 4);
var r4 = new retanguloV2(7, 2);

class retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.larura = largura;
  }
  area() {
    return this.altura * this.larura;
  }
}

class quadrado extends retangulo {
  constructor(dimensao) {
    super(dimensao, dimensao);
  }
  imprimeNome() {
    console.log("quadrado");
  }
}

var r1 = new retangulo(3, 4);
var r2 = new retangulo(3, 8);

var r3 = new quadrado(3);
