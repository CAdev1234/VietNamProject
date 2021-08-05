<template>
<div>
  <!-- <Header></Header> -->
  <!-- <div class="sections-menu">
      <span
        class="menu-point"
        v-bind:class="{active: activeSection == index}"
        v-on:click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index">
      </span>
    </div> -->
  <!-- <HomeFirst></HomeFirst> -->
  <!-- <HomeSecond></HomeSecond> -->
  <HomeTwoLeft></HomeTwoLeft>
  <HomeThreeLeft></HomeThreeLeft>
</div>
</template>
<script>
import Header from './Header'
import HomeFirst from './HomeFirst'
import HomeSecond from './HomeSecond'
import HomeTwoLeft from './HomeTwoLeft'
import HomeThreeLeft from './HomeThreeLeft'
export default {
  name: "Home",
  data() {
    return {
      inMove1: false,
      activeSection1: 0,
      offsets1: [],
      touchStartY1: 0,
      sectionoffset1: [],
    };
  },
  components: {
      "Header": Header,
      "HomeFirst": HomeFirst,
      "HomeTwoLeft": HomeTwoLeft,
      "HomeThreeLeft": HomeThreeLeft,
      "HomeSecond": HomeSecond,
  },
  created() {
    this.calculateSectionOffsets1();
    window.addEventListener('mousewheel', this.handleMouseWheel1, {
      passive: false
    }); 
  },
  methods: {
    async calculateSectionOffsets1() {
        let sections1 = await document.getElementsByClassName('section_left');
        // console.log(sections)
        let length1 = sections1.length;
        for (let i = 0; i < length1; i++) {
            this.sectionoffset1 = sections1[i].offsetTop;
            this.offsets1.push(this.sectionoffset1);
        }
        console.log("offsets:",this.offsets1)
    },

    destroyed1() {
        window.removeEventListener('mousewheel', this.handleMouseWheel1, {
            passive: false
        }); // Other browsers
        // window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
        // window.removeEventListener('touchstart', this.touchStart); // mobile devices
        // window.removeEventListener('touchmove', this.touchMove); // mobile devices
    },

    scrollToSection1(id, force = false) {
        if (this.inMove && !force) return false;
        this.activeSection1 = id;
        this.inMove1 = true;
        document.getElementsByClassName('section_left')[id].scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.inMove1 = false;
        }, 400);
    },

    handleMouseWheel1: function(e) {
        if (e.wheelDelta < 30 && !this.inMove1) {
          // console.log("e.wheelDelta",e.wheelDelta)
          // console.log("inMove", this.inMove)
            this.moveDown1();
        } else if (e.wheelDelta > 30 && !this.inMove1) {
            this.moveUp1();
        }
        e.preventDefault();
        return false;
    },

    moveDown1() {
        this.inMove1 = true;
        this.activeSection1--;
        // console.log("down,activeSection:", this.activeSection)
        if (this.activeSection1 < 0) this.activeSection1 = this.offsets1.length - 1;
        this.scrollToSection1(this.activeSection1, true);
    },
    moveUp1() {
        this.inMove1 = true;
        this.activeSection1++;
        if (this.activeSection1 > this.offsets1.length - 1) this.activeSection1 = 0;
        this.scrollToSection1(this.activeSection1, true);
    }

  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
