import React from 'react';
import { useTranslation } from 'react-i18next';

const Title = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Welcome to React')}</h2>
            <h4>{t('WAPB')}</h4>
        </div>
    );
};

export default Title;
