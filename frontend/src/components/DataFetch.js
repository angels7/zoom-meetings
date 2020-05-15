import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DeleteForm from './DeleteForm'

function DataFetching() {

    let [posts, setPosts] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8080/zoom')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    },[])

return (
        <div>
            <ul>
                {
                  posts.map(post => (
                      <li key={post.id} className="list">
                          <div className="container">
                          <table id="customers">
                        <tbody>
                          <tr>
                                  <th>#</th>
                                  <th>Subject</th>
                                  <th>Meeting ID</th>
                                  <th>Password</th>
                                  <th>Control</th>
                              </tr>
                              <tr>
                                  <td>{post.id}</td>
                                  <td>{post.subject}</td>
                                  <td>{post.MEETINGID}</td>
                                  <td>{post.Password}</td>
                                  <td>
                                    <Router>
                                        <Link to={"/zoom/"+post.id}>Edit</Link>
                                    </Router>
                                    <DeleteForm />
                                  </td>
                              </tr>
                            </tbody>
                          </table>
                          </div>
                      </li>
                  ))
                }
            </ul>
            <PostForm />
        </div>
    )
}
  
export default DataFetching;
