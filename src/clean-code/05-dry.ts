type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`Error ${key} is empty!`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`Error ${key} is empty!`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // No DRY
    if (!this.isProductReady) return;

    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue pants", 10, "L");
  console.log(bluePants.toString());

  const redPants = new Product("Red pants", 20, 'S');
  console.log(redPants.toString());
})();
