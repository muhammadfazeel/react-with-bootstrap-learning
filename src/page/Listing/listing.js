import Card from "../../components/card/card";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import cardData from "../../fakeData";
import { useState } from "react"

function ListingPage() {
    let [first, setFirst] = useState("From Parent...");
    let [data, setData] = useState(cardData);
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <Header />
            <h4 className="d-flex justify-content-center">{counter}</h4>
            <button className="btn btn-secondary d-flex justify-content-center" onClick={() => setCounter(0)}>Reset Counter</button>
            <Card data={data} setData={setData} first={first} setFirst={setFirst} counter={counter} setCounter={setCounter} />
            <button className="btn btn-secondary d-flex justify-content-center" onClick={() => setData([])}>Clear</button>
            <Footer />
        </div>
    );
}
export default ListingPage;
