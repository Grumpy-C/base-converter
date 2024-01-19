/*
TODO: debug and add sint support
*/

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

const inp = document.getElementById("inp");
const initbase = document.getElementById("initbase");
const newbase = document.getElementById("newbase");
const submit = document.getElementById("submit");
const out = document.getElementById("out")

window.addEventListener("DOMContentLoaded", () => {
    submit.addEventListener("click", () => {
        try {
            // get values from inputs
            let inpval = inp.value.toLowerCase();
            let initbaseval = Number(initbase.value);
            let newbaseval = Number(newbase.value);

            if (isNaN(newbaseval) || isNaN(initbaseval)) {
                throw "Base is not a number";
            };
            if (initbaseval < 2 || initbaseval > 36 || newbaseval < 2 || newbaseval > 36) {
                throw "Invalid base"
            };
            
            let base10num = 0;
            let output = "";
    
            //DEBUG 1 START
                console.log("inpval = " + inpval);
                console.log("initbaseval = " + initbaseval);
                console.log("newbaseval = " + newbaseval);
            //DEBUG 1 END
            
            // turn the number into base 10
            for (let index = 0; index < inpval.length; index++) {
                base10num += alphabet.indexOf(inpval[index]) * initbaseval**(inpval.length - index - 1);
            }
    
            //DEBUG 2 START
                console.log("base10num = " + base10num);
            //DEBUG 2 END
            
            // turn it into it's new base
            if (newbaseval != 10) {
                while (base10num != 0) {
                    output = alphabet[base10num % newbaseval] + output;
                    base10num = Math.floor(base10num/newbaseval);
                }
            } else {
                output = base10num
                base10num = 0
            };
    
            //DEBUG 3 START
                console.log("base10num = " + base10num);
                console.log("output = " + output);
            //DEBUG 3 END
    
            out.value = output
    
        } catch(err) {
            alert("An error occured: " + err.message);
        };
    });
});