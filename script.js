const quotes= [
    {
      quote:
        ` "Life is too short and sweet to be spent by cribbing and complaining about things" `,
      author: " Life"
    },
  {
   quote: ` "Programming is not a science. Programming is a craft." `,
  author: "Richard Stallman"  
  },
  {
    quote: ` "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." `,
    author: "Linus Torvalds"
  },
   {
    quote: ` "In real open source, you have the right to control your own destiny" `,
    author: "Linus Torvalds"
  },
  {
  quote: ` "We don't make mistakes; we just have happy accidents." `,
    
    author: "Bob Ross"
  }
  
  ];

class Quote extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   quote: 'Quote goes here',
   author: "Author's name goes here"
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
    <div id="quote-box" class="position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-nowrap">
      <div id="text" class="border border-2 rounded-3 border-dark"> 
      <div class="quote-author">
      <p id="quote">{this.state.quote}</p>
        <p id="author">-{this.state.author}</p>
        </div>
        <div class="button-quote">
       <button class="btn btn-dark btn-lg" onClick={this.handleChange}>Click Me</button>
       </div>
       </div>
       </div>
     </div>
  );
 }
}

ReactDOM.render(<Quote />, document.getElementById("root"));
