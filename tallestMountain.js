var mountains = [
    { name: "Kilamanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0]; // Maybe remove if not needed.
    mountains.forEach(function (m) {
        if (m.height > tallestMountain.height) {
            tallestMountain = m;
        }
    });
    return tallestMountain.name;
}
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
