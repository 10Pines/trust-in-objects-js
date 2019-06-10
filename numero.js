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
  sumarDesdeEntero(unAdendo) {
    responsabilidadDeSubclase();
  }
  restarDesdeEntero(unMinuendo) {
    responsabilidadDeSubclase();
  }
  sumarDesdeFraccion(unAdendo) {
    responsabilidadDeSubclase();
  }
  restarDesdeFraccion(unMinuendo) {
    responsabilidadDeSubclase();
  }
  valueOf() {
    return this._valor;
  }
  equals(otroObjeto) {
    return this.valueOf() == otroObjeto.valueOf();
  }
}