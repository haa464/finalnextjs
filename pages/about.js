import Image from "next/image";

const About = () => {
    return ( 
        <div>
            <section class="about_page">
                <div class="container">
                    <div class="title_about">
                        <a href="#" class="title_about_link">
                            <h2>About</h2>
                        </a>
                    </div>

                    <div class="details_image">
                        <Image src="/image-interactive.jpg" width="800px" height="450px"/>
                    </div>
                    <div class="details">
                        <a href="#" class="title_about_link">
                            <h4>MAR 24TH, 2022 - BIG’s London-based Canada Water Masterplan Approved</h4>
                        </a>
                        <div class="description">
                            <p>
                                <span>
                                    2021 with 66 offices competing for the project, expected to break ground in 2024. 

                                    “With our design for the Joint Research Centre in Sevilla,
                                    more than anything, we have attempted to allow the sustainable 
                                    performance of the building to drive an architectural aesthetic 
                                    that not only makes the building perform better but also makes it 
                                    more inhabitable and more beautiful – a new Andalusian environmental 
                                    vernacular,” said Bjarke Ingels.” Having started my studies as an 
                                    architect in Andalusia and later returning to ETSAB in Barcelona, 
                                    to now having a 50–person BIG office in Barcelona, this project 
                                    feels like coming full circle.” 

                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* second information */}

            



        </div>
     );
}
 
export default About;