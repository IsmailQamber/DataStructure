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

}
const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const random = (array) => {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}

const deck = new Stack();
const Card = deck.push(random(colors), random(numbers));
const player1 = [`1. ${Card}`, `2. ${Card}`, `3. ${Card}`, `4. ${Card}`, `5. ${Card}`];
const player2 = [`1. ${Card}`, `2. ${Card}`, `3. ${Card}`, `4. ${Card}`, `5. ${Card}`];

const PrintCards = (playerArray) =>{
    return playerArray.forEach((element) =>  console.log(element));
}
Card;//1
Card;//2
Card;//3
Card;//4
Card;//5
Card;//6
Card;//7
Card;//8
Card;//9
PrintCards(player1);//player1 has 5 cards
PrintCards(player2);//player2 has 5 cards as well
Card;//10
deck.peek();



