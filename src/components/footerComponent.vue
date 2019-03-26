<template>
<div>
    <footer>
        <div class="container">
            <div class="copyright">
                copyright &copy; TEMAMOA All Rights Reserved.
            </div>
        </div>
    </footer>

    <div id="footer-bottom">
        <div class="item">
            <router-link to="/">home</router-link>
        </div>
        <div class="item">
            <router-link to="/bbs">bbs</router-link>
        </div>
        <div class="item">
            <router-link to="/about">about</router-link>
        </div>
        <div class="item">
            <router-link to="/setting">setting</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    margin-top:20px;
}
footer .copyright {
    border-top:1px solid #d3d3d3;
    padding:20px 0px;
    text-align: center;
    font-size: 14px;
}

#footer-bottom {
    display:none;
    position: fixed;
    bottom:0px;
    left:0px;
    width:100%;
    border-top:1px solid #d3d3d3;
    background: #fff;
}

#footer-bottom .item {
    float: left;
    width:25%;
    padding:10px 0px;
    text-align: center;
}

@media (max-width: 767px){
    #footer-bottom {display: block;}
}
</style>
