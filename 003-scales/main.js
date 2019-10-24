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

let y_scale = d3.scaleLinear()
    .domain([0, Math.floor(d3.max(dataset)*1.2)])
    .range([0, svgHeight])

let barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
        .attr('y', (d) => svgHeight - y_scale(d))
        .attr('height', (d) => y_scale(d))
        .attr('width', barWidth - barPadding)
        .attr('class', 'bar')
        .attr('transform', (d, i) => `translate( ${[barWidth*i, 0]} )`)
        .attr('fill', '#fff')

let text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
        .attr("y", (d, i) => svgHeight - y_scale(d) - 2)
        .attr("x", (d, i) => barWidth * i)
        .attr("fill", '#000')