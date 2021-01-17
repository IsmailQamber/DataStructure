class Node{
    constructor(GroupSize, next = null){
        this.GroupSize = GroupSize;
        this.next = next;
    }
}

class queue{
    constructor(limit = 12){
        this.front = null;
        this.back = null;
        this.limit = limit;
        this.length = 0;
        this.waitingtime = 0;
    }

    isFull = () => this.length === this.limit;

isEmpty = () => this.length === 0;

peek = () => (this.isEmpty() ? `You are good to go!` : this.waitingtime);

enqueue = (GroupSize) => {
  if(this.isFull()){
    console.log(`Come Back after ${this.waitingtime}`)
}else {
  let NumberOfPeople = GroupSize;
  while(NumberOfPeople > 12){
    this.addNode(12);
    NumberOfPeople -= 12;
  }
  this.addNode(NumberOfPeople);
}

    }

  
  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waitingtime -= removed.GroupSize * 0.5;
      return removed.GroupSize;
    }
  };

  addNode = (GroupSize) => {
    const newNode = new Node(GroupSize);
    if (this.isEmpty()){
      this.front = newNode;
    }else {
      this.back.next = newNode;
    }
    this.back = newNode;
    this.length++;
    this.waitingtime += GroupSize * 0.5;
  }
}

  // GroupOverSize = (data) => {
  //       const RemainingInGroup = data - 12;
  //       this.enqueue(RemainingInGroup);
  //   }


// WaitingTime = () =>{
//     const waitingTime =  parseInt((this.length * 30) / 60);
//     return `${waitingTime} minutes left`;  
//     }
//   }


const KFC = new queue();
// KFC.enqueue(12);
console.log(KFC.enqueue(4))
console.log(KFC.peek())
console.log(KFC.enqueue(4))
console.log(KFC.peek())
console.log(KFC.enqueue(6))
console.log(KFC.peek())
console.log(KFC.enqueue(13))
console.log(KFC.peek())
