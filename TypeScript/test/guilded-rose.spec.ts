import { assert, expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("should handle edge cases logic errors", function () {
    const gildedRose = new GildedRose(
        [
            new Item("Quality", 0, 0),
        ], 
    );
    const items: Item[] = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0, 'Expect quantity of first item not be changed');
    for (let i = 0; i < items.length; i++) {
      assert.isAtLeast(items[i].quality, 0, `Item name: ${items[i].name}`);
    }

  });
});
