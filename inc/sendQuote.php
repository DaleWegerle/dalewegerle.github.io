<?php
// Set the recipient email address
$to = 'trevor@hagar.co.za';

// Set the subject of the email
$subject = 'Quote Request';

// Get the raw POST data from the request body
$data = file_get_contents('php://input');

// Decode the JSON data
$cartData = json_decode($data, true);

// Extract the cart and form data from the decoded data
$cart = $cartData['cart'];
$formData = $cartData['formData'];

// Build the email message body
$message = "Cart Data:\n\n";
foreach ($cart as $item) {
  $message .= "Product: {$item['product']}\n";
  $message .= "Quantity: {$item['quantity']}\n\n";
}

$message .= "\nForm Data:\n\n";
$message .= "Name: {$formData['contactName']}\n";
$message .= "Surname: {$formData['contactSurname']}\n";
$message .= "Email: {$formData['contactEmail']}\n";
$message .= "Contact Number: {$formData['contactNumber']}\n";
$message .= "Company/Organisation Name: {$formData['contactCompany']}\n";
$message .= "VAT Number: {$formData['contactVAT']}\n";
$message .= "Address Line 1: {$formData['contactLineOne']}\n";
$message .= "Address Line 2: {$formData['contactLineTwo']}\n";
$message .= "City: {$formData['contactCity']}\n";
$message .= "Province: {$formData['contactProvince']}\n";
$message .= "Postal Code: {$formData['contactPostal']}\n";

// Set the email headers
$headers = 'From: webmaster@hagar.co.za' . "\r\n" .
    'Reply-To: webmaster@hagar.co.za' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
mail($to, $subject, $message, $headers);
