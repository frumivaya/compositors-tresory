const SearchBar = React.createClass({
    searchHandler: function(event) {
        this.props.searchHandler(event.target.value);
    },
    render: function(){
        
        
    
        return (
            
            <div className="bar bar-standard bar-header-secondary">
                
                    {/* (3) step */}
                <input type="search" ref="searchKey" onChange={this.searchHandler

                } value={this.props.searchKey}/>
            </div>

        );
    }
});


window.SearchBar = SearchBar;
