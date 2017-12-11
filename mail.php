<?php

$recepient = "ania.korotkovafd@gmail.com";
$sitename = "Portfolio";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Name: $name \nPhone: $phone \nMail: $email";

$pagetitle = "New message \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");