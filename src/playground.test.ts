import { hello } from "./playground";

describe("playground", () => {
  test("1", () => {
    expect(hello()).toStrictEqual("world");
  });
});
