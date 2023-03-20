import convertirRomano from "./romano";

describe("Romano", () => {
  it("devolver I si el numero ingresado es 1", () => {
    expect(convertirRomano(1)).toEqual("I");
  });
});
