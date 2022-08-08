var HomePage = React.createClass({

    render: function () {


        return (
            
            <div className={"page " + this.props.position}>
                <Header text="Compositor Tresory" back="false" />
                {/* (2) step  */}
                <window.SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler} />
                <div className="content">
                    <window.CompositorList compositors={this.props.compositors} />
                </div>
            </div>
        );
    }
});

window.HomePage = HomePage;