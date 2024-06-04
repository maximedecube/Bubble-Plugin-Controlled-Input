function(instance, context) {
  const input = document.createElement("input");
  input.classList.add("controlled");
  input.style.height = "100%";
  input.style.width = "100%";
  instance.data.input = input;
  instance.canvas.appendChild(input);

  const updateValue = () => {
    let value = instance.data.input.value;
    if (instance.data.maxCharacters) {
      value = value.slice(-instance.data.maxCharacters);
      instance.data.input.value = value;
    }
    instance.publishState("value", value);
    instance.triggerEvent("valueIsChanged");
  };

  input.addEventListener("input", updateValue);
  instance.data.input = input;
}