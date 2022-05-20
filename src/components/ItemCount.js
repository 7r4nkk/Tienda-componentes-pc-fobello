import '../css/ItemCount.css'

import React from 'react'
import { onAdd } from './ItemListContainer1/Products';

const ItemCount = () => {
    return (
    <div>
        <div className="contador">
            <button id='agregar' className="btncount" onClick={onAdd}>AGREGAR AL CARRITO</button>
            <div include="form-input-select()">
                <select id='cantidad' required>
                    <option value="" hidden>Cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    </div>
);
}

export default ItemCount

