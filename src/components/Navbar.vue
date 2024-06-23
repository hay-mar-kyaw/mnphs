<template>
    <div>
        <div class="sticky-top">
            <nav class="bg-success">
                <div class="container navbarContainer">
                    <div class="row">
                        <div class="col-6">
                            <small class="text-white">
                                <span class="d-none d-md-inline d-inline-block "><font-awesome-icon :icon="['fas','envelope']"/>&nbsp;&nbsp;myonyuntmath.mm@gmail.com</span>
                                <span class="ps-3 "><font-awesome-icon :icon="['fas','phone']"/>&nbsp;&nbsp;09777732030</span>
                            </small>
                        </div >
                        <div class="col-6 text-end">
                            <small class="text-white">
                                Follow Us &nbsp;
                            <a href="" class="text-white ps-2"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                            <a href="" class="text-white ps-2"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                            <a href="" class="text-white ps-2"><font-awesome-icon :icon="['fab', 'viber']" /></a>
                        </small>
                        </div>

                    </div>
                </div>  
                    <nav class=" navbar navbar-expand-md bg-white navbar-light bg-light ">
                    <div class="container">
                        <img src="../assets/images/logo.png" alt="" class="img-fluid logo-img">
                    <div>
                        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Mycollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="Mycollapse">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="promotion.html" class="nav-link">About Us</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link">News & Events</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </nav>
        </div>   
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components:{
        FontAwesomeIcon
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>