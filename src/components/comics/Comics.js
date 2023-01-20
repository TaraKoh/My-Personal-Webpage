import React from "react";
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Comics.css";

export default class Comics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title: "COVID-19 Record",
                    date: "2022/12/31",
                    description: "It's a record of the year-end chaos and how we got COVID-19 in 2022.",
                    imageSrc: ["Covid1.png", "Covid2.png", "Covid3.png"],
                    paddingPattern: 1
                }, {
                    title: "Soup",
                    date: "2022/11/09",
                    description: "A bowl of homemade hot SOUP: There would always be a specific food for each of us that carries the most warmest memories.",
                    imageSrc: ["Soup1.jpg", "Soup2.jpg", "Soup3.jpg", "Soup4.jpg"],
                    paddingPattern: 0
                }, {
                    title: "Watersports",
                    date: "2022/10/13",
                    description: "Here's the final chapter of this summer's comic traveling journal in Sanya, and I tried a more complete way of storyboard and multi-frame comic to record these happy memories. <br /> After finally bought a surfing swimsuit (see my previous post), we set off to play in the sea the next day! Initially we planned to go to other Islands, but unexpectedly we found that there had the same project in Yalong Bay. Surely it is better to play just near the hotel, saving the trouble of long-distance driving.<br />My most favorite project was the parasailing, where one could experience the feeling of flying freely in the sky, in a very stable way that will not get dizzy.<br />Wondering when the next trip will be...",
                    imageSrc: ["Watersport1.jpg", "Watersport2.jpg", "Watersport3.jpg"],
                    paddingPattern: 0
                }, {
                    title: "Comic Diaries: Aug22",
                    date: "2022/09/01",
                    description: "A random recording from a ex-journal & stationery enthusiast <br /> Could you popsicle be tough and strong enough so that I can have you elegantly!?! <br /> Thinking of having a bagel with full cream cheese and a large cup of hot latte makes it much more motivated to get up!!!😍                    ",
                    imageSrc: ["ComicDiary2208_1.jpg", "ComicDiary2208_2.jpg", "ComicDiary2208_3.jpg", "ComicDiary2208_4.jpg", "ComicDiary2208_5.jpg"],
                    paddingPattern: 1
                },{
                    title: "Outlets",
                    date: "2022/08/28",
                    description: "This is a travelogue of having a huge loss in buying swimsuit due to my procrastination and laziness😅",
                    imageSrc: ["Outlets1.jpg", "Outlets2.jpg", "Outlets3.jpg"],
                    paddingPattern: 1
                }, {
                    title: "清补凉",
                    date: "2022/08/23",
                    description: "I would recommend everyone travelling to Hainan try this Ching bo leung (清补凉) which is a refreshing dessert to have in hot weather😋",
                    imageSrc: ["Qingbuliang.jpg"],
                    paddingPattern: 1
                }, {
                    title: "What's in Lobbster",
                    date: "2022/08/14",
                    description: "Have you ever eaten something weird in a lobster? This is a real story from my magical experience in The Marriot in Sanya. It's also my attempt at a brand new style of graphic novel! 'Why is there a chewing gum in my grilled lobster?' 'This stuff is definitely chewing gum from whatever angles ...' Now I know it's neither a chewing gum NOR ITS BRAIN...",
                    imageSrc: ["Fishbar1.jpg", "Fishbar2.jpg", "Fishbar3.jpg"],
                    paddingPattern: 0

                }, {
                    title: "Sanya Travelogue",
                    date: "2022/08/09",
                    description: "First travelogue in Sanya, Hainan🍹Also my fisrt attempt in drawing comics on computer <br /> It's such a pleasant journey in car to avoid the heat outside <br /> Guess I'm obsessed with the feeling of free and casual in a road trip❤️",
                    imageSrc: ["Sanya1.png", "Sanya2.jpg", "Sanya3.jpg", "Sanya4.jpg", "Sanya5.jpg", "Sanya6.jpg"],
                    paddingPattern: 1
                }
            ],
            isShow: false,
            showData: {}
        }
    }

    handleShow = (item) => {
        this.setState({
            isShow: true,
            showData: item
        })
    }

    handleClose = () => {
        this.setState({
            isShow: false
        })
    }

    comicsPic = () => {
        const { imageSrc } = this.state.showData;
        // 为了避免showData为空指向undefined（没有点击某个window时Modal hidden）
        if (imageSrc) {
            return imageSrc.map((item) => {
                return <img src={require("../../images/" + item)} style={{ width: "100%", marginBottom: "15px" }} alt="ImgPreview"></img>
            });
        } else {
            return ''
        }
    }

    render() {
        const { dataList, isShow, showData } = this.state
        return (
            <>
                <div className="comics">
                    <h2 className="comicsHeader">Here are My Original Comic Works Published Online</h2>
                    <div className="comicsGird">
                        {
                            dataList.map((item, itemIndex) => {
                                return (
                                    <div className="comicWindow" key={itemIndex} onClick={this.handleShow.bind(this, item)}>
                                        <div className="comicMainBlock">
                                            <div className="comicPictureBlock">
                                                {item.imageSrc.map((image, imageIndex) => {
                                                    if (item.imageSrc.length === 1) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} style={{ width: "100%" }} alt="ImgPreview"></img>
                                                    } else if (item.imageSrc.length === 2 || item.imageSrc.length === 3) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} alt="ImgPreview"></img>
                                                    } else if (item.imageSrc.length >= 4) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} style={{ width: "50%" }} alt="ImgPreview"></img>
                                                    } else {
                                                        return <></>
                                                    }
                                                })}
                                            </div>
                                            <div className="comicBottomBlock">
                                                <div className="comicLine">
                                                    <h3 className="comicTitle">{item.title}</h3>
                                                    <h3 className="comicDate">{item.date}</h3>
                                                </div>
                                                <div className="comicLine">
                                                    <p className="comicDescription">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Modal show={isShow} onHide={this.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2 className="comicModalTitle">{showData.title}</h2>
                            <h5 className="comicModalDate">{showData.date}</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={showData.paddingPattern === 1 ? { padding: '2rem 5rem' } : {}}>
                        <p className="comicModalDescription" style={showData.paddingPattern === 1 ? { margin: '0 -1rem 2rem -1rem' } : { margin: '0 0 2rem 0' }}>{showData.description}</p>
                        {this.comicsPic()}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}