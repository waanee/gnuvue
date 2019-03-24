<template>
    <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>


            <h3>Title</h3>

            
            <div class="uk-width-1-2@s uk-width-2-5@m">
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-active"><router-link to='/'>main</router-link></li>
                    <li>
                        <router-link to='/about'>about</router-link>
                    </li>
                    <li>
                        <router-link to='/bbs'>bbs</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
