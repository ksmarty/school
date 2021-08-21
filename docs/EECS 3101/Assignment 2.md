## Problem 1

### Question

Suppose you are making change with an arbitrary set of denominations of coins $a_1, a_2, …, a_k$. We saw that dynamic programming is needed to solve the problem of making change for a given amount m using the least number of coins, and the simple greedy algorithm does not work. As an example consider $a_1=1, a_2=3, a_3=4$, and $n=6$.

Consider the problem of counting the number of ways of making change for a given amount $n$. For two ways to be considered different, they have to differ more than in order. For example, making change for 11 cents as 1 cent, 5 cent, 5 cent and 5 cent, 1 cent, 5 cent are not considered different.

Design a DP algorithm for counting the number of ways of making change for a given amount $n$ using coins of denominations $a_1, a_2, …, a_k$.

You must supply all components of a DP algorithm as well as the running time analysis. Argue informally that your algorithm is correct, i.e., it counts all ways of making change exactly once, following the restriction described above.

### Answer

```kotlin
fun change(n, Coins[a₁...aₖ])
    Combos = [1, 0, ..., 0] // length n+1, first element is 1 because
                            // there is one way to create change for $0.

    for x = 1 to Coins.length
        for y = 1 to Combos.length
            if (Coins[x] <= y)
                Combos[y] += Combos[y - Coins[x]]

    return Combos[n]
```

This change return function runs in $O(nk)$ time, where n is the change we are trying to achieve and k is the number of coins at our disposal. It runs in $O(nk)$ time as it follows the same structure as radix sort and that has a known runtime of $O(nk)$.

This algorithm is correct because we only iterate over each coin value once and line 8 prevents larger coins from being placed before smaller coins. Thus preventing orders such as [4,1,4] and instead returning [1,4,4].

## Problem 2

### Question

A student is at a job fair and wants interviews with hiring managers from different companies. The student diligently submitted requests to meet all managers they were interested in and heard back from $k$ companies. Each of these $k$ companies gave the student a time slot for a one-on-one interview. Unfortunately the interviews overlap in time and the student cannot attend all of them. An algorithm is needed to select the companies the student talks to. All the companies are not equally attractive. So the student comes up with a scoring system (they used the expected income defined as the probability of getting an offer with the expected pay) and associates a score with each employer. Design a DP algorithm to find a list of companies the student can interview with that maximizes this score.

You must supply all components of a DP algorithm as well as the running time analysis. Argue informally that your algorithm is correct.

### Answer

This is simply an application of the knapsack problem. In the original, you are trying to fit a number of items into a knapsack of finite size. You need to optimize the items in your knapsack for maximum value. In this problem, the student is trying to optimize for the highest valued interviews in their limited amount of time.

The algorithm I would use is as follows:

1. Given an array of interviews and values, $O$, and a maximum amount of time, $t$.
2. Create a 2D array, $I$, with lengths $n+1$ and $t+1$ where $n$ is the number of interviews.
3. Using two nested loops, iterate first from 1 to $n$, and then from 1 to $t$. We will call these iterators $a$ and $b$, respectively.
4. Then, check if the value of the $a^{th}$ interview is greater than $b$.
    - If it is, set $I[a][b]$ to $I[a-1][b]$.
    - Otherwise, find the greater value between $I[a-1][b]$ and $O[a].\small{\text{value}} + I[a-1][b-O[a].\small{\text{time}},]$, and set $I[a][b]$ equal to it.
5. Once the loops have run, return $I[n][t]$.

My algorithm is correct as it iterates over every possible interview and maximizes the value of the chosen interviews to fit within the allotted time by choosing the highest value-time options.

As with any other DP algorithm, this runs in $O(nt)$ time where $n$ is the number of interviews and $t$ is the amount of time the student has.
