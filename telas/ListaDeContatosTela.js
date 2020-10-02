import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native';
import { ContatoItem } from '../components/ContatoItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton1 from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import * as contatosActions from '../store/contatos-actions' 

const ListaDeContatosTela = (props) => {

  // const dispatch = useDispatch();
  // const [key, setKey] = useState(0);

  // const [contatos, setContatos] = useState([]);

  const contatos = useSelector(estado => estado.contatos.contatos)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   props.navigation.setParams({onAddContact: adicionarContato})
  // }, [contatos]);

  // const adicionarContato = (contato) => {
  //   if (contato.nomeContato && contato.numeroContato) {   
  //     // setKey(new Date().getUTCMilliseconds());
  //     setContatos([...contatos, { "key": key.toString(), value: contato }]);
  //     props.navigation.goBack();
  //   }
  // }

  return (
    <SafeAreaView style={styles.viewGeral}>

      <FlatList
        data={contatos}
        renderItem={(contato) => (
        <ContatoItem 
          onSelect = {() => {
            props.navigation.navigate('DetalhesDoContato', { nomeContato: contato.item.nomeContato, numeroContato: contato.item.numeroContato, idContato: contato.id })
          }}
          imagem = {contato.item.imagemURI}
          nomeContato = {contato.item.nomeContato}
          numeroContato = {contato.item.numeroContato}
        />
        )
      }
      />


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  viewGeral: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

});

export default ListaDeContatosTela;

ListaDeContatosTela.navigationOptions = options => {
    return {
        headerTitle: 'Contatos',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton1}>
                    <Item 
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={ () => {
                                options.navigation.navigate('NovoContato', {onAddContact: options.navigation.getParam('onAddContact')})
                        }}
                    />

                </HeaderButtons>
            )
        }
    }

}