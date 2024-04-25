import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            <p><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></p>
        </div>
    )
}

export default Detail;