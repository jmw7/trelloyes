import React from 'react';
import List from './List';
import './App.css'

export default function App(props) {

    return (
        <main className='App'>
            <header className='App-header'>
                <h1>Trelloyes!</h1>
            </header>
            <div className='App-list'>
                {props.store.lists.map(list =>
                    <List
                        key={list.id}
                        header={list.header}
                        cards={list.cardIds.map(cardId =>
                            props.store.allCards[cardId]
                        )}
                    />
                )}
            </div>
        </main>
    )
}
