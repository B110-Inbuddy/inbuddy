import PropTypes from 'prop-types';

import { Button } from '@/components/atoms/Button';
import { Div } from '@/components/atoms/Div.jsx';
import { P } from '@/components/atoms/P.jsx';
import { useState, useRef } from 'react';

import { useSelector } from 'react-redux';
import { checkItemList } from '@/apis/api/itemList';

function ToggleSupply({ selected, supply, onToggle, onRemove }) {
    const itemList = useSelector((state) => state.item);

    const [isSelected, setIsSelected] = useState(selected);
    const supplyRef = useRef(null);

    const handleClick = () => {
        setIsSelected(!isSelected);
        console.log(supplyRef.current.innerText);
        itemList.map((item) => {
            if (item.itemName === supplyRef.current.innerText) {
                // console.log(item);
                checkItemList(1, item.itemId);
                onToggle();
            }
        });
    };

    const handleRemoveDiv = () => {
        console.log('Enter Toggle Supply handleRemoveDiv');
        itemList.map((item) => {
            if (item.itemName === supplyRef.current.innerText) {
                onRemove(item.itemId, item.itemName);
            }
        });
    };

    return (
        <>
            {isSelected ? (
                <div className="flex flex-row items-center justify-between w-full">
                    <Div className="w-[80%] mb-4 cursor-pointer bg-border border-border" onClick={handleClick}>
                        <P ref={supplyRef} className="text-xl line-through font-pretendardBold text-neutral-400 ">
                            {supply}
                        </P>
                    </Div>
                    <div className="mb-4">
                        <Button
                            className="w-[15%] border border-border bg-border"
                            variant="ghost"
                            size="default"
                            onClick={handleRemoveDiv}
                        >
                            <P variant="subHeader" className="text-white">
                                -
                            </P>
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row items-center justify-between w-full">
                    <Div className="w-[80%] mb-4 bg-white cursor-pointer border-border" onClick={handleClick}>
                        <P ref={supplyRef} variant="sectionHeader">
                            {supply}
                        </P>
                    </Div>
                    <div className="mb-4">
                        <Button
                            className="w-[15%] border border-border"
                            variant="ghost"
                            size="default"
                            onClick={handleRemoveDiv}
                        >
                            <P variant="subHeader" color="error">
                                -
                            </P>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

ToggleSupply.propTypes = {
    selected: PropTypes.bool,
    supply: PropTypes.string,
    onRemove: PropTypes.any,
    onToggle: PropTypes.any,
};

export default ToggleSupply;
