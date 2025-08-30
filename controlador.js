document.addEventListener('DOMContentLoaded', function() {
    const positionButton = document.getElementById('positionButton');
    const titleButton = document.getElementById('titleButton');
    const colorButton = document.getElementById('colorButton');
    const addImageButton = document.getElementById('add-image');
    const imgUrlInput = document.getElementById('img-url');
    const imgFileInput = document.getElementById('img-file');
    const footerMedia = document.getElementById('footer-media');
    const columns = document.getElementById('columns');
    const mainTitle = document.getElementById('mainTitle');
    
    let titleCount = 0;
    const titles = [
        "University Demo",
        "HTML & CSS: Curso práctico avanzado"
    ];
    
    // Cambiar posicion de las columnas
    positionButton.addEventListener('click', function() {
        columns.classList.toggle('stacked');
        positionButton.textContent = columns.classList.contains('stacked') ? 
            "Texto en Filas" : "Texto en Columnas";
    });
    
    // Cambiar título
    titleButton.addEventListener('click', function() {
        titleCount = (titleCount + 1) % titles.length;
        mainTitle.textContent = titles[titleCount];
    });
    
    
    // Cambiar color
    colorButton.addEventListener('click', function() {
        columns.classList.toggle('altColor');
    });
    
    // Agregar imagen al footer
    addImageButton.addEventListener('click', function() {
        footerMedia.innerHTML = '';
        
        if (imgUrlInput.value) {
            const img = document.createElement('img');
            img.src = imgUrlInput.value;
            img.alt = "Imagen del footer";
            footerMedia.appendChild(img);
        } else if (imgFileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = "Imagen del footer";
                footerMedia.appendChild(img);
            };
            reader.readAsDataURL(imgFileInput.files[0]);
        }
    });
});