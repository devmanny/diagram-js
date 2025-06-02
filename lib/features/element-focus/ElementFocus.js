export default function ElementFocus(eventBus) {
  eventBus.on('element.click', function(event) {
    eventBus.fire('element.focus', {
      element: event.element,
      gfx: event.gfx,
      originalEvent: event.originalEvent
    });
  });
}

ElementFocus.$inject = [ 'eventBus' ];
