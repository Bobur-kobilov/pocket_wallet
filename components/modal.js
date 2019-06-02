import React, {Component}  from 'react';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

var screen = Dimensions.get('window');

export default class PopModal extends Component {

  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  openModal() {
    this.refs.modal1.open()
  }
  // closeModal () {
  //   this.refs.modal1.close()
  // }
  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[styles.btn, styles.btnModal]}>X</Button>;

    return (
      <View style={styles.wrapper}>
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          useNativeDriver= {false}
          coverScreen = {true}
          >
            <Text style={styles.text}>Basic modal</Text>

        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  }

});