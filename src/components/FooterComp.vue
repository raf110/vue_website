<template>
    <div aria-label="footer">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css" rel="stylesheet"/>    
    <div>
      <div class="fluid-container footer">
        <div class="top">
            <div class="links">
              <b-link href="#foo">FAQ</b-link>
              <b-link href="#foo">Help</b-link>
              <b-link href="#foo">Contact</b-link>
              <b-link href="/#/freetranslator">Free Translator</b-link>
            </div>
            <div class="icons">
              <font-awesome-icon :icon="['fab', 'square-facebook']" size="lg" style="color:#142F64;" />
              <font-awesome-icon :icon="['fab', 'square-instagram']" size="lg" style="color:#142F64;" />
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" style="color:#142F64;" />
              <font-awesome-icon :icon="['fab', 'square-x-twitter']" size="lg" style="color:#142F64;" />
              <font-awesome-icon :icon="['fab', 'square-youtube']" size="lg" style="color:#142F64;" />
          </div>
        </div>
        <hr>
        <p class="text-center">Copyright &copy; 2023, Sign Syncer. All Rights Reserved.</p>
      </div>
    </div>
</div>
  </template>
  <script></script>
  <style scoped>
  div{
    color: rgb(0, 0, 0);
    background-color: #FABB5A;
    padding: 0.5em 0em;
  }
  .fluid-container.footer{
    background: #FABB5A;
  }
  .fluid-container.footer > *:last-child {
      margin-bottom: 0px;
      color: rgb(0, 0, 0);
  }
  p {
    font-size: 12px;
  }

  .top{    
    display: flex;
    gap: 2em;
    margin: 1em 10em;
    justify-content: space-between;
}
a {
  color: #142F64;  
}

.links {
    padding: 0.5em 7em;
    gap: 1em;
    display: flex;
}

.icons {
  padding: 0.5em 7em;
  gap: 1em;
  display: flex;
}

  </style>