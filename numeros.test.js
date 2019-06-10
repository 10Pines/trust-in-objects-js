import Numero from "./numero";
import Fraccion from "./fraccion";
import Entero from "./entero";

const unCuarto = new Fraccion(1, 4);
const unTercio = new Fraccion(1, 3);
const unMedio = new Fraccion(1, 2);
const dosTercios = new Fraccion(2, 3);
const tresCuartos = new Fraccion(3, 4);
const tresTercios = new Fraccion(3, 3);
const uno = new Entero(1);
const cuatroTercios = new Fraccion(4, 3);
const dos = new Entero(2);
const tres = new Entero(3);
const cinco = new Entero(5);
const ocho = new Entero(8);

describe("Numero, al comportarse como abstracto", () => {
  it("no deja sumar", () => {
    const debeFallar = () => new Numero().sumar();
    expect(debeFallar).toThrow();
  });
  it("no deja restar", () => {
    const debeFallar = () => new Numero().restar();
    expect(debeFallar).toThrow();
  });
});

describe("un Entero", () => {
  describe("al sumarse a otro Entero", () => {
    it("devuelve la suma correcta", () => {
      expect(cinco.sumar(tres)).toEqual(ocho);
    });
  });
  describe("al restarse a otro Entero", () => {
    it("devuelve la resta correcta", () => {
      expect(cinco.restar(tres)).toEqual(dos);
    });
  });
  describe("al sumarse a una Fraccion", () => {
    it("devuelve la suma correcta", () => {
      expect(uno.sumar(unTercio)).toEqual(cuatroTercios);
    });
  });
  describe("al restarse a una Fraccion", () => {
    it("devuelve la resta correcta", () => {
      expect(cuatroTercios.restar(unTercio).equals(uno)).toBe(true);
    });
  });
});

describe("una Fraccion", () => {
  describe("al sumarse a otra Fraccion con el mismo denominador", () => {
    it("devuelve la suma correcta", () => {
      expect(unTercio.sumar(dosTercios)).toEqual(tresTercios);
    });
  });
  describe("al restarse a otra Fraccion con el mismo denominador", () => {
    it("devuelve la resta correcta", () => {
      expect(tresTercios.restar(dosTercios)).toEqual(unTercio);
    });
  });
  describe("al sumarse a otra Fraccion con distinto denominador", () => {
    it("devuelve la suma correcta", () => {
      expect(unCuarto.sumar(unMedio)).toEqual(tresCuartos);
    });
  });
  describe("al restarse a otra Fraccion con distinto denominador", () => {
    it("devuelve la resta correcta", () => {
      expect(tresCuartos.restar(unMedio)).toEqual(unCuarto);
    });
  });
  describe("al sumarse a un Entero", () => {
    it("devuelve la suma correcta", () => {
      expect(unTercio.sumar(uno)).toEqual(cuatroTercios);
    });
  });
  describe("al restarse a un Entero", () => {
    it("devuelve la resta correcta", () => {
      expect(cuatroTercios.restar(uno)).toEqual(unTercio);
    });
  });
});
