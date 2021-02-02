<?php

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($_POST["submit"]))
{
	$Category=$_POST["category"];
	$Marital=$_POST["marital-status"];
    $Name=$_POST["name"];
    $Last=$_POST["last-name"];
    $DOB=$_POST["dob"];
    $Age=$_POST["age"];
    $Height=$_POST["height"];
    $Landline=$_POST["landline"];
    $Email=$_POST["email"];
    $Mobile=$_POST["mobile"];
    $Address=$_POST["address"];
    $City=$_POST["city"];
    $Pincode=$_POST["pincode"];
    $Photo=$_POST["photo"];

	{
$to = "s.developer.dhanjal@gmail.com";
$subject = "Query";
$message = " 
<html>
<body>
<h3><strong>Query</h3>
<table border=1 style='width:100%;'>
<tr>
	<th>Category</th>
	<td>$Category</td>
</tr>
<tr>
	<th>Marital-Status</th>
	<td>$Marital</td>
</tr>
<tr>
	<th>Name</th>
	<td>$Name</td>
</tr>
<tr>
	<th>Last-name</th>
	<td>$Last</td>
</tr>
<tr>
	<th>DOB</th>
	<td>$DOB</td>
</tr>
<tr>
	<th>Age</th>
	<td>$Age</td>
</tr>
<tr>
	<th>Height</th>
	<td>$Height</td>
</tr>
<tr>
	<th>Landline</th>
	<td>$Landline</td>
</tr>
<tr>
	<th>Email</th>
	<td>$Email</td>
</tr>
<tr>
	<th>Mobile</th>
	<td>$Mobile</td>
</tr>
<tr>
	<th>Address</th>
	<td>$Address</td>
</tr>
<tr>
	<th>City</th>
	<td>$City</td>
</tr>
<tr>
	<th>Pincode</th>
	<td>$Pincode</td>
</tr>
<tr>
	<th>Photo</th>
	<td>$Photo</td>
</tr>
</table>
</body>
</html>
";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: kavitajangra.1014@gmail.com,' . "\r\n";
$headers .= 'BCc: info@7scalespageant.com' . "\r\n";
mail($to,$subject, $message,$headers);
//============ close =================
		
		echo "<script>alert('Submit Query Successfully ')</script>";
	}
}
?>
