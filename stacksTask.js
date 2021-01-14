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



