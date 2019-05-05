import * as React from 'react';
import {Card, ICardProps} from '../Card/Card';

type CardObject = gameCardProps

interface gameCardProps {
    index: number,
    image: string,
    // isFlipped: boolean
}

export interface IGameState {
    stack: gameCardProps[],
    currentFlippedCards: Record<number, number>,
    flippedCards: Record<number, boolean>
}

export class Game extends React.Component <any, IGameState> {

    state: IGameState = {
        currentFlippedCards: {},
        flippedCards: {
            // 0: true,
            // 2: true
        },
        stack: [
            {
                index: 1,
                image: 'https://picsum.photos/id/1003/1181/1772',
                // isFlipped: false

            },
            {
                index: 2,
                image: 'https://picsum.photos/id/1002/1181/1772',
                // isFlipped: false

            },
            {
                index: 3,
                image: 'https://picsum.photos/id/1003/1181/1772',
                // isFlipped: false

            },
            {
                index: 4,
                image: 'https://picsum.photos/id/1002/1181/1772',
                // isFlipped: false

            },
        ]
    };

    onFlip = (cardIndex: number) => {
        // console.log();

        const {currentFlippedCards, flippedCards} = this.state;

        let cardExists = currentFlippedCards.hasOwnProperty(cardIndex);

        let size = Object.keys(currentFlippedCards).length;

        // let cardKey = Object.keys(currentFlippedCards).map(Number);
        // console.log(cardKey);

        if (size === 2) {
            return false
        }
        // console.log('check');
        //     this.setState({currentFlippedCards}, () => {
        //
        //         setTimeout(() => {
        //             // compare the cards after state is updated and 1 second has passed
        //             const {currentFlippedCards[0], currentFlippedCards[1]} = this.state.currentFlippedCards;
        //             if (this.state.stack[currentFlippedCards[0]] === this.state.stack[currentFlippedCards[1]]) {
        //
        //             }
        //         }, 1000);
        //     });
        //
        // }
        // this.state.currentFlippedCards.includes(cardIndex)
        // console.log(cardExists);
        // if (this.state.currentFlippedCards.length > 1) {
        //     this.state.currentFlippedCards.splice(0,2)
        // }

        if (cardExists === true) {
            return false
        } else {
            this.setState({
                flippedCards: {...flippedCards, [cardIndex]: true}
            });
            this.setState({
                currentFlippedCards: {...currentFlippedCards, [cardIndex]: cardIndex}
            });

        }
        // this.setState({
        //     flippedCards: {
        //         ...this.state.flippedCards, [index]: true
        //     }
        // });
        //
        // let stackKey = Object.keys(this.state.flippedCards);
        //
        // console.log(stackKey);
        // let stateCopy = Object.assign({}, this.state);
        //
        // if (index in stackKey) {
        //     stateCopy.stack[index].isFlipped = true;
        //
        //     console.log(stateCopy);
        //
        //     this.setState(stateCopy);
        // }
    };

    render() {

        const {stack, flippedCards} = this.state;
        // const flipStatus = Object.values(flippedCards);
        const objects: CardObject[] = Object.values(stack);

        return (
            <div className={"game"}>
                {objects.map(object => {
                    const card = object as ICardProps;
                    // if()
                    return (
                        <div key={card.index}>
                            <Card index={card.index} image={card.image} isFlipped={flippedCards[card.index]}
                                  onFlip={this.onFlip}/>
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