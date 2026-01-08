<?php
//Input
$input = fgets(STDIN);

// Split the input into milk solid-not-fat and milk fat
//let A be milk solids-not-fat
//let B be milk fat
$numbers = explode(" ", $input);
$A = $numbers[0];  // milk solids-not-fat
$B = $numbers[1];  // milk fat

// Check constraints
if ($A < 0 || $A > 100) {
    echo "Error: A must be integer between 0 and 100";
    exit;
}

if ($B < 0 || $B > 100) {
    echo "Error: B must be integer between 0 and 100";
    exit;
}

if ($A + $B > 100) {
    echo "Error: A + B cannot be integer more than 100";
    exit;
}

// milk solid consist of milk fat and milk solids
$x = $A + $B;  // milk solid = (B)milk fat + milk solids-not-fat(A)
$y = $B;       // milk fat

// category
if ($x >= 15 && $y >= 8) {
    echo 1;  // ice cream
} elseif ($x >= 10 && $y >= 3) {
    echo 2;  // ice milk
} elseif ($x >= 3) {
    echo 3;  // lacto ice
} else {
    echo 4;  // flavored ice
}
?>