import convertirRomano from "./romano";

describe("Romano", () => {
  it("devolver I si el numero ingresado es 1", () => {
    expect(convertirRomano(1)).toEqual("I");
  });
});


describe("Romano", () => {
    it("devolver II si el numero ingresado es 2", () => {
      expect(convertirRomano(2)).toEqual("II");
    });
  });

  describe("Romano", () => {
    it("devolver III si el numero ingresado es 3", () => {
      expect(convertirRomano(3)).toEqual("III");
    });
  });
  describe("Romano", () => {
    it("devolver IV si el numero ingresado es 4", () => {
      expect(convertirRomano(4)).toEqual("IV");
    });
  });
  describe("Romano", () => {
    it("devolver V si el numero ingresado es 5", () => {
      expect(convertirRomano(5)).toEqual("V");
    });
  });
  
  describe("Romano", () => {
    it("devolver X si el numero ingresado es 10", () => {
      expect(convertirRomano(10)).toEqual("X");
    });
  });

  describe("Romano", () => {
    it("devolver XL si el numero ingresado es 40", () => {
      expect(convertirRomano(40)).toEqual("XL");
    });
  });
  describe("Romano", () => {
    it("devolver XC si el numero ingresado es 90", () => {
      expect(convertirRomano(90)).toEqual("XC");
    });
  });
  describe("Romano", () => {
    it("devolver C si el numero ingresado es 100", () => {
      expect(convertirRomano(100)).toEqual("C");
    });
  });
