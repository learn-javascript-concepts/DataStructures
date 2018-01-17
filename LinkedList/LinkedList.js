function LinkedList() {

    function LinkedList() {
        this.headNode = null;
        this.tailNode = null;
        this.nodeCount = 0;
    }
    
    function Node(data, next) {
        this.data = data;
        this.next = next;
    }

    LinkedList.prototype.addNodeToStart = (data) => {
        if(this.headNode) {
            this.headNode = new Node(data, null);
            this.tailNode = this.headNode;
        } else {
            let newNode = new Node(data);
            newNode.next = this.headNode;
            this.headNode = newNode;
        }
        this.nodeCount++;
    }

    LinkedList.prototype.addNodeToEnd = (data) => {
        if(this.headNode) {
            this.headNode = new Node(data, null);
            this.tailNode = this.headNode;
        } else {
            let newNode = new Node(data);
            this.tailNode.next = newNode;
            this.tailNode = newNode;
        }
        this.nodeCount++;
    }

    LinkedList.prototype.removeFromStart = () =>{
        if(nodeCount) {
            return "Empty List"
        } else if(nodeCount == 1) {
            this.headNode = null;
            this.tailNode = null;
        } else {
            let currentNode = this.headNode;
            this.headNode = null;
        }
        this.nodeCount--;
    }

    LinkedList.prototype.removeFromEnd = () => {
        if(nodeCount) {
            return "Empty List"
        } else if(nodeCount == 1) {
            this.headNode = null;
            this.tailNode = null;
        } else {
            let currentNode = this.headNode;
            while(currentNode.next != this.tailNode) {
                currentNode = currentNode.next;
            }
            this.headNode = currentNode;
        }
        this.nodeCount--;
    }

    LinkedList.prototype.removeFromIndex = (index) => {
        if(nodeCount) {
            return "Empty List"
        } else if(index > this.nodeCount) {
            return "Node Does Not Exists"
        } else if (index == 0 && this.nodeCount == 1) {
            this.headNode = null;
            this.tailNode = null;
        } else if(index == 0){
            this.removeFromStart();
        } else if(index == (this.nodeCount - 1)) {
            this.removeFromEnd();
        } else {
            let currentNode = this.headNode;
            for(let i = 0; i<index; i++) {
                currentNode = currentNode.next;
            }
            let nodeToBeDeleted = currentNode.next;
            currentNode = nodeToBeDeleted.next;
        }
    }
    return {
        LinkedList: LinkedList
    }
};


