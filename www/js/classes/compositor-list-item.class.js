

var CompositorListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#compositors/" + this.props.compositor.id}>
                    <img className="media-object small pull-left" src={ this.props.compositor.pic}/>
                    {this.props.compositor.firstName} {this.props.compositor.lastName}
                    <p>{this.props.compositor.title}</p>
                </a>
            </li>
        );
    }
});

window.CompositorListItem = CompositorListItem;
