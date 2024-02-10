class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    const poppedPerson = this._persons.pop();
    if (poppedPerson) {
      return poppedPerson.age;
    } else {
      console.error("Error: Can't pop an empty stack.");
      return undefined;
    }
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
