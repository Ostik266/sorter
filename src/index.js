class Sorter {
  constructor() {
    // your implementation
     this.sorter = []
  }

  add(element) {
    this.sorter.push(element)
  }

  at(index) {
   return this.sorter[index]
    // your implementation
  }

  get length() {
    // your implementation
    return this.sorter.length
  }

  toArray() {
    return this.sorter
    // your implementation
  }

  sort(indices) {
   
  }

  setComparator(compareFunction) {
    this.sorter.sort(compareFunction)
  }
}

module.exports = Sorter;
