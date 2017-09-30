<?php

 header("Access-Control-Allow-Origin: *");

// error logging for debugging
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// If you are using Composer (recommended)
//require 'sendgrid-php/vendor/autoload.php';

// If you are not using Composer
require("sendgrid-php/sendgrid-php.php");

$from = new SendGrid\Email($_POST["name"], $_POST["email"]);
$subject = "Contact Request - " . $_POST["company"] . " : " . $_POST["subject"];
$to = new SendGrid\Email("Itenium", "info@itenium.be");
$content = new SendGrid\Content("text/plain", $_POST["message"]);
$mail = new SendGrid\Mail($from, $subject, $to, $content);

require("itenium-contact-form-processor-key.ini.php");
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
exit();
// print_r($response->headers());
// echo $response->body();
?>