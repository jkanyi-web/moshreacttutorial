function Message() {
  let name = ''

  if (name) 
    return (
      <div className="container">
        <h1> Hello { name }</h1>
      </div>
  ) 
  return (
    <div className="container">
      <h1> Hello stranger</h1>
    </div>
  ); 
}

export default Message
