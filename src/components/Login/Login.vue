<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col sm="12" md="12" lg="8" id="login" class="d-flex d-lg-flex">
                    <v-row class="login_row">
                        <v-col cols="12" sm="2" md="2" id="loginside">
                            <v-avatar class="mt-10 mb-5 pa-3 login_profile_image" color="white" size="60">
                            <svg width="41" height="34" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 21.0312C28.1875 21.0312 29.8438 21.3438 31.4688 21.9688C33.4688 22.7812 34.4688 23.7812 34.4688 24.9688V27.0312H18.5312V24.9688C18.5312 23.7812 19.5312 22.7812 21.5312 21.9688C23.1562 21.3438 24.8125 21.0312 26.5 21.0312ZM26.5 18.9688C27.625 18.9688 28.5625 18.5938 29.3125 17.8438C30.125 17.0312 30.5312 16.0938 30.5312 15.0312C30.5312 13.9062 30.125 12.9688 29.3125 12.2188C28.5625 11.4062 27.625 11 26.5 11C25.375 11 24.4062 11.4062 23.5938 12.2188C22.8438 12.9688 22.4688 13.9062 22.4688 15.0312C22.4688 16.0938 22.8438 17.0312 23.5938 17.8438C24.4062 18.5938 25.375 18.9688 26.5 18.9688ZM40.4688 9.03125V29C40.4688 30.125 40.0625 31.0938 39.25 31.9062C38.5 32.6562 37.5938 33.0312 36.5312 33.0312H4.46875C3.40625 33.0312 2.46875 32.6562 1.65625 31.9062C0.90625 31.0938 0.53125 30.125 0.53125 29V5C0.53125 3.875 0.90625 2.9375 1.65625 2.1875C2.46875 1.375 3.40625 0.96875 4.46875 0.96875H16.4688L20.5 5H36.5312C37.5938 5 38.5 5.40625 39.25 6.21875C40.0625 6.96875 40.4688 7.90625 40.4688 9.03125ZM36.5312 9.03125H4.46875V29H36.5312V9.03125Z" fill="#828282"/>
                            </svg>
                            </v-avatar>
                            <div class="login_title_pad_pc" style="color: white">Login Window</div>
                            <span class="white--text title login_title_phone">Login</span>
                            <v-btn class="mt-2" icon id="login_closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="9" class="login_main">
                            <v-row justify="center">
                                <h1 class="login_title" style="color: #999999">PLEASE LOGIN</h1>
                            </v-row>
                            <v-row justify="center">
                                <h2 class="login_or" style="text-align:center; color: red">OR</h2>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="5" md="5">
                                    <v-row>
                                        <v-divider class="mt-4"></v-divider>
                                        <v-col cols="9" md="9" id="login_choose_mail1">
                                            <span class="grey--text subtitle-1">With your business network:</span>
                                        </v-col>
                                        <v-divider class="mt-4"></v-divider>
                                    </v-row>
                                    <div class="login_network_btn">
                                            <v-btn class="mt-7 login_xing regist_btn_style" color="#0099ff" height="40px" block @click="$router.push('/xingfirst')">
                                                <svg class="white--text mr-3 mt-1" width="24" height="24" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5898 0.269531C17.1992 0.269531 16.8867 0.484375 16.6523 0.914062L8.625 15.1523L13.7227 24.5859C13.957 25.0156 14.2891 25.2305 14.7188 25.2305H18.3516C18.5469 25.2305 18.6836 25.1523 18.7617 24.9961C18.8789 24.8398 18.8984 24.6641 18.8203 24.4688L13.7227 15.1523L21.6914 1.03125C21.8086 0.835938 21.8086 0.660156 21.6914 0.503906C21.6133 0.347656 21.457 0.269531 21.2227 0.269531H17.5898ZM2.41406 5.19141C2.17969 5.19141 2.02344 5.26953 1.94531 5.42578C1.86719 5.58203 1.88672 5.75781 2.00391 5.95312L4.40625 10.2305L0.597656 16.9688C0.519531 17.1641 0.519531 17.3398 0.597656 17.4961C0.675781 17.6523 0.832031 17.7305 1.06641 17.7305H4.64062C5.03125 17.7305 5.36328 17.5156 5.63672 17.0859L9.50391 10.1719L7.04297 5.89453C6.80859 5.42578 6.47656 5.19141 6.04688 5.19141H2.41406Z" fill="white"/>
                                                </svg>
                                                <span class="white--text text-capitalize subtitle-1 mt-2">Login with Xing</span>
                                            </v-btn>
                                            <v-btn class="mt-7 login_linkedin regist_btn_style" color="#0099ff" height="40px" block @click="$router.push('/linkedfirst')">
                                                <svg class="white--text mt-1 mr-3" width="24" height="24" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.75 23H17.7695V14.5625C17.7695 13.9375 17.457 13.3906 16.832 12.9219C16.2461 12.4141 15.6211 12.1602 14.957 12.1602C14.293 12.1602 13.7461 12.3945 13.3164 12.8633C12.9258 13.332 12.7305 13.8984 12.7305 14.5625V23H7.75V8H12.7305V10.5195C13.1211 9.85547 13.7656 9.32812 14.6641 8.9375C15.5625 8.50781 16.3828 8.29297 17.125 8.29297C18.6875 8.29297 20.0156 8.85938 21.1094 9.99219C22.2031 11.0859 22.75 12.3945 22.75 13.918V23ZM5.23047 23H0.25V8H5.23047V23ZM2.76953 0.5C3.43359 0.5 4 0.753906 4.46875 1.26172C4.97656 1.73047 5.23047 2.31641 5.23047 3.01953C5.23047 3.68359 4.97656 4.26953 4.46875 4.77734C4 5.24609 3.41406 5.48047 2.71094 5.48047C2.04688 5.48047 1.46094 5.24609 0.953125 4.77734C0.484375 4.26953 0.25 3.68359 0.25 3.01953C0.25 2.31641 0.484375 1.73047 0.953125 1.26172C1.46094 0.753906 2.06641 0.5 2.76953 0.5Z" fill="white"/>
                                                </svg>
                                                <span class="white--text text-capitalize subtitle-1 mt-2">Login with LinkedIn</span>
                                            </v-btn>
                                    </div>
                                </v-col>
                                <v-col sm="2" md="2" class="login_vertical_class">
                                    <v-divider vertical id="login_vertical_divider"></v-divider>
                                </v-col>
                                <v-col cols="12" sm="5" md="5">
                                    <v-row>
                                        <v-divider class="mt-4"></v-divider>
                                        <v-col cols="9" md="9" id="login_choose_mail2">
                                            <span class="grey--text subtitle-1">With your business e-mail:</span>
                                        </v-col>
                                        <v-divider class="mt-4"></v-divider>
                                    </v-row>
                                    <v-form ref="form" v-model="valid" lazy-validation class="login_input_form">
                                        <v-text-field 
                                        v-model="email"
                                        :rules="emailRules" 
                                        label="E-mail address"
                                        required
                                        ></v-text-field>
                                        <v-text-field
                                        v-model="password"
                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                                        :rules="[passwordRules.required, passwordRules.min]"
                                        :type="show ? 'text' : 'password'"                                   
                                        label="Password"
                                        hint="At least 8 characters"
                                        @click:append="show = !show"
                                        ></v-text-field>
                                        <v-btn class="mt-7 login_email regist_btn_style" color="#0099ff" height="40px" block @click="$router.push('/first')">
                                            <!-- <v-icon class="fa fa-envelope white--text mr-10" left></v-icon> -->
                                            <svg class="white--text mr-2 mt-1" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.8555 17.0195L22.6445 23.2305L18.25 18.8945L20.125 17.0195L22.6445 19.4805L26.9805 15.1445L28.8555 17.0195ZM15.7305 18.25H3.25V5.76953L13.2695 11.9805L23.2305 5.76953V11.9805H25.75V3.25C25.75 2.54688 25.4961 1.96094 24.9883 1.49219C24.5195 0.984375 23.9336 0.730469 23.2305 0.730469H3.25C2.54688 0.730469 1.94141 0.984375 1.43359 1.49219C0.964844 1.96094 0.730469 2.54688 0.730469 3.25V18.25C0.730469 18.9531 0.964844 19.5586 1.43359 20.0664C1.94141 20.5352 2.54688 20.7695 3.25 20.7695H15.7305V18.25ZM23.2305 3.25L13.2695 9.51953L3.25 3.25H23.2305Z" fill="white"/>
                                            </svg>
                                            <span class="white--text subtitle-1 text-capitalize mt-2">Login with Email</span>
                                        </v-btn>
                                    </v-form>
                                </v-col>
                            </v-row>
                            <v-row class="lost_password_content">
                                <v-spacer></v-spacer>
                                <v-col cols="12" sm="5" md="5">
                                    <v-row class="mt-5">
                                        <v-divider class="mt-4"></v-divider>
                                        <v-col cols="9" sm="9" md="9" id="login_lost_password">
                                            <span class="grey--text subtitle-1">Lost your password?</span>
                                        </v-col>
                                        <v-divider class="mt-4"></v-divider>
                                    </v-row>
                                    <v-row class="login_lost_password_main">
                                        <v-col sm="8" md="8" class="login_playarrow_text">
                                            <p class="caption grey--text">In case you don't know your password, we can reset your password!</p>
                                        </v-col>
                                        <v-col sm="4" md="4" class="playarrow" id="login_resetpassbtn" style="text-align:center; align-items: center">
                                            <v-btn color="transparent" @click="$router.push('/reset')">
                                                <i class="material-icons grey--text md-36">play_arrow</i>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>    
                    <v-btn icon id="login_closebtn" @click="$router.push('/')">
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
            valid: true,
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            password: "",
            show: false,
            passwordRules: {
                required: value => !!value || "Required.",
                min: v => v.length >= 8 || "Min 8 characters",
                // emailMatch: () => "The email and password you entered don't match"
            },
        }
    },

}
</script>
<style lang="scss">
.mycontainer {
    padding: 0px;
}
#login {
    position: relative;
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 75vh;
}
#loginside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}
.login_main {
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
}
.login_title_phone {
    display: none;
}
#login_choose_mail1 {
    padding-top:0%;
    text-align: center;
}
#login_choose_mail2 {
    padding-top:0%;
    text-align: center;
}
#login_lost_password {
    padding-top:0%;
    text-align: center;
}

#login_resetpassbtn {
    font-size: 60px;
}
.login_vertical_class {
    text-align: center;
    // padding-left: 0px !important;
    // padding-right: 0px !important;
}
#login_vertical_divider{
    border-color: black;
    border-width: 1px;
    height: 300px;
}
#login_closebtn {
    position: absolute;
    top: 5px;
    right: 5px;
}
#login_closebtn_phone {
    display: none;
}
// @media only screen and (min-width: 376px) and (max-width: 768px) {
//     .login_linkedin {
//         svg {
//             margin-right: 10px !important;
//         }
//     }
//     // .login_main {
//     //     padding-left: 50px;
//     //     padding-right: 50px;
//     // }
// }
// @media only screen and (min-width: 900px) and  (max-width: 1270px){
//     //  #login { 
//     //     margin-top: 200px !important;
//     // }
//     .login_xing, .login_linkedin, .login_email{
//         span {
//             font-size: 12px !important;
//             height: 30px !important;
//         }
//     }
//     button {
//         width: 100px !important;
//         height: 40px !important;
//     }
//     .login_linkedin i {
//         font-size: 20px !important;
//         margin-right: 10px !important;
//     }
//     .login_email i {
//         font-size: 20px !important;
//         margin-right: 20px !important;
//     }
//     .login_xing i {
//         font-size: 20px !important;
//         margin-right: 20px !important;
//     }
//     #closebtn {
//         width: 24px !important;
//         height: 24px !important;
//     }
//     .title_phone {
//         display: none;
//     }
// }
// @media only screen and (min-width:600px) and (max-width: 900px) {
//     #login {
//         width: 500px !important;
//         margin-top: 15% !important;
//     }
//     .logintitle {
//         font-size: 25px !important;
//         margin-top: 70px !important;
//         text-align: center !important;
//     }
//     .login_or {
//         font-size: 20px;
//     }
//     #loginside {
//         div {
//             font-size: 13px !important;
//         }
//         i {
//             width: 20px;
//             height: 20px;
//         }
//     }

//     button {
//         width:120px !important;
//         height: 30px !important;
//         padding: 0px 0px 0px 0px !important;
//     }    
//     .login_xing i {
//         display: none;
//     }
//     .login_linkedin i {
//         display: none;
//     }
//     .login_email i {
//         display: none;
//     }

//     #closebtn {
//         width: 24px !important;
//         height: 24px !important;
//     }
//     .login_xing, .login_linkedin, .login_email{
//         span {
//             font-size: 10px !important;
//             height: 20px !important;
//             margin-top: -5px !important;
//         }
//     }
//     .playarrow {
//         button {
//             width: 35px !important;
//             height: 35px !important;
//             margin-top: 15px;
//             margin-left: -15px;
//             padding: 0% 0% 0% 0% ;
//         }
//     }
//     .playarrow_text {
//         p { font-size: 10px !important; }
//         padding: 0% 0% 0% 0%;
//     }
//     .title_phone {
//         display: none;
//     }
// }
@media only screen and (min-width: 1025px) and (max-width: 1366px) {

}
//iPad Pro
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
    #login {
      height: 100vh !important;
      margin-top: 0px !important;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
    #login {
        margin-top: 100px !important;
        height: 80vh !important;
    }
}
// iPad 
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: landscape) {
    // #login {
    //     height: 100vh ;
    //     margin-top: 0px;
    // }
}
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: portrait) {
  
}
// iPhone Plus
@media only screen and (min-width: 376px) and (max-width: 414px){
    .mycontainer {
        padding-top: 0% !important;
        padding-left: 0% !important;
        padding-right: 0% !important;
    }
    #login {
        margin-top: 0% !important;
        border: none !important;
        padding-right: 0% !important;
    }
    .login_row {
        margin: 0px 0px 0px 0px !important;
    }
    #loginside {
        position: relative !important;
        height: 60px !important;
        border-radius: 0px !important;
    }
    .login_profile_image {
        display: none !important;
    }
    .login_title_pad_pc {
        display: none !important;
    }
    .login_title_phone {
        display: flex !important;
        font-size: 25px !important;
        // margin-left: -250px !important;
    }
    #login_closebtn {
        background: #0099ff !important;
        margin-top:-60px !important;
    }
    #login_closebtn_phone {
        display: flex !important;
        position: absolute !important;
        top: 5px !important;
        right: 10px !important;
    }
    .login_title, .login_or {
        display: none !important; 
    }
    #login_vertical_divider {
        display: none !important;
    }
    .login_network_btn {
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
    .login_input_form {
        width: 90% !important;
        margin-left: 5% !important;
    }
    .lost_password_main {
        text-align: center !important;
        margin-left: 5% !important;
        button {
            margin-top: -20% !important;
        }
    }
}

@media only screen and (max-width: 375px) {
    .mycontainer {
        padding-top: 0% !important;
        padding-left: 0% !important;
        padding-right: 0% !important;
    }
    #login {
        margin-top: 0% !important;
        border: none !important;
        padding-right: 0% !important;
    }
    .login_row {
        margin: 0px 0px 0px 0px !important;
    }
    #loginside {
        position: relative !important;
        height: 60px !important;
        border-radius: 0px !important;
    }
    .login_profile_image {
        display: none !important;
    }
    .login_title_pad_pc {
        display: none !important;
    }
    .login_title_phone {
        display: flex !important;
        font-size: 25px !important;
        // margin-left: -250px !important;
    }
    #login_closebtn {
        background: #0099ff !important;
        margin-top:-60px !important;
    }
    #login_closebtn_phone {
        display: flex !important;
        position: absolute !important;
        top: 0px !important;
        right: 10px !important;
    }
    .login_title, .login_or {
        display: none !important; 
    }
    #login_vertical_divider {
        display: none !important;
    }
    .login_network_btn {
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
    .login_input_form {
        width: 90% !important;
        margin-left: 5% !important;
    }
    .lost_password_main {
        text-align: center !important;
        margin-left: 5% !important;
        button {
            margin-top: -20% !important;
        }
    }
}
    
</style>
