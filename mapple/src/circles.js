import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { select } from 'd3-selection'

class Circ extends Component {
    constructor(props) {
        super(props)
        this.createCircChart = this.createCircChart.bind(this)
    }

    componentDidMount() {
        this.createCircChart()
    }

    componentDidUpdate() {
        this.createCircChart()
    }

    createCircChart() {
        const node = this.node
        const schools = [
            {name: "Harvard", signups: 4695, region: "Northeast", color: "red"},
            {name: "UW Madison", signups: 4232, region: "Midwest", color: "orange"},
            {name: "WashU", signups: 3880, region: "Midwest", color: "yellow"},
            {name: "Brown", signups: 2603, region: "Northeast", color: "green"},
            {name: "UChicago", signups: 2088, region: "Midwest", color: "blue"},
            {name: "UW", signups: 2042, region: "West", color: "purple"}
        ];

        select(node)
            .selectAll("circle")
            .data(schools)
            .enter()
            .append("circle")

        select(node)
            .attr("cy", this.props.size[1]/2)
            .attr("cx", function (d, i) {return (i + 1) * 50})
            .attr("r", function (d) {
                if (d.signups > 3500) {
                    return 20;
                } else {
                    return 10;
                }
            })
            .attr("fill", function (d) {return d.color; })
            .attr("stroke", "black");
    }
    render() {
        return <svg ref={node => this.node = node}
        width={500} height={500}>
            </svg>
    }
}