const prompt = require('prompt-sync')({sigint: true});

class Node{
    constructor(year, highlight, next=null){
        this.year = year;
        this.highlight = highlight;
        this.next = next;
    }
}

class LinkedList{
    constructor(year, highlight){
        this.head = new Node(year, highlight);
    }

    insertBeginning = (year, highlight) => {
        const newNode = new Node(year,highlight, this.head);
        this.head = newNode;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(`year: ${current.year}, highlight: ${current.highlight} `);
            current = current.next;
        }
        return arrayData;
    }

    inserhighlights = age =>{
        let current = this.head;
        while(current.age < age){
            let currentAge = current.age + 1;
            if(current.next && current.next.age === currentAge){
                current = current.next;
            }else {
                let highlight = prompt(`what was the highlight for age ${currentAge}`);
                let newNode = new Node (currentAge, highlight, current.next);
                current.next = newNode;
                current = newNode;
            }
        }
    }

    remove = data => {
        let current = this.head;
        if (current.data === data){
            this.head = current.next; // changing the head to the node that comes after the node that we are deleting 
        }else { //deleting node that is not in the beginning
            while(current){
                let nextNode = current.next;
                if(nextNode.data === data){
                    //node found
                    current.next = nextNode.next; // setting the link of the current head to the link of the node the we are deleting 
                    current = null; // so we don't get stuck in an infinite loop
                }else{
                    //node not found
                    current = nextNode; // current.next
                }
            }
        }
    }

    InsertInBetween = data => {
        const newNode = new Node(data, this.head); // creates new node
        let current = this.head;
        while (current){ 
            if(current.data !== newNode.data && newNode.data > current.data){// if the new node is not already existed and if the new node data is greater than the current head
                let nextNode = newNode;
                nextNode.next = current.next;
            } else {
                current = null;
            }
            
            
        }
    }
}

const trip = new LinkedList("7");
trip.insertBeginning("3");
trip.insertBeginning("1");

