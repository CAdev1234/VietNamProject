<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="12" lg="8" id="registsecond" class="d-flex" style="margin-top:100px">
                    <v-row>
                        <v-col cols="12" sm="2" md="2" id="registsecondside">
                            <v-avatar class="mt-10 mb-5 pa-3 profile_image" color="white" size="60">
                            <svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.4688 27.0312L35.5312 36.9688L28.5 30.0312L31.5 27.0312L35.5312 30.9688L42.4688 24.0312L45.4688 27.0312ZM24.4688 29H4.5V9.03125L20.5312 18.9688L36.4688 9.03125V18.9688H40.5V5C40.5 3.875 40.0938 2.9375 39.2812 2.1875C38.5312 1.375 37.5938 0.96875 36.4688 0.96875H4.5C3.375 0.96875 2.40625 1.375 1.59375 2.1875C0.84375 2.9375 0.46875 3.875 0.46875 5V29C0.46875 30.125 0.84375 31.0938 1.59375 31.9062C2.40625 32.6562 3.375 33.0312 4.5 33.0312H24.4688V29ZM36.4688 5L20.5312 15.0312L4.5 5H36.4688Z" fill="#828282"/>
                            </svg>
                            </v-avatar>
                            <div class="white--text side_title" align="center">Register with Email</div>
                            <div class="white--text title side_title_phone" align="left">Register with Email</div>
                            <v-btn class="mx-2" icon id="closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10" class="registsecond_main">
                            <v-row class="mt-8 first_progress">
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="grey" size="30">
                                        <span class="white--text">1</span>
                                    </v-avatar>
                                </v-col>
                                <v-divider class="mt-7"></v-divider>
                                <v-col md="1" class="textcenter">
                                    <v-avatar color="primary" size="30">
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
                            <v-row class="mt-2 title_second">
                                <span class="grey--text ml-10">Please provide your personal details:</span>
                            </v-row>
                            <v-row class="user_info_form">
                                <v-col cols="12" sm="6" md="6">
                                    <v-row>
                                        <v-col sm="6" md="6">
                                            <v-select
                                            :items="gender"
                                            label="Your Gender"
                                            hint="Your Gender"
                                            ></v-select>
                                        </v-col>
                                        <v-col sm="6" md="6">
                                            <v-select
                                            :items="grade"
                                            label="Your academic grade"
                                            hint="Your academic grade"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col md="12">
                                            <v-text-field 
                                            v-model="first_name"
                                            :rules="nameRules" 
                                            label="Firstname"
                                            hint="Your First Name"
                                            required
                                            ></v-text-field>
                                            <v-text-field 
                                            v-model="last_name"
                                            :rules="nameRules" 
                                            label="Lastname"
                                            hint="Your Last Name"
                                            required
                                            ></v-text-field>
                                            <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                :return-value.sync="date"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                            >
                                                <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="date"
                                                    label="Date of birth"
                                                    hint="Your date of birth"
                                                    readonly
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker v-model="date" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-row class="imageupload">
                                        <v-col sm="6" md="6">
                                            <h3 style="color:#0099ff; margin-left:20px">Picture</h3>
                                            <div class="mb-5" v-if="uploaded">
                                                <img :src="imgDataUrl" width="150px" :alt="Avatar" style="border-radius: 50%">
                                            </div>
                                            <div v-if="!uploaded">
                                                <img src="../../assets/img/producer1.png" width="150px" height="150px">
                                            </div>
                                        </v-col>
                                        <v-col sm="6" md="6" class="img_upload">
                                            <p class="grey--text mt-5">If you have a picture of you, please upload the image in the following format:gif, png.</p>
                                            <v-btn class="mt-3" color="#0099ff" block @click="toggleShow"><span class="white--text text-capitalize subtitle-1">Upload Picture</span></v-btn>
                                            <my-upload field="img"
                                            @crop-success='cropSuccess'
                                            @crop-upload-success='cropUploadSuccess'
                                            @crop-upload-fail='cropUploadFail'
                                            v-model="uploadshow"
                                            :width="150"
                                            :height="150"
                                            url=""
                                            lang-type="en"
                                            :value.sync="uploadshow"
                                            img-format="png">
                                            </my-upload>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col md="11" class="phone_input">
                                            <v-text-field 
                                            v-model="office_phone_number" 
                                            type="number" 
                                            :rules="phoneRules" 
                                            label="Office Phone number" 
                                            hint="Your own office direct line or phone number of your assistant"
                                            min="0" 
                                            required
                                            ></v-text-field>
                                            <div class="phoneNumberAssistant">
                                                <v-text-field 
                                                v-model="phone_number_assistant" 
                                                type="number" 
                                                :rules="phoneRules" 
                                                label="Phone number assistant" 
                                                hint="The phone number of your personal assistant"
                                                min="0" 
                                                required
                                                ></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-row class="imageupload_phone">
                                        <v-col sm="6" md="6">
                                            <h3 style="color:#0099ff; margin-left:20px">Picture</h3>
                                            <div class="mb-5" v-if="uploaded">
                                                <img :src="imgDataUrl" width="150px" :alt="Avatar" style="border-radius: 50%">
                                            </div>
                                            <div v-if="!uploaded">
                                                <img src="../../assets/img/producer1.png" width="150px" height="150px">
                                            </div>
                                        </v-col>
                                        <v-col sm="6" md="6" class="img_upload">
                                            <p class="grey--text mt-5">If you have a picture of you, please upload the image in the following format:gif, png.</p>
                                            <v-btn class="mt-3" color="#0099ff" block @click="toggleShow"><span class="white--text text-capitalize subtitle-1">Upload Picture</span></v-btn>
                                            <my-upload field="img"
                                            @crop-success='cropSuccess'
                                            @crop-upload-success='cropUploadSuccess'
                                            @crop-upload-fail='cropUploadFail'
                                            v-model="uploadshow"
                                            :width="150"
                                            :height="150"
                                            url=""
                                            lang-type="en"
                                            :value.sync="uploadshow"
                                            img-format="png">
                                            </my-upload>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="bottom_btn">
                                <v-col sm="3" md="3">
                                    <v-btn class="mt-1 regist_btn_style" color="#0099ff" block @click="$router.push('/first')">
                                        <svg width="25" height="20" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.5195V13.9805H9.98047L14.375 18.375L12.6172 20.1328L5.17578 12.75L12.6172 5.36719L14.375 7.125L9.98047 11.5195H20ZM0.0195312 12.75C0.0195312 11.1094 0.332031 9.52734 0.957031 8.00391C1.58203 6.44141 2.48047 5.07422 3.65234 3.90234C4.82422 2.73047 6.17188 1.83203 7.69531 1.20703C9.25781 0.582031 10.8594 0.269531 12.5 0.269531C14.1406 0.269531 15.7227 0.582031 17.2461 1.20703C18.8086 1.83203 20.1758 2.73047 21.3477 3.90234C22.5195 5.07422 23.418 6.44141 24.043 8.00391C24.668 9.52734 24.9805 11.1094 24.9805 12.75C24.9805 14.3906 24.668 15.9922 24.043 17.5547C23.418 19.0781 22.5195 20.4258 21.3477 21.5977C20.1758 22.7695 18.8086 23.668 17.2461 24.293C15.7227 24.918 14.1406 25.2305 12.5 25.2305C10.8594 25.2305 9.25781 24.918 7.69531 24.293C6.17188 23.668 4.82422 22.7695 3.65234 21.5977C2.48047 20.4258 1.58203 19.0781 0.957031 17.5547C0.332031 15.9922 0.0195312 14.3906 0.0195312 12.75ZM2.48047 12.75C2.48047 14.5469 2.92969 16.2266 3.82812 17.7891C4.72656 19.3125 5.9375 20.5234 7.46094 21.4219C9.02344 22.3203 10.7031 22.7695 12.5 22.7695C14.2969 22.7695 15.957 22.3203 17.4805 21.4219C19.043 20.5234 20.2734 19.3125 21.1719 17.7891C22.0703 16.2266 22.5195 14.5469 22.5195 12.75C22.5195 11.4219 22.2656 10.1523 21.7578 8.94141C21.25 7.69141 20.5273 6.59766 19.5898 5.66016C18.6523 4.72266 17.5586 4 16.3086 3.49219C15.0977 2.98437 13.8281 2.73047 12.5 2.73047C11.1719 2.73047 9.88281 2.98437 8.63281 3.49219C7.42188 4 6.34766 4.72266 5.41016 5.66016C4.47266 6.59766 3.75 7.69141 3.24219 8.94141C2.73438 10.1523 2.48047 11.4219 2.48047 12.75Z" fill="white"/>
                                        </svg>
                                        <span class="white--text text-capitalize subtitle-1">Back</span>
                                    </v-btn>                                           
                                </v-col>
                                <v-col sm="9" md="9" class="nextbtn">
                                    <v-btn class="mt-1" color="#0099ff" block @click="$router.push('/third')">
                                        <span class="white--text subtitle-1 text-capitalize">Go to next step</span>
                                        <svg width="25" height="20" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
import myUpload from 'vue-image-crop-upload'
export default {
    data() {
        return {
            gender: ['Mr', 'Mrs'],
            grade: ['PhD', 'PhD', 'PhD'],
            first_name: '',
            last_name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            date: null,
            menu: false,
            uploaded: false,
            uploadshow: false,
            office_phone_number: '',
            phone_number_assistant: '',
            phoneRules: [
                v => !!v || "Required"
            ],
        }
    },
    components: {
        'my-upload': myUpload
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
        save (date) {
            this.$refs.menu.save(date)
        },
        toggleShow() {
                    this.uploadshow = !this.uploadshow;
            },
        cropSuccess(imgDataUrl, field){
                console.log('-------- crop success --------');
                this.imgDataUrl = imgDataUrl;
                this.uploaded = !(this.uploaded);
        },
        cropUploadSuccess(jsonData, field){
                console.log('-------- upload success --------');
                console.log(jsonData);
                console.log('field: ' + field);
        },
        cropUploadFail(status, field){
                console.log('-------- upload fail --------');
                console.log(status);
                console.log('field: ' + field);
        },
    },

}
</script>
<style lang="scss" scope>
#registsecond {
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 85vh;
    position: relative;
}
#registsecondside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}
.imageupload_phone {
    display: none;
}
.textcenter {
    text-align: center;
}
.title_second {
    margin-top: 3% !important;
}
.user_info_form {
    margin-left: 10px;
}
.bottom_btn {
    margin-top:5%;
}
#closebtn {
    position: absolute;
    top: 0px;
    right: 0px;
}
#closebtn_phone {
    display: none;
}
.side_title_phone {
    display: none;
}
// @media only screen and (min-width:960px) and (max-width: 1639px) {
//     .imageupload{
//         p {font-size: 10px;}
//         button {width: 132px;height: 25px !important;}
//         span {font-size: 13px !important;}
//     }
// }
// @media only screen and (min-width:460px) and (max-width: 787px) {
//     .bottom_btn {
//         margin-top:20% !important;
//     }
//     .imageupload{
//         p {font-size: 10px;}
//         button {width: 132px;height: 25px !important;}
//         span {font-size: 13px !important;}
//     }
//     .phone_input {
//         padding-top: 0px;
//     }
//     span { font-size: 15px;}
//     .imageupload div {
//         margin: 0% 0% 0% 0%;
//     }
//     .title_second {
//         margin-top: 10% !important;
//     }
    
// }

@media only screen and (min-width: 1025px) and (max-width: 1366px) {
    .imageupload_phone {
        display: none !important;
    }
}
//iPad Pro
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
    .imageupload_phone {
        display: none !important;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
    .imageupload_phone {
        display: none !important;
    }
}
// iPad 
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: landscape) {
    .imageupload_phone {
        display: none !important;
    }
}
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: portrait) {
  .imageupload_phone {
        display: none !important;
    }
}
// iPhone Plus
@media only screen and (min-width: 376px) and (max-width: 414px){
    .mycontainer {
        padding:0% !important;
    }
    .profile_image {
        display: none;
    }
    #registsecond {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0% !important;
        border: none;
    }
    #registsecondside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0% !important;
    }
    .registsecond_main {
        padding: 0px !important;
    }
    .first_progress {
        margin-left: 0px !important;
    }
    .user_info_form {
        margin-left: 0px !important;
        div {
            padding-top: 1px !important;
            padding-bottom: 1px !important;
        }
    }
    .imageupload {
        display: none !important;
    }
    .imageupload_phone {
        display: flex !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_phone {
        display: block;
        position: absolute;
        top: 15px;
        right: 10px;
    }
    .vue-image-crop-upload {
        // width: 50px;
        // height: 50px;
        .vicp-wrap {
            width:375px !important;
            height: 600px !important;
            z-index: 100;
        }
    }
    .bottom_btn {
        margin-left: 0px !important;
    }
    .phoneNumberAssistant {
        display: none !important;
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
        padding:0% !important;
    }
    .profile_image {
        display: none;
    }
    #registsecond {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0% !important;
        border: none;
    }
    #registsecondside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0% !important;
    }
    .registsecond_main {
        padding: 0px !important;
    }
    .first_progress {
        margin-left: 0px !important;
    }
    .user_info_form {
        margin-left: 0px !important;
        div {
            padding-top: 1px !important;
            padding-bottom: 1px !important;
        }
    }
    .imageupload {
        display: none !important;
    }
    .imageupload_phone {
        display: flex !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_phone {
        display: block;
        position: absolute;
        top: 15px;
        right: 10px;
    }
    .vue-image-crop-upload {
        // width: 50px;
        // height: 50px;
        .vicp-wrap {
            width:375px !important;
            height: 600px !important;
            z-index: 100;
        }
    }
    .bottom_btn {
        margin-left: 0px !important;
    }
    .phoneNumberAssistant {
        display: none !important;
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
        padding:0% !important;
    }
    .profile_image {
        display: none;
    }
    #registsecond {
        margin-top: 0px !important;
        border-radius: 0% 0% 0% 0% !important;
        border: none;
    }
    #registsecondside {
        height: 60px !important;
        margin-top:0% !important;
        border-radius: 0% 0% 0% 0% !important;
    }
    .registsecond_main {
        padding: 0px !important;
    }
    .first_progress {
        margin-left: 0px !important;
    }
    .user_info_form {
        margin-left: 0px !important;
        div {
            padding-top: 1px !important;
            padding-bottom: 1px !important;
        }
    }
    .imageupload {
        display: none !important;
    }
    .imageupload_phone {
        display: flex !important;
    }
    #closebtn {
        display: none !important;
    }
    #closebtn_phone {
        display: block;
        position: absolute;
        top: 15px;
        right: 10px;
    }
    .vue-image-crop-upload {
        // width: 50px;
        // height: 50px;
        .vicp-wrap {
            width:375px !important;
            height: 600px !important;
            z-index: 100;
        }
    }
    .bottom_btn {
        margin-left: 0px !important;
    }
    .phoneNumberAssistant {
        display: none !important;
    }
    .side_title {
        display: none !important;
    }
    .side_title_phone {
        display: block !important;
    }
}
</style>