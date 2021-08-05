<template>
<div class="myhomepage">
    <div class="homepart" id="homepart1">
        <v-container fluid>
            <HomeFirst />
        </v-container>
    </div>
    <div class="homepart" id="homepart2">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="3" class="second_left"
                :class="animation_left_class1">
                    <HomeTwoLeft />
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="9"  class="second_right"
                :class="animation_right_class1">
                    <HomeTwoRight />
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="homepart" id="homepart3">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="3" class="second_left"
            :class="animation_left_class2">
                <HomeThreeLeft />
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="9" class="second_right"
            :class="animation_right_class2">
                <HomeThreeRight />
            </v-col>
        </v-row>
    </div>
    <div class="homepart" id="homepart4">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="3" class="second_left"
            :class="animation_left_class3">
                <HomeFourLeft />
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="9" class="second_right"
            :class="animation_right_class3">
                <HomeFourRight />
            </v-col>
        </v-row>
    </div>
    <div class="homepart" id="homepart5">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="3" class="second_left"
            :class="animation_left_class4">
                <HomeFiveLeft />
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="9" class="second_right"
            :class="animation_right_class4">
                <HomeFiveRight />
            </v-col>
        </v-row>
    </div>
    <div class="pagination" v-show="disabled_paginator">
        <ol>
            <li @click="clickActiveList(0)">
                <a href="#homepart1"><span v-bind:class="{ paginator_active: isActive[0], paginator_unactive: !isActive[0] }">5by5 Home</span></a>
            </li>     
            <div class="vertical_line"></div>
            <li @click="clickActiveList(1)"><a href="#homepart2" v-bind:class="{ paginator_active: isActive[1], paginator_unactive: !isActive[1] }">Time for Change</a></li>
            <div class="vertical_line"></div>
            <li @click="clickActiveList(2)"><a href="#homepart3" v-bind:class="{ paginator_active: isActive[2], paginator_unactive: !isActive[2] }">5d Audit</a></li>
            <div class="vertical_line"></div>
            <li @click="clickActiveList(3)"><a href="#homepart4" v-bind:class="{ paginator_active: isActive[3], paginator_unactive: !isActive[3] }">Turnaround Expertise</a></li>
            <div class="vertical_line"></div>
            <li @click="clickActiveList(4)"><a href="#homepart5" v-bind:class="{ paginator_active: isActive[4], paginator_unactive: !isActive[4] }">Success Stories</a></li>
        </ol>
    </div>
</div>
</template>

<script>
import HomeFirst from './HomeFirst'
import Header from './Header'
import HomeTwoLeft from './HomeTwoLeft'
import HomeTwoRight from './HomeTwoRight'
import HomeThreeLeft from './HomeThreeLeft'
import HomeThreeRight from './HomeThreeRight'
import HomeFourLeft from './HomeFourLeft'
import HomeFourRight from './HomeFourRight'
import HomeFiveLeft from './HomeFiveLeft'
import HomeFiveRight from './HomeFiveRight'
export default {
    data() {
        return {
            inMove: false,
            activeSection: 0,
            offsets: [],
            touchStartY: 0,
            sectionoffset: [],
            animation_left_class1: [],
            animation_right_class1: [],
            animation_left_class2: [],
            animation_right_class2: [],
            animation_left_class3: [],
            animation_right_class3: [],
            animation_left_class4: [],
            animation_right_class4: [],
            animation_left: [],
            animation_right: [],
            animation_stop: false,
            isActive: [],
            disabled_paginator: false,
            section_items: [
                {title: '5by5 Home', section_id: 'homepart1'},
                {title: 'Time for Change', section_id: 'homepart2'},
                {title: '5d Audit', section_id: 'homepart3'},
                {title: 'Turnaround Expertise', section_id: 'homepart4'},
                {title: 'Success Stories', section_id: 'homepart5'},
            ],
            
        }
    },
    components: {
        "Header": Header,
        "HomeFirst": HomeFirst,
        'HomeTwoLeft': HomeTwoLeft,
        'HomeTwoRight': HomeTwoRight,
        'HomeThreeLeft': HomeThreeLeft,
        'HomeThreeRight': HomeThreeRight,
        'HomeFourLeft': HomeFourLeft,
        'HomeFourRight': HomeFourRight,
        'HomeFiveLeft': HomeFiveLeft,
        'HomeFiveRight': HomeFiveRight,
    },
    mounted() {
        // AOS.init({
        //     duration: 500,
        //     delay: 200,
        //     once: false
        // });
        
        
    },
    created() {
        // Starting section will be Main section.
        window.scrollBy(0,937);
        // console.log('starting...')

        this.calculateSectionOffsets();
        this.isActive[0]=true;
        window.addEventListener('mousewheel', this.handleMouseWheel, {
            passive: false
        });
    },
    methods: {
        async calculateSectionOffsets() {
            let sections = await document.getElementsByClassName('homepart');
            let length = sections.length;
            for (let i = 0; i < length; i++) {
                this.sectionoffset = sections[i].offsetTop;
                this.offsets.push(this.sectionoffset);
            }
            // console.log(sections)
            // console.log(this.offsets)
            
        },
        destroyed() {
            window.removeEventListener('mousewheel', this.handleMouseWheel, {
                passive: false
            }); // Other browsers
            window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
            window.removeEventListener('touchstart', this.touchStart); // mobile devices
            window.removeEventListener('touchmove', this.touchMove); // mobile devices
        },
        scrollToSection(id, force = false) {
            if (this.inMove && !force) return false;
            this.activeSection = id;
            this.inMove = true;
            if(id != 0) {
                this.disabled_paginator = true;
            }else {
                this.disabled_paginator = false;
            }
            document.getElementsByClassName('homepart')[id].scrollIntoView({
                behavior: 'smooth'
            });
            // window.scrollBy(0, 937);
            // document.body.style.overflow = 'hidden'
            // this.isActive[id] = true;
            this.animation_stop = true;
            setTimeout(() => {
                this.inMove = false;
                this.isActive[id] = true;
                this.$set(this.isActive, id, true);
                // document.body.style.overflow = ''
            }, 400);
        },
        handleMouseWheel: function (e) {
            this.animation_left_class1 = []
            this.animation_right_class1 = []
            this.animation_left_class2 = []
            this.animation_right_class2 = []
            this.animation_left_class3 = []
            this.animation_right_class3 = []
            this.animation_left_class4 = []
            this.animation_right_class4 = []
            var window_size = window.innerWidth;
            if(window_size<1400) {
                this.animation_stop = true;
            }else {
                this.animation_stop = false;
            }
            for(var i=0; i<this.offsets.length;i++) {
                this.isActive[i] = false;
            }
            if (e.wheelDelta < 30 && !this.inMove) {
                this.moveUp();
            } else if (e.wheelDelta > 30 && !this.inMove) {
                this.moveDown();
            }
            e.preventDefault();
            return false;
        },
        moveDown() {
            this.inMove = true;
            this.activeSection--;
            if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
            if(!this.animation_stop) {
                if (this.activeSection == 1) {
                    setTimeout(() => {
                        this.animation_left_class1.push("animated", "fadeInUpBig");
                        this.animation_right_class1.push("animated", "fadeInDownBig");
                    }, 200);
                }
                if (this.activeSection == 2) {
                    setTimeout(() => {
                        this.animation_left_class2.push("animated", "fadeInUpBig");
                        this.animation_right_class2.push("animated", "fadeInDownBig");
                    }, 200);
                }
                if (this.activeSection == 3) {
                    setTimeout(()=>{
                        this.animation_left_class3.push("animated", "fadeInUpBig");
                    this.animation_right_class3.push("animated", "fadeInDownBig");
                    }, 200);
                    
                }
                if (this.activeSection == -1 || this.activeSection == 4) {
                    setTimeout(() => {
                        this.animation_left_class4.push("animated", "fadeInUpBig");
                        this.animation_right_class4.push("animated", "fadeInDownBig");
                    }, 500);

                }
            }
            this.scrollToSection(this.activeSection, true);
        },
        moveUp() {
            // console.log('Current scroll from top:', window.pageYOffset);
            this.inMove = true;
            this.activeSection++;
            if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
            if (!this.animation_stop) {
                if (this.activeSection == 1) {
                    setTimeout(() => {
                        this.animation_left_class1.push("animated", "fadeInUpBig");
                        this.animation_right_class1.push("animated", "fadeInDownBig");
                    }, 400);
                }
                if (this.activeSection == 2) {
                    setTimeout(() => {
                        this.animation_left_class2.push("animated", "fadeInUpBig");
                        this.animation_right_class2.push("animated", "fadeInDownBig");
                    }, 200);
                }
                if (this.activeSection == 3) {
                    setTimeout(() => {
                        this.animation_left_class3.push("animated", "fadeInUpBig");
                        this.animation_right_class3.push("animated", "fadeInDownBig");
                    }, 200);
                }
                if (this.activeSection == 4) {
                    setTimeout(() => {
                        this.animation_left_class4.push("animated", "fadeInUpBig");
                        this.animation_right_class4.push("animated", "fadeInDownBig");
                    }, 200);
                }
            }
            this.scrollToSection(this.activeSection, true);
        },
        
        //Homepage slide list functions
        clickActiveList(index) {
            if(index == 0) {
                // this.$set(this.disabled_paginator,false);
                this.disabled_paginator = false;
            }
            for (let index = 0; index < this.isActive.length; index++) {
                this.isActive[index] = false;
            }
            this.isActive[index] = true;
            this.$set(this.isActive, index, true);
        },
        
    },
}
</script>

<style lang="scss" scoped>
// @import 'node_modules/aos/src/sass/aos.scss';
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

* {
    padding: 0px !important;
}
// .myhomepage {
    // position: relative;
// }
.second_left,
.second_right {
    padding: 0px 0px 0px 0px;
    animation-duration: 500ms;
    animation-delay: 500ms;
}
.pagination {
    position: fixed;
    top: 580px;
    left: 200px;
    a {
        text-decoration: none;
        color: grey;
    }
    ol {
        list-style: none;
        counter-reset: my-awesome-counter;
    }
    li {
        color: grey;
        counter-increment: my-awesome-counter;
        margin: 0.25rem;
    }
    li::before {
        content: counter(my-awesome-counter);
        background: #1976d2;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: inline-block;
        line-height: 1.5rem;
        color: white;
        text-align: center;
        margin-right: 1rem;
    }
    ol li::before {
        background: grey;
        border-color: red;
    }
    // ol li a:hover {
    //     font-size: 17px;
    // }
    .paginator_active {
        
        font-size: 22px;
    }
    .paginator_unactive {
        font-size: 16px;
    }
    ol li:active {
        font-size: 22px;
    }
    .vertical_line {
        border-left: 2px solid grey;
        height: 20px;
        margin-left: 15px;
    }
}


@media only screen and (min-width: 1025px) and (max-width: 1366px) {
    .second_left {
        display: none !important;
    }
    .second_right {
        width: 100% !important;
    }
    .pagination {
        display: none !important;
    }
}
//iPad Pro
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
    .second_left {
        display: none !important;
    }
    .second_right {
        width: 100% !important;
    }
    .pagination {
        display: none !important;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
    .second_left {
        display: none;
    }
    .second_right {
        width: 100%;
    }
    .pagination {
        display: none;
    }
}
// iPad 
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: landscape) {
    .second_left {
        display: none;
    }
    .second_right {
        width: 100%;
    }
    .pagination {
        display: none;
    }
}
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: portrait) {
    .second_left {
        display: none;
    }
    .second_right {
        width: 100%;
    }
    .pagination {
        display: none;
    }
}
// iPhone Plus
@media only screen and (min-width: 376px) and (max-width: 414px){
    .second_left {
        display: none;
    }
    .second_right {
        width: 100%;
    }
    .pagination {
        display: none;
    }
}
// iPhone X
@media only screen and (min-width: 321px) and (max-width: 375px) {
    .second_left {
        display: none !important;
    }
    .pagination {
        display: none;
    }
}
@media only screen and (max-width: 320px) {
    .second_left {
        display: none;
    }
    .second_right {
        width: 100%;
    }
    .pagination {
        display: none;
    }
}
</style>
