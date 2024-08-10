import { Controller } from "@hotwired/stimulus";

export default class extends Controller{
	connect() {
		console.log("Scroll reset Connected ")
		const messages = document.getElementById("messages");
		
		this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          this.resetScroll();
        }
      });
    });

    // Start observing the messages element for child list changes
    this.observer.observe(messages, { childList: true });

    // Initial scroll reset
    this.resetScroll();
	}

	disconnect() {
		console.log("Scroll reset Disconnected ")
	}

	resetScroll() {
		messages.scrollTop = messages.scrollHeight - messages.clientHeight;
	}
}

