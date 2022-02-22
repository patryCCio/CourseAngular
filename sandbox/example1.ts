console.log("Hello world!");

let x: number = 2;
let y: string;
let z: boolean;

y = "napis";

z = true;
z = false;

console.log(x+ " " + y);
console.log(z);

let xd: number[] = [3, 2, 1];
let ys: Array<number>;

xd[0] = 4;

let zs = [1, 5, 7, ...xd];

console.log(zs)


console.log(xd.length);
console.log(`Liczba x = ${x}`);