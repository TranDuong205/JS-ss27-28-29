let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập số nguyên hợp lệ.");
} else {
    let mangSoNguyen = [];
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        mangSoNguyen.push(i);
    }
    console.log("Mảng chứa các số từ " + start + " đến " + end + ":");
    console.log(mangSoNguyen);
}
