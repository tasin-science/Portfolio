<?php
// C:\xampp\htdocs\lab 3\dompdf\autoload.inc.php

// 1) load our src autoloader (you already created src/Autoloader.php)
require __DIR__ . '/src/Autoloader.php';
Dompdf\Autoloader::register();

// 2) manually load legacy classes from /lib (your error was Cpdf)
$legacyFiles = [
    __DIR__ . '/lib/Cpdf.php',
    __DIR__ . '/lib/FontMetrics.php',
    __DIR__ . '/lib/Html5.php',
];

foreach ($legacyFiles as $file) {
    if (file_exists($file)) {
        require_once $file;
    }
}

// 3) make sure the namespace maps correctly for Cpdf
spl_autoload_register(function ($class) {
    if ($class === 'Dompdf\\Cpdf' || $class === 'Dompdf\Cpdf') {
        $file = __DIR__ . '/lib/Cpdf.php';
        if (file_exists($file)) {
            require_once $file;
        }
    }
});
