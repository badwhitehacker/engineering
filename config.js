const config = {
    baseUrl: 'https://mediumaquamarine-anteater-755577.hostingersite.com',
    firstCheckUrl: 'https://mediumaquamarine-anteater-755577.hostingersite.com/checker.php',
    baseCheckUrl: 'https://mediumaquamarine-anteater-755577.hostingersite.com/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}




