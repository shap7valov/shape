class Shape {
    constructor(width, height, color, type) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = type;
    }

    createElement() {
        const shapeElement = document.createElement('div');
        shapeElement.style.width = this.width + 'px';
        shapeElement.style.height = this.height + 'px';
        shapeElement.style.backgroundColor = this.color;
        shapeElement.style.borderRadius = this.type;
        if (this.type === 'circle') {
            shapeElement.style.borderRadius = '50%';
        } else {
            shapeElement.style.borderRadius = '0';
        }
        return shapeElement;
    }
}

document.querySelector('#shapeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    const color = document.querySelector('#color').value;
    const shapeType = document.querySelector('#shapeType').value;

    if (!width || !height || !color) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const shape = new Shape(width, height, color, shapeType);
    const shapesContainer = document.querySelector('#container');
    // shapesContainer.innerHTML = '';
    shapesContainer.appendChild(shape.createElement());

    document.querySelector('#shapeForm').reset();
});
