const rose = d3.select("#rose");
const svg = rose.append("svg")
  .attr("width", 400)
  .attr("height", 400);

const defs = svg.append("defs");
const gradient = defs.append("linearGradient")
  .attr("id", "gradient")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "100%");

gradient.append("stop")
  .attr("offset", "0%")
  .style("stop-color", "#e60073");

gradient.append("stop")
  .attr("offset", "100%")
  .style("stop-color", "#ff00ff");

const petals = svg.selectAll("path")
  .data(d3.range(80))
  .enter()
  .append("path")
  .attr("class", "petal")
  .style("fill", "url(#gradient)");

d3.timer(function(elapsed) {
  petals.attr("d", function(d) {
    const angle = (d / 80) * 360 + elapsed / 20;
    const radius = Math.sin(angle) * 200;
    const x = 200 + radius * Math.cos(angle);
    const y = 200 + radius * Math.sin(angle);
    return `M ${x} ${y} L ${200} ${200} L ${x} ${y}`;
  });
});
