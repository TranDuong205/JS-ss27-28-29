let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mangMoi = mangSoNguyen.filter(function (so) {
    return so % 2 === 0; 
});
console.log("Mảng mới sau khi xóa các phần tử lẻ:");
console.log(mangMoi);
