
class ApiHelper {

    static random() {
        return Math.floor(Math.random() * 671) + 1
    }

    static getCharacter() {
        let promesa = require('request-promise')
        let url = `https://rickandmortyapi.com/api/character/${this.random()}`
        
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return res
            })
        
        // promesa(url).then(function(html){

        // }).catch(function(e){
        //     console.log(err)
        // })
        
    }

}


console.log(ApiHelper.getCharacter())