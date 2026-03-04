function Letter(props) {

  //Recommended styling option
  const letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: props.bgColor,
    color: '#333',
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: 32,
    textAlign: 'center',
  };

  return (
    // props.children returns the content
    // of <Letter>...</Letter>
    // <div className="letter">{props.children}</div> //Specify class Name to use css in "index.css"

    <div style={letterStyle}>{props.children}</div> 
  );
}

export default Letter;