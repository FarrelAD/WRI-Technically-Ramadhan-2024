// TTILE: WRITE NUMBER IN EXPANDED FORM
// TASK: You will be given a number and you will need to return it as a string in Expanded Form.
// 15 March 2024

// 1st
function expandedForm(num) {
    let result = []
    let strNum = num.toString();
    let reversedIndex = strNum.length - 1
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] != '0') {
            result.push(String(parseInt(strNum[i]) * Math.pow(10, reversedIndex)))
        }
        reversedIndex--
    }
    
    return result.join(' + ')
}

// Testing
console.log(expandedForm(12))
console.log(expandedForm(70304))