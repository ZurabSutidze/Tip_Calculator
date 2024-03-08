let boxes = document.querySelectorAll(".Box");
let procenti = document.querySelectorAll(".Box p");
let Custom = document.querySelector(".Custom");
let Bill = document.querySelector(".Bill");
let Adamianebi = document.querySelector(".Adamianebi");
let Tip = document.querySelector(".Tip");
let Total = document.querySelector(".Total");
let Error1 = document.querySelector(".Error");
let Button = document.querySelector("button");
let Inputs = document.querySelectorAll("input")
let percent = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        boxes[i].classList.toggle("Cyan");
        procenti[i].classList.toggle("Mwvane");
        for (let j = 0; j < boxes.length; j++) {
            if (j !== i) {
                boxes[j].classList.remove("Cyan");
                procenti[j].classList.remove("Mwvane");
            }
        }
        Custom.value = ""
        percent = parseInt(procenti[i].innerText);
        if (isNaN(percent)) {
            percent = 0;
        }
        calculateTipAndTotal();
    });
}





Bill.addEventListener("focus", function () {
    Bill.classList.toggle("Outliner")
})

Custom.addEventListener("focus", function () {
    Custom.classList.toggle("Outliner")
})

Bill.addEventListener("input", function () {
    calculateTipAndTotal();
});

Adamianebi.addEventListener("focus", function () {
    Adamianebi.classList.toggle("Outliner2")
})

Bill.addEventListener("blur", function () {
    Bill.classList.remove("Outliner")
})

Custom.addEventListener("blur", function () {
    Custom.classList.remove("Outliner")
})

Adamianebi.addEventListener("blur", function () {
    Adamianebi.classList.remove("Outliner2")
})


function calculateTipAndTotal() {
    if (Adamianebi.value === "0" || Adamianebi.value > 10000 || Custom.value > 100 || Bill.value > 10000 ) {
        Error1.innerHTML = "Can't Be That"
        Tip.innerHTML = "$0.00"
        Total.innerHTML = "$0.00"
    } else if (Adamianebi.value.trim() === "") {
        Tip.innerHTML = "$0.00"
        Total.innerHTML = "$0.00"
        Error1.innerHTML = ""
    } else if (Adamianebi.value < "0") {
        Error1.innerHTML = "Can't Be Negative"
    } else {
          if (Custom.value) {
                percent = Number(Custom.value)
            }
            Error1.innerHTML = ""
            const tipAmount = Number(Bill.value * percent / 100) / Number(Adamianebi.value);
            Tip.innerHTML = "$" + tipAmount.toFixed(2);

            const totalAmount = (Number(Bill.value * percent / 100) + Number(Bill.value)) / Number(Adamianebi.value);
            Total.innerHTML = "$" + totalAmount.toFixed(2);
        
    }
}

Adamianebi.addEventListener("input", function () {
    calculateTipAndTotal();
});

Button.addEventListener("click", function () {
    Bill.value = "";
    Adamianebi.value = "";
    Custom.value = "";
    Tip.innerHTML = "$0.00";
    Total.innerHTML = "$0.00";
    percent = 0;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("Cyan");
        procenti[i].classList.remove("Mwvane");
    }

    Error1.innerHTML=""
});

Custom.addEventListener("focus", function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("Cyan");
        procenti[i].classList.remove("Mwvane");
    }
    
})

Custom.addEventListener("input", function () {
    calculateTipAndTotal();
})
 

