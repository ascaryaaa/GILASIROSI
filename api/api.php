<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db = "gilasirosi_data";

$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'delete':delete();break;
    case 'kategori':category();break;
    case 'kecamatan':kecamatan();break;
}

function normal(){
    global $koneksi;
    $sql1 = "select * from barang order by barang_id asc";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_kategori' => $r1['barang_kategori'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $koneksi;
    $barang_nama = $_POST['barang_nama'];
    $barang_kategori = $_POST['barang_kategori'];
    $barang_harga = $_POST['barang_harga'];
    $barang_deskripsi = $_POST['barang_deskripsi'];
    $barang_foto = $_POST['barang_foto'];
    $hasil = "Gagal Dimasukkan Data";
    if($barang_nama and $barang_kategori and $barang_harga and $barang_deskripsi){
        $sql1 = "insert into barang (barang_nama, barang_kategori, barang_harga, barang_deskripsi, barang_foto) values ('$barang_nama','$barang_kategori','$barang_harga','$barang_deskripsi','$barang_foto')";
        $q1 = mysqli_query($koneksi,$sql1);
        if($q1){
            $hasil = "Berhasil menambahkan data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function kategori(){
    global $koneksi;
    $kategori_id = $_GET['kat_id'];
    $sql1 = "SELECT * from barang INNER JOIN kategori ON barang.kategori_id = kategori.kategori_id  WHERE barang.kategori_id = '$kategori_id'";
    $q1 = mysqli_query($koneksi,$sql1);
    while($r1 = mysqli_Fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_kategori' => $r1['kategori_nama'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function kecamatan(){
    global $koneksi;
    $kecamatan_id = $_GET['kec_id'];
    $sql1 = "SELECT * FROM barang INNER JOIN umkm ON barang.umkm_id = umkm.umkm_id WHERE barang.umkm_id = ANY (SELECT umkm_id FROM umkm WHERE kecamatan_id = '$kecamatan_id')";
    $q1 = mysqli_query($koneksi,$sql1);
    while($r1 = mysqli_Fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_kategori' => $r1['barang_kategori'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $koneksi;
    $barang_id = $_GET['barang_id'];
    $sql1 = "DELETE FROM 'barang' WHERE 'barang_id' = '$barang_id'" ;
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