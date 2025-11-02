<?php
// Simple bootstrap for dompdf when installed manually

// 1. load the autoloader in this same folder
$autoload = __DIR__ . '/autoload.inc.php';

if (!file_exists($autoload)) {
    die("dompdf autoloader not found. Make sure dompdf is properly extracted here.");
}

require_once $autoload;

use Dompdf\Dompdf;

/**
 * Helper function to quickly create a Dompdf instance.
 * Example:
 *   $dompdf = dompdf();
 */
function dompdf(): Dompdf {
    return new Dompdf();
}
