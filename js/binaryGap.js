const binaryGap = {
  // https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
  // solution: https://app.codility.com/demo/results/trainingX757JT-XQ2/

  convertBinary (dec) {
    dec = dec.toString()
    return (+dec).toString(2)
  },

  // solution (N) {
  //   // write your code in JavaScript (Node.js 8.9.4)
  //   let bin = this.convertBinary(N)
  //   let len = bin.length
  //   let remain = len
  //   let gaps = []
  //   let max = 0
  //   let newStr = ''
  //
  //   console.log(`bin=${bin} -- len=${len}`)
  //
  //   for (let i = 0; i < len; i++) {
  //     console.log(`PRE: i=${i} -- bin(i)=${bin.charAt(i)} -- newStr=${newStr} --  max=${max}`)
  //
  //     if ((remain = len - i - 2) <= max && newStr === ``) { return max }
  //
  //     if ((newStr === `` || newStr === `1`) && bin.charAt(i) === `1`) {
  //       newStr = `1`
  //       console.log(`POST: newStr=${newStr} --  max=${max} -- gaps:`, gaps)
  //     } else if (newStr !== `` && bin.charAt(i) === `0`) {
  //       newStr += `0`
  //       console.log(`POST: newStr=${newStr} --  max=${max} -- gaps:`, gaps)
  //     } else if (newStr !== `` && bin.charAt(i) === `1`) {
  //       newStr += `1`
  //       // gaps.push({newStr.length : newStr})
  //       max = ((newStr.length - 2) > max ? newStr.length - 2 : max)
  //       gaps.push(newStr.length - 2)  // TODO: remove this array, just for testing
  //       console.log(`POST: newStr=${newStr} --  max=${max} -- gaps:`, gaps)
  //       newStr = `1`
  //     }
  //
  //   }
  //
  //   return max
  // }

  solution (N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = this.convertBinary(N)
    let len = bin.length
    let remain = len
    let max = 0
    let newStr = ''

    for (let i = 0; i < len; i++) {
      if ((remain = len - i - 2) <= max && newStr === ``) { return max }

      if ((newStr === `` || newStr === `1`) && bin.charAt(i) === `1`) {
        newStr = `1`
      } else if (newStr !== `` && bin.charAt(i) === `0`) {
        newStr += `0`
      } else if (newStr !== `` && bin.charAt(i) === `1`) {
        newStr += `1`
        max = ((newStr.length - 2) > max ? newStr.length - 2 : max)
        newStr = `1`
      }
    }

    return max
  }
}

export default binaryGap