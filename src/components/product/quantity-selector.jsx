import {useEffect, useState} from 'react';

export function ProductQuantitySelector() {
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
                >
                    -
                </button>
                <input
                    type="text"
                    name='product-qty'
                    style={{width: '80px', height: '56px'}}
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
                >
                    +
                </button>
            </div>

        </>
    );
}