/**
 * Created by bobor on 01.05.15.
 */
// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});