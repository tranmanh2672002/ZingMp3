import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styleModalCenter } from '../styleModalCenter';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '~/redux/apiRequests';
import ModalRegister from '../ModalRegister';

function ModalLogin({ openModalLogin, setOpenModalLogin }) {
    const [openModalRegister, setOpenModalRegister] = useState(false);
    console.log(openModalRegister);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = () => {
        const newUser = {
            email,
            password,
        };
        loginUser(newUser, dispatch);
        setPassword('');
        setEmail('');
        setOpenModalLogin(false);
    };
    return (
        <>
            <Modal
                open={openModalLogin}
                onClose={() => setOpenModalLogin(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModalCenter}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '1.6rem', color: 'var(--secondary-color)' }} variant="h4" component="h3">
                            Đăng nhập
                        </Typography>
                        <Button
                            onClick={() => {
                                setOpenModalLogin(false);
                                setOpenModalRegister(true);
                            }}
                            sx={{ fontSize: '1rem' }}
                            color="secondary"
                            variant="text"
                        >
                            Đăng ký
                        </Button>
                    </Box>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        // onError={(errors) => console.log(errors)}
                    >
                        <TextValidator
                            color="secondary"
                            sx={{ marginTop: '30px' }}
                            fullWidth
                            autoComplete="off"
                            label="Tài khoản"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'Email is not valid']}
                        />
                        <TextValidator
                            color="secondary"
                            sx={{ marginTop: '30px' }}
                            fullWidth
                            autoComplete="off"
                            label="Mật khẩu"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            name="password"
                            value={password}
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                        <Button
                            sx={{ marginTop: '30px' }}
                            fullWidth={true}
                            autoComplete="off"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Submit
                        </Button>
                    </ValidatorForm>
                </Box>
            </Modal>
            <ModalRegister openModalRegister={openModalRegister} setOpenModalRegister={setOpenModalRegister} />
        </>
    );
}

export default ModalLogin;
