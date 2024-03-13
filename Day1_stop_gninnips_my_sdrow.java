// TITLE: STOP GNINNIPS MY SDROW!
// TASK : Write a function that takes in a string of one or more words, and returns the same string, but with all words that 
//        have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
//        Spaces will be included only when more than one word is present.
// Source: https://www.codewars.com/kata/54ba84be607a92aa900000f1
// 13 March 2024

public class Day1_stop_gninnips_my_sdrow {
    
    // Version 1
    public String spinWords(String sentence) {
        String [] stringArray = sentence.split(" ");
        
        for (int i = 0; i < stringArray.length; i++) {
            if (stringArray[i].length() >= 5) {
                String newString = "";
                for (int j = stringArray[i].length() - 1; j >= 0; j--) {
                    newString += Character.toString(stringArray[i].charAt(j));
                }
                stringArray[i] = newString;
            }
        }

        String resultString = String.join(" ", stringArray);
        return resultString;
    }

    public static void main(String[] args) {
        // Testing
        Day1_stop_gninnips_my_sdrow firstWords = new Day1_stop_gninnips_my_sdrow();

        System.out.println(firstWords.spinWords("Hey fellow warriors"));
    }
}