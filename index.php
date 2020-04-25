<?php

echo "<h1>Samples</h1>";
// https://app.codility.com/public-report-detail/


echo "<h2>Sample 1:</h2>";

function getLeader($A)
{
    $b = [];
    for ($i = 0, $j = count($A); $i < $j; $i++) {
        $p = $A[$i];
        if (array_key_exists($p, $b)) {
            $b["$p"] = $b["$p"] + 1;
        } else {
            $b["$p"] = 1;
        }
    }
    echo "Values count: ";
    print_r($b);
    echo "<br>";

    $border = (count($A) + 1) / 2;

    foreach ($b as $key => $val) {
        if ($val > $border) {
            return $key;
        }
    }
    return -1;
}


$A = [];
$A[0] = 2;
$A[1] = 2;
$A[2] = 2;
$A[3] = 2;
$A[4] = 2;
$A[5] = 3;
$A[6] = 4;
$A[7] = 4;
$A[8] = 4;
$A[9] = 6;
echo "Given array 1: ";
print_r($A);
echo "<br>";
echo "leader: " . getLeader($A) . "<br><br>";

$A = [];
$A[0] = 1;
$A[1] = 1;
$A[2] = 1;
$A[3] = 1;
$A[4] = 50;
echo "Given array 2: ";
print_r($A);
echo "<br>";
echo "leader: " . getLeader($A) . "<br><br>";


echo "<h2>Sample 1:</h2>";
