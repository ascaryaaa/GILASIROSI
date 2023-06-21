<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db = "gilasirosi";

$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'delete':delete();break;
}

function normal(){
    global $koneksi;
    $sql1 = "select * from barang order by bar_id asc";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'bar_id' => $r1['bar_id'],
            'bar_nama' => $r1['bar_nama'],
            'bar_kategori' => $r1['bar_kategori'],
            'bar_harga' => $r1['bar_harga'],
            'bar_deskripsi' => $r1['bar_deskripsi'],
            'bar_foto' => $r1['bar_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $koneksi;
    $bar_nama = $_POST['bar_nama'];
    $bar_kategori = $_POST['bar_kategori'];
    $bar_harga = $_POST['bar_harga'];
    $bar_deskripsi = $_POST['bar_deskripsi'];
    $bar_foto = $_POST['bar_foto'];
    $hasil = "Gagal Dimasukkan Data";
    if($bar_nama and $bar_kategori and $bar_harga and $bar_deskripsi){
        $sql1 = "insert into barang (bar_nama, bar_kategori, bar_harga, bar_deskripsi, bar_foto) values ('$bar_nama','$bar_kategori','$bar_harga','$bar_deskripsi','$bar_foto')";
        $q1 = mysqli_query($koneksi,$sql1);
        if($q1){
            $hasil = "Berhasil menambahkan data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $koneksi;
    $bar_id = $_GET['bar_id'];
    $sql1 = "DELETE FROM 'barang' WHERE 'bar_id' = '$bar_id'" ;
    $q1 = mysqli_query($koneksi,$sql1);
    if($q1){
        $hasil = 'Berhasil menghapus data';
    }
    else{
        $hasil = 'Gagal menghapus data';
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}