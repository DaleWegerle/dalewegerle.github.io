

<?php
$cart = json_decode($_POST['cart'], true);
$objectNames = array_keys($cart);
$objectQty = array_keys($cart).quantity;
$to = 'dalewegerledev@gmail.com'; // Replace with the desired email address
$subject = 'Quote Request';
$message = implode("\n", $objectNames);
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

