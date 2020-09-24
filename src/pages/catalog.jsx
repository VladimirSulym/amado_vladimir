import React from 'react';
import OneItem from "../components/catalogElement/oneItem";
import { useSelector, useDispatch } from 'react-redux'

function TableRow(props) {
    const catalogList = useSelector((store)=>store.app.catalogList);
    return (
        <>
            {catalogList.map((item) => <OneItem
                id={item.id}
                title={item.title}
                price={item.price}
                imgUrl={item.img_url}
            />)}
        </>
    );
}

export default TableRow;