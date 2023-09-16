document.querySelectorAll('input[type="color"]').forEach(function (picker) {
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
    colorArea = document.createElement(span);
    colorArea.innerHTML = picker.ariaValueMax;
    targetLabel.appendChild(colorArea);

    picker.addEventListener('change', function () {
        colorArea.innerHTML = picker.ariaValueMax;
        targetLabel.appendChild(colorArea);

    });
})