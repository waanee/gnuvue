<template>
    <div id="offcanvas-overlay" uk-offcanvas="overlay: true;">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><router-link to="/">main</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><router-link to="/bbs">bbs</router-link></li>

            <li class="uk-nav-header">Header</li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.uk-offcanvas-bar{
    background: rgb(4, 169, 97);
    padding:0px;    
}
.uk-nav li{
    width:100%;  margin:0px;
}
</style>
