import React, {Component} from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: '',
            MEETINGID: '',
            Password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:8080/zoom/add', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('error')
            })
    }

    render() {
        const {subject, MEETINGID, Password} = this.state
        return (
            <div className="container mb-5">
                <form onSubmit={this.submitHandler}>
                <div className="row">

                    <div className="col-md-3">
                    <div>
                        <input 
                            className="form-control"
                            placeholder="Subject"
                            method="post"
                            type="subject"
                            name="subject" 
                            value={subject} 
                            onChange={this.changeHandler} 
                        />
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div>
                        <input 
                            className="form-control"
                            placeholder="Meeting ID"
                            method="post"
                            type="text" 
                            name="MEETINGID" 
                            value={MEETINGID}
                            onChange={this.changeHandler}     
                        />
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div>
                        <input 
                            className="form-control"
                            placeholder="Password"
                            method="post"
                            type="text" 
                            name="Password" 
                            value={Password} 
                            onChange={this.changeHandler} 
                        />
                    </div>
                    </div>

                    <div className="col-md-3">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>

                    </div>
                </form>
                </div>
        )
    }
}

export default PostForm;