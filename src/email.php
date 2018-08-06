<!--  -->


<?php 
if (isset($_POST['name']) && isset ($_POST['email'])) {
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'bhs.pradhann@gmail.com';
$subject = "New Message from Website!";
$body = '<html> 
            <body> 
                 <p>Name:<br>'.$name.'</p>
                 <p>Email:<br>'.$email.'</p>
                 <p>Message:<br>'.$message.'</p>
                 </body>
            </html>'; 
            
   //headers
    
$headers = "From: ".$name." <".$email.">\r\n";
//send
$send= mail($to, $subject, $body, $headers);

}
?>