import PostCard from "../../components/card/postCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from 'react-responsive-pagination';
import Spinner from 'react-bootstrap/Spinner';

function DynamicPage() {
    let pix = [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/200/300/',
        'https://picsum.photos/id/870/200/300?grayscale'
    ]


    let limit = 12;
    let [loading, setLoading] = useState(true);
    let [pages, setPages] = useState(1);
    let [data, setData] = useState([]);
    let [overAllData, setOverAllData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);

    const getData = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        if (data.length) {
            let newPages = Math.round(data.length / limit);
            setPages(newPages + 1)
        }
        setData(data.slice(0, 12));
        setOverAllData(data)
    };

    useEffect(() => {
        setLoading(false)
        getData();
    }, []);

    useEffect(() => {
        let to = currentPage * limit;
        let from = to - limit;
        if (currentPage === 1) {
            from = 0
        }
        let newData = overAllData.slice(from, to);
        setData(...[newData]);
    }, [currentPage]);

    function handlePageChange(page) {
        setCurrentPage(page);
    }
    return (
        <div>
            {
                loading === true ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) :
                    <PostCard data={data} setData={setData} pix={pix} />
            }
            <div className="m-5">
                <Pagination
                    total={pages}
                    current={currentPage}
                    onPageChange={(page) => handlePageChange(page)}
                />
            </div>
        </div>
    );
}

export default DynamicPage;
