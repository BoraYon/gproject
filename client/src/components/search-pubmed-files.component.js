import React, { Component } from 'react';
import axios from 'axios';

export default class SearchFile extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onChangeDomain = this.onChangeDomain.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            disease: '',
            path:''
        }
    }

    onChangeSearch(e) {
        this.setState({
            disease: e.target.value
        })
    }

    onChangeDomain(e) {
        this.setState({
            path: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const parameter = {
            disease: this.state.disease,
            path: this.state.path
        }

        console.log(parameter);

        axios.get('http://localhost:5000/pubmed/search', {
                params:{
                    disease: this.state.disease,
                    path: this.state.path
                }
            }
        )
            .then(res => console.log(res.data));

        this.setState({
            disease:'',
            path:''
        })
    }

    render() {
        return (
            <div>
                <h3>Search New File</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Disease parameter: </label>
                        <input type="text"
                                required
                                className="form-control"
                                value={this.state.disease}
                                onChange={this.onChangeSearch}
                        />
                    </div>

                    <div className="form-group">
                        <label>Path parameter: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.path}
                                onChange={this.onChangeDomain}
                        />
                    </div>                    <div className="form-group">
                        <input type="submit" value="disease file" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
