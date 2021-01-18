const prompt = require('prompt-sync')({sigint: true});
class TreeNode{
    constructor(name){
        this.name = name;
        this.child = [];
        this.limit = 2; //restricting the child lenght
    }

    addChild = (Node) =>{
        if(this.child.length < this.limit){ //making sure that the parent only have two children
            this.child.push(Node);
        }else{
            console.log("You already have two children, isn't that enough ?")
        }
    }
    Traverse = () => {
        let nodes = [this];
        while(nodes.length > 0){
            let current = nodes.pop();
            console.log(current.name);
            nodes = [...nodes, ...current.child];
        }
    }

}
const familyName = prompt("enter the family name: ")
const root = new TreeNode(familyName);

const child = prompt(`enter child full name:`);

while (child !== "done"){
    
    let tree = [];
    tree = child.split(" ").reverse();
     if(tree[0] === root.name && root.child.length < 2){
         child = prompt("enter child name: ");
         root.addChild(child);
     }else if(root.child.length === 2){
         console.log("This parent has enough children")
     }else{
         child = prompt("enter child name: ")
         root.addChild(child);
     }

       
    }

root.Traverse();

