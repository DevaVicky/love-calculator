document.getElementById("containerb").style.display ="none";
document.getElementById("containera").style.display ="block";

Alertism({
  alertHeading:"Wait...",
  alertHTML:"By clicking \"Continue\" you agree to our <a href='https://github.com/DevaVicky/love-calculator/blob/master/README.md'>Privacy Policy</a>.",
  enableIcon:true,
  icon:{
    type:"info",
  },
  btnText:"Continue",
  theme:"glass",
  animation:"zoom-in"
    });
    
    window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
     
    })
  });
});

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(60, 100);

if ((rndInt > 59) && (rndInt < 71)) {
  document.getElementById("emoji").innerHTML = "&#128556;";
}

if ((rndInt > 70) && (rndInt < 81)) {
  document.getElementById("emoji").innerHTML = "&#128522;";
}

if ((rndInt > 80) && (rndInt < 91)) {
  document.getElementById("emoji").innerHTML = "&#128538;";
}

if ((rndInt > 90) && (rndInt < 101)) {
  document.getElementById("emoji").innerHTML = "&#128525;";
}

function showb() {
  document.getElementById("containera").style.display ="none";
  document.getElementById("containerb").style.display ="block";
  
  var namej = document.getElementById("name").value;
  
  document.getElementById("twoboxt").innerHTML = namej+"\'s crush loves them "+rndInt+"%";
}


/*128525 😍, 128538 😚, 128522 ☺️, 128556 😬 */
