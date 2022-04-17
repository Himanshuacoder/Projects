import React from 'react'

export const Signup = (props) => {
    return (
        <div className={`full-page Signup`} style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <div className={`container block pt-3 mt-3`} >
                <h2>My Account</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-6 col-sm-12 ">
                            <form>
                                <h3 style={{color:props.mode=== 'dark'?'white': 'black'}}>Login</h3>
                                <div className="form-group">
                                    <label for="inputEmail4">Email Address</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div  className={`container`}>
                                <button type="submit" className="btn" style={{border: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>Login</button>
                                </div>
                            </form>
                            
                        </div>

                        <div className="col-md-6 col-sm-12">
                            
                            <form>
                                <h3 style={{color:props.mode=== 'dark'?'white': 'black'}}>Register</h3>
                                <div className="form-group">
                                    <label for="inputEmail4">Your Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail4">Repeat Password</label>
                                    <input type="password" className="form-control" id="inputRePassword" placeholder="Password" />
                                </div>
                                <div  className={`container`}>
                                <button type="submit" className="btn" style={{border: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>Register</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}
