import binaryGap from './binaryGap.js'

window.onload = () => {
  let nrs = [231369, 1041, 32]
  console.log(`nrs:`, nrs)

  for (let j = 0, len = nrs.length; j < len; j++) {
    let dec = nrs[j]
    console.log(`j=${j} -- dec=${nrs[j]}`)
    let p = document.createElement(`p`)
    p.innerHTML = `Binary of dec=${dec} equals ${binaryGap.convertBinary(dec)}<br>Max binary gap=${binaryGap.solution(dec)}`
    document.body.appendChild(p)
  }
}