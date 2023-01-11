import './FormLogin.scss';
import { Box, Button, TextField, Typography, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function FormLogin() {
    return (
        <div className="login__wrapper">
            <div className="wrapper__left">
                <form>
                    <Box
                        sx={{
                            '& > :not(style)': { m: 2, width: '30ch', display: 'flex' },
                            label: { fontSize: '1.6rem' },
                            input: { fontSize: '1.6rem' },
                        }}
                        className="wrapper__left-content"
                        spellCheck="false"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h2" className="login__header">
                            Login
                        </Typography>
                        <TextField fullWidth id="login-user" label="Username" variant="standard" color="secondary" />
                        <TextField
                            type="password"
                            fullWidth
                            id="login-password"
                            label="Password"
                            variant="standard"
                            color="secondary"
                        />
                        <Button
                            className="login__btn"
                            type="submit"
                            size="large"
                            color="secondary"
                            variant="contained"
                            startIcon={<SendIcon />}
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </div>

            <div className="wrapper__right">
                <Avatar>H</Avatar>
            </div>
        </div>
    );
}

export default FormLogin;
