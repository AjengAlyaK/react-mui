import React, { useEffect } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import CardCampaign from '../elements/campaign/CardCampaign';

const CampaignPage = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveCampaigns);
    }, [dispatch]);
    return (
        <Grid container spacing={3} sx={{ py: { xs: 8, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <Stack spacing={2}>
                    <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', md: 'h3' }, textAlign: { xs: 'center', md: 'center' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                        Join the Campaign for Protecting Nature, Preserving Beauty
                    </Typography>
                    <Typography variant="body1" textAlign="center">
                        Join our efforts to safeguard the natural wonders of Indonesia.<br /> Explore our environmental initiatives and be part of the change for a sustainable future.
                    </Typography>
                </Stack>
            </Grid>
            {campaigns.map((campaign, index) => (
                <Grid item xs={12} md={3}>
                    <CardCampaign id={campaign.id} index={index} picture={campaign.picture} name={campaign.name} location={campaign.location} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CampaignPage;