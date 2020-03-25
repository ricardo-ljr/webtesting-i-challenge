// MINECRAFT ITEMS

// DECONSTRUC ENHANCER SO IT"S EASIER
const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!
// RESET REPAIR
describe("enhancer.js", () => {
  describe("repair()", () => {
    it("Resets an item durability to 100", () => {
      const item = {
        name: "Shield",
        durability: 35,
        enhancement: 10
      };
      const fullyRepaired = {
        name: "Shield",
        durability: 100,
        enhancement: 10
      };
      const repairedItem = repair(item);
      expect(repairedItem).toEqual(fullyRepaired);
    });
  });
  describe("fail()", () => {
    it("Decreases durability by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Pickaxe",
        durability: 50,
        enhancement: 14
      };
      const expected = {
        name: "Pickaxe",
        durability: 45,
        enhancement: 14
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
    it("Decreases durability by 10 if enhancement equals to 15 or more, 16", () => {
      const item = {
        name: "Axe",
        durability: 50,
        enhancement: 16
      };
      const expected = {
        name: "Axe",
        durability: 40,
        enhancement: 16
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
    it("Decreases durability by 10 and enhancement by 1 if enhancement > 16", () => {
      const item = {
        name: "Shovel",
        durability: 50,
        enhancement: 19
      };
      const expected = {
        name: "Shovel",
        durability: 40,
        enhancement: 18
      };
      const failedItem = fail(item);
      expect(failedItem).toEqual(expected);
    });
  });
  describe("succeed()", () => {
    it("raises enhancement by 1", () => {
      const item = {
        name: "Sword",
        durability: 60,
        enhancement: 17
      };
      const expected = {
        name: "Sword",
        durability: 60,
        enhancement: 18
      };
      const successItem = succeed(item);
      expect(successItem).toEqual(expected);
    });
    it("Enhancement level does not change if level 20", () => {
      const item = {
        name: "Sword",
        durability: 60,
        enhancement: 20
      };
      const expected = {
        name: "Sword",
        durability: 60,
        enhancement: 20
      };
      const successItem = succeed(item);
      expect(successItem).toEqual(expected);
    });
    describe("get()", () => {
      it("adds enhancement level to item", () => {
        const item = {
          name: "Sword",
          durability: 70,
          enhancement: 7
        };
        const expected = {
          name: "[+7] Sword",
          durability: 70,
          enhancement: 7
        };
        const getItem = get(item);
        expect(getItem).toEqual(expected);
      });
    });
  });
});
