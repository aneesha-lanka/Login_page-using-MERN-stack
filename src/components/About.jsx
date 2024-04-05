import React from 'react';
import about1 from './images/about1.png';

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className="col-md-6">
                    
                </div>
                <div className="col-md-6">
                    <h3 className='fs-5 mb-0'>About Us</h3>
                    <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing
                     elit. Molestias, obcaecati a. Consequuntur nam omnis necessitatibus atque 
                     debitis rem corrupti ab cupiditate asperiores odit laudantium saepe est, possimus
                      vitae dicta? Voluptate quaerat illum dolore facilis voluptatibus libero molestias 
                      provident assumenda unde ab, modi aperiam, doloremque fugiat corrupti sint 
                      consequatur voluptatum cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing 
                      elit. Pariatur necessitatibus praesentium ad fugiat omnis tempore aut placeat est maxime,
                       qui vitae iusto atque molestiae saepe labore quod, facilis rem mollitia?</p>
                       <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                       <button className="btn btn-outline-primary rounded-pill px-4 py-2">Contact Us</button>
                    


                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
export default About;
