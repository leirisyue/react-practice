
/*
NOTE:
function như là 1 object nên có thể truyền vào function khác như 1 tham số
==> callback function
callback function là 1 function được truyền vào 1 function khác như 1 tham số
callback rất hiệu quả khi muốn trì hoãn việc thực thi cho đến khi 1 tác vụ bất đồng bộ hoàn thành
*/



/*
Browser API/Web API
- là các API do trình duyệt cung cấp để hỗ trợ các chức năng như DOM manipulation, AJAX requests, timers, v.v.
- không phải là một phần của ngôn ngữ JavaScript, mà là các API bổ sung được cung cấp bởi môi trường trình duyệt
- ví dụ: DOM API để thao tác với cấu trúc HTML, Fetch API để thực hiện các yêu cầu mạng, v.v.
- các API này được sử dụng thông qua JavaScript để tương tác với trình duyệt và thực hiện các tác vụ khác nhau
- ví dụ về Browser API: setTimeout, fetch, document (DOM), localStorage, v.v.
- Click, scroll, event listeners, timers, HTTP requests, v.v.
*/



function httpGetAsync(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr);
    }
  };
  xhr.open("GET", url, true); // true for asynchronous
  xhr.send(null);
}
/*
httpGetAsync('https://picsum.photos/200/300', (response) => {
  // thực thi khi dữ liệu được trả về từ API
  console.log("Response from callback:", response);
  document.getElementById('img_1')?.setAttribute('src', response.responseURL);

  // callback hell nếu có nhiều callback lồng nhau
  // giải pháp: promises, async/await
  //...
});
 */

/*
promises (hứa 2: làm dc hoặc ko làm dc :))))
- là một đối tượng trong JavaScript đại diện cho một giá trị có thể chưa có sẵn nhưng sẽ có trong tương lai
- giúp quản lý các tác vụ bất đồng bộ (asynchronous operations) một cách dễ dàng hơn so với việc sử dụng callback truyền thống
- có 3 trạng thái chính:
  + pending (đang chờ): trạng thái ban đầu, chưa hoàn thành hoặc bị từ chối
  + fulfilled (hoàn thành): tác vụ đã hoàn thành thành công và trả về một giá trị
  + rejected (bị từ chối): tác vụ đã thất bại và trả về một lý do lỗi
- có 2 phương thức chính để xử lý kết quả của promise:
  + then(): được gọi khi promise được giải quyết thành công (fulfilled)
  + catch(): được gọi khi promise bị từ chối (rejected)
- giúp tránh "callback hell" (lồng nhiều callback) và làm cho mã nguồn dễ đọc hơn
- ví dụ về sử dụng promises để xử lý tác vụ bất đồng bộ như yêu cầu mạng (network requests)
*/

const currentPromiseExam = new Promise((resolve, reject) => {
  const success = true; // giả lập điều kiện thành công hoặc thất bại
  setTimeout(() => {
    if (success) {
      // call api, get data, ...
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected with an error.");
    }
  }, 2000);
});


const callback = currentPromiseExam
  .then((message) => {
    console.log("Then:", message);
  })
  .catch((error) => {
    console.error("Catch:", error);
  });

  

function httpGetAsyncPromise(url, resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resolve(xhr);
    } else if (xhr.readyState === 4) {
      reject(new Error("Request failed with status " + xhr.status));
    }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
}

const currentPromise1 = new Promise((resolve, reject) => {
  httpGetAsyncPromise('https://picsum.photos/200/300', resolve, reject);
});

const currentPromise2 = new Promise((resolve, reject) => {
  httpGetAsyncPromise('https://picsum.photos/200/300', resolve, reject);
});

const currentPromise3 = new Promise((resolve, reject) => {
  httpGetAsyncPromise('https://picsum.photos/200/300', resolve, reject);
});

const promise = currentPromise1
  .then((response) => {
    console.log("Response from Promise:", response);
    document.getElementById('img_1')?.setAttribute('src', response.responseURL);

    return currentPromise2; // trả về Promise thứ hai để chuỗi tiếp tục
  })
  .then((response) => {
    // tương tự như chuỗi khối, return Promise thứ hai và xử lý kết quả của nó
    console.log("Response from Promise 2:", response);
    document.getElementById('img_2')?.setAttribute('src', response.responseURL);
    return currentPromise3; // trả về Promise thứ ba để chuỗi tiếp tục
  })
  .then((response) => {
    console.log("Response from Promise 3:", response);
    document.getElementById('img_3')?.setAttribute('src', response.responseURL);
  })
  .catch((error) => {
    console.error("Error in Promise:", error);
  });


// code promise viết cùng cấp không phụ thuộc lẫn nhau

/*
Async/Await
- là một cú pháp trong JavaScript giúp làm việc với các tác vụ bất đồng bộ (asynchronous operations) trở nên dễ dàng và trực quan hơn
- async được sử dụng để khai báo một hàm bất đồng bộ, hàm này sẽ luôn trả về một Promise
- await được sử dụng bên trong hàm async để tạm dừng việc thực thi hàm cho đến khi Promise được giải quyết (fulfilled) hoặc bị từ chối (rejected)
- giúp viết mã nguồn bất đồng bộ trông giống như mã đồng bộ, làm cho nó dễ đọc và bảo trì hơn
- ví dụ về sử dụng async/await để thực hiện các yêu cầu mạng (network requests) một cách tuần tự hoặc song song
*/

const excuteAsyncAwait = async () => {
  try {
    const response1 = await currentPromise1;
    console.log("Async/Await Response 1:", response1);
    document.getElementById('img_1a')?.setAttribute('src', response1.responseURL);
    const response2 = await currentPromise2;
    console.log("Async/Await Response 2:", response2);
    document.getElementById('img_2a')?.setAttribute('src', response2.responseURL);
    const response3 = await currentPromise3;
    console.log("Async/Await Response 3:", response3);
    document.getElementById('img_3a')?.setAttribute('src', response3.responseURL);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
};

excuteAsyncAwait();