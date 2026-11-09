function calculateCart(cart) {
  const hasInvalidValues = cart.some(
    (item) => item.price < 0 || item.quantity <= 0
  );

  if (hasInvalidValues) {
    throw new Error(
      "Price cannot be negative and quantity must be greater than zero"
    );
  }
  return cart.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.subTotal += item.price * item.quantity;
      return acc;
    },
    {
      totalQuantity: 0,
      subTotal: 0,
    },
  );
}

let testCart = [
  { name: "Keyboard", price: 0, quantity: 2 },
//   { name: "Mouse", price: -40  , quantity: 1 },
];

console.log(calculateCart(testCart));

module.exports = calculateCart;
