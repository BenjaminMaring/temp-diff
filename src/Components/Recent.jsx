import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Recent.css';

export default function Recents() {
    const [recentSearches, setRecentSearches] = React.useState([])
    console.log(recentSearches);

    React.useEffect(() => {
        const searches = JSON.parse(localStorage.getItem("recents"));
        if (searches) {
            setRecentSearches(searches.reverse());
        }
    }, [])

    function handleClick() {
        console.log("clicked");
    }

    let id = 0;
    const recentElems = recentSearches.map(item => {
        id +=1;
        return (
            <div className='recent--recent-wrapper' key={id}>
                <div className="recent--item-wrapper">
                    {item.first}
                </div>
                <div className="recent--item-wrapper">
                    {item.second}
                </div>
                <Link className="recent--button" to={`/compare/${item.first}/${item.second}`}>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        )
    })

    return (
        <div className="recent--outer-wrapper">
            <div className="recent--inner-wrapper">
                <h3>Recent Searches</h3>
                <div className="recent--elems-wrapper">
                    {recentElems}
                </div>
            </div>
        </div>
    )
}