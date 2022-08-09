const CompositorList = React.createClass({
    render: function () {
        const items = this.props.compositors.map(function (compositor) {
            return (
                <window.CompositorListItem key={compositor.id} compositor={compositor} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

window.CompositorList = CompositorList;
