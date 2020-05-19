const binaryGap = {
  convertBinary (dec) {
    dec = dec.toString()
    return (+dec).toString(2)
  },

  solution (N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = this.convertBinary(N)
    let len = bin.length
    let remain = len
    let gaps = []
    let max = 0
  }
}

export default binaryGap