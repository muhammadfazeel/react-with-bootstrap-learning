import ReactReadMoreReadLess from "react-read-more-read-less";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function PostCard(prop) {
    const renderTooltip = (index) => (
        <Tooltip id="button-tooltip">
            {prop?.data[index].title}
        </Tooltip>
    );

    return (
        <div className="container">
            <div className="row">
                {prop?.data?.map((Item, index) => (
                    <div key={index} className="col-sm-3 mt-2">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top rounded mx-auto d-block" src={prop.pix[Math.round(Math.random() * 5)]} alt="" />
                            <div className="card-body">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip(index)}
                                >
                                    <h5 className="card-title">{Item?.title.length > 24 ? `${Item.title.slice(0, 20)}...` : Item.title}</h5>
                                </OverlayTrigger>
                                <ReactReadMoreReadLess
                                    charLimit={50}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {Item?.body}
                                </ReactReadMoreReadLess>
                                <button className="btn btn-secondary">Clear</button>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </div >
    )
}