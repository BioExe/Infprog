<?php
header("Content-type: text/xml");

$fil = fopen("http://www.yr.no/sted/Norge/Oppland/Sel/Otta/varsel.xml", "r");

while($linje = fgets($fil)){
    echo $linje;
}

?>
