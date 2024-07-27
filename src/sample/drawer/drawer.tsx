import React, {useEffect} from 'react';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {grey} from '@mui/material/colors';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// let drawerBleeding = 56;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const Root = styled('div')(({theme}) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light'
            ? grey[100]
            : theme.palette.background.default,
}));

const StyledBox = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export default function Drawer(props: Props) {
    const {window} = props;
    const [open, setOpen] = React.useState(true);
    const [drawerBleeding, setdrawerBleeding] = React.useState(56);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
        debugger;
        if (newOpen === false) {
            if (drawerBleeding == 56) {
                setdrawerBleeding(100);
                setOpen(true);
            } else setdrawerBleeding(56);
            setOpen(true);
        }
    };

    useEffect(() => {
        debugger;
        setdrawerBleeding(drawerBleeding);
    }, [drawerBleeding]);

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />

            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(80% - ${drawerBleeding}px)`,
                        minHeight: `calc(80% - ${drawerBleeding}px)`,
                        // height: '700px',
                        // minHeight: '700px',
                        overflow: 'visible',
                        transform: `translate(0px,  ${drawerBleeding}px) !important`,
                        // transform: `translate(0px,) !important`,
                        // minHeight: '500px',
                    },
                }}
            />
            <div
            // onClick={toggleDrawer(!open)}
            // onTouchMove={toggleDrawer(!open)}
            // onTouchStart={toggleDrawer(!open)}
            >
                <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={open}
                    onOpen={toggleDrawer(!open)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    onClose={toggleDrawer(!open)}
                    onTouchMoveCapture={toggleDrawer(!open)}
                >
                    <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -56,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                            height: '500px',
                            minHeight: '500px',
                        }}
                    >
                        <Puller />
                        <Typography sx={{p: 2, color: 'text.secondary'}}>
                            51 results
                        </Typography>
                    </StyledBox>
                    <StyledBox
                        sx={{
                            px: 2,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',
                        }}
                    >
                        <Skeleton variant="rectangular" height="100%" />
                    </StyledBox>
                </SwipeableDrawer>
            </div>
        </Root>
    );
}
