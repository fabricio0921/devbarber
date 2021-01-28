import React from 'react';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';
import BarberLogo from '../../assets/barbear.svg';
import SignInput from '../../components/SignInput';



import { Text } from 'react-native';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';




export default () => {
    return (
        <Container>
            <BarberLogo width="100%" height="160" />


            <InputArea>
                <SignInput IconSvg={EmailIcon}/>
                <SignInput IconSvg={LockIcon}/>




                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>

                </CustomButton>


            </InputArea>

            <SignMessageButton>

                <SignMessageButtonText> Ainda nao possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold> Cadastre-se</SignMessageButtonTextBold>

            </SignMessageButton>


        </Container>
    );
}
