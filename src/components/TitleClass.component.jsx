import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class TitleClass extends Component {
    render() {
        const { t } = this.props;
        return(
            <>
                <h2>{t('IWTFABFBW')}</h2>
            </>
        );
    }
};

export default withTranslation()(TitleClass);
