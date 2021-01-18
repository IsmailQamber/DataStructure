const prompt = require('prompt-sync')({sigint: true});
class TreeNode{
    constructor(name){
        this.name = name;
        this.children = [];
        this.limit = 2; //restricting the child lenght
    }

    addChild = (node) =>{
        if(this.children.length < this.limit){ //making sure that the parent only have two children
            this.child.push(node);
            console.log(`${this.child},is a child of  ${node.name}`)
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
    
    getChildWithName = (name) => {
        return this.children.find((child) => { 
            child.name === name 
        });
    }

}

const root = new TreeNode(Qamber);

let fullName = prompt(`enter child full name:`);

while (fullName !== "done"){
    
    let current = root;

    let names = fullName.split(" ").reverse();
    let fistName = names.pop();
    let lastName = names.shift();

    if (lastName === current.name){
        if(names){
            for(let name of names){
                let child = current.getChildWithName(name);
                if(child){
                    current = child;
                }else {
                    let newNode = new TreeNode(name);// adds child that did not exist or should should not exist, adding a third child for the root
                    current.addChild(newNode);
                    current = newNode;
                }
            }
        }
        let newNode = new TreeNode(fistName);
        current.addChild(newNode);
    }

       console.log("-----------------------")
       fullName = prompt(`enter child full name:`);     
        
    }
    // tree = child.split(" ").reverse();
    //  if(tree[0] === root.name && root.child.length < 2){
    //      child = prompt("enter child name: ");
    //      root.addChild(child);
    //  }else if(root.child.length === 2){
    //      console.log("This parent has enough children")
    //  }else{
    //      child = prompt("enter child name: ")
    //      root.addChild(child);
    //  }

       
    }

root.Traverse();

