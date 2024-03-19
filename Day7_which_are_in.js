// TTILE: WHICH ARE IN?
// TASK: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings 
//       of a1 which are substrings of strings of a2.
// 19 March 2024

// 1st method
function inArray(array1,array2){
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i])) {
                if (!result.includes(array1[i])) {
                    result.push(array1[i]);
                }
            }
        }
    }

    return result.sort()
}

// Testing
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))