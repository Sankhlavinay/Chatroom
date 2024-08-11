import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

	connect() {
		console.log("chat controller connected")

		const textField = this.element.querySelector('#chat-text');
    const submitButton = this.element.querySelector('[type="submit"]');

		textField.addEventListener('input', (event) => {
      const textFieldValue = event.target.value.trim();
      if (textFieldValue === '') {
        submitButton.disabled = true;
      } else {
        submitButton.disabled = false;
      }
    });
	}
}