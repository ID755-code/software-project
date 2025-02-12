
//Write a program using user-defined function to find the sum of N natural numbers.
//DONE BY AMBU SHREE POUDEL (723)
#include <stdio.h>

int main() {
    int n, sum;

    // Input the value of n
    printf("Enter a positive integer: ");
    scanf("%d", &n);

    sum = n * (n + 1) / 2;

    printf("Sum of first %d natural numbers is: %d\n", n, sum);

    return 0;
}
