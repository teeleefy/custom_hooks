import React, { useState } from 'react';

function useFlip(initialState = true){
    const [ state , setState ] = useState(initialState);
    const useFlipCard = () => {
        setState(state => !state)
    }
    return [state, useFlipCard];
}

export default useFlip;