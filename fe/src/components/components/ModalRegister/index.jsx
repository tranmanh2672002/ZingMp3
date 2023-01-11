import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styleModalCenter } from '../styleModalCenter';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
// import { registerUser } from "../../redux/apiRequests";
import { useDispatch } from 'react-redux';

function ModalRegister({ openModalRegister, setOpenModalRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = () => {
        const newUser = {
            email,
            password,
        };
        // registerUser(newUser, dispatch);
        setPassword('');
        setEmail('');
        setPasswordAgain('');
        setOpenModalRegister(false);
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== password) {
                return false;
            }
            return true;
        });
    });
    return (
        <>
            <Modal
                open={openModalRegister}
                onClose={() => setOpenModalRegister(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModalCenter}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: 'var(--secondary-color)' }} variant="h4" component="h3">
                            Đăng ký
                        </Typography>
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
                            label="Email"
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
                            label="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            name="password"
                            value={password}
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                        <TextValidator
                            color="secondary"
                            sx={{ marginTop: '30px' }}
                            fullWidth
                            autoComplete="off"
                            label="Password again"
                            onChange={(e) => {
                                setPasswordAgain(e.target.value);
                            }}
                            type="password"
                            name="password again"
                            value={passwordAgain}
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['Password is not match', 'This field is required']}
                        />
                        <Button
                            color="secondary"
                            sx={{ marginTop: '30px' }}
                            fullWidth={true}
                            autoComplete="off"
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </ValidatorForm>
                </Box>
            </Modal>
        </>
    );
}

export default ModalRegister;
