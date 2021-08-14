<div class="title-page">
        <h3>Kyle Schwartz</h3>
        <h3>216213621</h3>
        <h3>EECS 3101</h3>
        <h3 id="date">Autofill Date</h3>
</div>

## Problem 1

An alternating sequence is a sequence of integers such that its elements satisfy one of the following two properties:

-   $A[1] < A[2] > A[3] < ... A[n-2] > A[n-1] < A[n]$
-   $A[1] > A[2] < A[3] > ... A[n-2] < A[n-1] > A[n]$

The algorithm below is a simple iterative algorithm that returns true iff a sequence is alternating.

```kotlin
fun isAlternating(A[1..n])
    if n < 2
        return true
    if A[1] == A[2]
        return false

    prev = A[1] < A[2]
    for i = 3 to n:
        if(A[i-1] == A[i])
            return false

        current = A[i-1] < A[i]
        if(prev == current)
            return false
        prev = current

    postcond A[1..n] is an alternating sequence
    return true
```

### Questions

1. (8 points) Prove the **full correctness** of **isAlternating**. Remember to clearly state your loop invariants and any necessary preconditions.

### Answers

1. Precondition: $A$ has a length greater than 1 and the first two elements are different. <br />
   LI: $A[1..i-1]$ is alternating.
    - **Initialization**: The precondition asserts that the array contains at least two elements and those elements are not equal. If the two elements are different, $A[1..2]$ is alternating. Thus, LI(1) is true.
    - **Maintenance**: For all i > 2, assume L(i-1) holds. In the i-1<sup>th</sup> iteration, $A[1..i-1]$ is alternating. There are 3 cases:
        1. $A[i-1]$ is equal to $A[i]$. These numbers do not alternate. `false` is returned and the loop is broken.
        2. $A[i-1] < A[i]$ == `prev`, then $A[i-2..i]$ is ascending or descending, and the array does not alternate. `false` is returned and the loop is broken.
        3. $A[i-1] < A[i]$ != `prev`, then $A[1..i]$ is alternating. L(i) holds.
    - **Termination**: The loop can break in two ways:
        1. The array is not alternating. The loop breaks after returning `false`. The postcondition holds.
        2. The loop iterates to `n`. In this case, the entire array was exhausted. Per maintenance of the loop invariant, the array is alternating and no value was returned. The loop exits and `true` is returned. Thus, the postcondition holds.

## Problem 2

Suppose you are given two arrays $A[1..n]$ and $B[1..n]$ of integers. You are required to find a pair of elements $(A[i], B[j])$ such that their **absolute** difference is the smallest over all such pairs.

### Questions

1. (3 points) Describe a brute force algorithm that solves the problem and informally justify its running time.
2. (8 points) Assume A and B are sorted in non-decreasing order. Design a $\Theta(n)$ algorithm for the problem. Provide a clear and concise pseudocode. **Hint:** the idea is quite similar to that of the Merge algorithm from Merge Sort.
3. (8 points) Prove the correctness of your algorithm.

### Answers

1. A brute force method would be to compare each element in $A$ against every element in $B$ and find their absolute difference. This would have a running time of $O(n^2)$ as it would require 2 nested loops running from $[1..n]$ each with an if statement checking if $abs(A[i],B[j])$ is less than the existing minimum difference.

2. 
    ```kotlin
    fun absDiff(A[1..n], B[1..n])
        diff = ꝏ
        x = 1
        y = 1

        while x < n && y < n
            if abs(A[x] - B[y]) < diff
            diff = abs(A[x] - B[y])
            i = A[x]
            j = B[y]

            if (A[x] < B[y])
                x++
            else
                y++

        return {i, j}
    ```

3. Precondition: $A$ and $B$ are both sorted arrays in non-descending order.<br />
   LI: `diff` contains the smallest absolute difference between $A[1..x]$ and $B[1..y]$.

    - **Initialization**: Before the first iteration, `diff` is equal to infinity. This is done so that no two numbers can have a greater absolute difference as the difference between $A[0]$ and $B[0]$ is undefined. Thus, LI(1) is true.
    - **Maintenance**: For all `x` and `y` > `1`, assume L((x or y)-1) holds. Therefore, L((x or y)-1): `absDiff(A[1..x], B[1..y])` contains the smallest difference in that set. There are 2 cases:

        1. The absolute difference between $A[x]$ and $B[y]$ is less than the current minimum difference. In this case, `diff` is updated to reflect the new minimum difference.

        2. The absolute difference between $A[x]$ and $B[y]$ is not less than the current minimum difference. In this case, `diff` is left unchanged.

        - After either of the above cases, either x or y are incremented depending on the values of $A[x]$ and $B[y]$ and the loop continues.

    - **Termination**: The loop can terminate in one of two ways:

        1. After iterating through the entirety of $A$, `x` is incremented and is now equal to `n`. The loop is broken. `i` and `j` are returned.

        2. After iterating through the entirety of $B$, `y` is incremented and is now equal to `n`. The loop is broken. `i` and `j` are returned.


## Problem 3

The algorithm below checks whether $S1$ is a substring of $S2$.

```kotlin
fun isSubstring(S1[1..n], S2[1..m])
    if n > m
        return false

    for i = 1 to m:
        isSub = true
        for j = 1 to n:
            if S1[j] != S2[i+j-1]:
                isSub = false
                break

        if(isSub)
            return true
    return false
```

### Questions

1. (2 points) What is the best case and worst case in terms of running time?
2. (5 points) Compute the exact running time of **isSubstring**.
3. (1 points) Give a suggestion on how the running time could be reduced.

### Answers

1. The best case is $\Theta(n)$, the average case is $\Theta(n+m)$, and the worst case is $\Theta(m \times n)$.
2. 
    | Line # | Cost     | Occurrences |
    | ------ | -------- | ----------- |
    | 2      | $c_1$    | $1$         |
    | 3      | $c_2$    | $0$         |
    | 5      | $c_3$    | $m+1$       |
    | 6      | $c_4$    | $m$         |
    | 7      | $c_5$    | $m(n+1)$    |
    | 8      | $c_6$    | $m(n)$      |
    | 9      | $c_7$    | $m(n)-1$    |
    | 10     | $c_8$    | $m(n)-1$    |
    | 12     | $c_9$    | $m$         |
    | 13     | $c_{10}$ | $1$         |
    | 14     | $c_{11}$ | $0$         |

    Thus, the total cost is $c_1+c_3(m+1)+(c_4 + c_9)(m)+c_5(m(n+1))+c_6(m(n))+(c_7 + c_8)(m(n)-1) + c_{10}$. Simplified, this shows us that the cost is $\Theta(m \times n)$.

3. Adding a **good** hash function will reduce the average running time.

## Problem 4

Not-A-Dr. Oreo is teaching a course on the design and analysis of algorithms. To determine the best day of the week for his students to write the quiz, he ran a poll asking each of his $n$ student to pick a day $d \in \N$ (in his world a week has an infinite number of days).
Oreo collected all the answers of his students in an array $A[1..n]$ where $A[i]$ is the day chosen by student $i$. He needs your help in determining the winning day. The winning day is the day picked by more than $n/2$ students. You may assume that there will always be a winning day.

### Questions

1. (3 points) Describe a brute force algorithm that solves the problem in $\Theta(n^2)$.
2. (8 points) Give a more efficient algorithm that solves the problem using a divide and conquer strategy. Remember to provide a clear and concise pseudocode.
3. (4 points) Use a recurrence relation to prove an upper bound for your algorithm.
4. (2 points) **Bonus:** Assuming Oreo's weeks have 7 days (i.e., $1 \leq d \leq 7$), give a linear time algorithm for the problem.

### Answers

1. A brute force algorithm that solves the problem in $\Theta(n^2)$ would be the following: for each student in the class ($i$), check if any subsequent students ($A[i+1..n]$) share the same chosen day. If the number of matches is greater than $n/2$, return that day. Otherwise, move on to the next student ($i\text{++}$). Repeat until a date is chosen
2. Assume all integers are 'truthy'
    ```kotlin
    fun quizDate(A[1..n])
        if A.length == 1
            return A[0]
        else if A.length == 2
            if A[0] == A[1]
                return A[0]
            else
                return false
        
        mid = A.length / 2
        B = quizDate(A[1..mid])
        C = quizDate(A[mid+1..n])

        if !B && C
            return C
        else if (!C && B) || B == C
            return B
        
        return false
    ```
3. The above algorithm shares a lot of similarities with merge sort. Namely, in the divide step. The array is continuously split in two, meaning there are $\log(n)$ divisions. At the base, there are $n$ nodes, meaning it is $\Theta(n \log n)$
$$
T(n) = \begin{cases}
   \Theta(1) & n=1 \\
   2T(\frac{n}{2})+\Theta(n) & n>1
\end{cases}  \\ \nobreakspace \\

\text{Using substitution, we get the following:} \\ \nobreakspace \\

\begin{aligned}
   T(n) &= 2^iT(\frac{n}{2^i}) + i \times n \\
        &= 2^{\log n} T(1) = n \log n \\
        &= n \log n + n \\
        &\in \Theta(n \log n)
\end{aligned}
$$

1. The returned number corresponds to the day of the week starting with Sunday as 1, and ending with Saturday as 7.
    ```kotlin
    fun quizDate7(A[1..n])
        B = [0, 0, 0, 0, 0, 0, 0]
        for i = 1 to n
            B[A[i]]++
        
        for j = 1 to 7
            if B[j] > n/2
                return j
    ```