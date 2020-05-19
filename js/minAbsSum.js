const minAbsSum = {
  // https://app.codility.com/programmers/lessons/17-dynamic_programming/min_abs_sum/

  solution (A) {
    let len
    if ((len = A.length) === 0) { return 0 }

    let S = this.repeat(-1, len)
    if (Math.abs(this.getSum(A, S)) === 0) { return 0 }

    let allMinus1 = JSON.stringify(S)
    let min = 100 * 20000

    // for (let i = 0; i < len; i++) {
    //   for (let j = 0; j < 4; j++) {
    //     if (JSON.stringify(S) === allMinus1) {
    //       // console.log(`arrays same...`)
    //       S[i]++
    //       continue
    //     }
    //
    //     if (S[i] < 2) {
    //       let sum = Math.abs(this.getSum(A, S))
    //
    //       if (sum === 0) {
    //         console.log(`...sum=0...`, S)
    //         return 0
    //       } else if (sum < min) {
    //         min = sum
    //       }
    //       console.log(`i=${i} -- j=${j} -- sum=${sum} -- min=${min} -- S:`, S)
    //
    //       S[i]++
    //     } else {
    //       S[i] = -1
    //     }
    //   }
    // }

    // console.log(this.LoopIt(len, ``, [-1, 0, 1]))
    // console.log(this.perm([-1, 0, 1]).join("\n"))
    console.log(this.combinations([-1, 0, 1], 3).join('\n'))

    return min
  },

  combinations (arr, k) {
    let i,
      subI,
      ret = [],
      sub,
      next
    for (i = 0; i < arr.length; i++) {
      if (k === 1) {
        ret.push([arr[i]])
      } else {
        sub = this.combinations(arr.slice(i + 1, arr.length), k - 1)
        for (subI = 0; subI < sub.length; subI++) {
          next = sub[subI]
          next.unshift(arr[i])
          ret.push(next)
        }
      }
    }
    return ret
  },

  // perm (a) {
  //   if (a.length < 2) return [a]
  //   let c, d, b = []
  //   for (c = 0; c < a.length; c++) {
  //     let e = a.splice(c, 1),
  //       f = this.perm(a)
  //     for (d = 0; d < f.length; d++) b.push([e].concat(f[d]))
  //     a.splice(c, 0, e[0])
  //   }
  //   return b
  // },

  // LoopIt (depth, baseString, S) {
  //   let returnValue = ''
  //   for (let i = 0; i < S.length; i++) {
  //     returnValue += (depth === 1 ? ',' + baseString + S[i] : this.LoopIt(depth - 1, baseString + S[i], S))
  //   }
  //   return returnValue
  // },

  repeat (item, times) {
    return new Array(times).fill(item)
  },

  getSum (A, S) {
    let sum = 0
    for (let i = 0, len = A.length; i < len; i++) {
      sum += A[i] * S[i]
    }
    return sum
  }
}

export default minAbsSum