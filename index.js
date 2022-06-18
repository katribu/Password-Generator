function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^_";

  for (let i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

document.getElementById("getPswd").addEventListener("click",function(){
    document.getElementById("pass1").innerHTML = makeid()
    document.getElementById("pass2").innerHTML = makeid()
    document.getElementById("pass3").innerHTML = makeid()
    document.getElementById("pass4").innerHTML = makeid()
})
