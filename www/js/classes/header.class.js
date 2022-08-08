const header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left hidden" + (this.props.back === "true" ? "" : " hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

window.Header = header;
