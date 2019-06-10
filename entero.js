import Numero from "./numero";
import Fraccion from "./fraccion";

export default class Entero extends Numero {
  sumar(unSumando) {
    try {
      return unSumando.sumarDesdeEntero(this);
    } catch(e) {
      throw "Tipo de numero inesperado";
    }
  }
  restar(unSustraendo) {
    try {
      return unSustraendo.restarDesdeEntero(this);
    } catch(e) {
      throw "Tipo de numero inesperado";
    }
  }

  sumarDesdeEntero(unAdendo) {
    return new Entero(this._valor + unAdendo._valor);
  }

  restarDesdeEntero(unSustraendo) {
    return new Entero(unSustraendo._valor - this._valor);
  }

  sumarDesdeFraccion(unAdendo) {
    return Fraccion.desdeEntero(this).sumar(unAdendo);
  }

  restarDesdeFraccion(unSustraendo) {
    return unSustraendo.restar(Fraccion.desdeEntero(this));
  }
}
