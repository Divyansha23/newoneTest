// Set current date and time
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    document.getElementById('lastUpdate').textContent = now.toLocaleString();
    document.getElementById('buildTime').textContent = now.toLocaleString();
    
    // Detect environment (this would be set by your build process)
    const isPR = window.location.hostname.includes('preview') || 
                 window.location.hostname.includes('pr-') ||
                 window.location.search.includes('preview=true');
    
    const envElement = document.getElementById('env');
    if (isPR) {
        envElement.textContent = 'Preview (PR)';
        envElement.className = 'value status-waiting';
    } else {
        envElement.textContent = 'Production';
        envElement.className = 'value status-success';
    }
});

function testBuild() {
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = 'Testing...';
    button.disabled = true;
    
    // Simulate build test
    setTimeout(() => {
        alert('Build test completed! Check the console for details.');
        console.log('Build Test Results:');
        console.log('- Current URL:', window.location.href);
        console.log('- User Agent:', navigator.userAgent);
        console.log('- Timestamp:', new Date().toISOString());
        
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

function checkStatus() {
    const statusInfo = {
        url: window.location.href,
        isPreview: window.location.hostname.includes('preview') || 
                   window.location.hostname.includes('pr-'),
        timestamp: new Date().toISOString(),
        buildId: Math.random().toString(36).substr(2, 9)
    };
    
    console.log('Status Check:', statusInfo);
    
    if (statusInfo.isPreview) {
        alert('🟡 Preview Environment Detected\n\nIf you see this in a PR preview but builds are stuck in "Waiting", check:\n\n1. Build settings in Appwrite console\n2. Environment variables\n3. Build commands configuration');
    } else {
        alert('✅ Production Environment\n\nThis appears to be the main production site.');
    }
}

// Add some visual feedback for the environment
function updateEnvironmentStyles() {
    const isPR = window.location.hostname.includes('preview') || 
                 window.location.hostname.includes('pr-');
    
    if (isPR) {
        document.body.style.borderTop = '5px solid #ffc107';
        const header = document.querySelector('h1');
        if (header) {
            header.innerHTML = '🚧 ' + header.innerHTML + ' (PREVIEW)';
        }
    }
}

// Call environment styling on load
document.addEventListener('DOMContentLoaded', updateEnvironmentStyles);
