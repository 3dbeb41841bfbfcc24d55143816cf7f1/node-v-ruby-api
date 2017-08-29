const axios = require("axios")

const promises = [];

console.time('api')

for(i = 1; i <= 10; i++){
  const call = axios.get('http://www.catfact.info/api/v1/facts.json', {
    params: {
      page: i,
      per_page: 5
    }
  }).then(res => {
    console.log(res.data);
  })
  promises.push(call);
}

Promise.all(promises).then(data => {
  console.timeEnd('api')
})
