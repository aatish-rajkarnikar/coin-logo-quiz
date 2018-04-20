import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
  Share,
  ImageBackground
} from 'react-native';

let numerOfQuestionCount = 0;
const optionButtonBgColor = '#fff'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      dataSource: [],
      logo: '',
      options: ['','','',''],
      optionsBgColor: [optionButtonBgColor,optionButtonBgColor,optionButtonBgColor,optionButtonBgColor],
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
      optionsBgColor: [optionButtonBgColor,optionButtonBgColor,optionButtonBgColor,optionButtonBgColor]
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
    Share.share({
      message: `i scored ${this.state.scorePercentage} in the coin logo quiz.`,
      url: 'http://google.com',
      title: 'Wow, did you see that?'
    })
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
        bgColors.push(optionButtonBgColor)
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
      <ImageBackground style={styles.container} source={require('./bg.png')}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color:'#2c3e50'}}>{this.state.score}</Text>
          <Text style={{color: '#2c3e50', fontSize: 18, fontWeight: 'bold', fontStyle:'italic'}}>COIN LOGO QUIZ</Text>
          <Image source={require('./logo.jpg')} style={{height: 40, width: 40}}/>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.logo}>
            <Image style={{height: 200, width: 200, borderRadius: 100}} source={{uri: this.state.logo}} resizeMode='center'/>
          </TouchableOpacity>
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
          animationType="fade"
          transparent={true}
          visible={this.state.showFinish}>
          <View style={styles.finishContainer}>
            <View style={styles.modalView}>
              <Text style={{color: '#2c3e50', fontSize: 14}}>FINISH!</Text>
              <Text style={{fontSize: 88, color: '#2c3e50'}}>{this.state.scorePercentage}</Text>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    margin: 20
  },
  logo:{
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#2c3e50',
    marginBottom: 64,

  },
  optionButton: {
    height: 40,
    backgroundColor: '#9b59b6',
    borderWidth: 2,
    borderColor: '#2c3e50',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    flex:1
  },
  optionButtonText: {
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: 14
  },
  finishContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView:{
    backgroundColor: '#fff',
    borderRadius: 4,
    width: 300,
    padding: 16,
    alignItems:'center'
  }
});
