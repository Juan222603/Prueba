let div = document.getElementById('Info')

let showData = () =>{
    let Links = document.querySelectorAll('a')
    let Positions = Array.from(Links)
    console.log(Positions)
    let Ante = Positions[6].href;

    for (let i = 0; i < Positions.length; i++){
        if(Positions[i].href == 'http://prueba/'){
            let Cont = Positions.length
            console.log(Positions)
        }
    }
}

showData()