<?php

function canSum($targetSum, $numbers, &$memo = []): bool {
    if (array_key_exists($targetSum, $memo)) return $memo[$targetSum];
    if ($targetSum === 0) return true;
    if ($targetSum < 0) return false;

    for ($i = 0; $i < count($numbers); $i++) {
        $remainder = $targetSum - $numbers[$i];
        if (canSum($remainder, $numbers, $memo) === true) {
            $memo[$targetSum] = true;
            return true;
        }
    }
    $memo[$targetSum] = false;
    return false;
}

echo canSum(7, [2, 3]) ? 'true' : 'false'; echo "\n"; // true
echo canSum(7, [5, 3, 4, 7]) ? 'true' : 'false';  echo "\n"; // true
echo canSum(7, [2, 4]) ? 'true' : 'false';  echo "\n"; // false
echo canSum(8, [2, 3, 5]) ? 'true' : 'false';  echo "\n"; // true
echo canSum(300, [7, 14]) ? 'true' : 'false';  echo "\n"; // false

?>


<?php

// implement it by using tabulation
// Path: can-sum-tabulation.php

function canSum_tab($targetSum, $numbers): bool {
    $table = array_fill(0, $targetSum + 1, false);
    $table[0] = true;

    for ($i = 0; $i <= $targetSum; $i++) {
        if ($table[$i] === true) {
            for ($j = 0; $j < count($numbers); $j++) {
                if ($i + $numbers[$j] <= $targetSum) {
                    $table[$i + $numbers[$j]] = true;
                }
            }
        }
    }
    return $table[$targetSum];
}

print canSum_tab(7, [2, 3]) ? 'true' : 'false'; echo "\n"; // true
print canSum_tab(7, [5, 3, 4, 7]) ? 'true' : 'false';  echo "\n"; // true
print canSum_tab(7, [2, 4]) ? 'true' : 'false';  echo "\n"; // false
print canSum_tab(8, [2, 3, 5]) ? 'true' : 'false';  echo "\n"; // true
print canSum_tab(300, [7, 14]) ? 'true' : 'false';  echo "\n"; // false


?>