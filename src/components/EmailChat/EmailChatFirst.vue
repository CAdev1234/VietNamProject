<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="10" lg="8" id="emailchat" class="d-flex">
                    <v-row justify="center">
                        <v-col cols="12" sm="2" md="2" id="emailside">
                            <div class="white--text title side_title" align="center">Email</div>
                            <div class="white--text title side_title_phone" align="left">Email</div>
                            <v-btn class="mt-2" icon id="closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10" class="emailchat_main">
                            <v-row justify="center" class="reset_first_title">
                                <h1 style="color: #999999">Email</h1>
                            </v-row>
                            <span class="grey--text subtitle-1 mt-10 reset_first_title_comment_phone">You can send us a message using your own email client by clicking here:</span>
                            <v-row>
                                <v-col cols="12" sm="10" md="10">
                                    <v-btn class="mt-7 reset_first_next_btn_phone regist_btn_style" color="#0099ff" block height="40px" @click="show_confirm_code_part = !show_confirm_code_part">
                                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.8555 17.0195L22.6445 23.2305L18.25 18.8945L20.125 17.0195L22.6445 19.4805L26.9805 15.1445L28.8555 17.0195ZM15.7305 18.25H3.25V5.76953L13.2695 11.9805L23.2305 5.76953V11.9805H25.75V3.25C25.75 2.54688 25.4961 1.96094 24.9883 1.49219C24.5195 0.984375 23.9336 0.730469 23.2305 0.730469H3.25C2.54688 0.730469 1.94141 0.984375 1.43359 1.49219C0.964844 1.96094 0.730469 2.54688 0.730469 3.25V18.25C0.730469 18.9531 0.964844 19.5586 1.43359 20.0664C1.94141 20.5352 2.54688 20.7695 3.25 20.7695H15.7305V18.25ZM23.2305 3.25L13.2695 9.51953L3.25 3.25H23.2305Z" fill="white"/>
                                        </svg>
                                        <span class="white--text text-capitalize subtitle-1 ml-2">Open Email Client</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="">
                                <v-col cols="12" sm="6" md="6" class="mt-10 form_main">
                                    <v-form ref="form" v-model="valid" lazy-validation class="login_input_form">
                                        <v-col md="12" id="choose_mail1">
                                            <!-- <p class="grey--text title reset_first_title_comment" align="left">Step 1: We will send you a PIN:</p> -->
                                            <v-select
                                            :items="chat_items"
                                            label="Topics"
                                            ></v-select>
                                            <v-text-field 
                                            v-model="email"
                                            :rules="emailRules" 
                                            label="E-mail address"
                                            background-color="white"
                                            height="50px"
                                            required
                                            ></v-text-field>
                                            <v-textarea
                                            clearable
                                            clear-icon="cancel"
                                            label="Your message"
                                            value=""
                                            ></v-textarea>
                                        </v-col>
                                    </v-form>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" sm="6" md="6">
                                    <v-btn class="mt-7  regist_btn_style" color="#0099ff" block height="40px" @click="$router.push('/chat')">
                                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.5195V13.9805H9.98047L14.375 18.375L12.6172 20.1328L5.17578 12.75L12.6172 5.36719L14.375 7.125L9.98047 11.5195H20ZM0.0195312 12.75C0.0195312 11.1094 0.332031 9.52734 0.957031 8.00391C1.58203 6.44141 2.48047 5.07422 3.65234 3.90234C4.82422 2.73047 6.17188 1.83203 7.69531 1.20703C9.25781 0.582031 10.8594 0.269531 12.5 0.269531C14.1406 0.269531 15.7227 0.582031 17.2461 1.20703C18.8086 1.83203 20.1758 2.73047 21.3477 3.90234C22.5195 5.07422 23.418 6.44141 24.043 8.00391C24.668 9.52734 24.9805 11.1094 24.9805 12.75C24.9805 14.3906 24.668 15.9922 24.043 17.5547C23.418 19.0781 22.5195 20.4258 21.3477 21.5977C20.1758 22.7695 18.8086 23.668 17.2461 24.293C15.7227 24.918 14.1406 25.2305 12.5 25.2305C10.8594 25.2305 9.25781 24.918 7.69531 24.293C6.17188 23.668 4.82422 22.7695 3.65234 21.5977C2.48047 20.4258 1.58203 19.0781 0.957031 17.5547C0.332031 15.9922 0.0195312 14.3906 0.0195312 12.75ZM2.48047 12.75C2.48047 14.5469 2.92969 16.2266 3.82812 17.7891C4.72656 19.3125 5.9375 20.5234 7.46094 21.4219C9.02344 22.3203 10.7031 22.7695 12.5 22.7695C14.2969 22.7695 15.957 22.3203 17.4805 21.4219C19.043 20.5234 20.2734 19.3125 21.1719 17.7891C22.0703 16.2266 22.5195 14.5469 22.5195 12.75C22.5195 11.4219 22.2656 10.1523 21.7578 8.94141C21.25 7.69141 20.5273 6.59766 19.5898 5.66016C18.6523 4.72266 17.5586 4 16.3086 3.49219C15.0977 2.98437 13.8281 2.73047 12.5 2.73047C11.1719 2.73047 9.88281 2.98437 8.63281 3.49219C7.42188 4 6.34766 4.72266 5.41016 5.66016C4.47266 6.59766 3.75 7.69141 3.24219 8.94141C2.73438 10.1523 2.48047 11.4219 2.48047 12.75Z" fill="white"/>
                                        </svg>
                                        <span class="white--text text-capitalize subtitle-1 ml-5">Reset</span>
                                    </v-btn>
                                </v-col>
                                <v-col cols="6" sm="6" md="6">
                                    <v-btn class="mt-7 regist_btn_style_right" color="#0099ff" block height="40px" @click="$router.push('/chatfinal')">
                                    <span class="white--text text-capitalize subtitle-1 mr-1">Send email</span>
                                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9805 12.75C24.9805 14.3906 24.668 15.9922 24.043 17.5547C23.418 19.0781 22.5195 20.4258 21.3477 21.5977C20.1758 22.7695 18.8086 23.668 17.2461 24.293C15.7227 24.918 14.1406 25.2305 12.5 25.2305C10.8594 25.2305 9.25781 24.918 7.69531 24.293C6.17188 23.668 4.82422 22.7695 3.65234 21.5977C2.48047 20.4258 1.58203 19.0781 0.957031 17.5547C0.332031 15.9922 0.0195312 14.3906 0.0195312 12.75C0.0195312 11.1094 0.332031 9.52734 0.957031 8.00391C1.58203 6.44141 2.48047 5.07422 3.65234 3.90234C4.82422 2.73047 6.17188 1.83203 7.69531 1.20703C9.25781 0.582031 10.8594 0.269531 12.5 0.269531C14.1406 0.269531 15.7227 0.582031 17.2461 1.20703C18.8086 1.83203 20.1758 2.73047 21.3477 3.90234C22.5195 5.07422 23.418 6.44141 24.043 8.00391C24.668 9.52734 24.9805 11.1094 24.9805 12.75ZM5 13.9805H15.0195L10.625 18.375L12.3828 20.1328L19.8242 12.75L12.3828 5.36719L10.625 7.125L15.0195 11.5195H5V13.9805Z" fill="white"/>
                                    </svg>
                                </v-btn>
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
            chat_items: ['First Contact', 'Help & Feedback', 'Billing', 'Data-Protection'],
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
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
#emailchat {
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 85vh;
    position: relative;
}
#emailside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    /* width: 100%;
    height: 100%; */
}
.emailchat_main {
    padding-right: 0px;
}
.side_title {
    display: none;
}
.reset_first_title {
    margin-top: 50px !important;
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
#emailchatbtn {
    font-size: 60px;
}
#vertical_divider{
    font-weight: bold;
    color: black;
}
.side_title_phone {
    display: none;
}
.reset_first_next_btn_phone {
    display: none;
}
.reset_first_description {
    display: none;
}
#closebtn {
    position: absolute;
    top: 0px;
    right: 0px;
}
#closebtn_phone {
    display: none;
}
@media only screen and (min-width: 1367px) {
    
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
    #emailchat {
        border: none;
        margin-top: 0%;
    }
    #emailside {
        border-radius: 0%;
        height: 60px;
    }
    .emailchat_main {
        padding: 0px;
    }
    #closebtn {
        display: none;
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
    .side_title_phone {
        display: flex;
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
    #emailchat {
        border: none;
        margin-top: 0%;
    }
    #emailside {
        border-radius: 0%;
        height: 60px;
    }
    .emailchat_main {
        padding: 0px;
    }
    #closebtn {
        display: none;
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
    .side_title_phone {
        display: flex;
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
    #emailchat {
        border: none !important;
        margin-top: 0% !important;
    }
    #emailside {
        border-radius: 0% !important;
        height: 60px !important;
    }
    .emailchat_main {
        padding: 0% !important;
    }
    #closebtn {
        display: none !important;
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
    .side_title_phone {
        display: flex;
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