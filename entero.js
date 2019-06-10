import Numero from "./numero";
import Fraccion from "./fraccion";
import { Fraction } from 'fractional';

export default class Entero extends Numero {
  sumar(unSumando) {
    if (unSumando instanceof Entero) {
      return new Entero(this._valor + unSumando._valor);
    } else if (unSumando instanceof Fraccion) {
      const thisFraction = new Fraction(this._valor, 1);
      const fractionToAdd = new Fraction(unSumando.numerador, unSumando.denominador);
      const result = thisFraction.add(fractionToAdd);
      return new Fraccion(result.numerator, result.denominator);
    } else {
      throw "Tipo de numero inesperado";
    }
  }

  restar(unSustraendo) {
    if (unSustraendo instanceof Entero) {
      return new Entero(this._valor - unSustraendo._valor);
    } else if (unSustraendo instanceof Fraccion) {
      const thisFraction = new Fraction(this._valor, 1);
      const fractionToSubtract = new Fraction(unSustraendo.numerador, unSustraendo.denominador);
      const result = thisFraction.subtract(fractionToSubtract);
      return new Fraccion(result.numerator, result.denominator);
    } else {
      throw "Tipo de numero inesperado";
    }
  }
}
