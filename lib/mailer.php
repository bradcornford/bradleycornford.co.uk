<?php

if ($_REQUEST['name'] == '' || !filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING)) {
    return false;
}

if ($_REQUEST['email'] == '' || !filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
    return false;
}

if ($_REQUEST['message'] == '' || !filter_var($_REQUEST['message'], FILTER_SANITIZE_STRING)) {
    return false;
}

$to = 'hello@bradleycornford.co.uk';
$subject = 'Contact Form Submission';
$content = 'Contact: ' . $_REQUEST['name'] . '<' . $_REQUEST['email'] . '>' . "\r\n";
$content = 'Message: ' . $_REQUEST['message'];
$headers = 'From:' . $_REQUEST['name'] . '<' . $_REQUEST['email'] . '>';
$content = wordwrap($content, 70, "\r\n");

if (!mail($to, $subject, $content, $headers)) {
    return false;
}

return true;
