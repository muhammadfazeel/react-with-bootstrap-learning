import cardData from "../../fakeData";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Card(prop) {

    let pushInsertNewRecord = () => {
        cardData.push({
            title: 'Afghanistan',
            src: 'https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg',
            details: 'The national flag of the Islamic Emirate of Afghanistan, also used as the flag of the Taliban, consists of a white field with a black Shahada. It was adopted on 15 August 2021 with the victory of the Taliban in the 2001–2021 war. '
        })
        prop.setData([...cardData])
    }

    let incrementCounter = () => {
        let count = prop.counter;
        count += 1;
        prop.setCounter(count)
    }

    return (
        <div className="container">
            <div className="row">
                {prop?.data?.map((Item, index) => (
                    <div key={index} className="col-sm-3 mt-2">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={Item?.src} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{Item?.title}</h5>
                                <ReactReadMoreReadLess
                                    charLimit={100}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {Item?.details}
                                </ReactReadMoreReadLess>
                                <br /><br />
                                <button className="btn btn-secondary" onClick={() => pushInsertNewRecord()}>Array</button>
                                <button className="btn btn-secondary" onClick={() => incrementCounter()}>Counter</button>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </div >
    )
}