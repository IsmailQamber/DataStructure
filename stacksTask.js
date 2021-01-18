class Node {
    constructor(color, number, next = null){
        this.color = color;
        this.number = number;
        this.next = next;
    }
}

class Stack {
    constructor(limit = 20){
        this.top = null;
        this.length = 0;
        this.limit = limit;
    }
    
    isFull = () => this.length === this.limit;

    isEmpty = () => this.length === 0;

    peek = () =>  this.isEmpty() ? "Sorry buddy, nothing here" : `${this.top.color} - ${this.top.number}`;

    push = (color, number) => {
        if (this.isFull){
        console.log("no cards can be pushed");
        }else {
            const newCard = new Node(color, number, this.top);
            this.top = newCard;
            this.length++;
        }
}

    pop = () => {
        if(this.isEmpty()){
            console.log("The deck is empty!");
        }else {
            const popped = this.pop;
            this.top = popped.next;
            this.length--;
            return popped.getData();
        }
    }

}
const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const random = (array) => {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}

const deck = new Stack();
// const Card = deck.push(random(colors), random(numbers));
while(!deck.isFull()) {
    let color = random(colors);
    let number = random(numbers);
    deck.push(color, number);
}
const player1 = [];
const player2 = [];

    for(i = 0; i < 5; i++){
        player1.push(deck.pop());
        player2.push(deck.pop());
    }
// const player1 = [`1. ${Card}`, `2. ${Card}`, `3. ${Card}`, `4. ${Card}`, `5. ${Card}`];
// const player2 = [`1. ${Card}`, `2. ${Card}`, `3. ${Card}`, `4. ${Card}`, `5. ${Card}`];

const PrintCards = (playerArray) =>{
    return playerArray.forEach((element) =>  console.log(element));
}
PlayerDraw(player1);
PlayerDraw(player2);
PrintCards(player1);//player1 has 5 cards
PrintCards(player2);//player2 has 5 cards as well
Card;//10
console.log(deck.peek())