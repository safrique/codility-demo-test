<?php

//echo "<h1>Samples</h1>";
//// https://app.codility.com/public-report-detail/
//
//
//echo "<h2>Sample 1:</h2>";
//echo "<h4>Array leader</h4>";
//
//class Solution
//{
//    public function __construct() { return $this; }
//
//    public function solution($A)
//    {
//        $b = [];
//        for ($i = 0, $j = count($A); $i < $j; $i++) {
//            $p = $A[$i];
//            if (array_key_exists($p, $b)) {
//                $b["$p"] = $b["$p"] + 1;
//            } else {
//                $b["$p"] = 1;
//            }
//        }
//        echo "Values count: ";
//        print_r($b);
//        echo "<br>";
//
//        $border = (count($A) + 1) / 2;
//
//        foreach ($b as $key => $val) {
//            if ($val > $border) {
//                return $key;
//            }
//        }
//        return -1;
//    }
//}
//
//
//$A = [];
//$A[0] = 2;
//$A[1] = 2;
//$A[2] = 2;
//$A[3] = 2;
//$A[4] = 2;
//$A[5] = 3;
//$A[6] = 4;
//$A[7] = 4;
//$A[8] = 4;
//$A[9] = 6;
//echo "Given array 1: ";
//print_r($A);
//echo "<br>";
//echo "<strong>leader:</strong> " . (new Solution())->solution($A) . "<br><br>";
//
//$A = [];
//$A[0] = 1;
//$A[1] = 1;
//$A[2] = 1;
//$A[3] = 1;
//$A[4] = 50;
//echo "Given array 2: ";
//print_r($A);
//echo "<br>";
//echo "<strong>leader:</strong> " . (new Solution())->solution($A) . "<br><br>";
//
//
//echo "<h2>Sample 2:</h2>";
//echo "<h4>Equilibrium index</h4>";
//
//function solution($A)
//{
//    $b = [];
//
//    for ($i = 1, $j = count($A); $i < $j; $i++) {
//        $pre = 0;
//        $post = 0;
//
//        for ($k = 0; $k < $i; $k++) {
//            $pre += $A[$k];
//        }
//
//        for ($k = $i + 1; $k < $j; $k++) {
//            $post += $A[$k];
//        }
//
//        if ($pre == $post) {
//            array_push($b, $i);
//        }
//
//        echo "A[$i]= $A[$i] -- pre= $pre -- post= $post<br>";
//    }
//
//    return $b;
//}
//
//$A = [];
//$A[0] = -1;
//$A[1] = 3;
//$A[2] = -4;
//$A[3] = 5;
//$A[4] = 1;
//$A[5] = -6;
//$A[6] = 2;
//$A[7] = 1;
//echo "Given array 1: ";
//print_r($A);
//echo "<br>";
//echo "<strong>Equilibrium index:</strong><br>";
//print_r(solution($A));
//echo "<br><br>";


echo "<h1>Demo Test</h1>";
// https://app.codility.com/demo/take-sample-test/?utm_medium=email
// Results: https://app.codility.com/demo/results/demo3JU5Y8-Z4A/

function solution($A)
{
    sort($A);

    if ($A[0] > ($smallest = 1)) {
        return $smallest;
    }

    $j = count($A);

    if ($j == 1) {
        return ($smallest + ($A[0] == $smallest ? 1 : 0));
    }

    for ($i = 0; $i < $j; $i++) {
        if ($A[$i] > $smallest + 1) {
            return $smallest + 1;
        }
        $smallest = (($A[$i] > 0 && $A[$i] > $smallest) ? $A[$i] : $smallest);
    }

    return ($smallest + ($smallest == 1 ? 0 : 1));
}

$A = [1, 3, 6, 4, 1, 2];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [1, 2, 3];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [-1, -3];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [-1];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [1];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [-1000000];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";

$A = [1000000];
print_r($A);
echo "<br>smallest: " . solution($A) . "<br><br>";