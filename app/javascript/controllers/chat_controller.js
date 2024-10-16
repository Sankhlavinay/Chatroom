import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

	static targets = ["input", "submitButton"]

  connect() {
    console.log("Chat  controller connected")
    this.toggleButtonState()
  }

  // This method is triggered on input changes
  checkInput() {
    console.log("Input checked:", this.inputTarget.value);
    this.toggleButtonState()
  }

  toggleButtonState() {
    const message = this.inputTarget.value.trim()
    this.submitButtonTarget.disabled = message === ""
  }

  resetForm() {
    this.inputTarget.value = ""
    this.toggleButtonState()
  }
}
