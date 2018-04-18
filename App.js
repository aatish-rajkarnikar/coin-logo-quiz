import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar
} from 'react-native';

let numerOfQuestionCount = 0;

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      dataSource: [],
      logo: '',
      options: ['','','',''],
      optionsBgColor: ['#9b59b6','#9b59b6','#9b59b6','#9b59b6'],
      answer: 0,
      score: 0,
      showFinish: false,
      scorePercentage: '0%'
    }
  }

  componentWillMount(){
    this.fetchData()
  }

  fetchData(){
    fetch('http://159.89.172.199/coinmarketcap')
    .then((response)=> response.json())
    .then((json)=>{
      this.setState({
        dataSource : json
      })
      this.changeQuiz()
    })
  }

  changeQuiz(){
    if (numerOfQuestionCount == 5){

      this.setState({
        showFinish : true,
        scorePercentage: `${Math.floor((this.state.score/5)*100)}%`
      })
      numerOfQuestionCount = 0
      return
    }
    numerOfQuestionCount++
    const data = this.state.dataSource
    const randomNumber = Math.floor(Math.random() * (data.length - 1)) + 0
    const coin = data[randomNumber]
    const ansIndex = Math.floor(Math.random() * 4) + 1
    let options = []
    for (let i = 1 ; i <= 4; i++){
      if (i == ansIndex){
        options.push(coin.name)
      }else{
        const ran = Math.floor(Math.random() * (data.length - 1)) + 0
        const co = data[ran]
        options.push(co.name)
      }
    }
    this.setState({
      logo: coin.logo,
      options: options,
      ans: ansIndex,
      optionsBgColor: ['#9b59b6','#9b59b6','#9b59b6','#9b59b6']
    })
  }

  onPressOptionA =()=>{
    this.selectOption(1)
  }

  onPressOptionB = ()=>{
    this.selectOption(2)
  }

  onPressOptionC = ()=>{
    this.selectOption(3)
  }

  onPressOptionD = ()=>{
    this.selectOption(4)
  }

  onPressPlayAgain = ()=>{
    this.setState({
      showFinish:false,
      score: 0
    })
    this.changeQuiz()
  }

  onPressShare = ()=>{

  }

  selectOption(index){
    let bgColors = []
    for (let i = 1;i<=4;i++){
      if (i == index && this.state.ans != i) {
        bgColors.push('#e74c3c')
      }else if (this.state.ans == i){
        bgColors.push('#2ecc71')
        if (i==index){
          this.setState({
            score: this.state.score+1
          })
        }
      }else {
        bgColors.push('#9b59b6')
      }
    }
    this.setState({
      optionsBgColor: bgColors
    })
    setTimeout(() => {
      this.changeQuiz()
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color:'#fff'}}>{this.state.score}</Text>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>COIN LOGO QUIZ</Text>
          <Text></Text>
        </View>
        <View style={{alignItems:'center', padding: 16}}>
          <Image style={styles.logo} source={{uri: this.state.logo}}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[0],flex:1}]} onPress={this.onPressOptionA}>
            <Text style={styles.optionButtonText}>{`A. ${this.state.options[0]}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[1],flex:1}]} onPress={this.onPressOptionB}>
            <Text style={styles.optionButtonText}>{`B. ${this.state.options[1]}`}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[2],flex:1}]} onPress={this.onPressOptionC}>
            <Text style={styles.optionButtonText}>{`C. ${this.state.options[2]}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[3],flex:1}]} onPress={this.onPressOptionD}>
            <Text style={styles.optionButtonText}>{`D. ${this.state.options[3]}`}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showFinish}>
          <View style={styles.finishContainer}>
            <View style={styles.modalView}>
              <Text>FINISH!</Text>
              <Text style={{fontSize: 88}}>{this.state.scorePercentage}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.optionButton,{backgroundColor: '#f39c12', alignItems:'center'}]} onPress={this.onPressPlayAgain}>
                  <Text style={styles.optionButtonText}>play again!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButton,{backgroundColor: '#3498db', alignItems:'center'}]} onPress={this.onPressShare}>
                  <Text style={styles.optionButtonText}>share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e44ad',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    margin: 32
  },
  logo:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#9b59b6',
    marginBottom: 64,
    backgroundColor: '#FFF',
  },
  optionButton: {
    height: 40,
    backgroundColor: '#9b59b6',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    flex:1
  },
  optionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  finishContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  modalView:{
    backgroundColor: '#fff',
    borderRadius: 4,
    width: 300,
    padding: 16,
    alignItems:'center'
  }
});
