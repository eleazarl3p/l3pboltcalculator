
const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");

const element_a = document.querySelector("#element_a");
const element_b = document.querySelector("#element_b");

const result = document.querySelector("#result");

let a = 4.0
let b = 4.0
let a_decimal = 1
let b_decimal = 1
inputA.addEventListener('input', doCalcul);
inputB.addEventListener('input', doCalcul);
console.log(a_decimal, "----", b_decimal)

inputA.value = "4.0"
inputB.value = "4.0"

element_a.innerHTML = "4.0"
element_b.innerHTML = "4.0"


function decCount (num) {
    console.log(num, "====")
    let k = num.toString().split('.')[1]

    if (k) {
        return k.length
    }
    return 0
}

function doCalcul(e) {
   

    if (e.target.name == 'a') {
        a = parseFloat(e.target.value);
        a_decimal = decCount(e.target.value)
        console.log(a_decimal, '--->')
    } 

    if (e.target.name == 'b') {
        b = parseFloat(e.target.value);
        b_decimal = decCount(e.target.value)
    } 

    
    if (isNaN(a) || isNaN(b)) {
        console.log(`${a} nan ${b}`)
        element_a.innerHTML = ""
        element_b.innerHTML = ""
        return
    }


    //print("ooop\(spaceA) - \(spaceB)")
    let ratio  = 0.0
    var c  = 0.0
    
    if (a <= b) {
        ratio = a / (a + b)
        
        if (ratio >= 1/3) {
            element_a.innerHTML = `${a.toFixed(a_decimal)}`
            element_b.innerHTML = `${b.toFixed(b_decimal)}`
            if (a + b > 16.0) {
                result.innerHTML = "MAXIMUM SPACING EXCEEDED<br>RFI MUST BE SUBMITTED"
            } else {
                result.innerHTML = ""
            }
        } else {
            c = b / 2
            let c_decimal = decCount(c)
            a_decimal = c_decimal > a_decimal? c_decimal : a_decimal
            
            element_a.innerHTML = `${c.toFixed(a_decimal)}`
            element_b.innerHTML = `${b.toFixed(b_decimal)}`

            if (c + b > 16.0) {
                result.innerHTML = "MAXIMUM SPACING EXCEEDED<br>RFI MUST BE SUBMITTED"
            } else {
                result.innerHTML = ""
            }
        }
                
    } else {
        ratio = b / (b + a)
        if (ratio >= 1 / 3) {

            element_a.innerHTML = `${a.toFixed(a_decimal)}`
            element_b.innerHTML = `${b.toFixed(b_decimal)}`
            if (a + b > 16.0) {
                result.innerHTML = "MAXIMUM SPACING EXCEEDED<br>RFI MUST BE SUBMITTED"
            } else {
                result.innerHTML = ""
            }
        } else {
            c = a / 2.0

            let c_decimal = decCount(c)
            console.log(a_decimal,c_decimal, c)
            b_decimal = c_decimal > b_decimal? c_decimal : b_decimal

            element_a.innerHTML = `${a.toFixed(a_decimal)}`
            element_b.innerHTML = `${c.toFixed(b_decimal)}`
            if (a + c > 16.0) {
                result.innerHTML = "MAXIMUM SPACING EXCEEDED<br>RFI MUST BE SUBMITTED"
            } else {
                result.innerHTML = ""
            }
        }
    
}
}