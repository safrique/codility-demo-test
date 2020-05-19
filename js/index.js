import binaryGap from './binaryGap.js'

window.onload = () => {
  let dec = 23
  // console.log(convertBinary(dec))
  document.getElementById(`bin`).innerHTML = `Binary of dec=${dec} equals ${binaryGap.convertBinary(dec)}`
}