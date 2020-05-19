import binaryGap from './binaryGap.js'

window.onload = () => {
  let dec = 231369
  // console.log(convertBinary(dec))
  document.getElementById(`bin`).innerHTML = `Binary of dec=${dec} equals ${binaryGap.convertBinary(dec)}`
  document.getElementById(`gap`).innerHTML = `Max binary gap=${binaryGap.solution(dec)}`

}