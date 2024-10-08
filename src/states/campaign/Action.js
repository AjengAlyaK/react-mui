import api from '../../utils/api';

const ActionType = {
    RECEIVE_CAMPAIGNS: 'RECEIVE_CAMPAIGNS',
};

function receiveCampaignsActionCreator(campaigns) {
    return {
        type: ActionType.RECEIVE_CAMPAIGNS,
        payload: {
            campaigns,
        }
    }
}

function asyncReceiveCampaigns() {
    return async (dispatch) => {
        try {
            const campaigns = await api.campaigns();
            dispatch(receiveCampaignsActionCreator(campaigns));
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }
}

export {
    ActionType,
    receiveCampaignsActionCreator,
    asyncReceiveCampaigns
}