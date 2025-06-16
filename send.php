<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

function sendLoginEmail($userEmail) {
    $mail = new PHPMailer(true);

    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gmail SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'fathimahanazuhair@gmail.com'; // your Gmail
        $mail->Password = 'your_app_password'; // your Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email content
        $mail->setFrom('fathimahanazuhair@gmail.com', 'Login Notifier');
        $mail->addAddress('fathimahanazuhair@gmail.com'); // send to yourself
        $mail->Subject = 'New Login Alert';
        $mail->Body = "Someone just logged into your site with email: $userEmail";

        $mail->send();
    } catch (Exception $e) {
        echo "Email error: {$mail->ErrorInfo}";
    }
}
