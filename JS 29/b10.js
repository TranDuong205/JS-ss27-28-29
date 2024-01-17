function mangConCoTongLonNhat(arr) {
    if (arr.length === 0) {
        return "Mảng rỗng, không có mảng con.";
    }

    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let currentStart = 0;
    let end = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            currentStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = currentStart;
            end = i;
        }
    }

    return arr.slice(start, end + 1);
}
var mangSoNguyen = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var ketQua = mangConCoTongLonNhat(mangSoNguyen);
console.log('Mảng con có tổng các phần tử lớn nhất:', ketQua);
