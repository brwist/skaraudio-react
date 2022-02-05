import {useEffect, useState} from 'react';

export function ProductQuantitySelector() {

    const allowedNumbers = Array(1000).fill().map((v,i)=>i+1);
    const [quantity, setQuantity] = useState(1);

    const setQtyProtected = (qty) => {
        if (allowedNumbers.includes(qty)) {
            setQuantity(qty);
        }
    }

    const handleChange = (event) => {
        const value = Number(event.target.value || '' );
        setQtyProtected(value);
    }

    const handleArrowChange = (event) => {
        const value = Number(event.target.value || '' );
        if (event.key === 'ArrowUp') {
            setQtyProtected(value + 1);
        } else if (event.key === 'ArrowDown') {
            setQtyProtected(value - 1);
        }
    }

    return (
        <>
            <div className='flex mr-2'>

                <button
                    className='
                        border-2
                        font-medium
                        text-3xl
                        px-4
                        py-2
                        bg-black-900
                        hover:bg-gray-100
                    '
                    style={{height: '56px'}}
                    onClick={(e) => setQtyProtected(quantity-1)}
                >
                    -
                </button>
                <input
                    type="text"
                    name='product-qty'
                    style={{width: '80px', height: '56px'}}
                    pattern="[0-9]*"
                    onInput={(e) => handleChange(e)} value={quantity}
                    onKeyDown={(e) => handleArrowChange(e)}
                    className='
                        border-2
                        px-2
                        py-4
                        text-center
                    '
                />
                <button
                    className='
                        border-2
                        font-medium
                        text-3xl
                        px-4
                        py-2
                        bg-black-900
                        hover:bg-gray-100
                    '
                    style={{height: '56px'}}
                    onClick={(e) => setQtyProtected(quantity + 1)}
                >
                    +
                </button>
            </div>

        </>
    );
}