var glob = require("glob");
var fs = require("fs");


const champArray = [];
glob("./champs3/*.json", function (err, files) {
  files.forEach((element) => {
    fs.readFile(element, "utf8", function (err, data) {
      var obj = JSON.parse(data);
      obj = obj.data;
      obj = obj[Object.keys(obj)[0]];
      const a= {
          id: obj.id,
          key: obj.key,
          image: {
            full: obj.image.full,
            sprite: obj.image.sprite,
          },
      }
      champArray.push(a)      
    });
  });
})
setTimeout(function(){ 
    const json = JSON.stringify(champArray)
    fs.writeFile('champs3.json', json, (err) => {
        if(err) return console.log(err)
        console.log('data saved')
    } )  
 }, 3000);
