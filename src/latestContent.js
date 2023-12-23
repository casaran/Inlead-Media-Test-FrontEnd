import React, { useState, useEffect } from 'react';

const LatestContent = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [content, setContent] = useState([]);

    const callEndpoint = () => {
        fetch("http://127.0.0.1:8080/edsa-drupal10/api/v1/latest_updated_content")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setContent(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        callEndpoint()
        const interval = setInterval(() => {
            callEndpoint()
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return content.map(node => (
            <div>
                <div>{node.title}</div>
                <div dangerouslySetInnerHTML={{ __html: node.body[0].value }}></div>
                <div><img alt="Kittens" width="200" height="200" src={node.image} /></div>
            </div>
        ));
    }
}

export default LatestContent;
