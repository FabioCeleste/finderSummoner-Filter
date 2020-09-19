var glob = require("glob");
var fs = require("fs");

function champs(){
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
}

function spells(){
  const saveJson = {}
  const summonerJson = fs.readFile('summoner.json', (err, data) => {
    const obj = JSON.parse(data)
    dataSpell = obj.data
    const keys = Object.keys(obj.data)
    keys.map(spell => {
      const spellData = dataSpell[spell]
      saveJson[spellData.key] = {
        name: spellData.name,
        image: {
          full: spellData.image.full,
          sprite: spellData.image.sprite
        }
      }      
    })
    const jsonString = JSON.stringify(saveJson)
    fs.writeFile('spells.json', jsonString, (err) => {
      if(err) return console.log(err)
      console.log('data saved')
  } )
    
  })
  
}

spells()

