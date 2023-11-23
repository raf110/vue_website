<template>
    <div>
        <b-jumbotron class="main">
            <b-jumbotron class="first">
                <h3>Step 1</h3>
                <p>User enters text or speech
                    input of sentence to be signed</p>
            </b-jumbotron>
            <b-jumbotron class="second">
                <h3>Step 2</h3>
                <p>We match the corresponding videos
                    in sign language to translate your
                    sentence</p>
            </b-jumbotron>
            <b-jumbotron class="third">
                <h3>Step 3</h3>
                <p>User receives translated sentence
                    as a sequence of videos in sign
                    language</p>
            </b-jumbotron>
            <!-- <div class="line"></div> -->
            <div id="somediv">
                <!--This div is 100px * 100px, I need to draw a line 4px thick from (23, 24) to (87, 96)-->
                <h2>How does it work?</h2>
      
               <svg id="svg"> 
                  <line 
                    style="cursor:pointer"
                    id="theline" 
                    x1="50%" y1="14%" x2="50%" y2="86%" stroke="black" stroke-width="4"/>
               </svg>
                <b-img class="profile1" rounded="circle" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>

               <b-img class="image1" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
               <b-img class="image2" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
               <b-img class="image3" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>   

                <b-img class="profile2" rounded="circle" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
            </div>
        </b-jumbotron>
    </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  padding: 2rem 1rem;
  margin: 2rem 5rem;
  background-color: RGB(156, 181, 223,0.55)!important;
  filter: drop-shadow(2px 4px 6px RGB(156, 181, 223,0.25));
  border-radius: 1.3rem;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: 5em 12em 15em 15em 15em 12em;
}
.jumbotron h2 {
  grid-column: 1 / 4;
  grid-row: 1;
}

/*content*/


.jumbotron .jumbotron {
    padding: 2rem 2rem!important;
    margin: 0em 2em;
    border-radius: 2rem;
}

.first {
    grid-column: 3;
    grid-row: 3;
}

.second {
    grid-column: 1;
    grid-row: 4;
}

.third {
    grid-column: 3;
    grid-row: 5;
}



/*steps numbers*/
.profile1{
    grid-row: 2;
    width: 10em!important;
    height: 10em!important;
}

.image1 {
    grid-row: 3;
    position: absolute;
}
.image2 {
    grid-row: 4;
    position: absolute;
}
.image3 {
    grid-row: 5;
    position: absolute;
}
.profile2{
    grid-row: 6;
    width: 10em!important;
    height: 10em!important;
}

.box {
  grid-column: 2;
  grid-row: 1 / 5;
}

.rounded-circle {
    padding: 1em;
  border-radius: 50%!important;
  width: 5em;
  height: 5em;
}

/*line*/
#somediv {
    grid-column: 2;
    grid-row: 1 / 7;
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 5em 12em 15em 15em 15em 12em;
    justify-items: center;
  }
  
#svg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

</style>

<script>
  export default {
    data() {
      return {
        mainProps: { blank: true, blankColor: '#FABB5A', width: 75, height: 75, class: 'm1' }
      }
    }
  }
</script>