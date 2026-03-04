function Label(props){
    var labelStyle = {
        fontSize : 20,
        color: "#455a64"
    };
    let label = "";
    switch(true){
        case props.score < 0.1:
            label = "disaster";
            break;
        case props.score <= 0.3:
            label = "Insufficient";
            break;
        case props.score <= 0.5:
            label = "Sufficient";
            break;
        case props.score <= 0.6:
            label = "Good";
            break;
        case props.score <= 0.9:
            label = "Very Good";
            break; 
        default:
            label = "Excellent";
    }

    return(
        <div style={labelStyle}>{label}</div>
    );

}

function Star(props){
    if (props.mode === "On"){
        return(
            <img src="/images/StarOn.png" width={25} height={25}/>
        );
    } else if (props.mode === "Off"){
        return(
            <img src="/images/StarOff.png" width={25} height={25}/>
        );
    }

}

function Rater(props){
    var tableStyle = {
        textAlign: "center",
        width: 150,
        padding: 0,
        borderRadius: 20,
        backgroundColor: "white",
    };

    let stars = [];
    for (var i = 0; i < props.rating; i++){
        stars.push(<Star key={i} mode={"On"}/>)
    }
    for (var i = props.rating; i < props.max; i++){
        stars.push(<Star key={i} mode={"Off"}/>)
    }
    return(
        <table style={tableStyle}>
            <thead>
                <tr><Label score={props.rating/props.max}/></tr>
            </thead>
            <tbody>
                <tr>{stars}</tr>
            </tbody>
            
        </table>
    );

}

export default Rater;