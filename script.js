document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            switch(value) {
                case 'clear':
                    display.value = '';
                    break;
                case 'backspace':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch(error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
            }
        });
    });
});