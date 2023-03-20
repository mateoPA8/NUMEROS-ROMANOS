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
