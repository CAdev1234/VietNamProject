<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12" id="setting_dark" class="d-flex" style="margin-top:100px">
                    <v-row justify="center">
                        <v-col cols="12" sm="3" md="2" id="setting_darkside">
                            <v-avatar class="mt-10 mb-5 setting_icon" color="white">
                            <!-- <i class="fa fa-globe fa-3x" aria-hidden="true"></i> -->
                            <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 35.1875C14.875 35.1875 13.3438 34.875 11.9062 34.25C10.4688 33.625 9.1875 32.75 8.0625 31.625C5.6875 29.3125 4.5 26.5 4.5 23.1875C4.5 21.5625 4.78125 20.0312 5.34375 18.5938C5.96875 17.0938 6.875 15.7812 8.0625 14.6562L16.5 6.21875V35.1875ZM27.8438 11.8438L16.5 0.5L5.15625 11.8438C3.15625 13.9062 1.78125 16.3125 1.03125 19.0625C0.34375 21.8125 0.34375 24.5625 1.03125 27.3125C1.78125 30.0625 3.15625 32.4375 5.15625 34.4375C6.71875 36 8.46875 37.1875 10.4062 38C12.4062 38.75 14.4375 39.125 16.5 39.125C18.5625 39.125 20.5625 38.75 22.5 38C24.5 37.1875 26.2812 36 27.8438 34.4375C29.8438 32.4375 31.1875 30.0625 31.875 27.3125C32.625 24.5625 32.625 21.8125 31.875 19.0625C31.1875 16.3125 29.8438 13.9062 27.8438 11.8438Z" fill="#343A40"/>
                            </svg>
                            </v-avatar>
                            <h3 class="header_title1" style="color: white">Settings<br>-Dark-Mode-</h3>
                            <h3 class="header_title2" style="color: white; display: none">Settings: Dark-Mode</h3>
                            <v-btn class="mt-2" icon id="closebtn_setting_phone" @click="closeSetting()">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="9" md="10" class="setting_dark_main">
                            <v-row class="mt-5 setting_title" justify="center">
                                <v-col cols="12" sm="12" md="12">
                                    <p class="grey--text display-1" align="center">Settings</p>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="10" sm="10" md="10">
                                    <p class="grey--text title" align="center">Please switch to Dark-or Light-Mode, alternatively we can switch automatically, based on your given company-location.</p>
                                </v-col>
                            </v-row>
                            <v-row class="language_btn" justify="center">
                                <v-col cols="12" sm="12" md="8">
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col cols="4" sm="4" md="4">
                                            <div style="text-align:center">
                                                <button class="button1">
                                                    <!-- <div class="headline font-weight-bold">EN</div> -->
                                                    <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 7.97656C14.9844 7.97656 15.9219 8.1875 16.8125 8.60938C17.75 8.98438 18.5703 9.52344 19.2734 10.2266C19.9766 10.9297 20.5156 11.75 20.8906 12.6875C21.3125 13.5781 21.5234 14.5156 21.5234 15.5C21.5234 16.8594 21.1719 18.125 20.4688 19.2969C19.8125 20.4219 18.8984 21.3359 17.7266 22.0391C16.6016 22.6953 15.3594 23.0234 14 23.0234C12.6406 23.0234 11.375 22.6953 10.2031 22.0391C9.07812 21.3359 8.16406 20.4219 7.46094 19.2969C6.80469 18.125 6.47656 16.8594 6.47656 15.5C6.47656 14.5156 6.66406 13.5781 7.03906 12.6875C7.46094 11.75 8.02344 10.9297 8.72656 10.2266C9.42969 9.52344 10.2266 8.98438 11.1172 8.60938C12.0547 8.1875 13.0156 7.97656 14 7.97656ZM14 11C12.7344 11 11.6562 11.4453 10.7656 12.3359C9.92188 13.1797 9.5 14.2344 9.5 15.5C9.5 16.7656 9.92188 17.8438 10.7656 18.7344C11.6562 19.5781 12.7344 20 14 20C15.2656 20 16.3203 19.5781 17.1641 18.7344C18.0547 17.8438 18.5 16.7656 18.5 15.5C18.5 14.2344 18.0547 13.1797 17.1641 12.3359C16.3203 11.4453 15.2656 11 14 11ZM14 0.523438L17.5859 5.65625C16.4141 5.23438 15.2188 5.02344 14 5.02344C12.7812 5.02344 11.5859 5.23438 10.4141 5.65625L14 0.523438ZM0.992188 7.97656L7.25 7.48438C6.3125 8.28125 5.53906 9.19531 4.92969 10.2266C4.32031 11.2578 3.89844 12.4062 3.66406 13.6719L0.992188 7.97656ZM1.0625 23.0234L3.66406 17.3281C3.89844 18.5469 4.32031 19.6953 4.92969 20.7734C5.53906 21.8047 6.3125 22.7422 7.25 23.5859L1.0625 23.0234ZM27.0078 7.97656L24.3359 13.6719C24.1016 12.4531 23.6797 11.3047 23.0703 10.2266C22.4609 9.14844 21.6875 8.23438 20.75 7.48438L27.0078 7.97656ZM26.9375 23.0234L20.75 23.5156C21.6875 22.7188 22.4609 21.8047 23.0703 20.7734C23.6797 19.6953 24.1016 18.5469 24.3359 17.3281L26.9375 23.0234ZM14 30.4766L10.4141 25.3438C11.5859 25.7656 12.7578 25.9766 13.9297 25.9766C15.1484 25.9766 16.3672 25.7656 17.5859 25.3438L14 30.4766Z" fill="#343A40"/>
                                                    </svg>
                                                    <div class="black--text caption">Day-Mode</div>
                                                </button>
                                            </div>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col cols="4" sm="4" md="4">
                                            <div style="text-align:center">
                                                <button class="button1">
                                                    <!-- <div class="headline font-weight-bold">DE</div> -->
                                                    <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.6484 5.61719L19.8516 8.57031L21.1875 13.1406L17.25 10.3984L13.3125 13.1406L14.6484 8.57031L10.8516 5.61719L15.6328 5.47656L17.25 0.976562L18.8672 5.47656L23.6484 5.61719ZM28.8516 16.0234L26.3906 17.8516L27.3047 20.875L24.7734 19.1172L22.1719 20.875L23.0859 17.8516L20.625 16.0234L23.7188 15.9531L24.7734 13L25.7578 15.9531L28.8516 16.0234ZM25.4766 23.4062C25.8516 23.3594 26.2266 23.5 26.6016 23.8281C27.0234 24.1562 27.2812 24.5547 27.375 25.0234C27.5156 25.4453 27.4688 25.8438 27.2344 26.2188C26.7188 26.9688 26.1797 27.6016 25.6172 28.1172C23.6953 30.0391 21.4453 31.3281 18.8672 31.9844C16.2891 32.6875 13.7109 32.6875 11.1328 31.9844C8.55469 31.3281 6.30469 30.0391 4.38281 28.1172C2.46094 26.1953 1.17188 23.9453 0.515625 21.3672C-0.140625 18.7891 -0.140625 16.2109 0.515625 13.6328C1.17188 11.0547 2.46094 8.80469 4.38281 6.88281C4.99219 6.27344 5.625 5.73438 6.28125 5.26562C6.65625 5.03125 7.07812 4.98438 7.54688 5.125C8.01562 5.26562 8.39062 5.52344 8.67188 5.89844C9 6.27344 9.14062 6.67188 9.09375 7.09375C8.90625 9.25 9.16406 11.3828 9.86719 13.4922C10.6172 15.6016 11.7891 17.4766 13.3828 19.1172C15.0234 20.7109 16.8984 21.8828 19.0078 22.6328C21.1172 23.3828 23.2734 23.6406 25.4766 23.4062ZM23.0156 26.4297C20.8594 26.3359 18.75 25.8438 16.6875 24.9531C14.6719 24.0625 12.8672 22.8203 11.2734 21.2266C9.67969 19.6328 8.4375 17.8281 7.54688 15.8125C6.65625 13.7969 6.16406 11.7109 6.07031 9.55469C4.66406 11.1016 3.72656 12.8828 3.25781 14.8984C2.83594 16.8672 2.90625 18.8359 3.46875 20.8047C4.03125 22.7734 5.03906 24.5078 6.49219 26.0078C7.99219 27.4609 9.72656 28.4688 11.6953 29.0312C13.6641 29.5938 15.6562 29.6641 17.6719 29.2422C19.6875 28.7734 21.4688 27.8359 23.0156 26.4297Z" fill="#343A40"/>
                                                    </svg>
                                                    <div class="black--text caption">Dark-Mode</div>
                                                </button>
                                            </div>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col cols="4" sm="4" md="4">
                                            <div style="text-align:center">
                                                <button class="button1">
                                                    <!-- <div class="headline font-weight-bold">FR</div> -->
                                                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.25 1.52344C6.89062 2.36719 5.78906 3.53906 4.94531 5.03906C4.14844 6.49219 3.75 8.0625 3.75 9.75C3.75 11.4375 4.14844 13.0312 4.94531 14.5312C5.78906 15.9844 6.91406 17.1328 8.32031 17.9766C6.77344 17.9766 5.36719 17.625 4.10156 16.9219C2.83594 16.1719 1.82812 15.1641 1.07812 13.8984C0.375 12.6328 0.0234375 11.25 0.0234375 9.75C0.0234375 8.25 0.375 6.86719 1.07812 5.60156C1.82812 4.33594 2.83594 3.35156 4.10156 2.64844C5.36719 1.89844 6.75 1.52344 8.25 1.52344ZM25.6172 3.77344L27.7266 5.88281L4.38281 29.2266L2.27344 27.1172L25.6172 3.77344ZM16.3359 7.42969L14.0859 6.02344L11.9766 7.5L12.6094 4.96875L10.5 3.35156L13.1016 3.21094L14.0156 0.679688L15 3.14062L17.6016 3.21094L15.5625 4.89844L16.3359 7.42969ZM11.4141 12.8438L9.65625 11.7188L7.96875 12.9141L8.46094 10.875L6.84375 9.67969L8.88281 9.53906L9.58594 7.57031L10.2891 9.46875L12.3281 9.53906L10.7812 10.875L11.4141 12.8438ZM25.4766 18.75C25.4766 20.25 25.1016 21.6328 24.3516 22.8984C23.6484 24.1641 22.6641 25.1719 21.3984 25.9219C20.1328 26.625 18.75 26.9766 17.25 26.9766C15.4219 26.9766 13.7812 26.4609 12.3281 25.4297L23.9297 13.8281C24.9609 15.2812 25.4766 16.9219 25.4766 18.75ZM18.8672 28.5938L23.0859 26.9062L22.6641 31.8984L18.8672 28.5938ZM25.4062 24.5859L27.0938 20.4375L30.3984 24.2344L25.4062 24.5859ZM27.0938 17.1328L25.4062 12.9844L30.3984 13.3359L27.0938 17.1328ZM11.4141 26.9062L15.6328 28.5938L11.8359 31.8984L11.4141 26.9062Z" fill="#343A40"/>
                                                    </svg>
                                                    <div class="black--text caption">Auto-Mode</div>
                                                </button>
                                            </div>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                </v-col>
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
#setting_dark {
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    margin-top: 0px !important;
    position: relative;
}
#setting_darkside {
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
    margin-left: 0px;
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
#closebtn {
    position: absolute;
    top: 0px;
    right: 0px;
}

// @media only screen and (min-width: 769px) and (max-width: 1639px) {
//     .de_btn{
//         margin-left:20px;
//         margin-right: 20px;
//     }

// }
// @media only screen and (max-width: 768px) {
//     .language_btn {
//         margin-left: 60px;
//     }
    

// }

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
        padding: 0% 0% 0% 0% !important;
    }
    #setting_dark {
        margin-top: 0px !important;
        padding: 0px !important;
        border-radius: 0px !important;
        
    }
    #setting_darkside {
        border-radius: 0% 0% 0% 0% !important;
        height: 60px !important;
    }
    .header_title1 {
        display: none !important;
    }
    .header_title2 {
        display: block !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px !important;
        height: 80px !important;
        margin-left: 0% !important;
    }
    .language_btn {
        margin-left: 0% !important;
    }
}
// iPhone X
@media only screen and (min-width: 321px) and (max-width: 375px) {
    .mycontainer {
        padding: 0% 0% 0% 0% !important;
    }
    #setting_dark {
        margin-top: 0px !important;
        padding: 0px !important;
        border-radius: 0px !important;
        
    }
    #setting_darkside {
        border-radius: 0% 0% 0% 0% !important;
        height: 60px !important;
    }
    .header_title1 {
        display: none !important;
    }
    .header_title2 {
        display: block !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px !important;
        height: 80px !important;
        margin-left: 0% !important;
    }
    .language_btn {
        margin-left: 0% !important;
    }
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding: 0% 0% 0% 0% !important;
    }
    #setting_dark {
        margin-top: 0px !important;
        padding: 0px !important;
        border-radius: 0px !important;
        
    }
    #setting_darkside {
        border-radius: 0% 0% 0% 0% !important;
        height: 60px !important;
    }
    .header_title1 {
        display: none !important;
    }
    .header_title2 {
        display: block !important;
        text-align:left;
        padding-left:10px;
    }
    .setting_title {
        display: none !important;
    }
    .setting_icon {
        display: none !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_setting_phone {
        position: absolute !important;
        display: flex !important;
        top: 0px !important;
        right: 10px !important;
    }
    .button1 {
        width: 80px !important;
        height: 80px !important;
        margin-left: 0% !important;
    }
    .language_btn {
        margin-left: 0% !important;
    }
}
</style>