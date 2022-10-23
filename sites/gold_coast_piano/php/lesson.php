<!-- PHP CODE TO VERIFY LESSON BOOKING INPUTS AND ADD LESSON BOOKING FORM ENTRIES TO DATABASE -->

<!-- DATABASE CONNECTION -->
<?php
  require_once "queryDb.php";
?>

<!-- PHP CODE TO VALIDATE FORM ENTRIES -->
<?php           
    /* Variables for Form Entries assigned to empty strings (name = variable) */
    $firstName = "";
    $lastName = "";
    $userEmail = "";
    $userPhone = "";
    $userAddress = "";
    /* Variables for Form Input ERROR messages assigned to empty strings */        
    $firstNameError = "";
    $lastNameError = "";
    $userEmailError = "";
    $userPhoneError = "";
    $userAddressError = "";
    /* Variables for Form Input SUCCESS messages assigned to empty strings */
    $firstNameSuccess = "";
    $lastNameSuccess = "";
    $userEmailSuccess = "";
    $userPhoneSuccess = "";
    $userAddressSuccess = "";
    /* Variables for complete Form Entry messages and Regex Validation Patterns */
    $submissionMsg = "";
    $validationMsg = "";
    /* Regex pattern: [cannot start with spaces or numbers][only letters] and [only spaces] */
    $patternName = "/^[^' '][A-Za-z]*[' ']*/";
    /* Regex pattern: [only phone formats with 9 or 10 numbers: (00)000 0000 | (00)-000-0000 | 00-000-0000 | 0000 000 000 | 0000-000-000 ] */
    $patternPhone = "/^['\(']?\d\d['\)']?[' '|'\-']?\d\d[' '|'\-']?\d[' '|'\-']?\d\d[' '|'\-']?\d\d[\d]?$/";
    /* Regex pattern: [cannot start with spaces][only letters, spaces, numbers and characters (-,/) are allowed] */
    $patternAddress = "/^[^' '][A-Za-z-' '0-9]*['\-'|','|'\/']*/";

    /* If form entries are using POST method, assign posted values to variables */
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $userEmail = $_POST["inputEmail"];
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $userPhone = $_POST["inputPhone"];
        $userAddress = $_POST["inputAddress"];
        $userDate = $_POST["inputDate"];
        $userTime = $_POST["inputTime"];
        // If (email entry does NOT pass filter validation function) ? display error messages, else: display success message 
        if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
            $userEmailError = "Please enter a valid email address.";
            $validationMsg = "All fields must be filled in. Please try again.";
        } else {
            $userEmailSuccess= "Successful!";
        }
        // If (first name entry does NOT Regex validation pattern or is empty) ? display error messages, else: display success message
        if (!preg_match($patternName, $firstName)) {
            $firstNameError = "No numbers or special characters.";
            $validationMsg = "Please retry and submit form again.";
        } elseif (empty($_POST["firstName"])) {
            $firstNameError = "Please enter your First Name.";
            $validationMsg = "All fields must be filled in. Please try again.";
        } else {
            $firstNameSuccess = "Successful!";
        }
        // If (last name entry does NOT Regex validation pattern or is empty) ? display error messages, else: display success message
        if (!preg_match($patternName, $lastName)) {
            $lastNameError = "No numbers or special characters.";
            $validationMsg = "Please retry and submit form again.";
        } elseif (empty($_POST["lastName"])) {
            $lastNameError = "Please enter your Last Name.";
            $validationMsg = "All fields must be filled in. Please try again.";
        } else {
            $lastNameSuccess = "Successful!";
        }
        // If (phone entry does NOT Regex validation pattern or is empty) ? display error messages, else: display success message
        if (!preg_match($patternPhone, $userPhone)) {
            $userPhoneError = "Please enter a valid phone number.";
            $validationMsg = "Please retry and submit form again.";
        } elseif (empty($_POST["inputPhone"])) {
            $userPhoneError = "Please enter your Phone Number.";
            $validationMsg = "All fields must be filled in. Please try again.";
        } else {
            $userPhoneSuccess = "Successful!";
        }
        // If (address entry does NOT Regex validation pattern or is empty) ? display error messages, else: display success message
        if (!preg_match($patternAddress, $userAddress)) {
            $userAddressError = "Please enter a valid address.";
            $validationMsg = "Please retry and submit form again.";
        } elseif (empty($_POST["inputAddress"])) {
            $userAddressError = "Please enter your Address.";
            $validationMsg = "All fields must be filled in. Please try again.";
        } else {
            $userAddressSuccess = "Successful!";
        }
        /* If checked form entries pass validation, add ALL form entries to CUSTOMER Database and send confirmation email */
        if ($userEmailSuccess === "Successful!" && $firstNameSuccess === "Successful!" && $lastNameSuccess === "Successful!" 
        && $userPhoneSuccess === "Successful!" && $userAddressSuccess === "Successful!") {
            $submissionMsg = "Form Submission Successful!";
            $fname = $firstName;
            $lname = $lastName;
            $email = $userEmail;
            $phone = $userPhone;
            $address = $userAddress;
            $date = $userDate;
            $time = $userTime;
            addCustomer($fname, $lname, $email, $phone, $address, $date, $time);
            /* Send user booking information in confirmation email to user and host */
            $to = "$email, goldcoastpiano@gmail.com";
            $subject = "Gold Coast Piano Lessons";
            $message = "
                <html>
                <head>
                <title>Gold Coast Piano Lessons</title>
                </head>
                <body>
                <p>Thank you $fname for your message! We will respond as soon as possible.</p>
                <table>
                <tr>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Address:</th>
                <th>Date:</th>
                <th>Time:</th>
                </tr>
                <tr>
                <td><?=$fname;?></td>
                <td><?=$lname;?></td>
                <td><?=$address;?></td>
                <td><?=$date;?></td>
                <td><?=$time;?></td>
                </tr>
                </table>
                </body>
                </html>
            ";
            /* Email and HTML content protocols */
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers = "From: goldcoastpiano@gmail.com";
            mail($to,$subject,$message,$headers);
            /* On successful completion of form: Open Confirmation Page */
            header("Location: bookingConfirmation.html");
            exit;
        }
    }
?>