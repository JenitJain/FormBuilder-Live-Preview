document.addEventListener('DOMContentLoaded', () => {
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');
    const backgroundColor = document.getElementById('background-color');
    const fontColor = document.getElementById('font-color');
    const inputFirstName = document.getElementById('input-first-name');
    const inputLastName = document.getElementById('input-last-name');
    const inputContactInfo = document.getElementById('input-contact-info');
    const inputMailId = document.getElementById('input-mail-id');
  
    const previewTitle = document.getElementById('preview-title');
    const previewDescription = document.getElementById('preview-description');
    const previewContainer = document.getElementById('preview-container');
    const previewInputs = document.getElementById('preview-inputs');
  
    // Update preview in real-time
    formTitle.addEventListener('input', () => {
      previewTitle.textContent = formTitle.value || 'Form Title';
    });
  
    formDescription.addEventListener('input', () => {
      previewDescription.textContent = formDescription.value || 'Form description...';
    });
  
    backgroundColor.addEventListener('input', () => {
      previewContainer.style.backgroundColor = backgroundColor.value;
    });
  
    fontColor.addEventListener('input', () => {
      previewTitle.style.color = fontColor.value;
      previewDescription.style.color = fontColor.value;
      updateInputFieldColors(fontColor.value);
    });
  
    // Function to update the input field colors
    function updateInputFieldColors(color) {
      const labels = previewInputs.querySelectorAll('label');
      const inputs = previewInputs.querySelectorAll('input');
      labels.forEach(label => {
        label.style.color = color;
      });
      inputs.forEach(input => {
        input.style.color = color;
      });
    }
  
    // Function to update the input fields
    function updateInputFields() {
      previewInputs.innerHTML = '';
      if (inputFirstName.checked) {
        previewInputs.innerHTML += '<label>First Name: <input type="text"></label>';
      }
      if (inputLastName.checked) {
        previewInputs.innerHTML += '<label>Last Name: <input type="text"></label>';
      }
      if (inputContactInfo.checked) {
        previewInputs.innerHTML += '<label>Contact Info: <input type="number"></label>';
      }
      if (inputMailId.checked) {
        previewInputs.innerHTML += '<label>Mail ID: <input type="email"></label>';
      }
      updateInputFieldColors(fontColor.value);
    }
  
    // Event listeners for checkboxes
    inputFirstName.addEventListener('change', updateInputFields);
    inputLastName.addEventListener('change', updateInputFields);
    inputContactInfo.addEventListener('change', updateInputFields);
    inputMailId.addEventListener('change', updateInputFields);
  });
  