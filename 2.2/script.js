


const jsonData = '{"key": "value"}'; // JSON строка

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = true; // Здесь установите true, чтобы вызвать ошибку
    if (shouldReject) {
      reject("Произошла ошибка!"); // Отклоняем промис с ошибкой
    } else {
      resolve(jsonData); // Возвращаем JSON строку при успешной загрузке
    }
  }, 2000);
});

promise
  .catch((error) => {
    console.error("Произошла ошибка:", error); // Обрабатываем ошибку
  });