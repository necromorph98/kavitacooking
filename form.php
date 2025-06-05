<?php

//if (isset($_POST['submit']))
//{
	$name= $_POST['name'];
	$email= $_POST['email'];
	$phone= $_POST['phone'];
	$subject= 'New message from www.kavitacooking.com';
	$message= $_POST['comments'];
	
	$message.= "\n\nSent from http://www.kavitacooking.com";

	if ((empty($email)) || (empty($message)) || (empty($name)) || (empty($phone)))
		{
			header('Location: index.html');
		}
	else
		{
			$to= 'Kavita<kavitagupta70@ymail.com>';
			$msg= "Name: $name\n\n"."Email: $email\n\n"."Phone: $phone\n\n"."Message: \n"."$message";
			mail($to, $subject, $msg, 'From: '.$name.'<'.$email.'>');
			$name= '';
			$email= '';
			$phone= '';
			$message= '';
		}
//}
?>
