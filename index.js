/*
TODO: 
- debug 
- add sint support
*/

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

const inp = document.getElementById("inp");
const initbase = document.getElementById("initbase");
const newbase = document.getElementById("newbase");
const submit = document.getElementById("submit");
const out = document.getElementById("out");
const errormsg = document.getElementById("error");

window.addEventListener("DOMContentLoaded", () => {
    submit.addEventListener("click", () => {
        try {
            // get values from inputs
            let inpval = inp.value.toLowerCase();
            let initbaseval = BigInt(initbase.value);
            let newbaseval = BigInt(newbase.value);

            if (isNaN(newbaseval) || isNaN(initbaseval)) {
                throw new Error("Base is not a number");
            };
            if (initbaseval < 2n || initbaseval > 36n || newbaseval < 2n || newbaseval > 36n || inp < 0n) {
                throw new Error("Value not in valid range");
            };
            if (isFloat(initbaseval) || isFloat(newbaseval) || isFloat(inp)) {
                throw new Error("Values should be an integer");
            };

            let base10num = 0n;
            let output = "";
    
            //DEBUG 1 START
                console.log("inpval = " + inpval);
                console.log("initbaseval = " + initbaseval);
                console.log("newbaseval = " + newbaseval);
            //DEBUG 1 END
            
            // turn the number into base 10
            for (let index = 0; index < inpval.length; index++) {
                if (BigInt(alphabet.indexOf(inpval[index])) > initbaseval) {
                    throw new Error("Invalid Inputted Number");
                };
                base10num += BigInt(alphabet.indexOf(inpval[index])) * (initbaseval ** BigInt(inpval.length - index - 1));
            }
    
            //DEBUG 2 START
                console.log("base10num = " + base10num);
            //DEBUG 2 END
            
            // turn it into it's new base
            if (newbaseval != 10n) {
                while (base10num != 0n) {
                    output = alphabet[base10num % newbaseval] + output;
                    base10num = base10num/newbaseval
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
            errormsg.innerText = "An error occured: " + err.message
            console.log(err)
        };
    });
});