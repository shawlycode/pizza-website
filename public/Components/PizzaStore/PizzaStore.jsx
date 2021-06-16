import React from 'react'
import image4 from './images/image-4.jpg'
import image11 from './images/image-11.jpg'
import image8 from './images/image-8.jpg'
import image3 from './images/image-3.jpg'


function PizzaStore() {
    return (
        <div className="container-fluid">
                <div className="row">
                    <h3 className="text-center">Pizzamania Store</h3>
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                          <div className="thumbnail">
                            <img src={image3} alt="pizz boss" />
                            <div className="caption">
                              <h3>The Beast</h3>
                              <p>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                   Accusantium eaque autem porro eos quibusdam e
                                   ligendi delectus beatae, error quaerat numquam 
                                   laborum animi cum laboriosam explicabo necessitatibus, 
                                   harum cupiditate ea. Iste!
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                   Accusantium eaque autem porro eos quibusdam e
                                   ligendi delectus beatae, error quaerat numquam 
                                   laborum animi cum laboriosam explicabo necessitatibus, 
                                   harum cupiditate ea. Iste!
                              </p>
                              <p><a href="#" className="btn btn-primary" role="button">Order</a> </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                              <img src={image11} alt="pizz" />
                              <div className="caption">
                                <h3>Karioki Pizza</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat numquam 
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat numquam 
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!</p>
                                <p><a href="#" className="btn btn-primary" role="button">Order</a> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                              <img src={image8} alt="pizza" />
                              <div className="caption">
                                <h3>Freak Pizza</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat numquam 
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat numquam 
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!Accusantium eaque 
                                    </p>
                                <p><a href="#" className="btn btn-primary" role="button">Order</a> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                              <img src={image4} alt="Pizzamania" />
                              <div className="caption">
                                <h3>Monster Pizza</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat numquam 
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusantium eaque autem porro eos quibusdam e
                                    ligendi delectus beatae, error quaerat  
                                    laborum animi cum laboriosam explicabo necessitatibus, 
                                    harum cupiditate ea. Iste!Accusantium eaque autem porro eos quibusdam
                                    </p>
                                <p><a href="#" className="btn btn-primary" role="button">Order</a> </p>
                              </div>
                            </div>
                          </div>
                      </div>
                </div>

            </div>
    )
}

export default PizzaStore
