<?php

   class MyDB extends SQLite3
   {
      function __construct()
      {
            $this->open('goldCoastPiano.db');
      }
   }

/*========================================================= CUSTOMERS DATABASE ===============================================================*/

   /* CUSTOMERS DATABASE TABLE SEARCH */
   function getCustomers($searchTerm = null) {
      
      $db = new MyDB();
      if(!$db){
         echo '<script type="text/javascript">alert("'.$db->lastErrorMsg().'");</script>';
      } else {
         //echo "Opened database successfully\n";
      }
      if(!$searchTerm) {
         $sql ='SELECT * from BOOKINGLIST;';
      } else {
         $sql ='SELECT * FROM BOOKINGLIST WHERE FIRSTNAME LIKE "'.$searchTerm.'" OR LASTNAME LIKE "'.$searchTerm.'" OR EMAIL LIKE "'.$searchTerm.'" OR PHONE LIKE "'.$searchTerm.'" OR ADDRESS LIKE "'.$searchTerm.'" OR LESSONDATE LIKE "'.$searchTerm.'" OR LESSONTIME LIKE "'.$searchTerm.'" ';
      }
      $ret = $db->query($sql);
      $array = [];
      if(!$ret){
        echo $db->lastErrorMsg();
        return [];
      } else {
         while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            $array[] = $row;
         }
         $db->close();
         return $array;
      }
   }

   /* ADD NEW CUSTOMER TO DATABASE FORM */
   function addCustomer($fname, $lname, $email, $phone, $address, $date, $time) {
      
      $db = new MyDB();
      if(!$db){
         echo '<script type="text/javascript">alert("'.$db->lastErrorMsg().'");</script>';
      } else {
         //echo "Opened database successfully\n";
      }

      $sql ='INSERT INTO BOOKINGLIST (FIRSTNAME, LASTNAME, EMAIL, PHONE, ADDRESS, LESSONDATE, LESSONTIME) VALUES ("'.$fname.'", "'.$lname.'", "'.$email.'", "'.$phone.'", "'.$address.'", "'.$date.'", "'.$time.'");';
      $db->query($sql);
   }

/*======================================================== CONTACTS DATABASE =================================================================*/

   /* CONTACTS DATABASE TABLE SEARCH */
   function getContacts($searchTerm = null) {
      
      $db = new MyDB();
      if(!$db){
         echo '<script type="text/javascript">alert("'.$db->lastErrorMsg().'");</script>';
      } else {
         //echo "Opened database successfully\n";
      }
      if(!$searchTerm) {
         $sql ='SELECT * from CONTACTLIST;';
      } else {
         $sql ='SELECT * FROM CONTACTLIST WHERE FIRSTNAME LIKE "'.$searchTerm.'" OR LASTNAME LIKE "'.$searchTerm.'" OR EMAIL LIKE "'.$searchTerm.'" OR PHONE LIKE "'.$searchTerm.'" OR ADDRESS LIKE "'.$searchTerm.'" OR CONTACTPREF LIKE "'.$searchTerm.'" OR CONTACTMSG LIKE "'.$searchTerm.'" OR CONTACTSRC LIKE "'.$searchTerm.'" ';
      }
      $ret = $db->query($sql);
      $array = [];
      if(!$ret){
        echo $db->lastErrorMsg();
        return [];
      } else {
         while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            $array[] = $row;
         }
         $db->close();
         return $array;
      }
   }
   
   /* ADD NEW CONTACT TO DATABASE FORM */
   function addContact($fname, $lname, $email, $phone, $address, $prefContact, $message, $source) {
      
      $db = new MyDB();
      if(!$db){
         echo '<script type="text/javascript">alert("'.$db->lastErrorMsg().'");</script>';
      } else {
         //echo "Opened database successfully\n";
      }

      $sql ='INSERT INTO CONTACTLIST (FIRSTNAME, LASTNAME, EMAIL, PHONE, ADDRESS, CONTACTPREF, CONTACTMSG, CONTACTSRC) VALUES ("'.$fname.'", "'.$lname.'", "'.$email.'", "'.$phone.'", "'.$address.'", "'.$prefContact.'", "'.$message.'", "'.$source.'");';
      $db->query($sql);
   }
?>