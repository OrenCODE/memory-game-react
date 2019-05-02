import * as React from 'react';
import {Card, ICardProps} from '../Card/Card';

type CardObject = gameCardProps

interface gameCardProps {
    index: number,
    image: string
}

export interface IGameState {
    stack: gameCardProps[],
    flippedCards: Record<number,boolean>
}

export class Game extends React.Component <any, IGameState> {

    state: IGameState = {
        flippedCards: {},
        stack: [
            {
                index: 0,
                image: 'https://picsum.photos/id/1003/1181/1772',

            },
            {
                index: 1,
                image: 'https://picsum.photos/id/1002/1181/1772',

            },
            {
                index: 2,
                image: 'https://picsum.photos/id/1003/1181/1772',

            },
            {
                index: 3,
                image: 'https://picsum.photos/id/1002/1181/1772',

            },
        ]
    };

    onFlip = (index: number) => {
        // console.log(index);

        this.setState({
            flippedCards: {
                ...this.state.flippedCards, [index] : true
            }
        })
    };

    render() {

        const {stack, flippedCards} = this.state;
        const flipStatus = Object.values(flippedCards);
        const objects: CardObject[] = Object.values(stack);

        return (
            <div className={"game"}>
                {objects.map(object => {
                    const card = object as ICardProps;
                    return (
                        <div key={card.index}>
                            <Card index={card.index} image={card.image} isCardFlipped={card.isCardFlipped}
                                  onFlip={this.onFlip} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

// Card index={this.state.stack[0].index}
//       image={this.state.stack[0].image}
//       isCardFlipped={this.state.stack[0].isCardFlipped}
//       onFlip={this.onFlip}/>