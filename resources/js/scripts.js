let notifications_count = document.getElementById("notifications-count");
let clear_button = document.getElementById("clear-button");
let notification_badges = document.getElementsByClassName("notification-badge");
let active_notifications = document.getElementsByClassName("active-item");

// Add event listener to clear button element:
clear_button.addEventListener("click", () => {
	for (let index = 0; index < notification_badges.length; index++) {
		const item = notification_badges[index];
		item.style.display = "none";
	}
	for (let index = 0; index < active_notifications.length; index++) {
		const item = active_notifications[index];
		item.style.backgroundColor = "white";
	}
	notifications_count.innerHTML = "0";
});
