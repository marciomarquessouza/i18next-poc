import React from 'react';
import i18next from 'i18next';

const Language = () => {
    return (
    <>
        <h1>{ i18next.language }</h1>
    </>
    );
};

export default Language;
