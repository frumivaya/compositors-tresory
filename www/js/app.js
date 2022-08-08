
var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            compositors: []
        }
    },
    searchHandler: function(searchKey) {
        compositorService.findByName(searchKey).done(function(compositors) {
            this.setState({
                searchKey:searchKey,
                compositors: compositors,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} compositors={compositors}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            // step (1) first in the flow
            // slide page see react slide page
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} compositors={this.state.compositors}/>);
        }.bind(this));
        router.addRoute('compositors/:id', function(id) {
            this.slidePage(<CompositorPage key="details" compositorId={id} service={compositorService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);