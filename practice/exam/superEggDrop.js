// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。
// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。
// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。
// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

const eggsDrop = function (k, n) {
  const res = new Map()

  function dp (k, n) {
    if (!res.has(k+','+n)) {
      let ans = 0
      if (n === 0){
        ans = 0
      } else if (k === 1) {
        ans = n
      } else {
        let L = 1, R = n
        while (L+1 < R) {
          const x = Math.floor((L + R)/2)
          const t1 = dp(k - 1, x - 1)
          const t2 = dp(k, n - x)
  
          if (t1 > t2) {
            R = x
          } else if (t1 < t2) {
            L = x
          } else {
            L = R = x
          }
        }
        ans = 1 + Math.min(Math.max(dp(k - 1, L - 1), dp(k, n - L)), Math.max(dp(k - 1, R - 1), dp(k, n - R)))
      }
      res.set(k+','+n, ans)
    }
    return res.get(k+','+n)
  }

  return dp(k, n)
}

console.log(eggsDrop(3, 14))