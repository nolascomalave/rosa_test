window.addEventListener("load", () => {
    const numbers = [];
    let suma = 0;

    while(true) {
        const value = prompt('Introduzca un número.') ?? '';

        if(value.trim().length < 0) {
            alert('El número es requerido.');
        } else if(isNaN(value.trim())) {
            alert('El valor introducido no es un número.');
        }

        numbers.push(Number(value.trim()));

        suma = suma + Number(value.trim());

        if(Number(value.trim()) < 0) {
            break;
        }
    }

    alert('La suma de los números introducidos es: ' + suma);

    alert('La media de los números introducidos es: ' + (suma / numbers.length));
});