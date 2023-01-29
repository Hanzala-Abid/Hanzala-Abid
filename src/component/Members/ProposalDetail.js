import React from 'react'
import { Link } from 'react-router-dom'

const ProposalDetail = () => {
    return (
        <>
            <section className="container-fluid bg-black my-5">
                <div className='container p-0'>
                    <div className="row justify-content-center">
                        <div className='col-lg-11 col-12 my-5 p-0'>
                            <div className='row'>
                                <div className='p-0'>
                                    <Link className='btn border border-dark text-light mb-3 rounded-0' aria-current="page" to='/'> <i class="fa-solid fa-arrow-left text-gold pe-2"></i> Go Back</Link>
                                </div>
                                <div className='col-lg-8 border border-dark px-4'>
                                    <div className='col-lg-12 col-12 mt-3'>
                                        <div className='row justify-content-center'>
                                            <div className='col-lg-9'>
                                                <h4 className='text-light'>Proposal Details</h4>
                                            </div>
                                            <div className='col-lg-3 d-flex justify-content-end'>
                                                <button type='button' className='btn btn-outline-success rounded-0'><i class="fa-sharp fa-solid fa-circle-check pe-2"></i>Approved</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-light'></hr>
                                    <div className='col-lg-12 col-12'>
                                        <h2 className='text-light'>Project Noyo</h2>
                                        <p className='text-muted'>www.Noyo.com</p>
                                        <p className='text-muted'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                        <p className='text-muted'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                                        <p className='text-muted'>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        </p>
                                        <p className='text-muted'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        <p className='text-muted'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                        <h4 className='text-light'>Project Objective</h4>
                                        <p className='text-muted'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        <p className='text-muted'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                        <h4 className='text-light'>What are you building?</h4>
                                        <p className='text-muted'>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        <p className='text-muted'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                        <h4 className='text-light'>What are you looking for next to funding?</h4>
                                        <p className='text-muted'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                    </div>


                                </div>


                                <div className='col4'>
                                    <div className='col-lg-11 col-12 ps-3 py-3 border border-dark'>
                                        <img src='Img\image 6.png' width='316px'></img>
                                        <div className='col-lg-11 col-11 pt-3'>
                                            <div className='row'>
                                                <div className='col-lg-6'><h6 className='text-muted'>Name</h6></div>
                                                <div className='col-lg-6 p-0 text-end'><h6 className='text-light'>Daryl Rodriguez</h6></div>
                                                <hr className='ms-2 text-muted'></hr>
                                            </div>
                                        </div>
                                        <div className='col-lg-11 col-11'>
                                            <div className='row'>
                                                <div className='col-lg-6'><h6 className='text-muted'>Title</h6></div>
                                                <div className='col-lg-6 p-0 text-end'><h6 className='text-light'>CEO</h6></div>
                                                <hr className='ms-2 text-muted'></hr>
                                            </div>
                                        </div>
                                        <div className='col-lg-11 col-11'>
                                            <div className='row'>
                                                <div className='col-lg-4'><h6 className='text-muted'>Website</h6></div>
                                                <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>homebrew.co/team</h6></div>
                                                <hr className='ms-2 text-muted'></hr>
                                            </div>
                                        </div>
                                        <div className='col-lg-11 col-11'>
                                            <div className='row'>
                                                <div className='col-lg-4'><h6 className='text-muted'>Location</h6></div>
                                                <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>San Francisco, California</h6></div>
                                                <hr className='ms-2 text-muted'></hr>
                                            </div>
                                        </div>
                                        <div className='col-lg-11 col-11'>
                                            <div className='row'>
                                                <div className='col-lg-6'><h6 className='text-muted'>Profile</h6></div>
                                                <div className='col-lg-6 p-0 text-end'><h6 className='text-gold'>Founder Profile</h6></div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='col-lg-11 col-12 mt-3'>
                                    <div className='row justify-content-around '>
                                    <button className='col-lg-5 btn btn-outline-dark rounded-0 py-2 px-3'>Connect</button>
                                    <button className='col-lg-5 btn btn-outline-dark rounded-0 py-2 px-3'>Chat</button>
                                    </div>
                                    </div>
                                </div>

                                <div className='col-lg-8 col-12 border border-dark pe-4 my-5 item-c padd'>
                                    <h2 className='text-light pt-3'>More Details</h2>
                                    <div className='col-lg-12 pt-3 col-11'>
                                        <div className='row'>
                                            <div className='col-lg-6'><h6 className='text-muted'>Type</h6></div>
                                            <div className='col-lg-6 p-0 text-end'><h6 className='text-light'>Syndicate</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11'>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Name</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>Daryl Rodriguez</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Email</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>daryl_rodriguez@gmail.com</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Twitter</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>https://www.twitter.com/daryl_rodriguez</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Discord</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>https://www.discord.com/user/daryl_rodriguez</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Telegram</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>https://www.discord.com/user/daryl_rodriguez</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Linkedin</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>https://www.t.me/daryl_rodriguez</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Project Name</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>Noyo</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Website</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>www.Noyo.com</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Tell me more about your stage of project</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>At vero eos et accusamus et iusto odio dignissimos ducimus qui...</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Tell more about your roadmap & testnet</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-light'>Nam libero tempore, cum soluta nobis est eligendi...</h6></div>
                                            <hr className='ms-2 text-muted'></hr>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-11 '>
                                        <div className='row'>
                                            <div className='col-lg-4'><h6 className='text-muted'>Profile</h6></div>
                                            <div className='col-lg-8 p-0 text-end'><h6 className='text-gold'>Founder Profile</h6></div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProposalDetail