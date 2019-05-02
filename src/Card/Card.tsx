import * as React from 'react';
import CardPhoto from "../card-back.png"

export interface ICardProps {
    index: number,
    image: string,
    isCardFlipped: boolean,
    onFlip: (index: number) => void
}

export class Card extends React.Component <ICardProps> {

    render() {
        const {onFlip, index, isCardFlipped, image} = this.props;
        return (
            <div key={index}>
                {isCardFlipped ? <img onClick={() => onFlip(index)} className={"myCard"} src={image} alt="Logo"/> :
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