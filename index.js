function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data fetched');
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
