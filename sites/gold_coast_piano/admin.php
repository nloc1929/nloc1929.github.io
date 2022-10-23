<!-- NOT FOR USE IN WEBSITE PROPER (ADMINISTRATOR USE ONLY FOR SEARCHING AND TESTING DATABASE ENTRIES) -->
<!-- PHP FILE TO SEARCH DATABASE -->

<!-- DATABASE CONNECTION -->
<?php
  require_once "php/queryDb.php";
?>

<!--=========================================================== CONTACT LIST ================================================================-->
<!-- PHP CODE TO DETERMINE IF SEARCH VALUE IS IN CONTACTLIST DATABASE -->
<?php
  if (isset($_GET["contactName"])) {
    $search = $_GET["contactName"];
    $contacts = getContacts($search);
  } else {
    $search = "";
    $contacts = getContacts();
  }
?>
<!-- PHP CODE TO ENTER NEW CONTACT INTO DATABASE -->
<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fname = $_POST["firstName"];
    $lname = $_POST["lastName"];
    $email = $_POST["userEmail"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $prefContact = $_POST["prefContact"];
    $message = $_POST["contactMsg"];
    $source = $_POST["contactSrc"];
    addContact($fname, $lname, $email, $phone, $address, $prefContact, $message, $source);
  }
?>

<!-- HTML TO DISPLAY FORMS AND TABLE OF CONTACTLIST DATABASE -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="css/forms.css" type="text/css" rel="stylesheet">
    <title>DATABASE SEARCH</title>
  </head>
  <body>
    <!-- CONTACT FORM DATABASE HEADING -->
    <div class="form_heading">
      <h1>CONTACT FORM DATABASE</h1>
    </div>
    <!-- FORM TO ADD NEW CONTACT -->
    <div class="form_section">
      <form method="POST" action="admin.php">
        <hr>
        <p>Add New Contact:</p>
        <hr>
        <span class ="error"> * These fields are required. </span>
        <div class="form_entry">
          <label for="firstName">Please Enter Your First Name: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="firstName" name="firstName" placeholder="First">
          <br>
        </div>
        <div class="form_entry">
          <label for="lastName">Please Enter Your Last Name: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="lastName" name="lastName" placeholder="Last">
          <br>
        </div>
        <div class="form_entry">
          <label for="inputEmail">Please Enter Your Email Address: <span class ="error"> * </span></label>
          <br>
          <input type="email" id="inputEmail" name="inputEmail" placeholder="email@address.com">
          <br>
        </div>
        <div class="form_entry">
          <label for="inputPhone">Please Enter Your Phone Number: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="inputPhone" name="inputPhone" placeholder="0412345678 or 075551234">
          <br>
        </div>
        <div class="form_entry">
          <label for="inputAddress">Please Enter Your Street Address: <span class ="error"> * </span></label>
          <br>
          <textarea id="inputAddress" name="inputAddress" placeholder="123 Fake Street Suburb STATE 4200" rows="3" cols="34"></textarea>
          <br>
        </div>            
        <div class="form_entry">
          <label>Preferred Contact Method: <span class ="error"> * </span></label>
          <br>
          <input type="radio" name="inputPrefContact" id="prefEmail" value="email" required>
          <label for="prefEmail">Email</label>
          <br>
          <input type="radio" name="inputPrefContact" id="prefPhone" value="phone" required>
          <label for="prefPhone">Phone</label>
        </div>
        <div class="form_entry">
          <label for="inputSrc">How did you hear about us? <span class ="error"> * </span></label>
          <br>
          <select id="inputSrc" name="inputSrc" required>
            <option label="- Please Select One -"></option>
            <option value="Google-Search">Google Search</option>
            <option value="Social-Media">Social Media</option>
            <option value="Word-of-Mouth">Word of Mouth</option>
          </select>
        </div>
        <div class="form_entry">
          <label for="inputMessage">Please Enter Your Message: <span class ="error"> * </span></label>
          <br>
          <textarea id="inputMessage" name="inputMessage" placeholder="No special characters" rows="5" cols="50"></textarea>
          <br>
        </div>
        <br>
        <div class="submission">
          <input type="submit" name="submit" value="SUBMIT">
        </div>
      </form>
    </div>
    <!-- FORM FOR SEARCHING CONTACTLIST DATABASE -->
    <div class="form_section">
      <form method="GET" action="admin.php">
        <hr>
        <p>Contact Search:</p>
        <hr>
        <div class="form_entry">
          <label for="contactName">Search: </label>
          <input type="text" id="contactName" name="contactName">
        </div>
        <div class="submission">
          <input type="submit" value="Search">
        </div>
        <br>
        <span>Last Search: <?=$search;?></span>
      </form>
    </div>
    <!-- TABLE TO DISPLAY CONTACTLIST DATABASE INFORMATION -->
    <div class="table">
      <table class="table-admin">
        <thead>
          <tr>
            <th scope="col">Contact ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Preferred Contact</th>
            <th scope="col">Contact Source</th>
            <th scope="col">Contact Message</th>
          </tr>
        </thead>
        <!-- Using PHP shorthand foreach loop to create table body data -->
        <tbody>
          <?php
            foreach ($contacts as $contact):
          ?> 
          <tr>
            <td><?=$contact['CONTACTID']?></td>
            <td><?=$contact['FIRSTNAME']?></td>
            <td><?=$contact['LASTNAME']?></td>
            <td><?=$contact['EMAIL']?></td>
            <td><?=$contact['PHONE']?></td>
            <td><?=$contact['ADDRESS']?></td>
            <td><?=$contact['CONTACTPREF']?></td>
            <td><?=$contact['CONTACTSRC']?></td>
            <td><?=$contact['CONTACTMSG']?></td>
          </tr>
          <?php
            endforeach;
          ?> 
        </tbody>
      </table>
    </div>

<!--=========================================================== BOOKING LIST ================================================================-->
<!-- PHP CODE TO DETERMINE IF SEARCH VALUE IS IN BOOKINGLIST DATABASE -->
<?php
  if (isset($_GET["customerName"])) {
    $search = $_GET["customerName"];
    $customers = getCustomers($search);
  } else {
    $search = "";
    $customers = getCustomers();
  }
?>
<!-- PHP CODE TO ENTER NEW CUSTOMER INTO BOOKINGLIST DATABASE -->
<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fname = $_POST["firstName"];
    $lname = $_POST["lastName"];
    $email = $_POST["userEmail"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $date = $_POST["lessonDate"];
    $time = $_POST["lessonTime"];
    addCustomer($fname, $lname, $email, $phone, $address, $date, $time);
  }
?>
    <!-- HTML TO DISPLAY FORMS AND TABLE OF LESSON BOOKING DATABASE -->
    <div class="form_heading">
      <h1>LESSON BOOKING FORM DATABASE</h1>
    </div>
    <!-- FORM TO ADD NEW CUSTOMER -->
    <div class="form_section">
      <form method="POST" action="admin.php">
        <hr>
        <p>Add New Customer:</p>
        <hr>
        <span class ="error"> * These fields are required. </span>
        <div class="form_entry_1">
          <label for="firstName">Please Enter Your First Name: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="firstName" name="firstName" placeholder="First">
          <br>
        </div>
        <div class="form_entry_2">
          <label for="lastName">Please Enter Your Last Name: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="lastName" name="lastName" placeholder="Last">
          <br>
        </div>
        <div class="form_entry_3">
          <label for="inputEmail">Please Enter Your Email Address: <span class ="error"> * </span></label>
          <br>
          <input type="email" id="inputEmail" name="inputEmail" placeholder="email@address.com">
          <br>
        </div>
        <div class="form_entry_4">
          <label for="inputPhone">Please Enter Your Phone Number: <span class ="error"> * </span></label>
          <br>
          <input type="text" id="inputPhone" name="inputPhone" placeholder="0412345678 or 075551234">
          <br>
        </div>
        <div class="form_entry_5">
          <label for="inputAddress">Please Enter Your Street Address: <span class ="error"> * </span></label>
          <br>
          <textarea id="inputAddress" name="inputAddress" placeholder="123 Fake Street Suburb STATE 4200" rows="3" cols="34"></textarea>
          <br>
        </div>
        <div class="form_entry_6">
          <label for="inputDate">Please Select Preferred Date: <span class ="error"> * </span></label>
          <br>
          <input type="date" id="inputDate" name="inputDate" required>
        </div>
        <div class="form_entry_7">
          <label for="inputTime">Please Select Preferred Time: <span class ="error"> * </span></label>
          <br>
          <select id="inputTime" name="inputTime" required>
            <option label="- Please Select One -"></option>
            <option value="7am-9am">7am - 9am</option>
            <option value="9am-11am">9am - 11am</option>
            <option value="12pm-2pm">12pm - 2pm</option>
            <option value="2pm-4pm">2pm - 4pm</option>
            <option value="4pm-6pm">4pm - 6pm</option>
          </select>
        </div>
        <br>
        <div class="submission">
          <input type="submit" name="submit" value="BOOK">
        </div>
      </form>
    </div>
    <!-- FORM FOR SEARCHING BOOKINGLIST DATABASE -->
    <div class="form_section">
      <form method="GET" action="admin.php">
        <hr>
        <p>Customer Search:</p>
        <hr>
        <div class="form_entry">
          <label for="customerName">Search: </label>
          <input type="text" id="customerName" name="customerName">
        </div>
        <div class="submission">
          <input type="submit" value="Search">
        </div>
        <br>
        <span> Last Search: <?=$search;?></span>
      </form>
    </div>
    <!-- TABLE TO DISPLAY BOOKINGLIST DATABASE INFORMATION -->
    <div class="table">
      <table class="table-admin">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Lesson Date</th>
            <th scope="col">Lesson Time</th>
          </tr>
        </thead>
        <!-- Using PHP shorthand foreach loop to create table body data -->
        <tbody>
          <?php
            foreach ($customers as $customer):
          ?>  
          <tr>
            <td><?=$customer['CUSTOMERID']?></td>
            <td><?=$customer['FIRSTNAME']?></td>
            <td><?=$customer['LASTNAME']?></td>
            <td><?=$customer['EMAIL']?></td>
            <td><?=$customer['PHONE']?></td>
            <td><?=$customer['ADDRESS']?></td>
            <td><?=$customer['LESSONDATE']?></td>
            <td><?=$customer['LESSONTIME']?></td>
          </tr>
          <?php
            endforeach;
          ?> 
        </tbody>
      </table>
    </div>
  </body>
</html>