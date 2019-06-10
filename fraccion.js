import { Fraction } from 'fractional';
import Numero from "./numero";
import Entero from "./entero";

export default class Fraccion extends Numero {
  constructor(numerador, denominador) {
    super(new Fraction(numerador, denominador));
  }

  get numerador() {
    return this._valor.numerator;
  }

  get denominador() {
    return this._valor.denominator;
  }

  valueOf() {
    return this.numerador / this.denominador;
  }

  sumar(unSumando) {
    const valorAFraccion = new Fraction(this.numerador, this.denominador);
    if (unSumando instanceof Entero) {
      const fraccionASumar = new Fraction(unSumando._valor, 1);
      const resultado = valorAFraccion.add(fraccionASumar);
      return new Fraccion(resultado.numerator, resultado.denominator);
    } else if (unSumando instanceof Fraccion) {
      const fraccionASumar = new Fraction(unSumando.numerador, unSumando.denominador);
      const resultado = valorAFraccion.add(fraccionASumar);
      return new Fraccion(resultado.numerator, resultado.denominator);
    } else {
      throw "Tipo de numero inesperado";
    }
  }

  restar(unSustraendo) {
    const valorAFraccion = new Fraction(this.numerador, this.denominador);
    if (unSustraendo instanceof Entero) {
      const fraccionARestar = new Fraction(unSustraendo._valor, 1);
      const resultado = valorAFraccion.subtract(fraccionARestar);
      return new Fraccion(resultado.numerator, resultado.denominator);
    } else if (unSustraendo instanceof Fraccion) {
      const fraccionARestar = new Fraction(unSustraendo.numerador, unSustraendo.denominador);
      const resultado = valorAFraccion.subtract(fraccionARestar);
      return new Fraccion(resultado.numerator, resultado.denominator);
    } else {
      throw "Tipo de numero inesperado";
    }
  }
}
