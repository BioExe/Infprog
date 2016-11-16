<?php 
  $navn = $_GET["navn"]; 
  $epost = $_GET["epost"]; 
  $kode = $_GET["kode"]; 

  $linje = $kode . ";" . $navn . ";" . $epost . "\r\n"; 

  $fil = fopen("paameldinger.dat","a"); 
  fwrite($fil,$linje); 
  fclose($fil); 
 ?> 
