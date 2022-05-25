interface Inventory{
    product: Product
    quantity: number
}

let inventory: Inventory[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

function calcInventoryValue(inventory: Inventory[]): number{
    let totalValue: number = 0;

    inventory.forEach(item => {
        totalValue += item.product.price * item.quantity;
    });

    return totalValue;
}

let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);