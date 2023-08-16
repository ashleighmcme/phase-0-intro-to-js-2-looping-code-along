// Code your solutions in this file
// const thankyou=["Guadalupe", "Ollie", "Aki"]
function writeCards(array, event){
    let thankyou = []
    for (let i=0;i<array.length;i++){
        thankyou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }
    return thankyou
}

const count = (10)
function countDown (count){
    let countdown = 10;
    while (countdown >= 0){
        console.log (countdown --)
    }
}



