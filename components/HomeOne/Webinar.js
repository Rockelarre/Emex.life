import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class Webinar extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <section className="webinar-area">
                    <div className="row m-0">
                        <div className="col-lg-6 p-0">
                            <div className="webinar-content">
                                <h2>Nos encanta hacer esto, observenos trabajar!</h2>
                                <p>Aquí debe ir un video empresarial, con escenas de
                                    oficina y servicios.
                                </p>

                                <Link href="/#">
                                    <a className="btn btn-primary">Ver más</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 p-0">
                            <div className="webinar-video-image">
                                <img src="/images/woman.jpg" alt="image" />

                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='F6o3xZlGw_U' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </React.Fragment>
        );
    }
}

export default Webinar;