console.info("Load service script")
console.info(axios)
console.log(localStorage.getItem("token"))

let pacienteID = "10305090"

axios.get('http://161.35.110.128/api/v1/paciente/'+pacienteID)
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
      password: 'elias123'
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(response=>{
      console.log(response)
      localStorage.setItem("token", response.data.access_token)
    //   url = "http://161.35.110.128/api/v1/paciente/"

    //   console.log(localStorage.getItem("token"))
      
    //   axios({
    //       method: 'post',
    //       url: url,
    //       data: {
    //           "custom_id": "desdeAPI",
    //           "name": "Angelower Santana",
    //           "age": "23",
    //           "b64": "string",
    //           "image_url": "https://purr.objects-us-east-1.dream.io/i/lotta.png",
    //           "gender": "m",
    //           "eps": "sura"
    //         },
    //       headers: {
    //         'content-type': 'application/json',
    //         'Authorization': "Bearer " + localStorage.getItem("token")
    //       }
    //     }).then(response=>{
    //         console.log(response)
    //     })



// forgot

  url = "http://161.35.110.128/api/v1/user/forgot"

      console.log(localStorage.getItem("token"))
      
      axios({
          method: 'post',
          url: url,
          data: {
                username:"elias",
                new_password: "elias1234"
            },
          headers: {
            'content-type': 'application/json'
          }
        }).then(response=>{
            console.log(response)
        })


  })


