import React from 'react'
import Events from '../Events/Events'



const Landing = () => {
  return (
    <>
      <section className="container-fluid bg-black ">
        <div className='container p-0 '>
          <div className="row justify-content-center">
            <div className='col-lg-11 col-sm-12 col-md-12'>
              <div className='row align-items-center'>
                <div className='col-lg-8'>
                  <h1 className='text-light'>Global network for VCs, Founders, and community Partners</h1>
                  <h4 className='text-gold pt-4'>Turn any self-selecting community into a self-sufficient accelerator</h4>
                  <div className=''>
                    <button className="btn btn-gold pad-btn" type="submit">Join Waitlist</button>
                  </div>
                </div>
                <div className='col-lg-4 item-b'>
                  <img src='Img\Group 1.png'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-black pt-5">
        <div className='container p-0'>
          <div className="row justify-content-center">
            <div className='col-lg-11 mt-5 border border-bottom-0 border-1 mb-5'>
              <div className='row pt-5 px-5'>
                <div className='col-lg-6 '>
                  <h2 className='text-gold'>For Investors</h2>
                  <h4 className='text-light pt-2'>One platform for all your venture value</h4>
                  <p className='col-lg-8 text-muted py-2 lh-base'>Filtered deal flows catering to your primary focus, lead or co-invest with self-selected partners, refer partners and hires to your portfolio startups, global in-person events with peers in 30+ countries</p>
                  <button className="btn btn-outline-gold" type="submit">Join Waitlist</button>
                </div>
                <div className='col-lg-6 item-b'>
                  <img src='Img\stock-market-investment-profit 1.png'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid bg-black">
        <div className='container p-0'>
          <div className="row justify-content-center">
            <div className='col-lg-11 mt-5 border border-bottom-0 border-1 mb-5'>
              <div className='row pt-5 px-5'>
                <div className='col-lg-6 item-b'>
                  <img src='Img\male-investor-investing-money 1.png'></img>
                </div>
                <div className='col-lg-6 '>
                  <h2 className='text-gold'>For Founders</h2>
                  <h4 className='text-light pt-2'>One platform for all your startup needs</h4>
                  <p className='col-lg-8 text-muted py-2 lh-base'>Connect with the best fit VCs for your startup capital needs; Hire developers, marketers, connect with business partners, advisors for your startup growing and expansion; Monthly virtual pitch events to 1000+ global investors; Global in-person networking events and speaking opportunities in 30+ countries</p>
                  <button className="btn btn-outline-gold" type="submit">Join Waitlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid bg-black">
        <div className='container p-0'>
          <div className="row justify-content-center">
            <div className='col-lg-11 '>
              <div className='col-lg-6 border border-bottom-0 border-1 mb-5 mt-5 pt-5 ps-5'>
                <h2 className='text-gold'>For Partners</h2>
                <h4 className='text-light pt-2'>One platform for all your business leads and partners</h4>
                <p className='col-lg-8 text-muted py-2 lh-base'>Connect with fast growing startups and grow with them; Global in-person networking events and speaking opportunities in 30+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-black my-5">
        <div className='container p-0'>
          <div className="row justify-content-center">
            <div className='col-lg-9 text-center'>
              <h2 className='text-light'>Frequently Asked Questions</h2>
              <p className='text-muted'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            </div>
            <div className='col-lg-9 bg-black mt-5'>
              <div class="accordion accordion-flush bg-black" id="accordionFlushExample">
                <div class="accordion-item border mb-3">
                  <h2 class="accordion-header " id="flush-headingOne">
                    <button class="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <span className='bg-black'>Sed ut perspiciatis unde omnis iste natus error sit?</span>
                    </button>
                    <div id="flush-collapseOne" class="accordion-collapse collapse bg-black" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="col-lg-10 accordion-body">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                    </div>
                  </h2>
                </div>
                <div class="accordion-item border mb-3">
                  <h2 class="accordion-header " id="flush-headingTwo">
                    <button class="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <span className='bg-black'>quia voluptas sit aspernatur aut?</span>
                    </button>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse bg-black" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div class="col-lg-10 accordion-body">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                    </div>
                  </h2>
                </div>
                <div class="accordion-item border mb-3">
                  <h2 class="accordion-header " id="flush-headingThree">
                    <button class="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span className='bg-black'>Ut enim ad minima veniam, quis nostrum?</span>
                    </button>
                    <div id="flush-collapseThree" class="accordion-collapse collapse bg-black" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div class="col-lg-10 accordion-body">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                    </div>
                  </h2>
                </div>
                <div class="accordion-item border mb-3">
                  <h2 class="accordion-header " id="flush-headingFour">
                    <button class="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      <span className='bg-black'>Quis autem vel eum iure reprehenderit qui?</span>
                    </button>
                    <div id="flush-collapseFour" class="accordion-collapse collapse bg-black" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div class="col-lg-10 accordion-body">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                    </div>
                  </h2>
                </div>
                <div class="accordion-item border mb-3">
                  <h2 class="accordion-header " id="flush-headingFive">
                    <button class="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      <span className='bg-black'>vel illum qui dolorem eum fugiat quo voluptas?</span>
                    </button>
                    <div id="flush-collapseFive" class="accordion-collapse collapse bg-black" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                      <div class="col-lg-10 accordion-body">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                    </div>
                  </h2>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <Events/>

    </>
  )
}

export default Landing