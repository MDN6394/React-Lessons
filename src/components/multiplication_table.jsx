function Header(props){

    var headerStyle = {
        fontSize : 50,
        color: "#e65100",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ff9800"
    };

    return (
        <div style={headerStyle}> {props.number} </div>
    );


}

function Row(props){

    var cellStyle = {
        fontSize : 20,
        color: "#455a64"
    };

    return (
        <div style={cellStyle}> {props.current} x {props.number} = {props.result} </div>
    );
}

function MultiplicationTable(props){
    var tableStyle = {
        fontFamily : "Comic Sans MS",
        textAlign: "center",
        width: 200,
        padding: 0,
        borderRadius: 20,
        backgroundColor: "#ffe0b2",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    let rows = []
    for (var i = 1; i <= 10; i++){
        rows.push(<Row number = {props.number} current = {i} result = {props.number*i}/>)
    }

    return (
        <table style={tableStyle}>
            <thead>
                <tr><Header number = {props.number}/></tr>
            </thead>
            <tbody>{rows}</tbody> 
        </table>
    );
}

export default MultiplicationTable;