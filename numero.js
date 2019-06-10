const responsabilidadDeSubclase = () => {
  throw "Debe ser implementado por subclase";
};

export default class Numero {
  constructor(valor) {
    this._valor = valor;
  }
  sumar(unSumando) {
    responsabilidadDeSubclase();
  }
  restar(unSustraendo) {
    responsabilidadDeSubclase();
  }
  valueOf() {
    return this._valor;
  }
}