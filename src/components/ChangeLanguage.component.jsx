import React, { useState } from 'react';
import i18next from 'i18next';

const ChangeLanguage = () => {
    
    const [language, setLanguage] = useState(i18next.language);
    const languages = [
        { code: 'en', name: 'English'},
        { code: 'pt-BR', name: 'Português do Brasil'},
        { code: 'es', name: 'Spanish'}
    ];
    const hangleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        i18next.changeLanguage(newLanguage, setLanguage(newLanguage));
    };

    return (
        <div>
            { languages.map((lng) => {
                const selected = lng.code === language;
                return (<span key = { lng.code }>
                    <input
                        type="radio"
                        name="languages"
                        value={ lng.code }
                        onChange = { hangleLanguageChange }
                        checked = { selected }
                    />{ lng.name}
                </span>);
            }) }
        </div>
    )
};

export default ChangeLanguage;
