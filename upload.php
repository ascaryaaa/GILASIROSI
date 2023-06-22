<!DOCTYPE html>
<html>
    <head>
        <title>Insert Image to MySQL</title>
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxilKgxUyJq13dy" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
    </head>
    <body>
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="file" name="userfile[]" value="" multiple="">
            <input type="submit" name="submit" value="Upload">
        </form>
    </body>


<?php

$mysqli = new mysqli('localhost','root','root','gilasirosi') or die($mysqli->connect_error);
$table = 'barang';

$phpFileUploadErrors = array(
    0 => 'There is no error, the file uploaded with success',
    1 => 'The uploaded file exceeds the upload_max filesize directive in php.ini',
    2 => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form',
    3 => 'THe uploaded file was only partially uploaded',
    4 => 'No file was uploaded',
    6 => 'Missing a temporary folder',
    7 => 'Failed to write file to disk',
    8 => 'A PHP extenstion stopped the file upload',
);

if(isset($_FILES['userfile'])){
    $file_array = reArrayFiles($_FILES['userfile']);
    for  ($i=0;$i<count($file_array);$i++){
        if ($file_array[$i]['error'])
        {
            ?> <div class="alert alert-danger">
            <?php echo $file_array[$i]['name'].' - '.$phpFileUploadErrors[$file_array[$i]['error']];
            ?> </div> <?php
        }
        else {

            $extensions = array('jpg','png','gif','jpeg');

            $file_ext = explode('.',$file_array[$i]['name']);

            $name = $file_ext[0];

            $file_ext = end($file_ext);

            if (!in_array($file_ext, $extensions))
            {
                ?> <div class="alert alert-danger">
                <?php echo "{$file_array[$i]['name']} - Invalid file extension!";
                ?> </div> <?php
            }
            else {

                $bar_foto = 'web/'.$file_array[$i]['name'];

                move_uploaded_file($file_array[$i]['tmp_name'], $bar_foto);

                $sql = "INSERT IGNORE INTO $table (bar_foto) VALUES('$bar_foto')";
                $mysqli->query($sql) or die($mysqli->error);

                ?> <div class="alert alert-sucees">
                <?php echo $file_array[$i]['name'].' - '.$phpFileUploadErrors[$file_array[$i]['error']];
                ?> </div> <?php
            }
        }
    }
}

function reArrayFiles(&$file_post) {
    
    $file_ary = array();
    $file_count = count($file_post['name']);
    $file_keys = array_keys($file_post);

    for ($i=0; $i<$file_count; $i++) {
        foreach ($file_keys as $key) {
            $file_ary[$i][$key] = $file_post[$key][$i];
        }
    }

    return $file_ary;
}

function pre_r($array){
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}
