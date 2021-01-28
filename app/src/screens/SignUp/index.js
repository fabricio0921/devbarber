import React, { useState } from 'react';
import { navigation, useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barbear.svg';


import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';







export default () => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passWordField, setPassWordField] = useState('');

    const handleSingInClick = () => {

    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })

    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />


            <InputArea>
                <SignInput IconSvg={PersonIcon}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />


                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passWordField}
                    onChangeText={t => setPassWordField(t)}
                    password={true}
                />




                <CustomButton onPress={handleSingInClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>

                </CustomButton>


            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>

                <SignMessageButtonText> Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold> Faça Login</SignMessageButtonTextBold>

            </SignMessageButton>


        </Container>
    );
}
