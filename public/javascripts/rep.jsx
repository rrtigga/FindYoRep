var SearchResults = React.createClass({
    render: function() {
    return (
    <div>
      <p>What's good div</p>
    </div>
    )
  }
})

var SearchSection = React.createClass({
    render: function() {
    return (
    <div>
      <span className="input input--hoshi">
        <input className="input__field input__field--hoshi" type="text" id="input-4" />
        <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="input-4">
          <span className="input__label-content input__label-content--hoshi"><p>Zip Code</p></span>
        </label>
      </span>
      <div onClick={this.props.handleSearch} className="searchButton">
        <p>Search</p>
      </div>
    </div>
    )
  }
})

var Main = React.createClass({
    getInitialState: function(){
        return {
            hasSearched: false
        };
    },
    handleSearch: function(){
            this.setState({hasSearched: true});
    },
    render: function() {
            return (
            <div>
              <h1 className="headerText">Find your elected officials <span>NOW.</span></h1>
              {!this.state.hasSearched ? <SearchSection handleSearch={this.handleSearch} /> : <SearchResults />}
              <div className="row pTop50">
                <div className="column _25">
                  <img className="profile" src="/images/kamala.png"/>
                </div>
                <div className="column _5">
                  <h1>Zoe Lofgren</h1>
                  <p>Congresswoman (D-19), San Jose</p>
                </div>
                <div className="column _25">
                  <p>408-824-3923</p>
                  <img className="icon" src="/images/web.png"/>
                  <img className="icon" src="/images/mail.png"/>
                  <img className="icon" src="/images/twitter.png"/>
                </div>
              </div>
            </div>

      )
    }
});
 
ReactDOM.render(<Main />, document.getElementById('container'));

