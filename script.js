const quotes= [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
  {
   quote: "Programming is not a science. Programming is a craft.",
  author: "Richard Stallman"  
  },
  {
    quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    author: "Linus Torvalds"
  },
   {
    quote: "In real open source, you have the right to control your own destiny",
    author: "Linus Torvalds"
  },
  {
  quote: "We don't make mistakes; we just have happy accidents.",
    
    author: "Bob Ross"
  }
  
  ];

class Quote extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   quote: '----',
   author: '----'
   };
  
  this.handleChange=this.handleChange.bind(this);
}
  
  handleChange(){
    let i= Math.floor(Math.random() * quotes.length)
    this.setState({
      quote: quotes[i].quote,
      author: quotes[i].author
    });
  }
  
 render() {
  return (
    <div>
      <div class="col text-center">
    <div id="quote-box" class="d-flex justify-content-center flex-nowrap">
      <div id="text"> 
      <p>Quote: {this.state.quote}</p>
        <div id="author">
        <p>Author: {this.state.author}</p>
        <button id="new-quote" onClick={this.handleChange}>Click Me</button>
         </div>
       </div>
       </div>
     </div>
     </div>
  );
 }
}

ReactDOM.render(<Quote />, document.getElementById("root"));
