// task-1 Promise.race(array)
// Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
// У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
// Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки
//  'Promise error'.
// За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи
// на екран: `🟢 ${Framework_name} won with ${delay} ms` або результат помилки:
// `🔴 ${error}! ${name} rejected in ${delay} ms`
// Зробити так, щоб проміси і резолвувалися, і редектувалися випадково.
//
//
// const frameworks = ["React", "Vue", "Angular"];
// 
// const getRandomDelay = () => Math.floor(Math.random() * 2000) + 1;

// function createPromise(frameName) {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const isSuccess = Math.random() < 0.5;

//       if (isSuccess) {
//         resolve({ delay, frameName });
//       }

//       reject({ delay, frameName, errorMsg: "Promise error" });
//     }, delay);
//   });
// }

// const promices = frameworks.map((el) => createPromise(el));
// console.log(promices);

// const onSuccess = ({ delay, frameName }) => {
//   console.log(`🟢 ${frameName} won with ${delay} ms`);
// };

// const onError = ({ delay, frameName, errorMsg }) => {
//   console.log(`🔴 ${errorMsg}! ${frameName} rejected in ${delay} ms`);
// };

// Promise.race(promices).then(onSuccess).catch(onError);


// Promise.race(promices)
//   .then(({ delay, frameName }) => {
//     console.log(`🟢 ${frameName} won with ${delay} ms`);
//   })
//   .catch(({ delay, frameName, errorMsg }) => {
//     console.log(`🔴 ${errorMsg}! ${frameName} rejected in ${delay} ms`);
//   });

// task-2 Promise.all(array)
// За допомогою Promise.all отримайте масив результатів. Виведіть на екран інформацію, з якою затримкою виконався
// проміс для кожного фреймфорка: `🟢 ${Framework_name} fulfilled in ${delay} ms`
// Або з якою затримкою зареджектився один із них: `🔴 ${error}! ${Framework_name} rejected in ${delay} ms`

// const frameworks = ["React", "Vue", "Angular"];

// const getRandomDelay = () => Math.floor(Math.random() * 2000) + 1;

// function createPromise(frameName) {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const isSuccess = Math.random() < 0.5;

//       if (isSuccess) {
//         resolve({ delay, frameName });
//       }

//       reject({ delay, frameName, errorMsg: "Promise error" });
//     }, delay);
//   });
// }

// const promices = frameworks.map((el) => createPromise(el));
// console.log(promices);

// const onSuccess = ({ delay, frameName }) => {
//   console.log(`🟢 ${frameName} fulfilled in ${delay} ms`);
// };

// const onError = ({ delay, frameName, errorMsg }) => {
//   console.log(`🔴 ${errorMsg}! ${frameName} rejected in ${delay} ms`);
// };

// Promise.all(promices).then(results => {results.forEach(onSuccess)}).catch(onError);


