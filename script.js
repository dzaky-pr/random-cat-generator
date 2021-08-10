const link = 'https://api.thecatapi.com/v1/images/search';

const catGenerator = () => {
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const url = data[0].url;
      const img = "<img class='img-fluid p-3' src='" + url + "'/>";
      document.getElementById('result').innerHTML = img;
    });
};
