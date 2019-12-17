import React from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
    return (
        <React.Fragment>
            <div>
        <div class="container hot">
            <div class="row">
                <div class="col-md-6 col-h-container">
                    <div class="col-h">
                        <h5>View all new models with lowest price in the region</h5>
                    </div>
                </div>
                <div class="col-md-6 col-h-container">
                    <div class="col-h">
                        <h5>Trendiest collections of all the world leading brands</h5>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div>
        <div class="container services">
            <div class="row services">
                <div class="col-md-4 col-services">
                    <div>
                    <FontAwesomeIcon icon="shipping-fast" />
                        <i class="fas fa-shipping-fast"></i>
                    </div>
                    <div>
                        <p class="label-services">Free Delivery</p>
                        <p>Free delivery for all the orders above 99.99$</p>
                    </div>
                </div>
                <div class="col-md-4 col-services">
                    <div>
                        <i class="fas fa-headphones-alt"></i>
                    </div>
                    <div>
                        <p class="label-services">24/7 Support</p>
                        <p>You have a question? Contact us whenever you want.</p>
                    </div>
                </div>
                <div class="col-md-4 col-services">
                    <div>
                        <i class="fas fa-undo-alt"></i>
                    </div>
                    <div>
                        <p class="label-services">30 days return</p>
                        <p>Don't like your new buy? You have a 30-day possibility to return it.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-3 f-col">
                    <h6>Categories</h6>
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Kids</li>
                        <li>Unisex</li>
                        <li>Sports</li>
                        <li>Smartwatches</li>
                    </ul>
                </div>
        
                <div class="col-md-3 f-col">
                    <h6>HappyShoes</h6>
                    <ul>
                        <li>Partners</li>
                        <li>Delivery</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
        
                <div class="col-md-6 f-col">
                    <h6>Contacts</h6>
                    <ul class="contacts">
                        <li><span class="f-label">Address:</span> <span>7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</span></li>
                        <li><span class="f-label">Phones:</span> <span>+359 123 456 789, +359 987 654 321</span></li>
                        <li><span class="f-label">Address:</span> <span>7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</span></li>
                        <li><span class="f-label">Phones:</span> <span>+359 123 456 789, +359 987 654 321</span></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </footer>
        </React.Fragment>
    )
}

export default Main;