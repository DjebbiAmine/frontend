import React from 'react';
import { Route } from 'react-router-dom';


const ThemeRoute = ({ children, theme, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
            />
        </>

    );
};

export default ThemeRoute;