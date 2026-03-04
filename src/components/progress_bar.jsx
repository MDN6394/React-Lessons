function Label(props) {
    var labelStyle = {
        fill: props.color,
        fontFamily: "Verdana",
        fontSize: "25px",
        fontWeight: "bold",
        
    };
    return(
        <text x="180" y= "25" style={labelStyle}>{props.percentage} %</text>
    );
}

function Bar(props) {
    var gStyle = {
        fill: "none",
        stroke: props.color,
        strokeWidth: 25
    };
    var barStyle = {
        strokeLinecap: "round"
    };

    return(
        <g style={gStyle}>
            <path d={"M20 55 l" + (360 * props.percentage / 100) + " 0"} style={barStyle}/>
        </g>
    );

}

function ProgressBar(props) {
    var svgStyle = {
        width: 400,
        height: 80
    };

    return(
        <svg style={svgStyle}>
            <Bar color="lightgrey" percentage={100}/>
            <Bar color={props.color} percentage={props.percentage}/>
            <Label color={props.color} percentage={props.percentage}/>
        </svg>
    );

}

export default ProgressBar;