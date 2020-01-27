import React from 'react'
import Header from "./Header";
import Delivery from "./delivery";
import Testimonial from "./testimonial";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Delivery/>
                <Testimonial/>
            </div>
        )
    }
}

export default Home