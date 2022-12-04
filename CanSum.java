import java.util.HashMap;

public class CanSum {

    public static void main(String[] args) {
        int[] arr = {7, 14, 3};
        int sum = 3000;
        System.out.println(canSum(sum, arr));
        System.out.println(canSum2(sum, arr, new HashMap<Integer, Boolean>()));
        System.out.println(canSum3(sum, arr));
    }

    /**
     * This is the function to find out if the targeted sum can be achieved by adding the numbers in the integer array.
     * This function does not use memory to store the results of the sub-problems.
     * Time Complexity: O(n^m)
     * Space Complexity: O(m)
     * The time complexity is O(n^m) because we have to iterate through the array n times for each element in the array.
     * The space complexity is O(m) because we have to store m elements in the call stack.
     * @param arr any integer array of numbers
     * @param sum any integer which is the target sum to be achieved
     * @return true if the target sum can be achieved by adding any combination of numbers from the array
     */
    public static boolean canSum(int sum, int[] arr) {
        if (sum == 0) {
            return true;
        }
        if (sum < 0) {
            return false;
        }
        for (int i = 0; i < arr.length; i++) {
            int remainder = sum - arr[i];
            if (canSum(remainder, arr)) {
                return true;
            }
        }
        return false;
    }

    /**
     * This is the function to find out if the targeted sum can be achieved by adding the numbers in the integer array.
     * This function uses memory to store the results of the sub-problems.
     * Time Complexity: O(n*m)
     * Space Complexity: O(m)
     * The time complexity is O(n*m) because we have to iterate through the array n times for each element in the array.
     * The space complexity is O(m) because we have to store m elements in the call stack.
     * @param targetSum any integer which is the target sum to be achieved
     * @param numbers any integer array of numbers
     * @param memo a HashMap to store the results of the sub-problems
     * @return true if the target sum can be achieved by adding any combination of numbers from the array
     */
    public static boolean canSum2(int targetSum, int[] numbers, HashMap<Integer, Boolean> memo) {
        if (memo.containsKey(targetSum)) return memo.get(targetSum);
        if (targetSum == 0) return true;
        if (targetSum < 0) return false;
    
        for (int num : numbers) {
            int remainder = targetSum - num;
            if (canSum2(remainder, numbers, memo) == true) {
                memo.put(targetSum, true);
                return true;
            }
        }
        memo.put(targetSum, false);
        return false;
    }

    /**
     * Implement it by using tabulation.
     */
    public static boolean canSum3(int targetSum, int[] numbers) {
        boolean[] table = new boolean[targetSum + 1];
        table[0] = true;
        for (int i = 0; i <= targetSum; i++) {
            if (table[i] == true) {
                for (int num : numbers) {
                    if (i + num <= targetSum) {
                        table[i + num] = true;
                    }
                }
            }
        }
        return table[targetSum];
    }

}


