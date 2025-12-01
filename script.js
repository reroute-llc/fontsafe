// Get the download button
const downloadBtn = document.getElementById('downloadBtn');

// Match primary button width to secondary buttons width
function matchButtonWidths() {
    const secondaryButtons = document.querySelector('.secondary-buttons');
    const primaryButton = document.getElementById('downloadBtn');
    
    if (secondaryButtons && primaryButton) {
        // Wait for layout to calculate
        requestAnimationFrame(() => {
            const secondaryWidth = secondaryButtons.offsetWidth;
            if (secondaryWidth > 0) {
                primaryButton.style.width = secondaryWidth + 'px';
            }
        });
    }
}

// Match widths on load and resize
window.addEventListener('load', () => {
    setTimeout(matchButtonWidths, 100);
});
window.addEventListener('resize', matchButtonWidths);

// Also try after a short delay to ensure everything is rendered
setTimeout(matchButtonWidths, 500);

// Download button handler
downloadBtn.addEventListener('click', (e) => {
    // Prevent the default link behavior to avoid double download
    e.preventDefault();
    
    // If you upload to UploadThing or another CDN, replace this with the full URL
    // For now, using relative path (works if DMG is in same directory as website)
    const downloadUrl = 'FontSafe.dmg';
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'FontSafe.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

