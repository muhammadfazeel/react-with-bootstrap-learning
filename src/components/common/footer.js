import { GrFacebookOption, GrTwitter, GrYoutube, GrInstagram } from 'react-icons/gr';


export default function Footer() {
    return (
        <div className="">
            <footer className="text-center text-lg-start" style={{ backgroundColor: "#223af0" }}>
                <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
                        <GrFacebookOption />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
                        <GrYoutube />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
                        <GrInstagram />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
                        <GrTwitter />
                    </button>
                </div>
                <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="#">K@ShMiRi</a>
                </div>
            </footer >
        </div >
    )
}