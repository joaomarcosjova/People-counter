let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    //condition to reset to 0
    if(count == 20) {
        count = 0
countEl.textContent = 0
    }
    // to increment
    else {
      count += 1 // or count = count + 1
      countEl.textContent = count  
    }
  
  }

function decrement() {

    if(count == 0) {
        alert(" YOU CAN'T GO LOWER")
    }
    // function to decrease 
    else {
        count = count - 1
        countEl.innerText = count  
    }
}

function save() {

   let countStr = count + " -- " 
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0

}

function exit() {
    let text = "GAME OVER."
    if (confirm(text) == true) {
        
    } 
    else {
        text = "you canceled!"
    } 
}

function reset() {
     countEl.textContent = 0
    count = 0
    
}