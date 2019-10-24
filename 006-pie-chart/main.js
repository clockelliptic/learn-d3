let data = [
    {"platform": "Linus", "percentage": 40.11},
    {"platform": "Windows", "percentage": 36.69},
    {"platform": "iOS", "percentage": 13.06}
]

let svgWidth = 500,
    svgHeight = 300,
    radius =  Math.min(svgWidth, svgHeight) / 2

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr('height', svgHeight)

// GROUP TO CONTAIN CHART
let g = svg.append('g')
    .attr('transform', `translate(${radius}, ${radius})`)

// BUILD-IN COLOR SCHEMA
let color = d3.scaleOrdinal(d3.schemeCategory10)

// PIE CHART OBJECT
let pie = d3.pie().value(d => d.percentage)

    // arc-path object onto which we draw the chart
let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

    // create bind each data to vitual pie slices
let arc = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')

    // add the virtual pie slices to the actual DOM via group obejct
arc.append('path')
    .attr('d', path)
    .attr('fill', (d) => color(d.data.percentage) )


let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

arc.append('text')
    .attr('transform', (d) => `translate(${label.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .text( (d) => `${d.data.platform}:${d.data.percentage}%`)