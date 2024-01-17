const arr = [1,3,5,9];
let max = Math.max(...arr);
for ( let i = 1; i <= max; i++) {
    if (arr.indexOf(i) === -1) {
        console.log("so duong can tim la:", i);
        break;
    }
}