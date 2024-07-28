var scoreCard = 10;
let str = "Your Score is"
setTimeout(() => {
    document.getElementById('scorecd').textContent = `${str} ${scoreCard}`
}, 500)
function guessnumber() {
    if (scoreCard > 0) {
        let num = Math.floor(Math.random() * 10);
        if (num == Number(document.getElementById('textbox').value)) {
            document.getElementById('result').innerHTML = 'Succeeding Number' + num
            str = 'You won!!';

        }
        else {
            --scoreCard;
        }
        document.getElementById('scorecd').textContent = `${str} ${scoreCard}`
    } else {
        document.getElementById('scorecd').textContent = 'You Were Failed To Guess The Number '
    }

    // if ()
}


function expand() {
    document.getElementById('sqBx').style.width='900px'
}