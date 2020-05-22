console.info("Load service script")
console.info(axios)
console.log(localStorage.getItem("token"))

axios.get('https://random.dog/woof.json')
.then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data)
    let data = response.data
    let imagen = document.getElementById("mi_imagen")
    imagen.src = data.url
    let alerta = document.getElementById("alerta")
    alerta.style.display = "none"
})





let url = "http://161.35.110.128/api/v1/login/access-token"
const requestBody = {
  username: 'elias',
  password: 'elias2019',

}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

axios({
    method: 'post',
    url: url,
    data: Qs.stringify({
      username: 'elias',
      password: 'elias2019'
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(response=>{
      console.log(response)
  })

