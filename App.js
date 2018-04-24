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
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

let numberOfQuestionCount = 0;
const optionButtonBgColor = '#fff'

const dataSource = [
  {
	name : 'Cardano',
	ticker : 'ada',
  logo: require('./logos/ada.jpg')
  },
  {
  	name : 'Aedex',
  	ticker : 'adx',
    logo: require('./logos/adx.jpg')
  },
  {
  	name : 'Aeternity',
  	ticker : 'ae',
    logo: require('./logos/ae.jpg')
  },
  {
  	name : 'Agoras Token',
  	ticker : 'agrs',
    logo: require('./logos/agrs.jpg')
  },
  {
  	name : 'Aion',
  	ticker : 'aion',
    logo: require('./logos/aion.jpg')
  },
  {
  	name : 'Ambrosus',
  	ticker : 'amb',
    logo: require('./logos/amb.jpg')
  },
  {
  	name : 'Aragon',
  	ticker : 'ant',
    logo: require('./logos/ant.jpg')
  },
  {
  	name : 'AppCoins',
  	ticker : 'appc',
    logo: require('./logos/appc.jpg')
  },
  {
  	name : 'Ardor',
  	ticker : 'ardr',
    logo: require('./logos/ardr.jpg')
  },
  {
  	name : 'Ark',
  	ticker : 'ark',
    logo: require('./logos/ark.jpg')
  },
  {
  	name : 'AirSwap',
  	ticker : 'ast',
    logo: require('./logos/ast.jpg')
  },
  {
  	name : 'Basic Attention Token',
  	ticker : 'bat',
    logo: require('./logos/bat.jpg')
  },
  {
  	name : 'BitBay',
  	ticker : 'bay',
    logo: require('./logos/bay.jpg')
  },
  {
  	name : 'Bitcoin Atom',
  	ticker : 'bca',
    logo: require('./logos/bca.jpg')
  },
  {
  	name : 'BCash',
  	ticker : 'bch',
    logo: require('./logos/bch.jpg')
  },
  {
  	name : 'Bytecoin',
  	ticker : 'bcn',
    logo: require('./logos/bcn.jpg')
  },
  {
  	name : 'Bilbox Token',
  	ticker : 'bix',
    logo: require('./logos/bix.jpg')
  },
  {
  	name : 'Blocknet',
  	ticker : 'block',
    logo: require('./logos/block.jpg')
  },
  {
  	name : 'Binance Coin',
  	ticker : 'bnb',
    logo: require('./logos/bnb.jpg')
  },
  {
  	name : 'Bancor',
  	ticker : 'bnt',
    logo: require('./logos/bnt.jpg')
  },
  {
  	name : 'Bread',
  	ticker : 'brd',
    logo: require('./logos/brd.jpg')
  },
  {
  	name : 'Bitcoin',
  	ticker : 'btc',
    logo: require('./logos/btc.jpg')
  },
  {
  	name : 'BitcoinDark',
  	ticker : 'btcd',
    logo: require('./logos/btcd.jpg')
  },
  {
  	name : 'BitcoinGold',
  	ticker : 'btg',
    logo: require('./logos/btg.jpg')
  },
  {
  	name : 'BitMark',
  	ticker : 'btm',
    logo: require('./logos/btm.jpg')
  },
  {
  	name : 'BitShares',
  	ticker : 'bts',
    logo: require('./logos/bts.jpg')
  },
  {
  	name : 'Bitcore',
  	ticker : 'btx',
    logo: require('./logos/btx.jpg')
  },
  {
  	name : 'CloakCoin',
  	ticker : 'cloak',
    logo: require('./logos/cloak.jpg')
  },
  {
  	name : 'CompCoin',
  	ticker : 'cmp',
    logo: require('./logos/cmp.jpg')
  },
  {
  	name : 'CIndicator',
  	ticker : 'cnd',
    logo: require('./logos/cnd.jpg')
  },
  {
  	name : 'Cryptonex',
  	ticker : 'cnx',
    logo: require('./logos/cnx.jpg')
  },
  {
  	name : 'Civic',
  	ticker : 'cvc',
    logo: require('./logos/cvc.jpg')
  },
  {
  	name : 'Dash',
  	ticker : 'dash',
    logo: require('./logos/dash.jpg')
  },
  {
  	name : 'Dentacoin',
  	ticker : 'dcn',
    logo: require('./logos/dcn.jpg')
  },
  {
  	name : 'Streamr Data',
  	ticker : 'data',
    logo: require('./logos/data.jpg')
  },
  {
  	name : 'Decred',
  	ticker : 'dcr',
    logo: require('./logos/dcr.jpg')
  },
  {
  	name : 'Dew',
  	ticker : 'dew',
    logo: require('./logos/dew.jpg')
  },
  {
  	name : 'Digi Byte',
  	ticker : 'dgb',
    logo: require('./logos/dgb.jpg')
  },
  {
  	name : 'DigixDAO',
  	ticker : 'dgd',
    logo: require('./logos/dgd.jpg')
  },
  {
  	name : 'District0x',
  	ticker : 'dnt',
    logo: require('./logos/dnt.jpg')
  },
  {
  	name : 'DragonChain',
  	ticker : 'drgn',
    logo: require('./logos/drgn.jpg')
  },
  {
  	name : 'DATA',
  	ticker : 'dta',
    logo: require('./logos/dta.jpg')
  },
  {
  	name : 'Dynamic Trade',
  	ticker : 'dtr',
    logo: require('./logos/dtr.jpg')
  },
  {
  	name : 'Electra',
  	ticker : 'eca',
    logo: require('./logos/eca.jpg')
  },
  {
  	name : 'Edgeless',
  	ticker : 'edg',
    logo: require('./logos/edg.jpg')
  },
  {
  	name : 'Aelf',
  	ticker : 'elf',
    logo: require('./logos/elf.jpg')
  },
  {
  	name : 'Emercoin',
  	ticker : 'emc',
    logo: require('./logos/emc.jpg')
  },
  {
  	name : 'Enigma',
  	ticker : 'eng',
    logo: require('./logos/eng.jpg')
  },
  {
  	name : 'EOS',
  	ticker : 'eos',
    logo: require('./logos/eos.jpg')
  },
  {
  	name : 'Ethereum Classic',
  	ticker : 'etc',
    logo: require('./logos/etc.jpg')
  },
  {
  	name : 'Ethereum',
  	ticker : 'eth',
    logo: require('./logos/eth.jpg')
  },
  {
  	name : 'Ethos',
  	ticker : 'ethos',
    logo: require('./logos/ethos.jpg')
  },
  {
  	name : 'Electroneum',
  	ticker : 'etn',
    logo: require('./logos/etn.jpg')
  },
  {
  	name : 'Factom',
  	ticker : 'fct',
    logo: require('./logos/fct.jpg')
  },
  {
  	name : 'Fusion',
  	ticker : 'fsn',
    logo: require('./logos/fsn.jpg')
  },
  {
  	name : 'FunFair',
  	ticker : 'fun',
    logo: require('./logos/fun.jpg')
  },
  {
  	name : 'GameCredits',
  	ticker : 'game',
    logo: require('./logos/game.jpg')
  },
  {
  	name : 'Byteball Bytes',
  	ticker : 'gbyte',
    logo: require('./logos/gbyte.jpg')
  },
  {
  	name : 'Gnosis',
  	ticker : 'gno',
    logo: require('./logos/gno.jpg')
  },
  {
  	name : 'Golem',
  	ticker : 'gnt',
    logo: require('./logos/gnt.jpg')
  },
  {
  	name : 'Genesis Vision',
  	ticker : 'gvt',
    logo: require('./logos/gvt.jpg')
  },
  {
  	name : 'GXShares',
  	ticker : 'gxs',
    logo: require('./logos/gxs.jpg')
  },
  {
  	name : 'High Performance Blockchain',
  	ticker : 'hpb',
    logo: require('./logos/hpb.jpg')
  },
  {
  	name : 'Hshare',
  	ticker : 'hsr',
    logo: require('./logos/hsr.jpg')
  },
  {
  	name : 'Iconomi',
  	ticker : 'icn',
    logo: require('./logos/icn.jpg')
  },
  {
  	name : 'Icon',
  	ticker : 'icx',
    logo: require('./logos/icx.jpg')
  },
  {
  	name : 'Ignis',
  	ticker : 'ignis',
    logo: require('./logos/ignis.jpg')
  },
  {
  	name : 'ION',
  	ticker : 'ion',
    logo: require('./logos/ion.jpg')
  },
  {
  	name : 'IOStoken',
  	ticker : 'iost',
    logo: require('./logos/iost.jpg')
  },
  {
  	name : 'IOSY',
  	ticker : 'iota',
    logo: require('./logos/iota.jpg')
  },
  {
  	name : 'KuCoin Shares',
  	ticker : 'kcs',
    logo: require('./logos/kcs.jpg')
  },
  {
  	name : 'Kin',
  	ticker : 'kin',
    logo: require('./logos/kin.jpg')
  },
  {
  	name : 'Kyber Network Crystals',
  	ticker : 'knc',
    logo: require('./logos/knc.jpg')
  },
  {
  	name : 'Komodo',
  	ticker : 'kmd',
    logo: require('./logos/kmd.jpg')
  },
  {
  	name : 'ETHLend',
  	ticker : 'lend',
    logo: require('./logos/lend.jpg')
  },
  {
  	name : 'ChainLink',
  	ticker : 'link',
    logo: require('./logos/link.jpg')
  },
  {
  	name : 'Loopring',
  	ticker : 'lrc',
    logo: require('./logos/lrc.jpg')
  },
  {
  	name : 'Lisk',
  	ticker : 'lsk',
    logo: require('./logos/lsk.jpg')
  },
  {
  	name : 'MaidSafe',
  	ticker : 'maid',
    logo: require('./logos/maid.jpg')
  },
  {
  	name : 'MCQ',
  	ticker : 'mcq',
    logo: require('./logos/mcq.jpg')
  },
  {
  	name : 'MediShares',
  	ticker : 'mds',
    logo: require('./logos/mds.jpg')
  },
  {
  	name : 'Mediblock',
  	ticker : 'med',
    logo: require('./logos/med.jpg')
  },
  {
  	name : 'Maker',
  	ticker : 'mkr',
    logo: require('./logos/mkr.jpg')
  },
  {
  	name : 'Minexcoin',
  	ticker : 'mnx',
    logo: require('./logos/mnx.jpg')
  },
  {
  	name : 'MonaCoin',
  	ticker : 'mona',
    logo: require('./logos/mona.jpg')
  },
  {
  	name : 'Metal',
  	ticker : 'mtl',
    logo: require('./logos/mtl.jpg')
  },
  {
  	name : 'Nano',
  	ticker : 'nano',
    logo: require('./logos/nano.jpg')
  },
  {
  	name : 'Nebulas Token',
  	ticker : 'nas',
    logo: require('./logos/nas.jpg')
  },
  {
  	name : 'NAV Coin',
  	ticker : 'nav',
    logo: require('./logos/nav.jpg')
  },
  {
  	name : 'Neblio',
  	ticker : 'nebl',
    logo: require('./logos/nebl.jpg')
  },
  {
  	name : 'NEO',
  	ticker : 'neo',
    logo: require('./logos/neo.jpg')
  },
  {
  	name : 'Pundi X',
  	ticker : 'npxs',
    logo: require('./logos/npxs.jpg')
  },
  {
  	name : 'Nuls',
  	ticker : 'nuls',
    logo: require('./logos/nuls.jpg')
  },
  {
  	name : 'Nexus',
  	ticker : 'nxs',
    logo: require('./logos/nxs.jpg')
  },
  {
  	name : 'NEXT',
  	ticker : 'nxt',
    logo: require('./logos/nxt.jpg')
  },
  {
  	name : 'OmiseGo',
  	ticker : 'omg',
    logo: require('./logos/omg.jpg')
  },
  {
  	name : 'Particl',
  	ticker : 'part',
    logo: require('./logos/part.jpg')
  },
  {
  	name : 'TenX',
  	ticker : 'pay',
    logo: require('./logos/pay.jpg')
  },
  {
  	name : 'PIVX',
  	ticker : 'pivx',
    logo: require('./logos/pivx.jpg')
  },
  {
  	name : 'Pillar',
  	ticker : 'plr',
    logo: require('./logos/plr.jpg')
  },
  {
  	name : 'Po.et',
  	ticker : 'poe',
    logo: require('./logos/poe.jpg')
  },
  {
  	name : 'Power Ledger',
  	ticker : 'powr',
    logo: require('./logos/powr.jpg')
  },
  {
  	name : 'Peercoin',
  	ticker : 'ppc',
    logo: require('./logos/ppc.jpg')
  },
  {
  	name : 'Populous',
  	ticker : 'ppt',
    logo: require('./logos/ppt.jpg')
  },
  {
  	name : 'Pura',
  	ticker : 'pura',
    logo: require('./logos/pura.jpg')
  },
  {
  	name : 'QASH',
  	ticker : 'qash',
    logo: require('./logos/qash.jpg')
  },
  {
  	name : 'Quantum Resistance Ledger',
  	ticker : 'qrl',
    logo: require('./logos/qrl.jpg')
  },
  {
  	name : 'Quantstamp',
  	ticker : 'qsp',
    logo: require('./logos/qsp.jpg')
  },
  {
  	name : 'Qtum',
  	ticker : 'qtum',
    logo: require('./logos/qtum.jpg')
  },
  {
  	name : 'Revain',
  	ticker : 'r',
    logo: require('./logos/r.jpg')
  },
  {
  	name : 'Reddcoin',
  	ticker : 'rdd',
    logo: require('./logos/rdd.jpg')
  },
  {
  	name : 'Cardano',
  	ticker : 'rep',
    logo: require('./logos/rep.jpg')
  },
  {
  	name : 'Request Network',
  	ticker : 'req',
    logo: require('./logos/req.jpg')
  },
  {
  	name : 'Rchain',
  	ticker : 'rhoc',
    logo: require('./logos/rhoc.jpg')
  },
  {
  	name : 'Riecoin',
  	ticker : 'rlc',
    logo: require('./logos/rlc.jpg')
  },
  {
  	name : 'Salt',
  	ticker : 'salt',
    logo: require('./logos/salt.jpg')
  },
  {
  	name : 'Santiment Network',
  	ticker : 'san',
    logo: require('./logos/san.jpg')
  },
  {
  	name : 'Siacoin',
  	ticker : 'sia',
    logo: require('./logos/sia.jpg')
  },
  {
  	name : 'Skycoin',
  	ticker : 'sky',
    logo: require('./logos/sky.jpg')
  },
  {
  	name : 'SmartCash',
  	ticker : 'smart',
    logo: require('./logos/smart.jpg')
  },
  {
  	name : 'SingularDTV',
  	ticker : 'sngls',
    logo: require('./logos/sngls.jpg')
  },
  {
  	name : 'SONM',
  	ticker : 'snm',
    logo: require('./logos/snm.jpg')
  },
  {
  	name : 'Status',
  	ticker : 'snt',
    logo: require('./logos/snt.jpg')
  },
  {
  	name : 'SpankChain',
  	ticker : 'spank',
    logo: require('./logos/spank.jpg')
  },
  {
  	name : 'Sirin Labs Token',
  	ticker : 'srn',
    logo: require('./logos/srn.jpg')
  },
  {
  	name : 'Steem',
  	ticker : 'steem',
    logo: require('./logos/steem.jpg')
  },
  {
  	name : 'Storm',
  	ticker : 'storm',
    logo: require('./logos/storm.jpg')
  },
  {
  	name : 'Stratis',
  	ticker : 'strat',
    logo: require('./logos/strat.jpg')
  },
  {
  	name : 'Storj',
  	ticker : 'storj',
    logo: require('./logos/storj.jpg')
  },
  {
  	name : 'Substratum',
  	ticker : 'sub',
    logo: require('./logos/sub.jpg')
  },
  {
  	name : 'Syscoin',
  	ticker : 'sys',
    logo: require('./logos/sys.jpg')
  },
  {
  	name : 'Telcoin',
  	ticker : 'tel',
    logo: require('./logos/tel.jpg')
  },
  {
  	name : 'Theta',
  	ticker : 'theta',
    logo: require('./logos/theta.jpg')
  },
  {
  	name : 'Triggers',
  	ticker : 'trig',
    logo: require('./logos/trig.jpg')
  },
  {
  	name : 'Tron',
  	ticker : 'trx',
    logo: require('./logos/trx.jpg')
  },
  {
  	name : 'Ubiq',
  	ticker : 'ubq',
    logo: require('./logos/ubq.jpg')
  },
  {
  	name : 'Tether',
  	ticker : 'usdt',
    logo: require('./logos/usdt.jpg')
  },
  {
  	name : 'VeChain',
  	ticker : 'ven',
    logo: require('./logos/ven.jpg')
  },
  {
  	name : 'Cardano',
  	ticker : 'veri',
    logo: require('./logos/veri.jpg')
  },
  {
  	name : 'Veritaseum',
  	ticker : 'vibe',
    logo: require('./logos/vibe.jpg')
  },
  {
  	name : 'Vertcoin',
  	ticker : 'vtc',
    logo: require('./logos/vtc.jpg')
  },
  {
  	name : 'Wabi',
  	ticker : 'wabi',
    logo: require('./logos/wabi.jpg')
  },
  {
  	name : 'WanChain',
  	ticker : 'wan',
    logo: require('./logos/wan.jpg')
  },
  {
  	name : 'Waves',
  	ticker : 'waves',
    logo: require('./logos/waves.jpg')
  },
  {
  	name : 'asch',
  	ticker : 'xas',
    logo: require('./logos/xas.jpg')
  },
  {
  	name : 'Counterparty',
  	ticker : 'xcp',
    logo: require('./logos/xcp.jpg')
  },
  {
  	name : 'DigitalNote',
  	ticker : 'xdn',
    logo: require('./logos/xdn.jpg')
  },
  {
  	name : 'Nem',
  	ticker : 'xem',
    logo: require('./logos/xem.jpg')
  },
  {
  	name : 'Steller',
  	ticker : 'xlm',
    logo: require('./logos/xlm.jpg')
  },
  {
  	name : 'Monero',
  	ticker : 'xmr',
    logo: require('./logos/xmr.jpg')
  },
  {
  	name : 'Ripple',
  	ticker : 'xrp',
    logo: require('./logos/xrp.jpg')
  },
  {
  	name : 'Verge',
  	ticker : 'xvg',
    logo: require('./logos/xvg.jpg')
  },
  {
  	name : 'ZCoin',
  	ticker : 'xzc',
    logo: require('./logos/xzc.jpg')
  },
  {
  	name : 'ZEC',
  	ticker : 'zec',
    logo: require('./logos/zec.jpg')
  },
  {
  	name : 'ZenCash',
  	ticker : 'zen',
    logo: require('./logos/zen.jpg')
  },
  {
  	name : 'Zilliqa',
  	ticker : 'zil',
    logo: require('./logos/zil.jpg')
  },
  {
  	name : '0x',
  	ticker : 'zrx',
    logo: require('./logos/zrx.jpg')
  }
]

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      logo: '',
      options: ['','','',''],
      optionsBgColor: [optionButtonBgColor,optionButtonBgColor,optionButtonBgColor,optionButtonBgColor],
      answer: 0,
      score: 0,
      showFinish: false,
      scorePercentage: '0%',
      questionCount: '0/25',
      start: false
    }
  }

  componentWillMount(){
    //this.fetchData()
    this.changeQuiz()
  }

  // fetchData(){
  //   fetch('http://159.89.172.199/coinmarketcap')
  //   .then((response)=> response.json())
  //   .then((json)=>{
  //     this.setState({
  //       dataSource : json
  //     })
  //     this.changeQuiz()
  //   })
  // }

  changeQuiz(){
    if (numberOfQuestionCount == 25){

      this.setState({
        showFinish : true,
        scorePercentage: `${Math.floor((this.state.score/25)*100)}%`
      })
      numberOfQuestionCount = 0
      this.showInterstitial()
      return
    }
    numberOfQuestionCount++
    const data = dataSource
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
      questionCount: `${numberOfQuestionCount}/25`,
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

  showInterstitial(){
    AdMobInterstitial.setAdUnitID('ca-app-pub-5492969470059595/5034947562');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }

  render() {
    if (this.state.start) {
      return (
        <ImageBackground style={styles.container} source={require('./bg.png')}>
          <StatusBar hidden={true} />
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.header}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color:'#2c3e50'}}>{this.state.questionCount}</Text>
              <Text style={{color: '#2c3e50', fontSize: 18, fontWeight: 'bold', fontStyle:'italic'}}>COIN LOGO QUIZ</Text>
              <Image source={require('./logo.jpg')} style={{height: 40, width: 40}}/>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.logo}>
                <Image style={{height: 180, width: 180}} source={this.state.logo}/>
              </View>
            </View>
            <View style={{marginBottom: 64}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[0],flex:1}]} onPress={this.onPressOptionA}>
                  <Text style={styles.optionButtonText}>{this.state.options[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[1],flex:1}]} onPress={this.onPressOptionB}>
                  <Text style={styles.optionButtonText}>{this.state.options[1]}</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[2],flex:1}]} onPress={this.onPressOptionC}>
                  <Text style={styles.optionButtonText}>{this.state.options[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.optionsBgColor[3],flex:1}]} onPress={this.onPressOptionD}>
                  <Text style={styles.optionButtonText}>{this.state.options[3]}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.showFinish}>
            <StatusBar hidden={true} />
            <View style={styles.finishContainer}>
              <View style={styles.modalView}>
                <Text style={{color: '#2c3e50', fontSize: 14}}>FINISH!</Text>
                <Text style={{fontSize: 88, color: '#2c3e50'}}>{this.state.scorePercentage}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.optionButton,{backgroundColor: '#f39c12', alignItems:'center'}]} onPress={this.onPressPlayAgain}>
                    <Text style={[styles.optionButtonText,{color: '#fff'}]}>PLAY AGAIN!</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.optionButton,{backgroundColor: '#3498db', alignItems:'center'}]} onPress={this.onPressShare}>
                    <Text style={[styles.optionButtonText,{color: '#fff'}]}>SHARE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <AdMobBanner
              adSize="smartBannerPortrait"
              adUnitID="ca-app-pub-5492969470059595/2538612905"
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
        </ImageBackground>
      );
    }
    return (
      <ImageBackground style={[styles.container,{justifyContent:'space-around', alignItems:'center'}]} source={require('./bg.png')}>
        <StatusBar hidden={true} />
        <View style={{alignItems:'center'}}>
          <Image source={require('./logo.jpg')} style={{height: 150, width: 150}}/>
          <Text style={{color: '#2c3e50', fontSize: 32, fontWeight: 'bold', fontStyle:'italic', marginTop: 16}}>COIN LOGO QUIZ</Text>
          <TouchableOpacity
            style={{margin: 64, padding: 8, alignItems: 'center',height: 40, width: 200, borderColor:'#2c3e50', borderWidth:2, borderRadius: 20, backgroundColor: '#fff'}}
            onPress={()=>this.setState({start: true})}
            >
            <Text style={styles.optionButtonText}>PLAY!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    margin: 20,
  },
  logo:{
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: 'rgba(44, 62, 80,0.3)',
    height: 200,
    width: 200,
    marginBottom: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionButton: {
    height: 40,
    backgroundColor: '#9b59b6',
    borderWidth: 2,
    borderColor: 'rgba(44, 62, 80,0.3)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
    padding: 8,
    margin: 8,
    flex:1
  },
  optionButtonText: {
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
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
