interface Mountain{
    name: string
    height: number
}

let mountains: Mountain[] = [
    {name: "Kilamanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];


function findNameOfTallestMountain(mountains: Mountain[]): string{
    let tallestMountain = mountains[0]; // Maybe remove if not needed.

    mountains.forEach(m => {
        if (m.height > tallestMountain.height) {
            tallestMountain = m;
        }
    });
    
    return tallestMountain.name;
}

let tallest:Mountain["name"] = findNameOfTallestMountain(mountains);
console.log(tallest);