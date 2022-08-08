var CompositorPage = React.createClass({
    getInitialState: function () {
        return { compositor: {} };
    },
    componentDidMount: function () {
        this.props.service.findById(this.props.compositorId).done(function (result) {
            this.setState({ compositor: result });
        }.bind(this));
    },
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <window.Header text="Compositor" back="true" />
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell media">
                            <img className="media-object big pull-left" src={ this.state.compositor.pic} />
                            <h1>{this.state.compositor.firstName} {this.state.compositor.lastName}</h1>
                            <p>{this.state.compositor.title}</p>
                        </li>
                        <li className="table-view-cell media">
                          
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                 שנות פעילות
                                    <p>נולד ב: {this.state.compositor.dateOfBirth}</p>
                                    <p>עד ל: {this.state.compositor.dateOfDeath}</p>
                                </div>
                            
                        </li>
                        <li className="table-view-cell media">
                          
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                 sipur hayava
                                    <p>{this.state.compositor.story}</p>
                                </div>
                            
                        </li>
                        <li className="table-view-cell media">
                        צרו קשר להרצאות
                            <a href={"tel:" + "+972-58-550-6895"} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                    טלפון
                                    <p>+972-58-550-6895</p>
                                </div>
                            </a>
                            <a href={"mailto:" + "fruminathan@gmail.com"} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                  ניתן גם לפנות באימייל
                                    <p>FrumiNathan@gmail.com</p>
                                </div>
                            </a>
                        </li>
                       
                        
                    </ul>
                </div>
            </div>
        );
    }
});

window.CompositorPage = CompositorPage;