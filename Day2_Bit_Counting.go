// TITLE: BIT COUNTING
// TASK : Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// 		  You can guarantee that input is non-negative.
// Source: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/go
// 14 March 2024

package main

import (
	"fmt"
	"strconv"
)

func CountBits(n uint) int {
	binaryStr := strconv.FormatUint(uint64(n), 2)

	count := 0
	for i := 0; i < len(binaryStr); i++ {
		if binaryStr[i] == '1' {
			count++
		}
	}

	return count
}

func main()  {
	fmt.Println(CountBits(4))
	fmt.Println(CountBits(9))
	fmt.Println(CountBits(10))
	fmt.Println(CountBits(1234))
	fmt.Println(CountBits(1023)) 
	fmt.Println(CountBits(2047))
	fmt.Println(CountBits(16383))
	fmt.Println(CountBits(16381))
	fmt.Println(CountBits(65471))
}