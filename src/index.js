class Sorter {
  constructor() {
    // your implementation
     this.sorter = [];
     this.comparator;
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

  sort(indices){
    let new_arr = []
    let indice = indices.sort()
    indice.forEach(index => new_arr.push(this.sorter[index]))

    if (this.comparator)
      new_arr.sort(this.comparator)
    else {
      new_arr.sort((a,b) => {
        if(typeof a === 'number' && typeof b === 'number')
          return a - b
        if(typeof a === 'object' || typeof b === 'object')
          return 0
        if (a < b)
          return -1
        if ( a > b)
          return 1
        return 0
      })
    }
    indice.forEach((index, i) => {
      this.sorter[index] = new_arr[i]
    })
  }
   

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;
