import Fraction from '@mathematics/fraction';
import Numero from "./numero";

class Fraccion extends Numero {
  constructor(numerador, denominador) {
    super(new Fraction(numerador, denominador));
  }

  get numerador() {
    return this._valor._numerator;
  }

  get denominador() {
    return this._valor._denominator;
  }

  valueOf() {
    return this.numerador / this.denominador;
  }

  sumar(unSumando) {
    try {
      return unSumando.sumarDesdeFraccion(this);
    } catch(e) {
      throw `Tipo de numero inesperado ${e}`;
    }
  }

  restar(unSustraendo) {
    try {
      return unSustraendo.restarDesdeFraccion(this);
    } catch(e) {
      throw `Tipo de numero inesperado ${e}`;
    }
  }

  sumarDesdeEntero(unAdendo) {
    const enteroEnFraccion = Fraccion.desdeEntero(unAdendo);
    return this.sumarDesdeFraccion(enteroEnFraccion);
  }

  restarDesdeEntero(unSustraendo) {
    const enteroEnFraccion = Fraccion.desdeEntero(unAdendo);
    return this.restarDesdeFraccion(enteroEnFraccion);
  }

  sumarDesdeFraccion(unAdendo) {
    const fraccionASumar = unAdendo.toFractionLib();
    const resultado = this.toFractionLib().add(fraccionASumar);
    return Fraccion.desdeFractionLib(resultado);
  }

  restarDesdeFraccion(unSustraendo) {
    const fraccionARestar = unSustraendo.toFractionLib();
    const resultado = fraccionARestar.subtract(this.toFractionLib());
    return Fraccion.desdeFractionLib(resultado);
  }

  toFractionLib() {
    return new Fraction(this.numerador, this.denominador);
  }
}

Fraccion.desdeFractionLib = aFraction => new Fraccion(aFraction._numerator, aFraction._denominator);
Fraccion.desdeEntero = unEntero => new Fraccion(unEntero._valor, 1);

export default Fraccion;
