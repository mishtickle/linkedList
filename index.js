class newNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data){
        let node = new newNode(data);
        if (!this.head){ 
            this.head = node;
            this.tail = node;
            this.size++
            return node;
        } else{
            this.tail.next = node;
            this.tail = node;
            this.size++;
            return node;
        }
    }

    pop(){
        if (this.tail){
            this.size--;
            let tailNode = this.tail;
            let currentNode = this.head;
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next
            }
            let beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;
            return tailNode;
        }
        return undefined;
    }

    addHead(data){
        this.size++;
        let newNode = new newNode(data);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    removeHead(data){
        if(this.head){
            this.size--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }

    insertIndex(value, index){
        if (index < 0 || index > this.size){
            return;
        }
        if (index === 0){
            return this.addHead(value);
        }
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        let newNode = addNode(value);
        newNode.next = currentNode;
        previousNode.next = newNode;
        this.size++;
        return newNode;
    }

    removeIndex(index){
        if (index < 0 || index >= this.size){
            return;
        }
        if (index === 0){
            return this.removeHead();
        }
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.size--;
        return currentNode;
    }

    printList(){
        let current = this.head;
        while (current){
            console.log(current.data);
            current = current.next
        }
    }

    clearList(){
        this.head = null;
    }
}

let ll = new linkedList();
ll.addNode(100);
ll.addNode(200);
ll.printList();