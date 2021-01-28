import React, { useState } from 'react';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';
import {navigation, useNavigation} from '@react-navigation/native';
import Api from '../../Api';



import BarberLogo from '../../assets/barbear.svg';
import SignInput from '../../components/SignInput';



import { Text } from 'react-native';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';




export default () => {
    const navigation = useNavigation();
    const [emailField, setEmailField]= useState('');
    const [passWordField, setPassWordField]= useState('');
    
    const handleSingInClick= async ()=>{
        if(emailField != '' && passWordField != ''){
            let json =  await Api.signIn(emailField, passWordField);

            console.log(json);
            if(json.token){
                alert('DEU CERTO!!!');

            }else{
                alert('E-mail e/ou senha errados!');
            }
            
        }else{
            alert('Preencha os Campos');
        }

    }
    const handleMessageButtonClick=()=>{
        navigation.reset({
            routes:[{name: 'SignUp'}]
        })

    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />


            <InputArea>
                <SignInput IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />


                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passWordField}
                    onChangeText={t=>setPassWordField(t)}
                    password= {true}
                />




                <CustomButton onPress={handleSingInClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>

                </CustomButton>


            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>

                <SignMessageButtonText> Ainda nao possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold> Cadastre-se</SignMessageButtonTextBold>

            </SignMessageButton>


        </Container>
    );
}
