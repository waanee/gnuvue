<template>
    <!-- uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom" -->
    <header class="header" uk-sticky>
        <div class="container">
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left">
                    <router-link class="uk-navbar-item uk-logo main-logo" to="/">TEMAMOA</router-link>
                </div>

                <div class="nav-overlay uk-navbar-center">
                    <div class="nav mobile-hide">
                        <ul class="uk-navbar-nav">
                        <li><router-link to="/community">community</router-link></li>
                        <li><router-link to="/about">about</router-link></li>
                        <li><router-link to="/bbs">bbs</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="uk-navbar-right">
                    <div class="uk-navbar-item">
                        <ul class="uk-navbar-nav">
                            <li><a class="uk-navbar-toggle" uk-search-icon uk-toggle="target: #full-search; animation: uk-animation-fade" href="#"></a></li>
                            <li><a href="#" uk-icon="icon: heart"></a></li>
                            <li><a href="#" uk-icon="icon: menu" uk-toggle="target: #offcanvas-overlay"></a></li>
                        </ul>
                    </div>
                </div>

                <div id="full-search" class="uk-modal-full uk-modal" uk-modal>
                    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-height-viewport>
                        <button class="uk-modal-close-full" type="button" uk-close></button>
                        <form class="uk-search uk-search-large">
                            <input class="uk-search-input uk-text-center" type="search" placeholder="Search..." autofocus>
                        </form>
                    </div>
                </div>


            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{ 
  border-bottom:1px solid #e3e3e3; 
  background:#fff;
}

.uk-navbar-container:not(.uk-navbar-transparent){
    background:transparent;
}
.uk-navbar-item, .uk-navbar-nav>li>a, .uk-navbar-toggle{
    min-height: 60px;
}
.uk-navbar-nav>li{
    margin:0px;
}

@media (max-width:900px){
  .mobile-hide {
    display:none;
  }
}
  
</style>
