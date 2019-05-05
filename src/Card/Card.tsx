import * as React from 'react';
import CardPhoto from "../card-back.png"

export interface ICardProps {
    index: number,
    image: string,
    isFlipped: boolean,
    onFlip: (index: number) => void
}

export class Card extends React.Component <ICardProps> {

    render() {
        const {onFlip, index, isFlipped, image} = this.props;
        return (
            <div key={index}>
                {isFlipped ? <img onClick={() => onFlip(index)} className={"myCard"} src={image} alt="Logo"/> :
                    <img onClick={() => onFlip(index)} className={"myCard"} src={CardPhoto} alt="Logo"/>
                }
            </div>
        );
    }
}

// (<div key={index}>
//     {isCardFlipped ? <img onClick={() => onFlip(index)} className={"myCard"} src={image} alt="Logo"/> :
//         <img onClick={() => onFlip(index)} className={"myCard"} src={CardPhoto} alt="Logo"/>
//     }
// </div>)