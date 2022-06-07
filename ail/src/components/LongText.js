import React, {useState} from 'react';

const LongText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
        // there is nothing more to show
        return <div>{content}</div>
    }
    if (showAll) {
        // We show the extended text and a link to reduce it
        return <div>
            <button className="btn btn-primary" onClick={showLess}>Read less</button>
            <br />
            {content}
        </div>
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return <div>
        <button className="btn btn-primary" onClick={showMore}>Read more</button>
        <br />
        {toShow}

    </div>
}

export default LongText;