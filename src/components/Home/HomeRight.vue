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
  <HomeTwoRight></HomeTwoRight>
  <HomeThreeRight></HomeThreeRight>
</div>
</template>
<script>
import HomeFirst from './HomeFirst'
import HomeTwoRight from './HomeTwoRight'
import HomeThreeRight from './HomeThreeRight'
export default {
  name: "Home",
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionoffset: [],
    };
  },
  components: {
      // "Header": Header,
      "HomeFirst": HomeFirst,
      "HomeTwoRight": HomeTwoRight,
      "HomeThreeRight": HomeThreeRight,
      // "HomeSecond": HomeSecond,
  },
  created() {
    this.calculateSectionOffsets();
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); 
  },
  methods: {
    async calculateSectionOffsets() {
        let sections = await document.getElementsByClassName('section_right');
        console.log(sections)
        let length = sections.length;
        for (let i = 0; i < length; i++) {
            this.sectionoffset = sections[i].offsetTop;
            this.offsets.push(this.sectionoffset);
        }
        console.log("offsets:",this.offsets)
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
        document.getElementsByClassName('section_right')[id].scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.inMove = false;
        }, 400);
    },

    handleMouseWheel: function(e) {
        if (e.wheelDelta < 30 && !this.inMove) {
          console.log("e.wheelDelta",e.wheelDelta)
          console.log("inMove", this.inMove)
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
        // console.log("down,activeSection:", this.activeSection)
        if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
        this.inMove = true;
        this.activeSection++;
        if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        this.scrollToSection(this.activeSection, true);
    }

  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
