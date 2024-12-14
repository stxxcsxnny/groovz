import {
    Grid

    , Skeleton
} from "@mui/material"


export const LayoutLoader = () => {
    return (
        <Grid container height={'calc(100vh-4rem)'}>

            <Grid item sm={4} md={3} height={'100%'} sx={{
                display: { xs: 'none', sm: 'block' }
            }}>
                <Skeleton variant='rectangular' />

            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}> <Skeleton variant='rectangular' /></Grid>
            <Grid

                item md={4} lg={3} height={'100%'} sx={{
                    display: { xs: 'none', md: 'block' },
                    padding: '2rem',
                    bgcolor: 'red',

                }}
            >  <Skeleton variant='rectangular' /></Grid >
        </Grid>
    )

}