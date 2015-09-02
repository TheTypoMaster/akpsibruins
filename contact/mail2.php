<?php 

if(isset($_POST['submit'])) {
  $email_to = "akpsiucla@gmail.com";

  /*function died($error) {
    echo $error."<br/><br/>";
    die();
  }*/

  $error_message = "";

  $name = $POST['name'];
  $subject = "Message from akpsibruins.com: ".$_POST['subject'];
  $email = $_POST['email'];
  $message = $_POST['message']; 

  if(($_POST['name'] == "Name") || ($_POST['subject'] == "Subject") || ($_POST['email'] == "Email") || ($_POST['message'] == "Say Hello!")) {
    $error_message .= "Please fill out all fields of the form.";
  }

    else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $error_message == ""; 
      $error_message .= "Please enter a valid e-mail address."; 
    }
    /*if(strlen($error_message) > 0) {
      died($error_message);
    }*/ 

  $email_message .= "Name: ".$_POST['name']."\n";
  $email_message .= "Email: ".$_POST['email']."\n";
  $email_message .= "Message: ".$_POST['message']."\n";

  if ($error_message == "Please fill out all fields of the form."){
    header('Location: contact_fail.html');
    } 
  elseif ($error_message == "Please enter a valid e-mail address."){
    header('Location: contact_fail2.html');
  }
  elseif (mail($email_to, $subject, $email_message)){
   header('Location: contact_success.html');
    }
  }
?>
