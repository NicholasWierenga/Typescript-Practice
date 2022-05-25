var products = [
    { name: "Baseball", price: 4.99 },
    { name: "Jetski", price: 8000 },
    { name: "Book", price: 29.95 },
    { name: "Shirt", price: 11.99 },
    { name: "Fan", price: 25.00 },
];
function calcAverageProductPrice(productArray) {
    var averagePrice = 0;
    productArray.forEach(function (product) {
        averagePrice += product.price;
    });
    averagePrice = averagePrice / productArray.length; // Divides by the amount of prices to get average.
    averagePrice = Math.round(averagePrice * 100) / 100; // To round to 2 decimals only.
    return averagePrice;
}
var average = calcAverageProductPrice(products);
console.log(average);
