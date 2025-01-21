let notifications_count = document.getElementById("notifications-count");
let clear_button = document.getElementById("clear-button");
let notification_badges = document.getElementsByClassName("notification-badge");

// Add event listener to clear button element:
clear_button.addEventListener("click", () => {
	for (let index = 0; index < notification_badges.length; index++) {
		const item = notification_badges[index];
		item.style.display = "none";
	}
	notifications_count.innerHTML = "0";
});
