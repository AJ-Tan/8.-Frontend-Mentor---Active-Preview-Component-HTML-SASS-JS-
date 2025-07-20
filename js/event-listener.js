class AddEvent {
   #eventFunction = null;
   #timeoutID = null;
   constructor(triggerSelector) {
      this.triggerElement = document.querySelector(triggerSelector);
   }

   //Can add more functions here, for reuse purpose ********************
   toggleClass(classToggle, targetSelector = this.triggerSelector) {
      const targetElement = document.querySelector(targetSelector);

      this.#eventFunction = () => {
         if (targetElement.classList.contains(classToggle)) {
            this.#timeoutID = setTimeout(() => {
               targetElement.style.setProperty("display", "none");
            },300);
         } else {
            clearTimeout(this.#timeoutID);
            targetElement.style.setProperty("display", "flex");
         }
         targetElement.classList.toggle(classToggle);
      }

      return this;
   }
   /******************************************************************/

   initializeEvent(triggerEvent = "click") {
      this.triggerElement.addEventListener(triggerEvent, this.#eventFunction);
   }
}

new AddEvent(".share-button")
   .toggleClass("share-menu--active",".article__share-menu")
   .initializeEvent();