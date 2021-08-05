<template>
  
    <section id="firstsection" class="home_animation">
      <Header/>
      <button class="home_login_btn" color="#f27935">
        <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0.976562L0.5 5.47656L5 9.97656V7.02344H9.5V9.97656L14 5.47656L9.5 0.976562V4H5V0.976562ZM12.5234 11.5234C12.1016 11.5234 11.7266 11.6641 11.3984 11.9453C11.1172 12.2266 10.9766 12.5781 10.9766 13V27.9766L6.19531 25.4453H5.84375C5.42188 25.4453 5.07031 25.5859 4.78906 25.8672L3.66406 27.0625L10.9766 33.3203C11.3984 33.7891 11.9141 34.0234 12.5234 34.0234H22.2266C22.8828 34.0234 23.4219 33.7891 23.8438 33.3203C24.2656 32.8984 24.4766 32.3828 24.4766 31.7734V25.2344C24.4766 24.7656 24.3594 24.3672 24.125 24.0391C23.9375 23.6641 23.6328 23.3828 23.2109 23.1953L15.8281 19.8906L14 19.6797V13C14 12.5781 13.8594 12.2266 13.5781 11.9453C13.2969 11.6641 12.9453 11.5234 12.5234 11.5234Z" fill="white"/>
        </svg>
      </button>
      <div v-if="basket_btn_show">
        <button class="home_basket_btn" color="#f27935" @click="basket_btn_show = !basket_btn_show">
          <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.523438H5V5.02344H0.5V0.523438ZM5 7.97656H9.5V12.4766H5V7.97656ZM8.02344 0.523438H12.5234V5.02344H8.02344V0.523438ZM21.5234 14.0234L14 6.5H18.5V0.523438H24.4766V6.5H28.9766L21.5234 14.0234ZM7.25 30.4766C6.6875 30.4766 6.14844 30.3125 5.63281 29.9844C5.16406 29.7031 4.8125 29.3281 4.57812 28.8594L0.640625 17.6797L0.5 16.9766C0.5 16.5547 0.640625 16.2031 0.921875 15.9219C1.20312 15.6406 1.55469 15.5 1.97656 15.5H26.0234C26.4453 15.5 26.7969 15.6406 27.0781 15.9219C27.3594 16.2031 27.5 16.5547 27.5 16.9766L27.4297 17.4688L23.4219 28.8594C23.1875 29.3281 22.8125 29.7031 22.2969 29.9844C21.8281 30.3125 21.3125 30.4766 20.75 30.4766H7.25ZM7.39062 27.5234H20.6094L23.8438 18.5234H4.15625L7.39062 27.5234Z" fill="white"/>
          </svg>
        </button>
      </div>
      <div v-if="!basket_btn_show">
        <button class="home_basket_btn_changed" color="#f27935" @click="basket_btn_show = !basket_btn_show">
          <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 14.4766H5V9.97656H0.5V14.4766ZM3.52344 7.02344H8.02344V2.52344H3.52344V7.02344ZM8.02344 14.4766H12.5234V9.97656H8.02344V14.4766ZM21.5234 0.976562L14 8.5H18.5V14.4766H24.4766V8.5H28.9766L21.5234 0.976562ZM7.25 32.4766C6.6875 32.4766 6.14844 32.3125 5.63281 31.9844C5.16406 31.7031 4.8125 31.3281 4.57812 30.8594L0.640625 19.6797L0.5 18.9766C0.5 18.5547 0.640625 18.2031 0.921875 17.9219C1.20312 17.6406 1.55469 17.5 1.97656 17.5H26.0234C26.4453 17.5 26.7969 17.6406 27.0781 17.9219C27.3594 18.2031 27.5 18.5547 27.5 18.9766L27.4297 19.4688L23.4219 30.8594C23.1875 31.3281 22.8125 31.7031 22.2969 31.9844C21.8281 32.3125 21.3125 32.4766 20.75 32.4766H7.25ZM7.39062 29.5234H20.6094L23.8438 20.5234H4.15625L7.39062 29.5234Z" fill="white"/>
          </svg>
        </button>
      </div>
      <v-speed-dial
        v-model="fab"
        class="circle_btn"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="#FA5252" fab>
            <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 5.02344C14.1406 5.02344 15.5469 5.60937 16.7188 6.78125C17.8906 7.95313 18.4766 9.35938 18.4766 11C18.4766 12.6406 17.8906 14.0469 16.7188 15.2188C15.5469 16.3906 14.1406 16.9766 12.5 16.9766C10.8594 16.9766 9.45312 16.3906 8.28125 15.2188C7.10938 14.0469 6.52344 12.6406 6.52344 11C6.52344 9.35938 7.10938 7.95313 8.28125 6.78125C9.45312 5.60937 10.8594 5.02344 12.5 5.02344ZM12.5 20C14 20 15.6406 20.2344 17.4219 20.7031C19.4375 21.1719 21.0547 21.8281 22.2734 22.6719C23.7734 23.6562 24.5234 24.7578 24.5234 25.9766V29H0.476562V25.9766C0.476562 24.7578 1.22656 23.6562 2.72656 22.6719C3.94531 21.8281 5.5625 21.1719 7.57812 20.7031C9.35938 20.2344 11 20 12.5 20ZM24.1719 5.51562C25.6719 7.20312 26.4219 9.07813 26.4219 11.1406C26.4219 13.1562 25.6719 14.9141 24.1719 16.4141L21.6406 13.8828C22.25 13.0391 22.5547 12.0781 22.5547 11C22.5547 9.92188 22.25 8.9375 21.6406 8.04688L24.1719 5.51562ZM29.0938 0.523438C31.0156 2.49219 32.3047 4.74219 32.9609 7.27344C33.6641 9.80469 33.6641 12.3359 32.9609 14.8672C32.3047 17.3516 31.0156 19.5547 29.0938 21.4766L26.6328 19.0859C28.0391 17.4922 28.9766 15.7344 29.4453 13.8125C29.9141 11.8906 29.9141 9.96875 29.4453 8.04688C28.9766 6.125 28.0391 4.41406 26.6328 2.91406L29.0938 0.523438Z" fill="white"/>
            </svg>
          </v-btn>
        </template>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn fab dark small color="#84199F" v-on="on">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0938 1.78125C15.0625 1.53125 14.9531 1.34375 14.7656 1.21875C14.5781 1.0625 14.3594 0.984375 14.1094 0.984375H9.98438L10.2188 3.98438H7.78125L8.01562 0.984375H3.79688C3.54688 0.984375 3.32812 1.07812 3.14062 1.26562C2.95312 1.42188 2.84375 1.59375 2.8125 1.78125L0.09375 15.7969C0.0625 16.1094 0.140625 16.3906 0.328125 16.6406C0.546875 16.8906 0.796875 17.0156 1.07812 17.0156H6.98438L7.3125 12H10.6875L11.0156 17.0156H16.7812C17.0938 17.0156 17.3438 16.8906 17.5312 16.6406C17.75 16.3906 17.8438 16.1094 17.8125 15.7969L15.0938 1.78125ZM7.40625 9.98438L7.59375 6H10.2188L10.4062 9.98438H7.40625Z" fill="white"/>
              </svg>
            </v-btn>
          </template>
          <span>Meeting</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn fab dark small color="#FAB005" v-on="on" @click="$router.push('/chat')">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9844 3C19.9844 2.4375 19.7812 1.96875 19.375 1.59375C19 1.1875 18.5469 0.984375 18.0156 0.984375H1.98438C1.45312 0.984375 0.984375 1.1875 0.578125 1.59375C0.203125 1.96875 0.015625 2.4375 0.015625 3V15C0.015625 15.5625 0.203125 16.0469 0.578125 16.4531C0.984375 16.8281 1.45312 17.0156 1.98438 17.0156H18.0156C18.5469 17.0156 19 16.8281 19.375 16.4531C19.7812 16.0469 19.9844 15.5625 19.9844 15V3ZM18.0156 3L10 8.01562L1.98438 3H18.0156ZM18.0156 15H1.98438V5.01562L10 9.98438L18.0156 5.01562V15Z" fill="white"/>
              </svg>
            </v-btn>
          </template>
          <span>Email</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn fab dark small color="#82C91E" v-on="on">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.60938 7.78125C4.32812 9.1875 5.25 10.4688 6.375 11.625C7.53125 12.75 8.8125 13.6719 10.2188 14.3906L12.4219 12.1875C12.7031 11.9062 13.0469 11.8281 13.4531 11.9531C14.5781 12.3281 15.7656 12.5156 17.0156 12.5156C17.2969 12.5156 17.5312 12.6094 17.7188 12.7969C17.9062 12.9844 18 13.2188 18 13.5V17.0156C18 17.2969 17.9062 17.5312 17.7188 17.7188C17.5312 17.9062 17.2969 18 17.0156 18C14.7656 18 12.5938 17.5781 10.5 16.7344C8.40625 15.8594 6.5625 14.625 4.96875 13.0312C3.375 11.4375 2.14062 9.59375 1.26562 7.5C0.421875 5.40625 0 3.23438 0 0.984375C0 0.703125 0.09375 0.46875 0.28125 0.28125C0.46875 0.09375 0.703125 0 0.984375 0H4.5C4.78125 0 5.01562 0.09375 5.20312 0.28125C5.39062 0.46875 5.48438 0.703125 5.48438 0.984375C5.48438 2.23438 5.67188 3.42188 6.04688 4.54688C6.17188 4.95312 6.09375 5.29688 5.8125 5.57812L3.60938 7.78125Z" fill="white"/>
              </svg>
            </v-btn>
          </template>
          <span>Phone call</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn fab dark small color="#228BE6" v-on="on">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C11.8125 0 13.4844 0.359375 15.0156 1.07812C16.5469 1.79687 17.75 2.76562 18.625 3.98438C19.5312 5.20312 19.9844 6.54688 19.9844 8.01562C19.9844 9.45312 19.5312 10.7812 18.625 12C17.75 13.2188 16.5469 14.1875 15.0156 14.9062C13.4844 15.625 11.8125 15.9844 10 15.9844C8.78125 15.9844 7.60938 15.8281 6.48438 15.5156C5.79688 16.0781 5.04688 16.5469 4.23438 16.9219C3.57812 17.2344 2.875 17.4844 2.125 17.6719C1.625 17.7969 1.10938 17.8906 0.578125 17.9531L0.015625 18C1.01562 17 1.75 16.0312 2.21875 15.0938C2.53125 14.5 2.70312 13.9688 2.73438 13.5C1.89062 12.7812 1.21875 11.9531 0.71875 11.0156C0.25 10.0469 0.015625 9.04688 0.015625 8.01562C0.015625 6.54688 0.453125 5.20312 1.32812 3.98438C2.23438 2.76562 3.45312 1.79687 4.98438 1.07812C6.51562 0.359375 8.1875 0 10 0Z" fill="white"/>
              </svg>
            </v-btn>
          </template>
          <span>Chat now</span>
        </v-tooltip>
      </v-speed-dial>
      <div id="icon_home">
          <div id="sun">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">                   
                  <g>             
                  <circle style="fill:none;" cx="84.5" cy="84" r="38.4"/>
                  <line style="fill:none;"  x1="85" y1="139.4" x2="85" y2="158"/>
                  <line style="fill:none;" x1="85" y1="10.9" x2="85" y2="28.3"/>
                  <line style="fill:none;" x1="123.8" y1="123.3" x2="137" y2="136.5"/>
                  <line style="fill:none;" x1="33" y1="32.4" x2="45.3" y2="44.8"/>
                  <line style="fill:none;" x1="46.1" y1="123.3" x2="33" y2="136.5"/>
                  <line style="fill:none;" x1="137" y1="32.4" x2="124.7" y2="44.8"/>
                  <line style="fill:none;" x1="30.1" y1="84.5" x2="11.4" y2="84.5"/>
                  <line style="fill:none;" x1="158.6" y1="84.5" x2="141.1" y2="84.5"/>
                  </g>                
              </svg>
          </div>
          <div id="cloud-wrapper">
              <svg version="1.1" id="cloud-mask" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">                   
                  <g>
                  <path id="cloud-path" d="M201.1,165.1c21.5,0,38.9-17.4,38.9-38.9c0-17.8-12-32.8-28.3-37.4c0-0.5,0.1-1,0.1-1.4
                  c0-35.3-28.6-64-64-64c-21.9,0-41.2,11-52.7,27.8c-4.8-3.8-10.9-6.1-17.5-6.1c-15.6,0-28.2,12.6-28.2,28.2c0,2.3,0.3,4.5,0.8,6.6
                  C27.8,81.2,10,99.8,10,122.5c0,23.6,19.1,42.6,42.6,42.6"/>       
                  </g>   
              </svg>
              <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">                   
                  <g>
                  <path id="cloud-path" d="M201.1,165.1c21.5,0,38.9-17.4,38.9-38.9c0-17.8-12-32.8-28.3-37.4c0-0.5,0.1-1,0.1-1.4
                  c0-35.3-28.6-64-64-64c-21.9,0-41.2,11-52.7,27.8c-4.8-3.8-10.9-6.1-17.5-6.1c-15.6,0-28.2,12.6-28.2,28.2c0,2.3,0.3,4.5,0.8,6.6
                  C27.8,81.2,10,99.8,10,122.5c0,23.6,19.1,42.6,42.6,42.6"/>
                  <path style="fill:none;" id="open-cloudL" d="M52.6,165.1H127"/>
                  <path style="fill:none;" id="open-cloudR" d="M201.1,165.1H125"/>  
                  </g>   
              </svg>
          </div>
          <div id="rain-mask">
              <svg id="rain" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="219.1px" height="417.1px" viewBox="0 0 219.1 417.1" style="enable-background:new 0 0 219.1 417.1;" xml:space="preserve">
                  <line style="fill:none;" x1="112.4" y1="14.5" x2="13.6" y2="383.9"/>
                  <line style="fill:none;" x1="188.8" y1="14.5" x2="90" y2="383.9"/>
                  <line style="fill:none;" x1="144" y1="38.3" x2="45.3" y2="407.7"/>
              </svg>
          </div>
      </div>
      <div id="lightning"></div>
      <div id="home_title" style="text-align: center">
        <v-row justify="center">
          <p align="center" style="color:white; font-size:70px;">We recover<br>projects</p>
        </v-row>
      </div>
      
    </section>
</template>
<script>
import Header from './Header'
export default {
  data() {
    return {
        offsets: [],
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        basket_btn_show: false,
        
    };
  },
  components: {
    'Header': Header,
  },
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' }
        case 'two': return { class: 'red', icon: 'edit' }
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
        
        default: return {}
      }
    },
  },

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    },
  },
  mounted () {
    $(document).ready(function(){	
      makeRain();
      setInterval(function(){  
          makeRain(); 
      }, 6000);	
    });


    function rain(){
      $('.home_animation').addClass("rain");
      setTimeout(function(){	
          $("#lightning").show();
          setTimeout(function(){	
              $("#lightning").css({opacity:0.2});
                    setTimeout(function(){	           
                        $("#lightning").css({opacity:0.8});
                        setTimeout(function(){	
                            $("#lightning").hide();
                        }, 100);             
                      }, 100);                        
          }, 100);
      }, 1200);
      $('#sun').addClass("animatepos1"); 	
      $(".home_animation").animate({ backgroundColor: "#000000" }, 1000);  
        $('#cloud-wrapper').removeClass("animate2").addClass('animate');		
        setTimeout(function(){			
          $('#sun').removeClass("animatepos1").addClass("animatepos2");
          setTimeout(function(){$('#rain-mask').addClass("animate");}, 700);			
        }, 400);
      }
      
    function sunny(){		
        $('.home_animation').removeClass("rain");
        $('#open-cloudR, #open-cloudL').css('stroke-dashoffset', 400);		
        $('#cloud-wrapper').addClass("animate2");
        setTimeout(function(){	
          $('#sun').removeClass("animatepos2").addClass("animatepos1");
          setTimeout(function(){
            $('#sun').removeClass("animatepos1");        
            $('#open-cloudR, #open-cloudL').css('stroke-dashoffset', 0);
            $('#rain-mask').removeClass("animate");
          }, 400);		
        }, 300);
      }

    function makeRain(){
        rain();
        setTimeout(function(){							
          sunny();
        }, 2600);
    }
  }
}
</script>
<style>
#firstsection {
  position: relative;
}
#home_title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 400px;
    /* left: 40vw; */

}
.home_animation{
    height: 100vh;
    width: 100%;
    background:#f27935;
    -webkit-transition: all 800ms ease-in-out; 
        -moz-transition: all 800ms ease-in-out; 
          -o-transition: all 800ms ease-in-out; 
              transition: all 800ms ease-in-out; 
}
#lightning{
  background:#fff;
  opacity:0.8;
  display:none;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;    
}
#cloud-path{
  fill:#f27935;
	-webkit-transition: all 800ms ease-in-out; 
       -moz-transition: all 800ms ease-in-out; 
         -o-transition: all 800ms ease-in-out; 
            transition: all 800ms ease-in-out; 
}
.rain #cloud-path{
	fill:#36495c;
	-webkit-transition: all 800ms ease-in-out; 
       -moz-transition: all 800ms ease-in-out; 
         -o-transition: all 800ms ease-in-out; 
            transition: all 800ms ease-in-out; 
}
.rain{
	background:#36495c;
	-webkit-transition: all 800ms ease-in-out; 
       -moz-transition: all 800ms ease-in-out; 
         -o-transition: all 800ms ease-in-out; 
            transition: all 800ms ease-in-out; 
}
.rain #cloud-mask path{
	stroke:#36495c;
	-webkit-transition: all 800ms ease-in-out; 
       -moz-transition: all 800ms ease-in-out; 
         -o-transition: all 800ms ease-in-out; 
            transition: all 800ms ease-in-out; 
}
#cloud-mask path{
	stroke:#fff;
	stroke-width:25px; 
	-webkit-transition: all 800ms ease-in-out; 
       -moz-transition: all 800ms ease-in-out; 
         -o-transition: all 800ms ease-in-out; 
            transition: all 800ms ease-in-out; 
}
#icon_home{
	position:absolute; 
	top:150px;
	left:50%;
	width:300px;
	height:300px;
	margin-left:-150px;	
}
/* .path{
	stroke-dashoffset: 516;
	-webkit-animation: fill 5s linear forwards;
	-moz-animation: fill 5s linear forwards;
	animation: fill 5s linear forwards;
	stroke-dasharray: 40;
} */

#cloud-wrapper, #rain-mask{
	position: absolute;
	top: 30px;
	left: 24px;
}
#cloud-mask path{
	stroke:#f27935;
	stroke-width:30px; 
}
#cloud-wrapper svg{
	position: absolute;
	top: 0px;
	left: 0px;	
}
#sun{
	position:relative;
	overflow:hidden;
	height:170px;
	margin-top: 0px;
	margin-left: 0px;
	-webkit-transition: all 300ms ease-in-out; 
       -moz-transition: all 300ms ease-in-out; 
         -o-transition: all 300ms ease-in-out; 
            transition: all 300ms ease-in-out; 
}
#sun.animatepos1{
	margin-top: -16px;
	margin-left: -21px;
	-webkit-transition: all 400ms ease-in-out; 
       -moz-transition: all 400ms ease-in-out; 
         -o-transition: all 400ms ease-in-out; 
            transition: all 400ms ease-in-out; 
}
#sun.animatepos2{
	margin-top: 53px;
	margin-left: 60px;
	height:130px;
	-webkit-transition: all 600ms ease-in-out; 
       -moz-transition: all 600ms ease-in-out; 
         -o-transition: all 600ms ease-in-out; 
            transition: all 600ms ease-in-out; 
}
#sun line, 
#sun circle, 
#cloud path,
#rain line{
	stroke:#fff;
	stroke-width:13px; 
	stroke-linecap:round;
}
#rain line{
	position:absolute;
	top:0; 
	left:0;
	stroke-dasharray: 20,29;
}
#rain{
	position:absolute;	
	top: -397px;
	left: 100px;	
}
#rain-mask.animate #rain{
	top: 155px;
	left: -40px;
	-webkit-transition: all 1500ms linear; 
       -moz-transition: all 1500ms linear; 
         -o-transition: all 1500ms linear; 
            transition: all 1500ms linear; 
}

#open-cloudL{
	stroke-dasharray: 400;
	stroke-dashoffset: 0;    	
}
.animate #open-cloudL, .animate #open-cloudR{
	animation: fill 1s ease-in-out forwards;
	-webkit-animation: fill 1s ease-in-out forwards;
	-moz-animation: fill 1s ease-in-out forwards;
	animation: fill 1s ease-in-out forwards;
}
#open-cloudR{
	stroke-dasharray: 400;
	stroke-dashoffset: 0; 
}

.animate2 #open-cloudR, .animate2 #open-cloudL{
    animation: fill-out 1s ease-in-out forwards;
	-webkit-animation: fill-out 1s ease-in-out forwards;
	-moz-animation: fill-out 1s ease-in-out forwards;
	animation: fill-out 1s ease-in-out forwards;
}

#rain-mask{
	position: absolute;
	top: 125px;
	left: 10px;
	width: 213px;
	height: 132px;
	overflow: hidden;
}

@-webkit-keyframes fill {
	to {		
		stroke-dashoffset: 400;
	}
}
@-moz-keyframes fill {
	to {
		  stroke-dashoffset: 400;
	}
}
@keyframes fill {
	to {
 stroke-dashoffset: 400;	
	}
}


@-webkit-keyframes fill-out {
	to {		
		stroke-dashoffset: 0;
	}
}
@-moz-keyframes fill-out {
	to {
		  stroke-dashoffset: 0;
	}
}
@keyframes fill-out {
	to {
 stroke-dashoffset: 0;	
	}
}
</style>

<style lang="scss">

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
.home_login_btn {
  position: fixed;
  top:90px;
  right: 40px;
  z-index: 2;
}
.home_basket_btn {
  position: fixed;
  top:150px;
  right:40px;
  z-index: 2;
}
.home_basket_btn_changed {
  position: fixed;
  top:150px;
  right:40px;
  z-index: 2;
}

.circle_btn {
  position: fixed !important;
  bottom: 50px !important;
  right: 40px !important;
}
.open_dialog {
  position: absolute;
  bottom: 100px !important;
  right: 100px !important;
}


@media only screen and (min-width: 1025px) and (max-width: 1366px) {

}
//iPad Pro
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
  
}
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
  #home_title {
    padding-top: 400px !important;
  }
}
// iPad 
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: landscape) {
  #home_title {
    padding-top: 500px !important;
  }
}
@media only screen and (min-width: 415px) and (max-width: 768px) and (orientation: portrait) {
  #home_title {
    padding-top: 400px !important;
  }
}
// iPhone Plus
@media only screen and (min-width: 376px) and (max-width: 414px){
  
  #home_title {
    p{
      font-size: 50px !important;
    }
    padding-top: 95% !important;
  }
  .home_login_btn {
    position: fixed !important;
    top:70px !important;
    right:20px !important;
  }
  .home_basket_btn {
    position: fixed;
    top: 120px !important;
    right: 20px !important;
  }
  .home_basket_btn_changed {
    position: fixed;
    top: 120px !important;
    right: 20px !important;
  }
  .circle_btn {
    position: fixed !important;
    bottom: 50px !important;
    right: 20px !important;
  }
}
// iPhoneX
@media only screen and(min-width: 321px) and (max-width: 375px) and (orientation: portrait) {
  #home_title {
    p{
      font-size: 50px !important;
    }
    padding-top: 400px !important;
  }
  .home_login_btn {
    position: fixed !important;
    top:70px !important;
    right:20px !important;
  }
  .home_basket_btn {
    position: fixed;
    top: 120px !important;
    right: 20px !important;
  }
  .home_basket_btn_changed {
    position: fixed;
    top: 120px !important;
    right: 20px !important;
  }
  .circle_btn {
    position: fixed !important;
    bottom: 50px !important;
    right: 20px !important;
  }
}

// iPhone 5
@media only screen and (max-width: 320px) {
  #home_title {
    p{
      font-size: 50px !important;
    }
    padding-top: 350px !important;
  }
  .home_login_btn {
    top:70px !important;
    right:20px !important;
  }
  .home_basket_btn {
    top: 120px !important;
    right: 20px !important;
  }
  .home_basket_btn_changed {
    top: 120px !important;
    right: 20px !important;
  }
  #icon_home {
    top: 100px !important;
  }
  .circle_btn {
    position: fixed !important;
    bottom: 10px !important;
    right: 20px !important;
  }
}
</style>