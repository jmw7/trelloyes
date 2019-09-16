import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('List Component', ()=>{
    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<List title="title test" cards={[{id:'1',title:'test',content:'test'},{id:'2',title:'test',content:'test'}]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', ()=>{
        const tree = renderer
          .create(<List title="title test" cards={[{id:'1',title:'test',content:'test'},{id:'2',title:'test',content:'test'}]} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

});