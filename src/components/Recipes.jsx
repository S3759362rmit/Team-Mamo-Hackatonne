import React, {useEffect} from 'react'

import './Recipes.css';

const Recipes = (props) => {
    useEffect(() => {
        fetch().then(res => res.json()).then(data => console.log(data))
    }, [])
    return <div className="lists-widget">Hello World</div>
}

export default Recipes;