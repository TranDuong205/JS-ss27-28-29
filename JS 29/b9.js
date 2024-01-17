//Callback function là một hàm JavaScript được truyền vào một hàm khác như một tham số và được thực thi sau khi hàm chứa nó hoàn thành công việc của mình. Trong ngữ cảnh của JavaScript, callback thường được sử dụng để xử lý bất đồng bộ (asynchronous) hoặc để thực hiện một hành động sau khi một sự kiện đã xảy ra.

//Chức Năng của Callback Function:
//Xử Lý Bất Đồng Bộ (Asynchronous):

//Callbacks thường được sử dụng để xử lý các tác vụ bất đồng bộ như đọc dữ liệu từ tệp, thực hiện các yêu cầu HTTP, hoặc thực hiện các tác vụ khác không đồng bộ.
//Sự Kiện và Gọi Lại (Event Handling):

//Callbacks thường được sử dụng để xử lý sự kiện, như khi người dùng nhấn nút, trình duyệt tải xong trang, hoặc thời gian đã trôi qua.

//Callbacks cung cấp một cách để chia sẻ mã giữa các phần khác nhau của ứng dụng mà không cần triển khai lại cùng một logic nhiều lần.
//Cách Callback Hoạt Động trong JavaScript:
//Truyền Hàm Như Một Tham Số:

//Một hàm có thể được truyền vào một hàm khác như một tham số.
function executeCallback(callback) {
    callback();
}

function myCallback() {
    console.log("Đây là một callback!");
}

executeCallback(myCallback);
//Sử Dụng Hàm Như Một Biến:

//Hàm có thể được gán vào biến và sau đó được truyền như một tham số.
var myCallback = function() {
    console.log("Đây là một callback!");
};

executeCallback(myCallback);
//Sử Dụng Callback Trong Các Hàm Bất Đồng Bộ:

//Callbacks thường được sử dụng trong các hàm bất đồng bộ như setTimeout, setInterval, hoặc các yêu cầu HTTP.
setTimeout(function() {
    console.log("Đây là một callback sau 1 giây!");
}, 1000);

