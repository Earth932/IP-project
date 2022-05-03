<?php
    require_once 'person.php';

    $firstname = $lastname = $email = $password = $address = $tel = "";
    $firstname_err = $lastname_err = $email_err = $password_err = $address_err = $tel_err = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // Validate firstname
        $input_firstname = trim($_POST["firstname"]);
        if(empty($input_firstname)) {
            $firstname_err = "Please enter a firstname.";
        } elseif (!filter_var(trim($_POST["firstname"]), FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[a-zA-Z'-.\s]+$/")))) {
            $firstname_err = "Please enter a valid firstname.";
        } else {
            $firstname = $input_firstname;
        }
        // Validate lastname
        $input_lastname = trim($_POST["lastname"]);
        if(empty($input_lastname)) {
            $lastname_err = "Please enter a lastname.";
        } elseif(!filter_var(trim($_POST["lastname"]),FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[a-zA-Z'-.\s]+$/")))) {
            $lastname_err = "Please enter a valid lastname.";
        } else {
            $lastname = $input_lastname;
        }
        // Validate email
        $input_email = trim($_POST["email"]);
        if(empty($input_email)) {
            $email_err = "Please enter a email.";
        } else {
            $email = $input_email;
        }
        // Validate password
        $input_password = trim($_POST["password"]);
        if(empty($input_password)) {
            $password_err = "Please enter a password.";
        } else {
            $password = $input_password;
        }
        // Validate address
        $input_address = trim($_POST["address"]);
        if(empty($input_address)) {
            $address_err = "Please enter a address.";
        } else {
            $address = $input_address;
        }
        // Validate tel
        $input_tel = trim($_POST["tel"]);
        if(empty($input_tel)) {
            $tel_err = "Please enter a tel.";
        } else {
            $tel = $input_tel;
        }

        if(empty($firstname_err) && empty($lastname_err) && empty($email_err) && empty($password_err) && empty($address_err) && empty($tel_err)){
            // prepare an insert statement
            $sql = "INSERT INTO person (firstname, lastname, email, password, address, tel) VALUES (?, ?, ?, ?, ?, ?)";

            if($stmt = mysqli_prepare($link, $sql)){
                
                mysqli_stmt_bind_param($stmt, "ssssss", $param_firstname, $param_lastname, $paramemail, $parampassword, $paramaddress, $paramtel);

                $param_firstname = $firstname;
                $param_lastname = $lastname;
                $paramemail = $email;
                $parampassword = $password;
                $paramaddress = $address;
                $paramtel = $tel;

                if(mysqli_stmt_execute($stmt)) {
                    header("location: index.php");
                    exit();
                } else {
                    echo "Something went wrong.";
                }
            }
            mysqli_stmt_close($stmt);
        }
        mysqli_close($link);

    }
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style>
        .wrapper {
            width: 500px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="wraper">
        <div class="container-fluis">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header">
                        <h2>
                            Create Person
                        </h2>
                    </div>
                    <p>Please fill this form and submit</p>
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <div class="form-group <?php echo (!empty($firstname_err)) ? 'has-error' : ''; ?>">
                            <label>Firstname</label>
                            <input type="text" name="firstname" class="form-control" value="<?php echo $firstname; ?>">
                            <span class="help-block"><?php echo $firstname_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($lastname_err)) ? 'has-error' : ''; ?>">
                            <label>Lastname</label>
                            <input type="text" name="lastname" class="form-control" value="<?php echo $lastname; ?>">
                            <span class="help-block"><?php echo $lastname_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($email_err)) ? 'has-error' : ''; ?>">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control" value="<?php echo $email; ?>">
                            <span class="help-block"><?php echo $email_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                            <label>Password</label>
                            <input type="text" name="password" class="form-control" value="<?php echo $password; ?>">
                            <span class="help-block"><?php echo $password_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($address_err)) ? 'has-error' : ''; ?>">
                            <label>Address</label>
                            <input type="text" name="address" class="form-control" value="<?php echo $address; ?>">
                            <span class="help-block"><?php echo $address_err; ?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($tel_err)) ? 'has-error' : ''; ?>">
                            <label>Tel</label>
                            <input type="text" name="tel" class="form-control" value="<?php echo $tel; ?>">
                            <span class="help-block"><?php echo $tel_err; ?></span>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Submit">
                        <a href="index.php" class="btn btn-default">Cancel</a>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>