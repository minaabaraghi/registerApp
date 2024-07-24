import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './style.css';
export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const [label, setLabel] = React.useState('select');
    return (
        <div>
            <FormControl fullWidth>
                <Button
                    onClick={toggleDrawer(true)}
                    startIcon={<KeyboardArrowDownIcon />}
                    fullWidth
                    sx={{background: '#fff !important'}}
                >
                    {label}
                </Button>
            </FormControl>
            <Drawer anchor={'bottom'} open={open} onClose={toggleDrawer(false)}>
                <List className="test ">
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText
                                    primary={text}
                                    onClick={() => setLabel(text)}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
