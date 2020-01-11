import React, { Component } from 'react';

class AboutComponent extends Component {
    constructor(props) {
        super(props);

        this.images = [
            'https://media.ed.edmunds-media.com/acura/mdx/2020/oem/2020_acura_mdx_4dr-suv_sport-hybrid-sh-awd_fq_oem_2_815.jpg',
            'https://media.ed.edmunds-media.com/audi/q5/2020/oem/2020_audi_q5_4dr-suv_prestige-45-tfsi-quattro_fq_oem_1_815.jpg',
            'https://media.ed.edmunds-media.com/porsche/taycan/2020/oem/2020_porsche_taycan_sedan_turbo-s_fq_oem_3_815.jpg',
            'https://media.ed.edmunds-media.com/mercedes-benz/glc-class/2020/oem/2020_mercedes-benz_glc-class_4dr-suv_glc-300-4matic_fq_oem_3_815.jpg',
            'https://media.ed.edmunds-media.com/jaguar/f-type/2020/oem/2020_jaguar_f-type_convertible_p380-r-dynamic_fq_oem_1_815.jpg',
            'https://media.ed.edmunds-media.com/infiniti/qx50/2019/oem/2019_infiniti_qx50_4dr-suv_essential_fq_oem_4_815.jpg',
            'https://media.ed.edmunds-media.com/lexus/rx-450hl/2020/oem/2020_lexus_rx-450hl_4dr-suv_luxury_fq_oem_2_815.jpg',
            'https://media.ed.edmunds-media.com/bmw/x6/2020/oem/2020_bmw_x6_4dr-suv_m50i_fq_oem_3_815.jpg',
            'https://media.ed.edmunds-media.com/tesla/model-x/2019/oem/2019_tesla_model-x_4dr-suv_performance_fq_oem_9_815.jpg',
            'https://media.ed.edmunds-media.com/rolls-royce/phantom/2018/oem/2018_rolls-royce_phantom_sedan_base_f_oem_1_815.jpg'
        ];

        this.state = {
            currentIndex: 0,
        };

        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

    }
    goToPrevSlide () {
        const {currentIndex} = this.state;
        const newPointer = currentIndex === 0 ? this.images.length -1 : currentIndex - 1;
        this.setState({currentIndex: newPointer});
    }

    goToNextSlide ()  {
        const {currentIndex} = this.state;
        const newPointer = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
        this.setState({currentIndex: newPointer});
    }

    render() {
        return(
            <div className="home">
                <img src={this.images[this.state.currentIndex]} />
                <br/>
                <button class = "prev" onClick={this.goToPrevSlide}>&#10094;</button>
                <button class = "next" onClick={this.goToNextSlide}>&#10095;</button>
            </div>

        );
    }

}

export default AboutComponent