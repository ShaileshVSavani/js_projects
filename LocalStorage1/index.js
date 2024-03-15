// Initialize counts
let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let dislikeCount = parseInt(localStorage.getItem('dislikeCount')) || 0;
let subscriptionCount = parseInt(localStorage.getItem('subscriptionCount')) || 0;
let commentsCount = parseInt(localStorage.getItem('commentsCount')) || 0;

// Display counts
document.getElementById('likeCount').textContent = likeCount;
document.getElementById('dislikeCount').textContent = dislikeCount;
document.getElementById('subscriptionCount').textContent = subscriptionCount;
document.getElementById('commentsCount').textContent = commentsCount;

//  comments

function addComments() {
    commentsCount++;
    localStorage.setItem('commentsCount', commentsCount);
    document.getElementById('commentsCount').textContent = commentsCount;
}

// Like
function like() {
    likeCount++;
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('likeCount').textContent = likeCount;
}

// Dislike
function dislike() {
    dislikeCount++;
    localStorage.setItem('dislikeCount', dislikeCount);
    document.getElementById('dislikeCount').textContent = dislikeCount;
}

// Subscribe
function subscription() {
    subscriptionCount++;
    localStorage.setItem('subscriptionCount', subscriptionCount);
    document.getElementById('subscriptionCount').textContent = subscriptionCount;
}