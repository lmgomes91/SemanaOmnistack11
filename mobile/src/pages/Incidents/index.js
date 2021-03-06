import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {View, FlatList ,Image, Text, TouchableOpacity} from 'react-native'

import logoIMg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents(){

    const navigation = useNavigation()

    function navigateToDetail(){
        navigation.navigate('Detail')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={logoIMg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
            
            <FlatList 
                    data={[1,2,3,4,5,6]}
                    style={styles.incidentList}
                    keyExtractor={incident => String(incident)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentPropety}>ONG:</Text>
                            <Text style={styles.incidentValue}>APAD</Text>

                            <Text style={styles.incidentPropety}>Caso:</Text>
                            <Text style={styles.incidentValue}>Caso 1</Text>

                            <Text style={styles.incidentPropety}>ONG:</Text>
                            <Text style={styles.incidentValue}>APAD</Text>

                            <Text style={styles.incidentPropety}>Value:</Text>
                            <Text style={styles.incidentValue}>120,00</Text>

                            <TouchableOpacity 
                                style={styles.detailsButton} 
                                onPress={navigateToDetail} 
                            >
                                <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            
        </View>
    )
}