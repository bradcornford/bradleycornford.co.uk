<?php

if ($_POST['name'] == '') {
    return false;
}

if ($_POST['email'] == '' || !filter_var($_POST['name'], FILTER_VALIDATE_EMAIL)) {
    return false;
}

if ($_POST['message'] == '') {
    return false;
}

$to = 'hello@bradleycornford.co.uk';
$subject = 'Contact Form Submission';
$content = 'Contact: ' . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";
$content = 'Message: ' . $_POST['message'];
$headers = 'From:' . $_POST['name'] . '<' . $_POST['email'] . '>';

$content = wordwrap($content, 70, "\r\n");

if (!mail($to, $subject, $content, $headers)) {
    return false;
}

return true;
