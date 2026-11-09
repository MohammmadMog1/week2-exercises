const calculateCart = require("../Ex2-calculateCart");

describe("calculateCart", () => {
  test("should calculate total quantity and subtotal", () => {
    const cart = [
      { name: "Keyboard", price: 40, quantity: 2 },
      { name: "Mouse", price: 20, quantity: 1 },
    ];
    const result = calculateCart(cart);
    expect(result).toEqual({
      totalQuantity: 3,
      subTotal: 100,
    });
  });
  
  test("should accept zero price", () => {
    const cart = [{ name: "Free Item", price: 0, quantity: 2 }];

    expect(calculateCart(cart)).toEqual({
      totalQuantity: 2,
      subTotal: 0,
    });
  });


  test("should throw when price is negative", () => {
    const cart = [
      { name: "Free Item", price: 10, quantity: 2 },
      { name: "Negative price", price: -60, quantity: 2 },
    ];
    expect(() => calculateCart(cart)).toThrow(
      "Price cannot be negative and quantity must be greater than zero",
    );
  });


  test("should throw when quantity is negative", () => {
    const cart = [
      { name: "Free Item", price: 10, quantity: 2 },
      { name: "Negative quantity", price: 70, quantity: -2 },
    ];
    expect(() => calculateCart(cart)).toThrow(
      "Price cannot be negative and quantity must be greater than zero",
    );
  });

  
  test("should throw when quantity is zero", () => {
    const cart = [
      { name: "Free Item", price: 10, quantity: 2 },
      { name: "Negative quantity", price: 70, quantity: 0 },
    ];
    expect(() => calculateCart(cart)).toThrow(
      "Price cannot be negative and quantity must be greater than zero",
    );
  });
});
