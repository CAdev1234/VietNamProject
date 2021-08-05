<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12" id="setting_legal" class="d-flex" style="margin-top:100px">
                    <v-row justify="center">
                        <v-col cols="12" sm="3" md="2" id="setting_legalside">
                            <v-avatar class="mt-10 mb-5 pa-2 setting_icon" color="white">
                            <!-- <i class="fa fa-globe fa-3x" aria-hidden="true"></i> -->
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5312 14H22.4688V9.96875H18.5312V14ZM20.5 36.0312C17.625 36.0312 14.9375 35.3125 12.4375 33.875C10 32.4375 8.0625 30.5 6.625 28.0625C5.1875 25.5625 4.46875 22.875 4.46875 20C4.46875 17.125 5.1875 14.4688 6.625 12.0312C8.0625 9.53125 10 7.5625 12.4375 6.125C14.9375 4.6875 17.625 3.96875 20.5 3.96875C23.375 3.96875 26.0312 4.6875 28.4688 6.125C30.9688 7.5625 32.9375 9.53125 34.375 12.0312C35.8125 14.4688 36.5312 17.125 36.5312 20C36.5312 22.875 35.8125 25.5625 34.375 28.0625C32.9375 30.5 30.9688 32.4375 28.4688 33.875C26.0312 35.3125 23.375 36.0312 20.5 36.0312ZM20.5 0.03125C17.875 0.03125 15.3125 0.53125 12.8125 1.53125C10.375 2.53125 8.21875 3.96875 6.34375 5.84375C4.46875 7.71875 3.03125 9.90625 2.03125 12.4062C1.03125 14.8438 0.53125 17.375 0.53125 20C0.53125 22.625 1.03125 25.1875 2.03125 27.6875C3.03125 30.125 4.46875 32.2812 6.34375 34.1562C8.21875 36.0312 10.375 37.4688 12.8125 38.4688C15.3125 39.4688 17.875 39.9688 20.5 39.9688C23.125 39.9688 25.6562 39.4688 28.0938 38.4688C30.5938 37.4688 32.7812 36.0312 34.6562 34.1562C36.5312 32.2812 37.9688 30.125 38.9688 27.6875C39.9688 25.1875 40.4688 22.625 40.4688 20C40.4688 17.375 39.9688 14.8438 38.9688 12.4062C37.9688 9.90625 36.5312 7.71875 34.6562 5.84375C32.7812 3.96875 30.5938 2.53125 28.0938 1.53125C25.6562 0.53125 23.125 0.03125 20.5 0.03125ZM18.5312 30.0312H22.4688V18.0312H18.5312V30.0312Z" fill="#343A40"/>
                            </svg>
                            </v-avatar>
                            <h3 class="header_title1" style="color: white">Info Request</h3>
                            <h3 class="header_title2" style="color: white; display: none">Legal notice</h3>
                            <v-btn class="mt-2" icon id="closebtn_setting_phone" @click="closeSetting()">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="9" md="10">
                            <v-row class="mt-5 setting_title" justify="center">
                                <v-col cols="8" sm="8" md="8">
                                    <h1 class="grey--text ml-10 " style="text-align:center">Legal notice & Cookie policy</h1>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="10" sm="10" md="6">
                                </v-col>
                            </v-row>
                            <v-row class="language_btn" justify="center">
                                <v-spacer></v-spacer>
                                <v-col cols="10" sm="10" md="1">
                                    
                                </v-col>
                                <v-col md="5"></v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-btn icon id="closebtn" @click="closeSetting()">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3514 22.7695C11.5545 22.7695 9.87479 22.3203 8.31229 21.4219C6.78885 20.5234 5.57791 19.3125 4.67948 17.7891C3.78104 16.2266 3.33182 14.5469 3.33182 12.75C3.33182 10.9531 3.78104 9.29297 4.67948 7.76953C5.57791 6.20703 6.78885 4.97656 8.31229 4.07812C9.87479 3.17969 11.5545 2.73047 13.3514 2.73047C15.1482 2.73047 16.8084 3.17969 18.3318 4.07812C19.8943 4.97656 21.1248 6.20703 22.0232 7.76953C22.9217 9.29297 23.3709 10.9531 23.3709 12.75C23.3709 14.5469 22.9217 16.2266 22.0232 17.7891C21.1248 19.3125 19.8943 20.5234 18.3318 21.4219C16.8084 22.3203 15.1482 22.7695 13.3514 22.7695ZM13.3514 0.269531C11.0857 0.269531 8.99588 0.835938 7.08182 1.96875C5.16776 3.0625 3.64432 4.56641 2.51151 6.48047C1.41776 8.39453 0.870882 10.4844 0.870882 12.75C0.870882 15.0156 1.41776 17.1055 2.51151 19.0195C3.64432 20.9336 5.16776 22.457 7.08182 23.5898C8.99588 24.6836 11.0857 25.2305 13.3514 25.2305C15.617 25.2305 17.7068 24.6836 19.6209 23.5898C21.5349 22.457 23.0389 20.9336 24.1326 19.0195C25.2654 17.1055 25.8318 15.0156 25.8318 12.75C25.8318 10.4844 25.2654 8.39453 24.1326 6.48047C23.0389 4.56641 21.5349 3.0625 19.6209 1.96875C17.7068 0.835938 15.617 0.269531 13.3514 0.269531ZM16.574 7.76953L13.3514 10.9922L10.1287 7.76953L8.37088 9.52734L11.5935 12.75L8.37088 15.9727L10.1287 17.7305L13.3514 14.5078L16.574 17.7305L18.3318 15.9727L15.1092 12.75L18.3318 9.52734L16.574 7.76953Z" fill="#828282"/>
                        </svg>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>
<script>
import {EventBus} from '../event-bus.js'
export default {
    data() {
        return {
            close_setting: true,
        }
    },
    methods: {
        closeSetting() {
            this.close_setting = false;
            EventBus.$emit('close-setting', this.close_setting);
        }
    }

}
</script>
<style lang="scss" scope>
.mycontainer {
    padding: 0px;
}
#setting_legal {
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    margin-top: 0px !important;
}
#setting_legalside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}

.button1 {
    border: grey 1px solid;
    background: #e6e6e6;
    border-radius: 10% 10% 10% 10%;
    width: 100px;
    height: 100px;
    margin-left:10px;
}
.button1:hover {
    background: #0099ff;
    div{
        color:white !important;
    }
}
#closebtn_setting_phone {
    display: none;
}

@media only screen and (min-width: 1025px) and (max-width: 1366px) {

}
//iPad Pro
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
    
}
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
    
}
// iPad 
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: landscape) {
    
}
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: portrait) {
  
}
// iPhone Plus
@media only screen and (min-width: 376px) and (max-width: 414px){
    .mycontainer {
        padding: 0% 0% 0% 0%;
    }
    #setting_legal {
        margin-top: 0px !important;
        padding: 0px !important;
        border: none !important;
        
    }
    #setting_legalside {
        border-radius: 0% 0% 0% 0%;
        height: 60px;
    }
    .header_title1 {
        display: none;
    }
    .header_title2 {
        display: flex !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none;
    }
    #closebtn {
        display: none;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px;
        height: 80px;
        margin-left: 0%;
    }
    .language_btn {
        margin-left: 0%;
    }
}
// iPhone X
@media only screen and (min-width: 321px) and (max-width: 375px) {
    .mycontainer {
        padding: 0% 0% 0% 0%;
    }
    #setting_legal {
        margin-top: 0px !important;
        padding: 0px !important;
        border: none !important;
        
    }
    #setting_legalside {
        border-radius: 0% 0% 0% 0%;
        height: 60px;
    }
    .header_title1 {
        display: none;
    }
    .header_title2 {
        display: flex !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none;
    }
    #closebtn {
        display: none;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px;
        height: 80px;
        margin-left: 0%;
    }
    .language_btn {
        margin-left: 0%;
    }
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding: 0% 0% 0% 0%;
    }
    #setting_legal {
        margin-top: 0px !important;
        padding: 0px !important;
        border: none !important;
        
    }
    #setting_legalside {
        border-radius: 0% 0% 0% 0%;
        height: 60px;
    }
    .header_title1 {
        display: none;
    }
    .header_title2 {
        display: flex !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none;
    }
    #closebtn {
        display: none;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px;
        height: 80px;
        margin-left: 0%;
    }
    .language_btn {
        margin-left: 0%;
    }
}
</style>