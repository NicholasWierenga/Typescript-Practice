var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (item) {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
