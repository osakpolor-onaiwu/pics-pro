import React, { Component } from "react";
import { connect } from "react-redux";
import ImageAction from "./action";

class Results extends Component {
    state = {
        search: "",
        result: [],
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            search: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.ImageAction(this.state.search);
        console.log(this.state.search);
    };

    render() {
        const results = this.props.result.length ? (
            this.props.result.map((res) => {
                return (
                    <div class="col s12  m6 l4" key={res.id}>
                        <div class="card moveup">
                            <div class="card-image">
                                <img
                                    src={res.largeImageURL}
                                    alt="loading..."
                                    height="300px"
                                />
                                <span class="card-title"></span>
                            </div>
                            <div class="card-content">
                                <p>by {res.user} on pixabay</p>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div>
                <p>loading result</p>
            </div>
        );
        
        return (
            <div>
                <div className="row  background">
                    <div className=" row  ">
                        <div className="col s12 m12 l12">
                            <h4 className="center white-text">
                                SEARCHING FOR IMAGES? WE'VE GOT YOU COVERED
                            </h4>
                        </div>
                    </div>

                    <div className="container">
                        <form
                            className="col s12 m12 l12"
                            onSubmit={this.handleSubmit}>
                            <div className="input-field browser-default">
                                <input
                                    id="icon_prefix"
                                    required={true}
                                    name="search"
                                    type="text"
                                    className=" browser-default validate"
                                    placeholder="Search"
                                    onChange={this.handleChange}
                                />
                                <button type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">{results}</div>
                <footer>copyright Interioz by Osakpolor Onaiwu</footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ImageAction: (search) => {
            dispatch(ImageAction(search));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
