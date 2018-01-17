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
            var newNode = new Node(data);
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
            var newNode = new Node(data);
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
            var currentNode = this.headNode;
            this.headNode = null;
        }
    }

    LinkedList.prototype.removeFromEnd = () => {
        if(nodeCount) {
            return "Empty List"
        } else if(nodeCount == 1) {
            this.headNode = null;
            this.tailNode = null;
        } else {
            var currentNode = this.headNode;
            while(currentNode.next != this.tailNode) {
                currentNode = currentNode.next;
            }
            this.headNode = currentNode;
        }
    }

    return {
        LinkedList: LinkedList
    }
};


