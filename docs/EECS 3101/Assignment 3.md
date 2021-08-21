## Problem 1

### Question

Given an undirected graph $G=(V,E)$, give the pseudocode of an algorithm that computes the length of the shortest cycle in the graph.

### Answer

```kotlin 
// s      = shortest cycle
// dis    = array of distance values from v to the key
// pre    = array of previous nodes
// n.adj  = nodes adjacent to n
// dist() = distance between nodes

fun shortest(G)
  s = ꝏ
  for each vertex v in G.V
    for each vertex x in G.V
      dis[x] = ꝏ
      pre[x] = null
    dis[v] = 0
    N = G.V
    while N.length > 0
      n = N.min
      delete N[n]
      for each a in n.adj
        t = dis[n] + dist(n, a)
        if t < dis[a]
          dis[a] = t
          pre[a] = n
        else
          s = min(s, dis[a] + dis[n])
  return s
```

## Problem 2

### Question

Given an undirected graph $G=(V,E)$, give the pseudocode of an algorithm that checks whether each connected component in the graph has the same size (i.e., number of vertices).

### Answer

```kotlin
// pre    = size of previously checked nodes
// v.vis  = property denoting if the node was visited
// v.adj  = property containing the adjacent nodes

fun sameSize(G)
    pre = ꝏ
    for each v in G.v
      v.vis = false
    for each v in G.v
      if !v.vis
        t = DFS(v)
        if t != pre && pre != ꝏ
          return false
        else 
          t = pre 
    return true

fun DFS(v)
  v.vis = true
  for each y in v.adj
    if !y.vis
      DFS(y)
```

## Problem 3

### Question

Given a connected, weighted, undirected graph $G=(V,E)$ and and edge $e=(u,v)$ such that $e∈E$, give the pseudocode of an algorithm that find the minimum spanning tree containing $e$.

### Answer

I've implemented a modified Prim's Algorithm to find the MST containing $e.$ I did this by selecting $e.u$ and $e.v$ as the starting nodes to guarantee that they are in the MST.

```kotlin
fun MSTe(G, w, e)
  for each v in G.V
    v.key = (v == e.u || v == e.v) ? 0 : ꝏ

  Queue = G.V
  arr = null

  while Queue.length > 0
    v = extMin(Queue)
    for each x in v.adj
      if Queue.contains(x) && w(v, x) < x.key
        x.key = w(v, x)
        arr.push(x)

  return arr
```
