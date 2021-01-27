import React from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import  {useEffect } from 'react';
import BarberLogo from '../../assets/barbear.svg';




export default ()=>{
    const navigation = useNavigation();
    useEffect(()=>{
        const checkToken = async()=>{
            const token  = await AsyncStorage.getItem('token');
            if (token !== null){
                //valida token
            }else{
                navigation.navigate('SignIn');

            }
        }
        checkToken();
    },[])
    return(
        <Container>
            <BarberLogo width="100%" height="160"/>
            <LoadingIcon size="large" color= 'white' />

        </Container>
    );
}
