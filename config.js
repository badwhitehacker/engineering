const config = {
    baseUrl: 'http://localhost/phishing',
    firstCheckUrl: 'http://localhost/phishing/checker.php',
    baseCheckUrl: 'http://localhost/phishing/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';
}