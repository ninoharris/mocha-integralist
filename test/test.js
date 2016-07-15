describe('CSS tests', function() {
// describe 'TEST SUITE NAME'

    var header = document.getElementById('my-header');

    // This is a setUp method to run some code to reset the class
    // names before each test run (so we start from a clean slate for each test)
    beforeEach(function() {
        // Reset the className before each spec is run
        header.className = 'myclassa myclassb'
    })
    // There is also a corresponding tearDown method which Jasmine
    // calls afterEach (see documentation)

    // each test is represented by it('expectation of this test',function() {})
    // the assertions are handled by Jasmine's expect(expressions).matcher

    // Spec
    it('should return an Array of class names', function() {
        expect(css.classes(header)).toEqual(['myclassa', 'myclassb'])
        expect(css.classes(header).length).toBe(2)
    })
    // The assertions method *expect* takes an expression (some code to execute)
    // and then the result of that code is passed to the matcher.

    // Spec
    it('should add class to element', function() {
        css.add(header, 'newclass')
        expect(header.className).toBe('myclassa myclassb newclass')
    })

    // Spec
    it('should return a boolean if a class is on the given element', function() {
        expect(css.has(header, 'myclassa')).toBeTruthy()
        expect(css.has(header, 'newclass')).toBeFalsy()
        // although in the previous spec we added 'newclass' to the element,
        // in this spec this assertion should return false because
        // the beforeEach method above has reset the classs list back to
        // 'myclassa myclassb'
    })

    // it('should return a boolean if a class is on the given element', function() {
    //     expect(css.has(header, 'myclassa')).toBeTruthy()
    // })

    it('should remove class from element', function() {
        expect(css.remove(header, 'myclassb')).toBe('myclassa')
    })

    // Our tests consisted of a few matchers such as:
    // toBeEqual(), toBe(), toBeTruthy(), toBeFalsey()

    // You can even create your own matchers...
    // Add our two new matchers. One to check if an object is an Array and the other
    // to check if the result is a Number
    // You create these within the beforeEach method which is executed before
    // each test is run
    beforeEach(function() {
        this.addMatchers({
            toBeArray: function(expected) {
                return Object.prototype.toString.call(this.actual) ===
                '[object Array]' ? true : false
            }
        })
        this.addMatchers({
            toBeNumber: function(expected) {
                return /\d+/.test(this.actual)
            }
        })
    })

})
