/*
    D3 provides 4 methods for automatically generating axes:

    d3.axisTop()
    d3.axisRight()
    d3.axisBottom()
    d3.axisLeft()
*/

const dataset = new Array(9).fill().map(x=>Math.floor(Math.random()*100))

const
    svgWidth = 600,
    svgHeight = 500,
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
    .attr('class', 'svg-container')

// ADD LINE
let line = svg.append("line")
    .attr("x1", 100)
    .attr("x2", 500)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "cyan")
    .attr('stroke-width', 5);

// ADD RECTANGLE
let rect0 = svg.append('rect')
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "#10FF10")

// ADD RECTANGLE WITH TEXT (via group element)
let rectGroup = svg.append("g")

let rect1 = rectGroup.append('rect')
    .attr("x", 400)
    .attr("y", 100)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "#10FF10")

let rect1_text = rectGroup.append("text")
    .text("rect1")
    .attr("x", 430)
    .attr("y", 150)
    .attr("fill", "#000")

// ADD CIRCLE
let circle = svg.append('circle')
    .attr("cx", 500)
    .attr("cy", 400)
    .attr("r", 100)
    .attr("fill", "magenta")