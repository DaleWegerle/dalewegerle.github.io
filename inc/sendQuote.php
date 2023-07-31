

<?php
$cart = json_decode($_POST['cart'], true);
$objectNames = array_keys($cart);
$to = 'youremail@example.com'; // Replace with the desired email address
$subject = 'Object Names';
$message = implode("\n", $objectNames);
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

