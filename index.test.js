describe('Test Hola Mundo', () => {
    test('should pass', () => {
      if (typeof document !== 'undefined') {
        const body = document.createElement('body');
        const h1 = document.createElement('h1');
        h1.textContent = 'Hola Mundo, practica final electiva 2 Erwing Coss';
        body.appendChild(h1);
  
        expect(document.body.textContent).toContain('Hola Mundo, practica final electiva 2 Erwing Coss');
      } else {
        // Manejar el caso cuando se ejecuta fuera del navegador o entorno jsdom
        // Por ejemplo, puedes imprimir un mensaje de advertencia
        console.warn('No se pudo acceder al objeto document. Asegúrate de que estás ejecutando en un entorno adecuado.');
      }
  });
});