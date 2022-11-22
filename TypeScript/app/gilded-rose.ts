export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].sellIn = this.items[i].sellIn - 1;
            if (this.items[i].quality < 50 && this.items[i].quality > 0) {
                switch (this.items[i].name) {
                    case 'Aged Brie': {
                        this.items[i].quality = this.items[i].quality + 1;
                        break;
                    }

                    case 'Backstage passes to a TAFKAL80ETC concert': {
                        if (this.items[i].sellIn <= 10) {
                            this.items[i].quality = this.items[i].quality + 2
                        }
                        if (this.items[i].sellIn <= 5) {
                            this.items[i].quality = this.items[i].quality + 3
                        };
                        break;
                    }

                    case 'Sulfuras, Hand of Ragnaros': {
                        if (this.items[i].quality !== 80) {
                            this.items[i].quality = this.items[i].quality + 1;
                            break;
                        };
                        break;
                    }
                    default: {
                        break;
                    }
                }
            };

            if (this.items[i].sellIn < 0 && this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i].quality = 0;
            };
        }

        return this.items;
    }
}
