import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'

import HomeFirst from '../components/Home/HomeFirst.vue'

import Login from '../components/Login/Login.vue'

import PasswordReset from '../components/Login/PasswordReset.vue'
import PasswordResetSecond from '../components/Login/PasswordResetSecond.vue'
import PasswordResetFinal from '../components/Login/PasswordResetFinal.vue'

import RegistFirst from '../components/Register/RegistFirst.vue'
import RegisterSecond from '../components/Register/RegisterSecond.vue'
import RegisterThird from '../components/Register/RegisterThird.vue'
import RegisterFourth from '../components/Register/RegisterFourth.vue'
import RegisterFinal from '../components/Register/RegisterFinal.vue'

import RegistXingFirst from '../components/Register/RegistXing/RegistXingFirst.vue'
import RegistXingSecond from '../components/Register/RegistXing/RegistXingSecond.vue'
import RegistXingThird from '../components/Register/RegistXing/RegistXingThird.vue'
import RegistXingFourth from '../components/Register/RegistXing/RegistXingFourth.vue'

import RegistLinkedInFirst from '../components/Register/RegistLinkedIn/RegistLinkedInFirst.vue'
import RegistLinkedInSecond from '../components/Register/RegistLinkedIn/RegistLinkedInSecond.vue'
import RegistLinkedInThird from '../components/Register/RegistLinkedIn/RegistLinkedInThired.vue'
import RegistLinkedInFourth from '../components/Register/RegistLinkedIn/RegistLinkedInFourth.vue'

import SettingLanguage from '../components/Settings/SettingLanguage.vue'
import SettingFontSize from '../components/Settings/SettingFontsize.vue'
import SettingDark from '../components/Settings/SettingDark.vue'
import SettingAppInstall from '../components/Settings/SettingAppInstall.vue'
import SettingLegal from '../components/Settings/SettingLegal.vue'

import InfoRequest from '../components/InfoRequest.vue'
import InfoRequestSecond from '../components/InfoRequestSecond.vue'

import EmailChatFirst from '../components/EmailChat/EmailChatFirst.vue'
import EmailChatFinal from '../components/EmailChat/EmailChatFinal.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path:'/resetsecond',
      name: 'PasswordResetSecond',
      component: PasswordResetSecond
    },
    {
      path: '/resetfinal',
      name: 'PasswordResetFinal',
      component: PasswordResetFinal
    },
    {
      path: '/first',
      name: 'RegistFirst',
      component: RegistFirst
    },
    {
      path: '/second',
      name: 'RegisterSecond',
      component: RegisterSecond
    },
    {
      path: '/third',
      name: 'RegisterThird',
      component: RegisterThird
    },
    {
      path: '/fourth',
      name: 'RegisterFourth',
      component: RegisterFourth
    },
    {
      path: '/final',
      name: 'RegisterFinal',
      component: RegisterFinal
    },
    {
      path: '/xingfirst',
      name: 'RegistXingFirst',
      component: RegistXingFirst
    },
    {
      path: '/xingsecond',
      name: 'RegistXingSecond',
      component: RegistXingSecond
    },
    {
      path: '/xingthird',
      name: 'RegistXingThird',
      component: RegistXingThird
    },
    {
      path: '/xingfourth',
      name: 'RegistXingFourth',
      component: RegistXingFourth
    },
    {
      path: '/linkedfirst',
      name: 'RegistLinkedInFirst',
      component: RegistLinkedInFirst
    },
    {
      path: '/linkedsecond',
      name: 'RegistLinkedInSecond',
      component: RegistLinkedInSecond
    },
    {
      path: '/linkedthird',
      name: 'RegistLinkedInThird',
      component: RegistLinkedInThird
    },
    {
      path: '/linkedfourth',
      name: 'RegistLinkedInFourth',
      component: RegistLinkedInFourth
    },
    {
      path: '/settinglan',
      name: 'SettingLanguage',
      component: SettingLanguage
    },
    {
      path: '/settingfont',
      name: 'SettingFontSize',
      component: SettingFontSize
    },
    {
      path: '/settingdark',
      name: 'SettingDark',
      component: SettingDark
    },
    {
      path: '/settingapp',
      name: 'SettingAppInstall',
      component: SettingAppInstall
    },
    {
      path: '/settinglegal',
      name: 'SettingLegal',
      component: SettingLegal
    },
    {
      path: '/xingfirst',
      name: 'RegistXingFirst',
      component: RegistXingFirst
    },
    {
      path: '/inforequest',
      name: 'InfoRequest',
      component: InfoRequest
    },
    {
      path: '/inforequestsecond',
      name: 'InfoRequest',
      component: InfoRequestSecond
    },
    {
      path: '/chat',
      name: 'EmailChatFirst',
      component: EmailChatFirst
    },
    {
      path: '/chatfinal',
      name: 'EmailChatFinal',
      component: EmailChatFinal
    },
    
  ]
})
