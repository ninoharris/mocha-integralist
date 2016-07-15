var header = document.getElementById('my-header')

css.add(header, 'newclass') // adds the class 'newclass' to the specified element
css.has(header, 'newclass') // returns a boolean value depending on whether an element has a class or not
css.remove(header, 'newclass') // removes the class 'newclass' from the element
css.classes(header) // returns an Array of classes found on this element
