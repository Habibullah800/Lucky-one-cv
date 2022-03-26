import React from 'react';
import './BonusQues.css'

const BonusQues = () => {
    return (
        <div className='answer'>
            <h4>
                Ques: How does react work?<br></br>
                React works in declarative code. React does not commit state changes one after the other if there are multiple state changes. React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. It could look  with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.
            </h4>
            <h4>
                Ques: How UseState work?<br></br>
                UseState  is a Hook that allows state variables in functional components. It Imported from the react package. It allows adding state to a functional component.


            </h4>
            <h4>
                Ques: Props vs State?<br></br>
                Props are used to pass data from one component to another.
                The state is a local data storage that is local to the component only and cannot be passed to other components. props are variables passed to it by its parent component. State on the other hand is still a variable, but directly initialized and managed by the component.
            </h4>

        </div>
    );
};

export default BonusQues;