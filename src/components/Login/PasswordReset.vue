<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="10" lg="8" id="resetpass" class="d-flex">
                    <v-row justify="center">
                        <v-col cols="12" sm="2" md="2" id="resetpassside">
                            <v-avatar class="mt-10 mb-5 pa-3 profile_image" color="white" size="60">
                            <svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.4688 27.0312L35.5312 36.9688L28.5 30.0312L31.5 27.0312L35.5312 30.9688L42.4688 24.0312L45.4688 27.0312ZM24.4688 29H4.5V9.03125L20.5312 18.9688L36.4688 9.03125V18.9688H40.5V5C40.5 3.875 40.0938 2.9375 39.2812 2.1875C38.5312 1.375 37.5938 0.96875 36.4688 0.96875H4.5C3.375 0.96875 2.40625 1.375 1.59375 2.1875C0.84375 2.9375 0.46875 3.875 0.46875 5V29C0.46875 30.125 0.84375 31.0938 1.59375 31.9062C2.40625 32.6562 3.375 33.0312 4.5 33.0312H24.4688V29ZM36.4688 5L20.5312 15.0312L4.5 5H36.4688Z" fill="#828282"/>
                            </svg>
                            </v-avatar>
                            <div class="white--text side_title" align="center">Password Reset</div>
                            <div class="white--text title side_title_phone" align="left">Password Reset</div>
                            <v-btn class="mx-2 mt-4" icon id="closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10" class="resetpass_main">
                            <v-row class="mt-10 first_progress">
                                <v-col sm="1" md="1" class="textcenter">
                                    <v-avatar color="primary" size="30">
                                        <span class="white--text">1</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col sm="1" md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">2</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col sm="1" md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">3</span>
                                    </v-avatar>
                                </v-col>
                            </v-row>
                            <v-row justify="center" class="reset_first_title">
                                <h1 style="color: #999999">PASSWORD RESET</h1>
                            </v-row>
                            <span class="grey--text subtitle-1 reset_first_title_comment_phone">Step1<br>To restore your password, please provide the following information:</span>
                            
                            <v-row class="">
                                <v-col sm="10" md="10" class="mt-10 form_main">
                                    <v-form ref="form" v-model="valid" lazy-validation class="login_input_form">
                                        <v-col md="12" id="choose_mail1">
                                            <p class="grey--text title reset_first_title_comment" align="left">Step 1: We will send you a PIN:</p>
                                            <v-text-field 
                                            v-model="email"
                                            :rules="emailRules" 
                                            label="E-mail address"
                                            background-color="white"
                                            height="30px"
                                            required
                                            ></v-text-field>
                                            <v-text-field 
                                            v-model="phone_number" 
                                            background-color="white" 
                                            height="30px"
                                            type="number" 
                                            :rules="phoneRules" 
                                            label="Mobile number" 
                                            min="0" 
                                            required
                                            ></v-text-field>
                                            <p class="caption grey--text mt-10" align="left">Please check the PIN on your mobile phone</p>
                                            <p class="caption grey--text reset_first_description" align="left">By clicking "Agree & Join", you agree to the User Agreement(AGB), Privacy Policy(GDPR consent), and Cookie Policy.</p>
                                            <v-btn class="mt-7 reset_first_next_btn" color="#0099ff" block height="40px" @click="$router.push('/resetsecond')">
                                                <!-- <v-icon class="fa fa-envelope white--text mr-10" left></v-icon> -->
                                                <svg class="white--text mr-10 mt-1" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M28.8555 17.0195L22.6445 23.2305L18.25 18.8945L20.125 17.0195L22.6445 19.4805L26.9805 15.1445L28.8555 17.0195ZM15.7305 18.25H3.25V5.76953L13.2695 11.9805L23.2305 5.76953V11.9805H25.75V3.25C25.75 2.54688 25.4961 1.96094 24.9883 1.49219C24.5195 0.984375 23.9336 0.730469 23.2305 0.730469H3.25C2.54688 0.730469 1.94141 0.984375 1.43359 1.49219C0.964844 1.96094 0.730469 2.54688 0.730469 3.25V18.25C0.730469 18.9531 0.964844 19.5586 1.43359 20.0664C1.94141 20.5352 2.54688 20.7695 3.25 20.7695H15.7305V18.25ZM23.2305 3.25L13.2695 9.51953L3.25 3.25H23.2305Z" fill="white"/>
                                                </svg>
                                                <span class="white--text text-capitalize subtitle-1 mt-2">Next Step</span>
                                            </v-btn>
                                            <v-btn class="mt-7 reset_first_next_btn_phone regist_btn_style" color="#0099ff" block height="40px" @click="show_confirm_code_part = !show_confirm_code_part">
                                                <!-- <v-icon class="fa fa-envelope white--text mr-10" left></v-icon> -->
                                                <svg class="white--text mr-10 mt-1" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2695 18.0195V5.48047H2.48047V18.0195H11.2695ZM11.2695 0.5C11.9336 0.5 12.5 0.753906 12.9688 1.26172C13.4766 1.73047 13.7305 2.31641 13.7305 3.01953V20.4805C13.7305 21.1836 13.4766 21.7891 12.9688 22.2969C12.5 22.7656 11.9336 23 11.2695 23H2.48047C1.81641 23 1.23047 22.7656 0.722656 22.2969C0.253906 21.7891 0.0195312 21.1836 0.0195312 20.4805V3.01953C0.0195312 2.31641 0.253906 1.73047 0.722656 1.26172C1.23047 0.753906 1.81641 0.5 2.48047 0.5H11.2695ZM18.125 0.5H24.3945C24.9023 0.5 25.332 0.695312 25.6836 1.08594C26.0742 1.4375 26.2695 1.86719 26.2695 2.375V6.125C26.2695 6.63281 26.0742 7.08203 25.6836 7.47266C25.332 7.82422 24.9023 8 24.3945 8H20L16.25 11.75V2.375C16.25 1.86719 16.4258 1.4375 16.7773 1.08594C17.168 0.695312 17.6172 0.5 18.125 0.5Z" fill="white"/>
                                                </svg>
                                                <span class="white--text text-capitalize subtitle-1 mt-2">Send Confirmation Code</span>
                                            </v-btn>
                                            <div class="confirm_code_phone" v-if="show_confirm_code_part">
                                                <p class="grey--text mt-5" align="left">Step 2</p>
                                                <p class="grey--text" align="left">Please check your mobile,<br>we'll send you a Confirmation code:</p>
                                                <p class="caption black--text" align="left">Please type in the confirmation code you got on your mobile</p>
                                                <v-row>
                                                    <v-col cols="6" sm="6" md="6">
                                                        <v-text-field 
                                                        v-model="confirm_code_for_pass"
                                                        label="Confirmation-Code"
                                                        background-color="white"
                                                        height="30px"
                                                        hint="Code sent by SMS"
                                                        required
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" md="6">
                                                        <v-btn class="mt-7" color="#0099ff" block height="35px" @click="$router.push('/resetsecond')">
                                                        <span class="white--text subtitle-1">OK</span>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-col>
                                    </v-form>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-btn icon id="closebtn" @click="$router.push('/')">
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
            phone_number: '',
            phoneRules: [
                v => !!v || "Phone number is required"
            ],
            confirm_code_for_pass: '',
            show_confirm_code_part: false,

        }
    },

}
</script>
<style lang="scss" scoped>
.mycontainer {
    padding: 0px;
}
#resetpass {
    margin-top: 10%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 600px;
    position: relative;
}
#resetpassside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    /* width: 100%;
    height: 100%; */
}
.resetpass_main {
    padding-right: 0px;
}
.side_title_phone {
    display: none;
}
.reset_first_title_comment_phone {
    display: none;
}
#choose_mail1 {
    padding-top:0%;
    text-align: center;
}
#choose_mail2 {
    padding-top:0%;
    text-align: center;
}
.textcenter {
    text-align: center;
}
#resetpassbtn {
    font-size: 70px;
}
#vertical_divider{
    font-weight: bold;
    color: black;
}
.first_progress {
    display: none;
}
.reset_first_next_btn_phone {
    display: none;
}
.reset_first_description {
    display: none;
}
#closebtn_phone {
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
        padding-top: 0%;
    }
    #resetpass {
        border: none;
        margin-top: 0%;
    }
    #resetpassside {
        border-radius: 0%;
        height: 70px;
    }
    .profile_image {
        display: none !important;
    }
    .resetpass_main {
        padding: 0px;
    }
    #closebtn {
        display: none;
    }
    .first_progress {
        margin: 0% 0% 0% 0% !important;
        padding: 0% 0% 0% 0%;
        display: flex;
    }
    .reset_first_title, .reset_first_title_comment {
        display: none;
    }
    .reset_first_title_comment_phone {
        display: flex;
        margin-left: 20px;
    }
    .form_main {
        padding: 0px !important;
        margin-left: 0% !important;
        margin-top: 0% !important;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: flex;
        margin-top: 10px !important;
        margin-left: 10px !important;
    }
    .reset_first_next_btn {
        display: none;
    }
    .reset_first_next_btn_phone {
        display: flex;
    }
    .reset_first_description {
        display: flex;
    }
    #closebtn_phone {
        position: absolute;
        display: flex;
        top: 5px;
        right: 10px;
    }
  
}
@media only screen and(min-width: 321px) and (max-width:375px) {
    .mycontainer {
        padding: 0%;
    }
    #resetpass {
        border: none;
        margin-top: 0%;
    }
    #resetpassside {
        border-radius: 0%;
        height: 70px;
    }
    .profile_image {
        display: none !important;
    }
    .resetpass_main {
        padding: 0px;
    }
    #closebtn {
        display: none;
    }
    .first_progress {
        margin: 0% 0% 0% 0% !important;
        padding: 0% 0% 0% 0%;
        display: flex;
    }
    .reset_first_title, .reset_first_title_comment {
        display: none;
    }
    .reset_first_title_comment_phone {
        display: flex;
        margin-left: 20px;
    }
    .form_main {
        padding: 0px !important;
        margin-left: 0% !important;
        margin-top: 0% !important;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: flex;
        margin-top: 10px !important;
        margin-left: 10px !important;
    }
    .reset_first_next_btn {
        display: none;
    }
    .reset_first_next_btn_phone {
        display: flex;
    }
    .reset_first_description {
        display: flex;
    }
    #closebtn_phone {
        position: absolute;
        display: flex;
        top: 5px;
        right: 10px;
    }
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding: 0%;
    }
    #resetpass {
        border: none !important;
        margin-top: 0% !important;
    }
    #resetpassside {
        border-radius: 0% !important;
        height: 60px !important;
    }
    .profile_image {
        display: none !important;
    }
    .resetpass_main {
        padding: 0% !important;
    }
    #closebtn {
        display: none !important;
    }
    .first_progress {
        margin: 0% 0% 0% 0% !important;
        padding: 0% 0% 0% 0% !important;
        display: flex !important;
    }
    .reset_first_title, .reset_first_title_comment {
        display: none !important;
    }
    .reset_first_title_comment_phone {
        display: flex !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
    .form_main {
        padding: 0px !important;
        margin-left: 0% !important;
        margin-top: 0% !important;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: flex;
        margin-top: 10px !important;
        margin-left: 10px !important;
    }
    .reset_first_next_btn {
        display: none;
    }
    .reset_first_next_btn_phone {
        display: flex;
    }
    .reset_first_description {
        display: flex;
    }
    #closebtn_phone {
        position: absolute;
        display: flex;
        top: 5px;
        right: 10px;
    }
}
</style>