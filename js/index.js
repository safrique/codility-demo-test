import minAbsSum from './minAbsSum.js'

window.onload = () => {
  // console.log(`minAbsSum`)
  let arrs = [
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 5, 2, -2],
    [],
  ]

  for (let zz = 0, len = arrs.length; zz < len; zz++) {
    console.log(`...zz=${zz} -- arrs[zz]:`, arrs[zz])
    console.log(`solution=${minAbsSum.solution(arrs[zz])}`)
  }
}

// import binaryGap from './binaryGap.js'
//
// window.onload = () => {
//   let nrs = [231369, 1041, 32]
//   console.log(`nrs:`, nrs)
//
//   for (let j = 0, len = nrs.length; j < len; j++) {
//     let dec = nrs[j]
//     console.log(`j=${j} -- dec=${nrs[j]}`)
//     let p = document.createElement(`p`)
//     p.innerHTML = `Binary of dec=${dec} equals ${binaryGap.convertBinary(dec)}<br>Max binary gap=${binaryGap.solution(dec)}`
//     document.body.appendChild(p)
//   }
// }