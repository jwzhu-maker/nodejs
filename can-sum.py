def can_sum(target_sum, numbers, memo=None):
    if memo is None:
        memo = {}
    if target_sum in memo:
        return memo[target_sum]
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False

    for num in numbers:
        remainder = target_sum - num
        if can_sum(remainder, numbers, memo) is True:
            memo[target_sum] = True
            return True
    memo[target_sum] = False
    return False


print("can_sum(7, [2, 3]) = ", can_sum(7, [2, 3]))  # true
print("can_sum(7, [5, 3, 4, 7]) = ", can_sum(7, [5, 3, 4, 7]))  # true
print("can_sum(7, [2, 4]) = ", can_sum(7, [2, 4]))  # false
print("can_sum(8, [2, 3, 5]) = ", can_sum(8, [2, 3, 5]))  # true
print("can_sum(3000, [7, 14]) = ", can_sum(3000, [7, 14]))  # false


# Time Complexity: O(n*m)
# Space Complexity: O(m)

# implement it by using tabulation
# Path: can-sum.py
def can_sum_tab(target_sum, numbers):
    table = [False] * (target_sum + 1)
    table[0] = True

    for i in range(target_sum):
        if table[i] is True:
            for num in numbers:
                if i + num <= target_sum:
                    table[i + num] = True
    return table[target_sum]

print("can_sum_tab(7, [2, 3]) = ", can_sum_tab(7, [2, 3]))  # true
print("can_sum_tab(7, [5, 3, 4, 7]) = ", can_sum_tab(7, [5, 3, 4, 7]))  # true
print("can_sum_tab(7, [2, 4]) = ", can_sum_tab(7, [2, 4]))  # false
print("can_sum_tab(8, [2, 3, 5]) = ", can_sum_tab(8, [2, 3, 5]))  # true
print("can_sum_tab(3000, [7, 14]) = ", can_sum_tab(3000, [7, 14]))  # false
