const dataset = new Array(9).fill().map(x=>Math.floor(Math.random()*100))

const
    svgWidth = 500,
    svgHeight = 300,
    barPadding = 5
    barWidth = svgWidth / dataset.length;

let svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('background', '#988')

let barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
        .attr('y', (d) => svgHeight - d)
        .attr('height', (d) => d)
        .attr('width', barWidth - barPadding)
        .attr('class', 'bar')
        .attr('transform', (d, i) => `translate( ${[barWidth*i, 0]} )`)
        .attr('fill', '#fff')

let text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
        .attr("y", (d, i) => svgHeight - d - 2)
        .attr("x", (d, i) => barWidth * i)
        .attr("fill", '#000')