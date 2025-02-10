// constructor classes

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
      return;
    }
    let tempVariable = this.head;
    while (tempVariable !== null) {
      if (tempVariable.nextNode === null) {
        let newNode = new Node(value);
        tempVariable.nextNode = newNode;
        return;
      }
      tempVariable = tempVariable.nextNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    if (this.head === null) {
      return size;
    }
    let tempVariable = this.head;
    while (tempVariable !== null) {

      if (tempVariable.nextNode === null || tempVariable.nextNode !== null) {
            size++;
      }
      tempVariable = tempVariable.nextNode;
    }
    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    if(this.head === null) {
        return null;
    }
    else {
        let tempVariable = this.head;
        while(tempVariable !== null) {
            if(tempVariable.nextNode === null) {
                return tempVariable;
            }
            tempVariable = tempVariable.nextNode;
        }
    }
  }

  at(index) {
        let tempVariable = this.head;
        for(let currentIndex=0;currentIndex<index+1;currentIndex++){
                    if(index === currentIndex) {
                        return tempVariable;
                    }
                    else {
                        tempVariable = tempVariable.nextNode;
                    }
        }

  };

  pop() {
    let previousNode;
    let tempVariable = this.head;
    while(tempVariable !== null) {
        if(tempVariable.nextNode === null) {
            previousNode.nextNode = null;
            return;
        }
        previousNode = tempVariable;
        tempVariable = tempVariable.nextNode;
    }
}

  contains(value) {
   
       let tempVariable = this.head;
       while(tempVariable !==null) {
          if(tempVariable.value === value) {
            return true;
          } 
          tempVariable = tempVariable.nextNode;

       }

       return false;

  }

  find(value) {
      let index = 0;

      let tempVariable = this.head
      for(let i = 0;i<index+1;i++) {

          if(tempVariable === null) {
            return null;
          }

          if(tempVariable.value === value) {
            return index;
          }
          else {
          tempVariable = tempVariable.nextNode;
          index++;
          }         
      }
  }

    toString() {
      let string = "";
            let tempVariable = this.head;
            while(tempVariable !== null) {
              string = string + ` (${tempVariable.value}) ->`
              tempVariable = tempVariable.nextNode;
            }
            
            return string + ` null`;
    }  
}



class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

//creating/initializing a linkedlist

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());