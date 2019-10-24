/*
    D3 provides 4 methods for automatically generating axes:

    d3.axisTop()
    d3.axisRight()
    d3.axisBottom()
    d3.axisLeft()
*/

const dataset = new Array(9).fill().map(x=>Math.floor(Math.random()*100))

const
    svgWidth = 500,
    svgHeight = 300,
    barPadding = 1
    // correct for axes
    LEFT_PADDING = 25
    RIGHT_PADDING = 10
    TOP_PADDING = 25
    BOTTOM_PADDING = 20
    barWidth = (svgWidth - RIGHT_PADDING - LEFT_PADDING) / (dataset.length);


let svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('background', '#988')

let y_scale = d3.scaleLinear()
    .domain([Math.floor(d3.max(dataset)), 0])
    .range([0, (svgHeight - BOTTOM_PADDING - TOP_PADDING)])

let x_bar_scale = d3.scaleLinear()
    .domain([0, 9])
    .range([0, svgWidth-LEFT_PADDING-RIGHT_PADDING])// - LEFT_PADDING - LEFT_PADDING])

let y_axis = d3.axisLeft().scale(y_scale)

let x_axis = d3.axisBottom().scale(x_bar_scale)

svg.append("g") // append a 'group' element ("g") to our svg object
    .attr("transform", `translate(25, ${TOP_PADDING})`)
    .call(y_axis)
    .style('color', '#fff')

svg.append("g")
    .attr("transform", "translate(25, " + (svgHeight - BOTTOM_PADDING)  +")")
    .call(x_axis)
    .style('color', '#fff')


let barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
        .attr('y', (d) => svgHeight - y_scale(d))
        .attr('height', (d) => y_scale(d))
        .attr('width', barWidth - barPadding)
        .attr('class', 'bar')
        .attr('transform', (d, i) => `translate( ${[(barWidth*i+LEFT_PADDING), (-BOTTOM_PADDING)]} )`)
        .attr('fill', '#fff')
/*
let text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
        .attr("y", (d, i) => 10)
        .attr("x", (d, i) => 10)
        .attr("fill", '#000')
*/