/*
    Binding data to DOM elements

    see: https://www.dashingd3js.com/binding-data-to-dom-elements
*/

const dataset = [1,2,3,4,5]


// Create *NEW* DOM elements and fill them with data
d3.select('body')
    .selectAll()   // return an empty selection
    .data(dataset) // for each element of our dataset...
    .enter()       // bind them to our data... and do the following for each:
    .append('p')
        .attr('class', 'we-created-this')
        .text(datum => datum).style('color', '#ADAFAE')


// Select existing DOM elements and *UPDATE* them with data
d3.select('body')
    .selectAll('.we-created-this') // select all items of 'we-created-this' class
    .data(dataset.slice(0,2)) //for each element of dataset.slice(0,2)...
        .text(datum => `${datum} Fascinating!`).style('color', '#ADAFAE')

