const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJSON = (url , callback) =>{
  //crear instancia del objeto XMLHttpRequest
  const request = new XMLHttpRequest();
  request.onload = () =>{
     //4 : La peticion se termino y la respuesta esta lista
    //200 : status esta ok
    if(request.readyState === 4 && request.status === 200){
      callback(request.responseText);
    }
  }
  //open()
  request.open('GET',url);
  //send()
  request.send();
}

//response -> respuest
btn.addEventListener('click', () =>{
  getJSON(url, response =>{
    let doggie = JSON.parse(response).message;
    console.log(doggie);
    img.src = doggie;
  })

});