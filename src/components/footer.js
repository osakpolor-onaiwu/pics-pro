import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer black">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <h5 className="white-text">Contact me on</h5>
                                <ul>
                                    <li><a target='blank' href='https://web.facebook.com/osakpolor.onaiwu/'>
                                        <i class="fa fa-facebook" aria-hidden="true"></i> FaceBook</a>
                                    </li>

                                    <li><a target='blank' href='https://www.instagram.com/osakpolor_onaiwu/'>
                                        <i class="fa fa-instagram" aria-hidden="true">Instagram</i></a>
                                    </li>

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                           PicsPro © 2020 by Osakpolor Onaiwu
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
