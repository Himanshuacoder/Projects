import React from 'react'

export const About = (props) => {
    return (
        <div className="full-page contact" style={{color:props.mode=== 'black'?'white': 'black'}}>
            <div className={`container pt-3 mt-3 pb-2 block text-${props.mode === 'light' ? 'black' : 'light'}`}>
                <h2>About Us</h2>
                <div className="row">
                    <div className="offset-3 col-6">
                        <hr/>
                        <br/><br/>
                        <p className="h5">
                            <strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. 
                            Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.
                            </strong>
                        </p>
                                
                            
                            <br/><br/><hr/>
                    </div>
                </div>
                <h2>Meet Our Team</h2>
                <div className="row">
                    <div className="offset-3 col-6 h5">
                        <hr/><br/><br/>
                        <p>
                            <strong>Want to work in our friendly team?</strong>
                        </p>
                        <p>
                            <strong> Contact us and we will consider your candidacy.</strong>
                        </p>
                    </div>
                    <div className="offset-md-2 col-md-3 offset-md-1 offset-sm-2 col-sm-8 offset-3 col-6">
                        <div className="card" >
                            <img class="card-img-top" src="jh" alt=""></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-3 offset-sm-2 col-sm-8 offset-3 col-6">
                        <div className="card" >
                            <img class="card-img-top" src="jh" alt=""></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-2 col-md-3 offset-md-1 offset-sm-2 col-sm-8 offset-3 col-6">
                        <div className="card" >
                            <img class="card-img-top" src="jh" alt=""></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-3 offset-sm-2 col-sm-8 offset-3 col-6">
                        <div className="card" >
                            <img class="card-img-top" src="jh" alt=""></img>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
