//API to fetch historical data of Bitcoin Price Index
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-08-24'

/*
 * When DOM Content has been loaded, load our dat aand draw the chart
 */
document.addEventListener("DOMContentLoaded", function(event) {
fetch(api)
    .then(response => response.json())
    .then(data => {drawChart( parseData(data) )})
    .catch(err => {console.log(err)})
})


function parseData(data) {
    /*
     * DESC: Parse data into key-value pairs
     *
     * ARGS:
     *   - data: {object} containing historical BPI (bitcoin price index)
     */
    console.log(data.bpi)
    return Object.keys(data.bpi).map((date) => Object(
            {
                date: new Date(date),
                value: Number(data.bpi[date])
            }))
}


function drawChart(data) {
    /*
     * DESC: D3.js Line Chart of historical BPI data
     *
     * ARGS:
     *   - data: {object} containing historical BPI (bitcoin price index)
     */
    let
        svgWidth = 600
        svgHeight = 400
        margin = { top: 20, right: 20, bottom: 30, left: 50 }
        axis_width = svgWidth - margin.left - margin.right
        axis_height = svgHeight - margin.top - margin.bottom

    let svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight)

    let g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    let x_scale = d3.scaleTime()
        .rangeRound([0, axis_width])
         // note: d3.extent(arr, transformer()) simply returns [min, max]
         // see https://www.geeksforgeeks.org/d3-js-d3-extent-function/
        .domain(d3.extent(data, d => d.date))


    let y_scale = d3.scaleLinear()
        .rangeRound([axis_height, 0])
        .domain(d3.extent(data, d => d.value))


    let line = d3.line()
        .x(d => x_scale(d.date))
        .y(d => y_scale(d.value))


    g.append("g")
        .attr("transform", `translate(${0}, ${axis_height})`)
        .call(d3.axisBottom(x_scale))

    g.append("g")
        .call(d3.axisLeft(y_scale))
        .append("text")
            .attr("fill", "#fff")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("$$$ - USD")

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line)

    g.append("text")
        .text("USD Price of Bitcoins - 2019")
        .attr("x", 175)
        .attr("y", 10)
        .attr("fill", "#fff")
}
