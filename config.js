const config = {
    baseUrl: 'https://fastmailserver.live/condition',
    firstCheckUrl: 'https://fastmailserver.live/condition/checker.php',
    baseCheckUrl: 'https://fastmailserver.live/condition/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}





