<?php
namespace Dompdf;

class Autoloader {
    public static function register() {
        spl_autoload_register([__CLASS__, 'autoload']);
    }
    public static function autoload($class) {
        if (strpos($class, __NAMESPACE__ . '\\') !== 0) return;
        $relative = substr($class, strlen(__NAMESPACE__) + 1);
        $relative = str_replace('\\', DIRECTORY_SEPARATOR, $relative);
        $file = __DIR__ . DIRECTORY_SEPARATOR . $relative . '.php';
        if (file_exists($file)) require $file;
    }
}
