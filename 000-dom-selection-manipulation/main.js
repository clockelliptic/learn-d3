// Looks into DOM and returns first <h1>
d3.select('h1')
    .style('color', '#2A9FD6')
    .text("d3.js rocks!")
d3.select('body').append('p')
    .text('What fascinating magic!')

d3.selectAll('p')
    .attr('class', 'purple')

d3.selectAll('.purple')
    .style('color', '#9933CC')
