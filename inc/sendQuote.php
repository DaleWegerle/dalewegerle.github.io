<?php
/*
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
*/



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
  
  // Add this part for reCAPTCHA validation
  $recaptchaResponse = $formData['g-recaptcha-response'];
  $secretKey = '6LdZoykoAAAAAH9gdkPEILJPaiu5Ncg21LaMqciH';
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptchaResponse");
  $responseKeys = json_decode($response,true);
  
  if(intval($responseKeys["success"]) !== 1) {
    // Not verified - show a message to the user
    exit('reCAPTCHA verification failed. Please try again.');
  }
  
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


/*
//AJAX Handeler


// Get the request body
$data = json_decode(file_get_contents('php://input'), true);

// Get the form data and cart data from the request body
$formData = $data['formData'];
$cartData = $data['cart'];

// Get the reCAPTCHA response from the form data
$recaptchaResponse = $formData['g-recaptcha-response'];
unset($formData['g-recaptcha-response']); // Remove the reCAPTCHA response from the form data

// Verify the reCAPTCHA response
$recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
$recaptchaSecret = '6LdZoykoAAAAAH9gdkPEILJPaiu5Ncg21LaMqciH'; // Replace this with your actual secret key

$recaptchaVerifyUrl = $recaptchaUrl . '?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse;
$verifyResponse = file_get_contents($recaptchaVerifyUrl);
$responseData = json_decode($verifyResponse);

if (!$responseData->success) {
    // The reCAPTCHA check failed, return an error message
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA check failed']);
    exit;
}

// Prepare the email
$to = 'trevor@hagar.co.za'; // Replace this with your actual email address
$subject = 'New order';
$message = "You have a new order:\n\n" . print_r($cartData, true) . "\n\nCustomer details:\n\n" . print_r($formData, true);

// Send the email (this is a very basic example, you might want to use a library or service for this in a real application)
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}*/

?>


  
