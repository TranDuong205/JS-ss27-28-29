let mangSoNguyen = [5, 3, 8, 1, 9, 4, 7];

let max = mangSoNguyen[0];
let min = mangSoNguyen[0];

for (let i = 1; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > max) {
        max = mangSoNguyen[i];
    }
    if (mangSoNguyen[i] < min) {
        min = mangSoNguyen[i];
    }
}

console.log("Phần tử lớn nhất trong mảng là: " + max);
console.log("Phần tử nhỏ nhất trong mảng là: " + min);
