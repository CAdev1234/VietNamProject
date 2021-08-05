<template>
    <v-content>
        <v-container class="mycontainer" fluid>
            <v-row justify="center">
                <v-col md="12" lg="8" id="inforequest" class="d-flex">
                    <v-row>
                        <v-col cols="12" sm="2" md="2" id="inforequestside">
                            <v-avatar class="mt-10 mb-5 pa-3 profile_image" color="white" size="60">
                            <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4688 14H32.9062L24.1875 0.875C23.75 0.3125 23.1875 0.03125 22.5 0.03125C21.8125 0.03125 21.25 0.3125 20.8125 0.875L12.0938 14H2.53125C1.96875 14 1.46875 14.2188 1.03125 14.6562C0.65625 15.0312 0.46875 15.4688 0.46875 15.9688C0.46875 16.2188 0.5 16.4062 0.5625 16.5312L5.625 35.0938C5.875 35.9062 6.34375 36.5938 7.03125 37.1562C7.78125 37.7188 8.59375 38 9.46875 38H35.5312C36.4062 38 37.1875 37.7188 37.875 37.1562C38.625 36.5938 39.125 35.9062 39.375 35.0938L44.4375 16.5312L44.5312 15.9688C44.5312 15.4688 44.3125 15.0312 43.875 14.6562C43.5 14.2188 43.0312 14 42.4688 14ZM22.5 5.5625L28.125 14H16.875L22.5 5.5625ZM35.5312 33.9688H9.46875L5.15625 18.0312H39.9375L35.5312 33.9688ZM22.5 21.9688C21.375 21.9688 20.4062 22.375 19.5938 23.1875C18.8438 23.9375 18.4688 24.875 18.4688 26C18.4688 27.125 18.8438 28.0938 19.5938 28.9062C20.4062 29.6562 21.375 30.0312 22.5 30.0312C23.625 30.0312 24.5625 29.6562 25.3125 28.9062C26.125 28.0938 26.5312 27.125 26.5312 26C26.5312 24.875 26.125 23.9375 25.3125 23.1875C24.5625 22.375 23.625 21.9688 22.5 21.9688Z" fill="#343A40"/>
                            </svg>
                            </v-avatar>
                            <div class="title_pad_pc" style="color: white">Info Request</div>
                            <span class="white--text title title_phone">Info Request</span>
                            <v-btn class="mt-1" icon id="closebtn_phone" @click="$router.push('/')">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.032 22.7729C11.2351 22.7729 9.55542 22.3237 7.99292 21.4252C6.46948 20.5268 5.25854 19.3159 4.36011 17.7924C3.46167 16.2299 3.01245 14.5502 3.01245 12.7534C3.01245 10.9565 3.46167 9.29633 4.36011 7.77289C5.25854 6.21039 6.46948 4.97992 7.99292 4.08148C9.55542 3.18304 11.2351 2.73383 13.032 2.73383C14.8289 2.73383 16.489 3.18304 18.0125 4.08148C19.575 4.97992 20.8054 6.21039 21.7039 7.77289C22.6023 9.29633 23.0515 10.9565 23.0515 12.7534C23.0515 14.5502 22.6023 16.2299 21.7039 17.7924C20.8054 19.3159 19.575 20.5268 18.0125 21.4252C16.489 22.3237 14.8289 22.7729 13.032 22.7729ZM13.032 0.272888C10.7664 0.272888 8.67651 0.839294 6.76245 1.97211C4.84839 3.06586 3.32495 4.56976 2.19214 6.48383C1.09839 8.39789 0.551514 10.4877 0.551514 12.7534C0.551514 15.019 1.09839 17.1088 2.19214 19.0229C3.32495 20.937 4.84839 22.4604 6.76245 23.5932C8.67651 24.687 10.7664 25.2338 13.032 25.2338C15.2976 25.2338 17.3875 24.687 19.3015 23.5932C21.2156 22.4604 22.7195 20.937 23.8132 19.0229C24.946 17.1088 25.5125 15.019 25.5125 12.7534C25.5125 10.4877 24.946 8.39789 23.8132 6.48383C22.7195 4.56976 21.2156 3.06586 19.3015 1.97211C17.3875 0.839294 15.2976 0.272888 13.032 0.272888ZM16.2546 7.77289L13.032 10.9955L9.80933 7.77289L8.05151 9.5307L11.2742 12.7534L8.05151 15.976L9.80933 17.7338L13.032 14.5112L16.2546 17.7338L18.0125 15.976L14.7898 12.7534L18.0125 9.5307L16.2546 7.77289Z" fill="white"/>
                                </svg>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="10" md="10">
                            <v-row justify="center" class="mt-10">
                                <h2 class="inforeques_title" style="color: #999999">I would like to get more information</h2>
                                <v-avatar class="pa-3 profile_image2" color="white" size="60">
                                <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4688 14H32.9062L24.1875 0.875C23.75 0.3125 23.1875 0.03125 22.5 0.03125C21.8125 0.03125 21.25 0.3125 20.8125 0.875L12.0938 14H2.53125C1.96875 14 1.46875 14.2188 1.03125 14.6562C0.65625 15.0312 0.46875 15.4688 0.46875 15.9688C0.46875 16.2188 0.5 16.4062 0.5625 16.5312L5.625 35.0938C5.875 35.9062 6.34375 36.5938 7.03125 37.1562C7.78125 37.7188 8.59375 38 9.46875 38H35.5312C36.4062 38 37.1875 37.7188 37.875 37.1562C38.625 36.5938 39.125 35.9062 39.375 35.0938L44.4375 16.5312L44.5312 15.9688C44.5312 15.4688 44.3125 15.0312 43.875 14.6562C43.5 14.2188 43.0312 14 42.4688 14ZM22.5 5.5625L28.125 14H16.875L22.5 5.5625ZM35.5312 33.9688H9.46875L5.15625 18.0312H39.9375L35.5312 33.9688ZM22.5 21.9688C21.375 21.9688 20.4062 22.375 19.5938 23.1875C18.8438 23.9375 18.4688 24.875 18.4688 26C18.4688 27.125 18.8438 28.0938 19.5938 28.9062C20.4062 29.6562 21.375 30.0312 22.5 30.0312C23.625 30.0312 24.5625 29.6562 25.3125 28.9062C26.125 28.0938 26.5312 27.125 26.5312 26C26.5312 24.875 26.125 23.9375 25.3125 23.1875C24.5625 22.375 23.625 21.9688 22.5 21.9688Z" fill="#343A40"/>
                                </svg>
                                </v-avatar>
                                <h3 class="inforequest_title_phone">Info Basket - Select topics</h3>
                            </v-row>
                            <v-row class="mt-10">
                                <v-col cols="12" sm="6" md="5">
                                    <v-row>
                                        <v-divider class="mt-4"></v-divider>
                                        <v-col cols="9" md="9" id="choose_mail1">
                                            <span class="grey--text subtitle-1">Please select 3<font style="color: red"> main</font> topics</span>
                                        </v-col>
                                        <v-divider class="mt-4"></v-divider>
                                    </v-row>
                                    <div class="rounded-checkbox">
                                        <label>
                                            <input type="checkbox" class="option-input checkbox" checked />
                                            <span class="grey--text">How to calculate your project.</span>
                                        </label>
                                    </div>
                                    <div class="rounded-checkbox">
                                        <label>
                                            <input type="checkbox" class="option-input checkbox" />
                                            <span class="grey--text">Why is important to change the style of working.</span>
                                        </label>
                                    </div>
                                    <div class="rounded-checkbox">
                                        <label>
                                            <input type="checkbox" class="option-input checkbox" />
                                            <span class="grey--text">The agile approach.</span>
                                        </label>
                                    </div>
                                    <div class="rounded-checkbox">
                                        <label>
                                            <input type="checkbox" class="option-input checkbox" />
                                            <span class="grey--text">5D Assessment</span>
                                        </label>
                                    </div>
                                    <div class="rounded-checkbox">
                                        <label>
                                            <input type="checkbox" class="option-input checkbox" />
                                            <span class="grey--text">Success story: BMW</span>
                                        </label>
                                    </div>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="12" sm="6" md="5">
                                    <v-row>
                                        <v-divider class="mt-4"></v-divider>
                                        <v-col cols="9" md="9" id="choose_mail2">
                                            <span class="grey--text subtitle-1">Additional information</span>
                                        </v-col>
                                        <v-divider class="mt-4"></v-divider>
                                    </v-row>
                                    <v-row>
                                        <div class="rounded-checkbox">
                                            <label>
                                                <input type="checkbox" class="option-input checkbox" checked />
                                                <span class="grey--text">Project information</span>
                                            </label>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <div style="text-align:center">
                                            <button class="mt-4">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 10.9844V9.01562H12.0156L8.5 5.5L9.90625 4.09375L15.8594 10L9.90625 15.9062L8.5 14.5L12.0156 10.9844H4ZM19.9844 10C19.9844 11.3125 19.7344 12.5938 19.2344 13.8438C18.7344 15.0625 18.0156 16.1406 17.0781 17.0781C16.1406 18.0156 15.0469 18.7344 13.7969 19.2344C12.5781 19.7344 11.3125 19.9844 10 19.9844C8.6875 19.9844 7.40625 19.7344 6.15625 19.2344C4.9375 18.7344 3.85938 18.0156 2.92188 17.0781C1.98438 16.1406 1.26562 15.0625 0.765625 13.8438C0.265625 12.5938 0.015625 11.3125 0.015625 10C0.015625 8.6875 0.265625 7.42188 0.765625 6.20312C1.26562 4.95312 1.98438 3.85938 2.92188 2.92188C3.85938 1.98438 4.9375 1.26562 6.15625 0.765625C7.40625 0.265625 8.6875 0.015625 10 0.015625C11.3125 0.015625 12.5781 0.265625 13.7969 0.765625C15.0469 1.26562 16.1406 1.98438 17.0781 2.92188C18.0156 3.85938 18.7344 4.95312 19.2344 6.20312C19.7344 7.42188 19.9844 8.6875 19.9844 10ZM18.0156 10C18.0156 8.9375 17.8125 7.92188 17.4062 6.95312C17 5.95312 16.4219 5.07812 15.6719 4.32812C14.9219 3.57812 14.0469 3 13.0469 2.59375C12.0781 2.1875 11.0625 1.98438 10 1.98438C8.9375 1.98438 7.90625 2.1875 6.90625 2.59375C5.9375 3 5.07812 3.57812 4.32812 4.32812C3.57812 5.07812 3 5.95312 2.59375 6.95312C2.1875 7.92188 1.98438 8.9375 1.98438 10C1.98438 11.4375 2.34375 12.7812 3.0625 14.0312C3.78125 15.25 4.75 16.2188 5.96875 16.9375C7.21875 17.6562 8.5625 18.0156 10 18.0156C11.4375 18.0156 12.7656 17.6562 13.9844 16.9375C15.2344 16.2188 16.2188 15.25 16.9375 14.0312C17.6562 12.7812 18.0156 11.4375 18.0156 10Z" fill="#828282"/>
                                                </svg>
                                                <div class="grey--text caption">Details</div>
                                            </button>
                                        </div>
                                    </v-row>
                                    <v-row>
                                        <div class="rounded-checkbox">
                                            <label>
                                                <input type="checkbox" class="option-input checkbox" />
                                                <span class="grey--text">Callback initiated</span>
                                            </label>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <div style="text-align:center">
                                            <button class="mt-4">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 10.9844V9.01562H12.0156L8.5 5.5L9.90625 4.09375L15.8594 10L9.90625 15.9062L8.5 14.5L12.0156 10.9844H4ZM19.9844 10C19.9844 11.3125 19.7344 12.5938 19.2344 13.8438C18.7344 15.0625 18.0156 16.1406 17.0781 17.0781C16.1406 18.0156 15.0469 18.7344 13.7969 19.2344C12.5781 19.7344 11.3125 19.9844 10 19.9844C8.6875 19.9844 7.40625 19.7344 6.15625 19.2344C4.9375 18.7344 3.85938 18.0156 2.92188 17.0781C1.98438 16.1406 1.26562 15.0625 0.765625 13.8438C0.265625 12.5938 0.015625 11.3125 0.015625 10C0.015625 8.6875 0.265625 7.42188 0.765625 6.20312C1.26562 4.95312 1.98438 3.85938 2.92188 2.92188C3.85938 1.98438 4.9375 1.26562 6.15625 0.765625C7.40625 0.265625 8.6875 0.015625 10 0.015625C11.3125 0.015625 12.5781 0.265625 13.7969 0.765625C15.0469 1.26562 16.1406 1.98438 17.0781 2.92188C18.0156 3.85938 18.7344 4.95312 19.2344 6.20312C19.7344 7.42188 19.9844 8.6875 19.9844 10ZM18.0156 10C18.0156 8.9375 17.8125 7.92188 17.4062 6.95312C17 5.95312 16.4219 5.07812 15.6719 4.32812C14.9219 3.57812 14.0469 3 13.0469 2.59375C12.0781 2.1875 11.0625 1.98438 10 1.98438C8.9375 1.98438 7.90625 2.1875 6.90625 2.59375C5.9375 3 5.07812 3.57812 4.32812 4.32812C3.57812 5.07812 3 5.95312 2.59375 6.95312C2.1875 7.92188 1.98438 8.9375 1.98438 10C1.98438 11.4375 2.34375 12.7812 3.0625 14.0312C3.78125 15.25 4.75 16.2188 5.96875 16.9375C7.21875 17.6562 8.5625 18.0156 10 18.0156C11.4375 18.0156 12.7656 17.6562 13.9844 16.9375C15.2344 16.2188 16.2188 15.25 16.9375 14.0312C17.6562 12.7812 18.0156 11.4375 18.0156 10Z" fill="#828282"/>
                                                </svg>
                                                <div class="grey--text caption">Details</div>
                                            </button>
                                        </div>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-col cols="12" sm="5" md="5">
                                    <v-row class="mt-5">
                                        <v-divider class="mt-7"></v-divider>
                                        <v-col cols="9" sm="9" md="9" class="get_info">
                                            <p class="grey--text subtitle-1" align="center">I want to get informed by</p>
                                        </v-col>
                                        <v-divider class="mt-7"></v-divider>
                                    </v-row>
                                    <v-row justify="center">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn class="mx-2" v-on="on" fab dark color="#0099ff" width="40px" height="40px" @click="$router.push('/inforequestsecond')">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 0.65625L6.25 3H3.01562V5.01562L0.953125 6.28125C0.671875 6.46875 0.4375 6.71875 0.25 7.03125C0.09375 7.3125 0.015625 7.64062 0.015625 8.01562V18C0.015625 18.5625 0.203125 19.0469 0.578125 19.4531C0.984375 19.8281 1.45312 20.0156 1.98438 20.0156H18.0156C18.5469 20.0156 19 19.8281 19.375 19.4531C19.7812 19.0469 19.9844 18.5625 19.9844 18V8.01562C19.9844 7.64062 19.8906 7.3125 19.7031 7.03125C19.5469 6.71875 19.3281 6.46875 19.0469 6.28125L16.9844 5.01562V3H13.75L10 0.65625ZM4.98438 5.01562H15.0156V9.89062L10 12.9844L4.98438 9.89062V5.01562ZM6.01562 6V7.5H13.9844V6H6.01562ZM3.01562 7.35938V8.625L1.98438 8.01562L3.01562 7.35938ZM16.9844 7.35938L18.0156 8.01562L16.9844 8.625V7.35938ZM6.01562 8.48438V9.98438H13.9844V8.48438H6.01562Z" fill="white"/>
                                                        </svg>
                                                    </v-btn>
                                                </template>
                                                <span>Letter post</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn class="mx-2" v-on="on" fab dark color="#82c91e" width="40px" height="40px" @click="$router.push('/inforequestsecond')">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.60938 7.78125C4.32812 9.1875 5.25 10.4688 6.375 11.625C7.53125 12.75 8.8125 13.6719 10.2188 14.3906L12.4219 12.1875C12.7031 11.9062 13.0469 11.8281 13.4531 11.9531C14.5781 12.3281 15.7656 12.5156 17.0156 12.5156C17.2969 12.5156 17.5312 12.6094 17.7188 12.7969C17.9062 12.9844 18 13.2188 18 13.5V17.0156C18 17.2969 17.9062 17.5312 17.7188 17.7188C17.5312 17.9062 17.2969 18 17.0156 18C14.7656 18 12.5938 17.5781 10.5 16.7344C8.40625 15.8594 6.5625 14.625 4.96875 13.0312C3.375 11.4375 2.14062 9.59375 1.26562 7.5C0.421875 5.40625 0 3.23438 0 0.984375C0 0.703125 0.09375 0.46875 0.28125 0.28125C0.46875 0.09375 0.703125 0 0.984375 0H4.5C4.78125 0 5.01562 0.09375 5.20312 0.28125C5.39062 0.46875 5.48438 0.703125 5.48438 0.984375C5.48438 2.23438 5.67188 3.42188 6.04688 4.54688C6.17188 4.95312 6.09375 5.29688 5.8125 5.57812L3.60938 7.78125Z" fill="white"/>
                                                    </svg>
                                                    </v-btn>
                                                </template>
                                                <span>Phone call</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn class="mx-2" v-on="on" fab dark color="#FAB005" width="40px" height="40px" @click="$router.push('/inforequestsecond')">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.9844 3C19.9844 2.4375 19.7812 1.96875 19.375 1.59375C19 1.1875 18.5469 0.984375 18.0156 0.984375H1.98438C1.45312 0.984375 0.984375 1.1875 0.578125 1.59375C0.203125 1.96875 0.015625 2.4375 0.015625 3V15C0.015625 15.5625 0.203125 16.0469 0.578125 16.4531C0.984375 16.8281 1.45312 17.0156 1.98438 17.0156H18.0156C18.5469 17.0156 19 16.8281 19.375 16.4531C19.7812 16.0469 19.9844 15.5625 19.9844 15V3ZM18.0156 3L10 8.01562L1.98438 3H18.0156ZM18.0156 15H1.98438V5.01562L10 9.98438L18.0156 5.01562V15Z" fill="white"/>
                                                    </svg>
                                                    </v-btn>
                                                </template>
                                                <span>Email</span>
                                            </v-tooltip>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn class="mx-2" v-on="on" fab dark color="#84199F" width="40px" height="40px" @click="$router.push('/inforequestsecond')">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0L0.015625 9H3.01562V17.0156H16.9844V9H19.9844L10 0ZM10 5.76562C10.625 5.76562 11.1562 5.98438 11.5938 6.42188C12.0312 6.85938 12.25 7.39062 12.25 8.01562C12.25 8.64062 12.0312 9.17188 11.5938 9.60938C11.1562 10.0469 10.625 10.2656 10 10.2656C9.375 10.2656 8.84375 10.0469 8.40625 9.60938C7.96875 9.17188 7.75 8.64062 7.75 8.01562C7.75 7.39062 7.96875 6.85938 8.40625 6.42188C8.84375 5.98438 9.375 5.76562 10 5.76562ZM10 12C10.9375 12 11.875 12.1875 12.8125 12.5625C13.9375 13 14.5 13.5625 14.5 14.25V15H5.5V14.25C5.5 13.5625 6.0625 13 7.1875 12.5625C8.125 12.1875 9.0625 12 10 12Z" fill="white"/>
                                                    </svg>
                                                    </v-btn>
                                                </template>
                                                <span>Meeting</span>
                                            </v-tooltip>
                                    </v-row>
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
            main_topics_first: '',
            main_topics_second: '',
            main_topics_third: '',
            main_topics_fourth: '',
            main_topics_fifth: '',
        }
    },

}
</script>
<style scoped>
@import "../assets/css/RoundedCheckbox.css";
#inforequest {
    margin-top: 5%;
    padding: 0px;
    border: grey solid 1px;
    border-radius: 10px 10px 10px 10px;
    height: 85vh;
}
#inforequestside {
    background-color:#0099ff;
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
}
.inforequest_title_phone {
        display: none;
    }
.title_phone {
    display: none;
}
.profile_image2 {
    display: none;
}
#closebtn {
    position: relative;
    top:20px;
    right:10px;
}
#closebtn_phone {
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
#get_info {
    padding-top:0%;
    text-align: center;
}
.radio_btn {
    height: 40px;
}
.rounded-checkbox {
    margin-top:20px;
}
</style>


<style lang="scss">
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
    #inforequest {
        margin-top: 0% !important;
        border: none !important;
        
    }
    #inforequestside {
        height: 60px !important;
        border-radius: 0px !important;
    }
    .title_pad_pc {
        display: none;
    }
    .title_phone {
        display: flex !important;
        position: absolute;
        left: 20px;
        top: 10px
    }
    .profile_image {
        // margin-top:60px !important;
        display: none !important;
    }
    .profile_image2 {
        display: flex !important;
        margin-top: -20px;
    }
    .inforeques_title {
        display: none !important;
    }
    .inforequest_title_phone {
        display: flex !important;
    }
    .rounded-checkbox {
        margin-left: 20px;
    }
    #closebtn_phone {
        display: block !important;
        position: absolute !important;
        top: 5px !important;
        right: 10px !important;
    }
    #closebtn {
        display: none;
    }
}

@media only screen and (min-width: 321px) and (max-width: 375px) {
    .mycontainer {
        padding: 0% 0% 0% 0%;
    }
    #inforequest {
        margin-top: 0% !important;
        border: none !important;
        
    }
    #inforequestside {
        height: 60px !important;
        border-radius: 0px !important;
    }
    .title_pad_pc {
        display: none;
    }
    .title_phone {
        display: flex !important;
        position: absolute;
        left: 20px;
        top: 10px
    }
    .profile_image {
        // margin-top:60px !important;
        display: none !important;
    }
    .profile_image2 {
        display: flex !important;
        margin-top: -20px;
    }
    .inforeques_title {
        display: none !important;
    }
    .inforequest_title_phone {
        display: flex !important;
    }
    .rounded-checkbox {
        margin-left: 20px;
    }
    #closebtn_phone {
        display: block !important;
        position: absolute !important;
        top: 5px !important;
        right: 10px !important;
    }
    #closebtn {
        display: none;
    }
    
}
@media only screen and (max-width: 320px) {
    .mycontainer {
        padding: 0% 0% 0% 0%;
    }
    #inforequest {
        margin-top: 0% !important;
        border: none !important;
        
    }
    #inforequestside {
        height: 60px !important;
        border-radius: 0px !important;
    }
    .title_pad_pc {
        display: none;
    }
    .title_phone {
        display: flex !important;
        position: absolute !important;
        left: 20px !important;
        top: 10px !important;
    }
    .profile_image {
        // margin-top:60px !important;
        display: none !important;
    }
    .profile_image2 {
        display: flex !important;
        margin-top: -20px;
    }
    .inforeques_title {
        display: none !important;
    }
    .inforequest_title_phone {
        display: flex !important;
    }
    .rounded-checkbox {
        margin-left: 20px;
    }
    #closebtn_phone {
        display: block !important;
        position: absolute;
        top: 5px;
        right: 10px;
    }
    #closebtn {
        display: none;
    }
}

    
</style>