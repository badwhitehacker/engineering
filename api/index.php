<?php
// Send headers then immediately close connection
header('HTTP/1.1 503 Service Unavailable');
header('Content-Type: text/html');
header('Connection: close');
header('Content-Length: 0');

// Output nothing - browser interprets as connection refused
flush();
if (function_exists('fastcgi_finish_request')) {
    fastcgi_finish_request();
}
exit;
   
?>
