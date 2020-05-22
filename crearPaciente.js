url = "http://161.35.110.128/api/v1/paciente/"


console.log(localStorage.getItem("token"))

axios({
    method: 'post',
    url: url,
    data: {
        "custom_id": "desdeAPI",
        "name": "Angelower Santana",
        "age": "23",
        "b64": "string",
        "image_url": "https://purr.objects-us-east-1.dream.io/i/lotta.png",
        "gender": "m",
        "eps": "sura"
      },
    headers: {
      'content-type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }
  }).then(response=>{
      console.log(response)
  })