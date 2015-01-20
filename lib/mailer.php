<?php

if ($_REQUEST['name'] == '' || !is_string($_REQUEST['name'])) {
    return false;
}

if ($_REQUEST['email'] == '' || !filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
    return false;
}

if ($_REQUEST['message'] == '' || !is_string($_REQUEST['message'])) {
    return false;
}

$email = filter_var($_REQUEST['email'], FILTER_SANITIZE_EMAIL);
$name = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING);
$message = filter_var($_REQUEST['message'], FILTER_SANITIZE_STRING);

$to = 'me@bradleycornford.co.uk';

$subject = 'Contact Form Submission';

$content = '<html><body>';
$content .= '<h1>Contact Form Submission</h1>';
$content .= '<h2>' . date('r') . '</h2>';
$content .= '<h3>Contact</h3>';
$content .= '<p>' . $name . ' <' . $email . '></p>';
$content .= '<h3>Message</h3>';
$content .= '<p>' . wordwrap($message, 70, '<br/>') . '</p>';
$content .= '</body></html>';

$headers = 'From:' . $name . '<' . $email . '>';
$headers .= 'Reply-To: ' . $name . '<' . $email . '>' . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";


if (!mail($to, $subject, $content, $headers)) {
    return false;
}

return true;
