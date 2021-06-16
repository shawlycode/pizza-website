import React from 'react'
import image1 from './images/image-1.jpg'
import image10 from './images/image-10.jpg'
import image9 from './images/image-9.jpg'
import image6 from './images/image-6.jpg'
import image5 from './images/image-5.jpg'

function Carousel() {
    return (
        <div className="container-fluid">
        <div className="row">

            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
              
                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner carousel-content" role="listbox">
                  <div className="item active">
                    <img src={image1} alt="pizza" />
                    <div className="carousel-caption">
                      <h3>Pizza that keeps your mouth salvating all day</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img src={image10} alt="pizza" />
                    <div className="carousel-caption">
                      <h3>ceezy as it looks irresisteble as it taste</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img src={image9} alt="pizza" />
                    <div className="carousel-caption">
                      <h3>lovely as the morning breez</h3>
                    </div>
                    </div>
                    <div className="item">
                        <img src={image6} alt="pizza" />
                        <div className="carousel-caption">
                          <h3>Pizzamania is the best place for your pizza</h3>
                              
                        </div>
                        </div>
                        <div className="item">
                            <img src={image5} alt="pizza" />
                            <div className="carousel-caption">
                             <h3>ltaste it, love it ,feel it</h3> 
                            </div>
                            </div>
                </div>
              
                {/* <!-- Controls --> */}
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        </div>

    </div>
 
    )
}

export default Carousel
