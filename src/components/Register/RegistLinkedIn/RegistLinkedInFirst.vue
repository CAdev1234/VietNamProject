<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="8" id="xing_registfirst" class="d-flex" style="margin-top:100px">
                    <v-row justify="center">
                        <v-col cols="12" sm="2" md="2" id="xing_registfirstside">
                            <v-avatar class="mt-10 mb-5 pa-3 xing_profile_image" color="white" size="60">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.8438 0.03125C27.2188 0.03125 26.7188 0.375 26.3438 1.0625L13.5 23.8438L21.6562 38.9375C22.0312 39.625 22.5625 39.9688 23.25 39.9688H29.0625C29.375 39.9688 29.5938 39.8438 29.7188 39.5938C29.9062 39.3438 29.9375 39.0625 29.8125 38.75L21.6562 23.8438L34.4062 1.25C34.5938 0.9375 34.5938 0.65625 34.4062 0.40625C34.2812 0.15625 34.0312 0.03125 33.6562 0.03125H27.8438ZM3.5625 7.90625C3.1875 7.90625 2.9375 8.03125 2.8125 8.28125C2.6875 8.53125 2.71875 8.8125 2.90625 9.125L6.75 15.9688L0.65625 26.75C0.53125 27.0625 0.53125 27.3438 0.65625 27.5938C0.78125 27.8438 1.03125 27.9688 1.40625 27.9688H7.125C7.75 27.9688 8.28125 27.625 8.71875 26.9375L14.9062 15.875L10.9688 9.03125C10.5938 8.28125 10.0625 7.90625 9.375 7.90625H3.5625Z" fill="#828282"/>
                            </svg>
                            </v-avatar>
                            <div class="white--text side_title" align="center">Register with LinkedIn</div>
                            <div class="white--text title side_title_phone" align="left">Register with LinkedIn</div>
                            <v-btn class="mx-2" icon id="xing_closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10">
                            <v-row class="mt-8 xing_first_progress">
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="primary" size="30">
                                        <span class="white--text">1</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">2</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">3</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">4</span>
                                    </v-avatar>
                                </v-col>
                            </v-row>
                            <v-row style="text-align: right">
                                <v-spacer></v-spacer>
                                <v-switch v-model="help" inset  style="text-align: right"></v-switch>
                                <!-- <span class="grey-text mt-5">Help</span> -->
                            </v-row>
                            <v-row>
                                <v-divider class="mt-7"></v-divider>
                                <v-col cols="8" sm="10" md="10">
                                    <p class="grey--text subtitle-1" align="center">Register with LinkedIn:</p>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="10" md="8" class="xing_register_email_form">
                                    <v-row>
                                        <v-col cols="12" sm="10" md="8" class="xing_register_email_form">
                                            <v-row>
                                                <p class="grey--text subtitle-1">Welcome!<br>It is your first time. To sign in with Xing you only once need to register.</p>
                                                <p class="grey--text subtitle-1">By clicking "Start Authentification" you will be redirected to Xing where you need to confirm data access. In a second step you can check those data and create an account.</p>
                                                <p class="grey--text subtitle-1">To start please click the button.</p>
                                                <v-btn class="bottombtn_first regist_btn_style" color="#0099ff" block height="40px" @click="$router.push('/linkedsecond')">
                                                    <svg class="white--text mt-1 mr-3" width="24" height="24" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.75 23H17.7695V14.5625C17.7695 13.9375 17.457 13.3906 16.832 12.9219C16.2461 12.4141 15.6211 12.1602 14.957 12.1602C14.293 12.1602 13.7461 12.3945 13.3164 12.8633C12.9258 13.332 12.7305 13.8984 12.7305 14.5625V23H7.75V8H12.7305V10.5195C13.1211 9.85547 13.7656 9.32812 14.6641 8.9375C15.5625 8.50781 16.3828 8.29297 17.125 8.29297C18.6875 8.29297 20.0156 8.85938 21.1094 9.99219C22.2031 11.0859 22.75 12.3945 22.75 13.918V23ZM5.23047 23H0.25V8H5.23047V23ZM2.76953 0.5C3.43359 0.5 4 0.753906 4.46875 1.26172C4.97656 1.73047 5.23047 2.31641 5.23047 3.01953C5.23047 3.68359 4.97656 4.26953 4.46875 4.77734C4 5.24609 3.41406 5.48047 2.71094 5.48047C2.04688 5.48047 1.46094 5.24609 0.953125 4.77734C0.484375 4.26953 0.25 3.68359 0.25 3.01953C0.25 2.31641 0.484375 1.73047 0.953125 1.26172C1.46094 0.753906 2.06641 0.5 2.76953 0.5Z" fill="white"/>
                                                    </svg>
                                                    <span class="white--text text-capitalize subtitle-1 mt-2">Start Authentification</span>
                                                </v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-btn icon id="xing_closebtn" @click="$router.push('/')">
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
export default {
    data() {
        return {
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            phone_number: '',
            phoneRules: [
                v => !!v || "Phone number is required"
            ],
            password: "",
            show: false,
            passwordRules: {
                required: value => !!value || "Required.",
                min: v => v.length >= 8 || "Min 8 characters",
                // emailMatch: () => "The email and password you entered don't match"
            },
            confirm_password: '',
            help: false,
        }
    },

}
</script>
<style scoped>
#xing_registfirst {
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 75vh;
    position: absolute;
}
#xing_registfirstside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}
.xing_register_email_form {
    padding: 0px;
}
.textcenter {
    text-align: center;
}
.xing_title_first {
    margin-top: 3% !important;
}
.xing_bottombtn_first {
    margin-top: 15%;
}
#xing_closebtn_phone {
    display: none;
}
#xing_closebtn {
    position: absolute;
    top: 0px;
    right: 0px;
}
.side_title_phone {
    display: none;
}
</style>
<style lang="scss" scoped>

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
        padding-top: 0px;
    }
    .xing_profile_image {
        display: none;
    }
    #xing_closebtn_phone {
        position: absolute;
        display: block;
        top: 15px;
        right: 5px;
    }
    #xing_closebtn {
        display: none !important;
    }
    #xing_registfirst {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0%;
        border: none;
        
    }
    #xing_registfirstside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0%;
    }
    .xing_first_progress {
        margin-left: 0% !important;
    }
    .xing_register_email_form {
        margin-left: 0% !important;
    }
    .xing_close_img_btn {
        display: none;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: block !important;
    }
}
// iPhone X
@media only screen and (min-width: 321px) and (max-width: 375px) {
    .mycontainer {
        padding-top: 0px;
    }
    .xing_profile_image {
        display: none;
    }
    #xing_closebtn_phone {
        position: absolute;
        display: block;
        top: 15px;
        right: 5px;
    }
    #xing_closebtn {
        display: none !important;
    }
    #xing_registfirst {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0%;
        border: none;
        
    }
    #xing_registfirstside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0%;
    }
    .xing_first_progress {
        margin-left: 0% !important;
    }
    .xing_register_email_form {
        margin-left: 0% !important;
    }
    .xing_close_img_btn {
        display: none;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: block !important;
    }
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding-top: 0px;
    }
    .xing_profile_image {
        display: none;
    }
    #xing_closebtn_phone {
        position: absolute;
        display: block;
        top: 15px;
        right: 5px;
    }
    #xing_closebtn {
        display: none !important;
    }
    #xing_registfirst {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0%;
        border: none;
        
    }
    #xing_registfirstside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0%;
    }
    .xing_first_progress {
        margin-left: 0% !important;
    }
    .xing_register_email_form {
        margin-left: 0% !important;
    }
    .xing_close_img_btn {
        display: none;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: block !important;
    }
}
</style>