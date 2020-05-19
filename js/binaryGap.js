window.onload = () => {
  let dec = 23
  console.log(convertBinary(dec))
  document.getElementById(`bin`).innerHTML = `Binary of dec=${dec} equals ${convertBinary(dec)}`
}

function convertBinary (dec) {
  dec = dec.toString()
  return (+dec).toString(2)
}