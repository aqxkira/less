document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const input = document.querySelector('#input');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === 'C') {
                input.value = '';
            } else if (value === '=') {
                try {
                    const result = eval(input.value);

                    if (typeof result !== 'number' || !Number.isFinite(result)) {
                        input.value = 'Error';
                    } else {
                        input.value = result;
                    }
                } catch (error) {
                    input.value = 'Error';
                }
            } else {
                input.value += value;
            }
        });
    });
}); 
