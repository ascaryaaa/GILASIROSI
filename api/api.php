<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db = "gila_sample";

$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'delete':delete();break;
    case 'detail':detail();break;
    case 'kategori_display':kategori_display();break;   
    case 'kategori_filter':kategori_filter();break;
    case 'kecamatan_filter':kecamatan_filter();break; 
    case 'search':search();break; 
       
}

function normal(){
    global $koneksi;
    $sql1 = "select * from barang order by barang_id asc";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
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
    $barang_harga = $_POST['barang_harga'];
    $barang_deskripsi = $_POST['barang_deskripsi'];
    $barang_foto = $_POST['barang_foto'];
    $hasil = "Gagal Dimasukkan Data";
    if($barang_nama and $barang_harga and $barang_deskripsi and $barang_foto){
        $sql1 = "insert into barang (barang_nama, barang_harga, barang_deskripsi, barang_foto) values ('$barang_nama','$barang_harga','$barang_deskripsi','$barang_foto')";
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

function detail(){
    global $koneksi;
    $barang_id = $_GET['barang_id'];
    $sql1 = "SELECT * FROM barang INNER JOIN umkm ON barang.umkm_id = umkm.umkm_id INNER JOIN kategori ON barang.kategori_id = kategori.kategori_id INNER JOIN kecamatan ON umkm.kecamatan_id = kecamatan.kecamatan_id WHERE barang.barang_id = '$barang_id'";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
            'kecamatan_nama' => $r1['kecamatan_nama'],
            'kategori_nama' => $r1['kategori_nama'],
            'UMKM_nama' => $r1['UMKM_nama'],
            'UMKM_alamat' => $r1['UMKM_alamat'],
            'UMKM_telp' => $r1['UMKM_telp'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function kategori_display(){
    global $koneksi;
    $sql1 = "SELECT k.kategori_id,k.kategori_nama,k.kategori_foto, COUNT(b.kategori_id) AS kategori_total FROM kategori k LEFT JOIN barang b ON k.kategori_id = b.kategori_id GROUP BY k.kategori_id;";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'kategori_id' => $r1['kategori_id'],
            'kategori_nama' => $r1['kategori_nama'],            
            'kategori_total' => $r1['kategori_total'],
            'kategori_foto' => $r1['kategori_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function kategori_filter(){
    global $koneksi;
    $kategori_id = $_GET['kategori_id'];
    $sql1 = "SELECT * from barang INNER JOIN kategori ON barang.kategori_id = kategori.kategori_id  WHERE barang.kategori_id = '$kategori_id'";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function kecamatan_filter(){
    global $koneksi;
    $kecamatan_id = $_GET['kecamatan_id'];
    $sql1 = "SELECT * FROM barang INNER JOIN umkm ON barang.umkm_id = umkm.umkm_id WHERE barang.umkm_id = ANY (SELECT umkm_id FROM umkm WHERE kecamatan_id = '$kecamatan_id')";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function search(){
    global $koneksi;
    $searchkey = $_GET['searchkey'];
    $sql1 = "SELECT * FROM barang WHERE barang_nama LIKE '%" . $searchkey . "%';";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'barang_id' => $r1['barang_id'],
            'barang_nama' => $r1['barang_nama'],
            'barang_harga' => $r1['barang_harga'],
            'barang_deskripsi' => $r1['barang_deskripsi'],
            'barang_foto' => $r1['barang_foto'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}