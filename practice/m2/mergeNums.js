// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，
// 使 nums1 成为一个有序数组。
// 说明：
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
function mergeNums (nums1, m, nums2, n) {
  let i = m-1, j = n-1, k = n + m -1
  while (i>=0 && j>=0) {
    const val_1 = nums1[i]
    const val_2 = nums2[j]
    if (val_1 > val_2) {
      nums1[k] = val_1
      i--
    }else {
      nums1[k] = val_2
      j--
    }
    k--
  }
  while (j>=0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
}

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

mergeNums(nums1, m, nums2, n)
console.log(nums1)