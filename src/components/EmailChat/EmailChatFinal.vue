<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="8" id="emailfinal" class="d-flex" style="margin-top:100px">
                    <v-row>
                        <v-col cols="12" sm="2" md="2" id="emailfinalside">
                            <v-avatar class="mt-10 mb-5 pa-3 profile_image" color="white" size="60">
                            <svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.4688 27.0312L35.5312 36.9688L28.5 30.0312L31.5 27.0312L35.5312 30.9688L42.4688 24.0312L45.4688 27.0312ZM24.4688 29H4.5V9.03125L20.5312 18.9688L36.4688 9.03125V18.9688H40.5V5C40.5 3.875 40.0938 2.9375 39.2812 2.1875C38.5312 1.375 37.5938 0.96875 36.4688 0.96875H4.5C3.375 0.96875 2.40625 1.375 1.59375 2.1875C0.84375 2.9375 0.46875 3.875 0.46875 5V29C0.46875 30.125 0.84375 31.0938 1.59375 31.9062C2.40625 32.6562 3.375 33.0312 4.5 33.0312H24.4688V29ZM36.4688 5L20.5312 15.0312L4.5 5H36.4688Z" fill="#828282"/>
                            </svg>
                            </v-avatar>
                            <p class="white--text title side_title">Email</p>
                            <p class="white--text title side_title_phone" align="left">Email</p>
                            <v-btn class="mx-2" icon id="closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10" class="textcenter">
                            <v-row justify="center">
                                <v-col cols="12" sm="8" md="8" class="mt-5">
                                    <p class="grey--text mb-10 headline" align="left">Congratulation!</p>
                                    <p class="grey--text mt-10 subtitle-1" align="left">Thanks for contacting us.</p>
                                    <p class="grey--text subtitle-1" align="left">Your message with the topic</p>
                                    <p class="grey--text subtitle-1" align="center">"Help & Feedback"</p>
                                    <p class="grey--text subtitle-1" align="left">was successfully sent!</p>
                                    <p class="grey--text subtitle-1" align="left">We will answer you using email address:</p>
                                    <p class="grey--text subtitle-1" align="center">"bussiness@email.com"</p>                          
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="8" sm="8" md="8" class="mt-10 loading_icon">
                                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                    <span class="sr-only">Loading...</span>
                                    <div class="grey--text subtitle-1 mt-5">after 5 seconds</div>
                                    <div class="grey--text subtitle-1">screen goes away</div>
                                    <div class="grey--text subtitle-1">(therefore click on timer)</div>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col md="8" class="mt-5">
                                    <v-btn class="bottom_final_btn" block color="#0099ff" height="40px">
                                        <span class="white--text text-capitalize title">Close this window</span>
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
import myUpload from 'vue-image-crop-upload'
export default {
    data() {
        return {
            company_name: '',
            department: '',
            location: '',
            company_street: '',
            company_street_number: '',
            postal_code: '',
            city: '',
            province: '',
            country: '',

            nameRules: [
                v => !!v || 'Required',
                // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
        }
    },
    

}
</script>
<style lang="scss" scoped>
#emailfinal {
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 75vh;
    position: relative;
}
#emailfinalside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}
.side_title_phone {
    display: none;
}
.first_progress {
    display: none;
}

#closebtn {
    position: absolute;
    top: 5px;
    right: 5px;
}
#closebtn_phone {
    display: none;
}
.loading_icon {
    text-align: center;
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
        padding-top: 0px !important;
        padding: 0% !important;
    }
    #emailfinal {
        margin-top: 0px !important;
        border: none;
        
    }
    #emailfinalside {
        height: 60px !important;
        border-radius: 0px;
        
    }
    .side_title {
        display: none;
    }
    .side_title_phone {
        display: block;
    }
    .first_progress {
        display: flex;
    }
    .profile_image {
        display: none;
    }
    #closebtn {
        display: none;
    } 
    #closebtn_phone {
        display: flex !important;
        position: absolute !important;
        top: 10px !important;
        right: 5px !important;

    }
    .loading_icon {
        text-align: center;
        div {
            font-size: 15px !important;
        }
    }
    .bottom_final_btn {
        display: none;
    }
  
}
// iPhone X
@media only screen and (min-width: 321px) and (max-width: 375px) {
    .mycontainer {
        padding-top: 0px !important;
        padding: 0% !important;
    }
    #emailfinal {
        margin-top: 0px !important;
        border: none;
        div {
            font-size: 25px;
            text-align: center;
        }
    }
    #emailfinalside {
        height: 60px !important;
        border-radius: 0px;
    }
    .side_title {
        display: none;
    }
    .side_title_phone {
        display: block;
    }
    .first_progress {
        display: flex;
    }
    .profile_image {
        display: none;
    }
    #closebtn {
        display: none;
    } 
    #closebtn_phone {
        display: flex !important;
        position: absolute !important;
        top: 10px !important;
        right: 5px !important;

    }
    .loading_icon {
        text-align: center;
        div {
            font-size: 15px !important;
        }
    }
    .bottom_final_btn {
        display: none;
    }
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding-top: 0px !important;
        padding: 0% !important;
    }
    #emailfinal {
        margin-top: 0px !important;
        border: none;
        div {
            font-size: 25px;
            text-align: center;
        }
    }
    #emailfinalside {
        height: 60px !important;
        border-radius: 0px;
    }
    .side_title {
        display: none;
    }
    .side_title_phone {
        display: block;
    }
    .first_progress {
        display: flex;
    }
    .profile_image {
        display: none;
    }
    #closebtn {
        display: none;
    } 
    #closebtn_phone {
        display: flex !important;
        position: absolute !important;
        top: 10px !important;
        right: 5px !important;

    }
    .loading_icon {
        text-align: center;
        div {
            font-size: 15px !important;
        }
    }
    .bottom_final_btn {
        display: none;
    }
}
</style>