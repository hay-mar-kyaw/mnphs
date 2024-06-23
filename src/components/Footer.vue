<template>
    <div>
        <footer class="bg-success container-fluid">
            <div class="container text_secondary py-3">
                <div class="row pt-2">
                    <div class="col-12 col-md-4">
                        <div class="layout">
                            <div>
                                <img src="../assets/images/logo.png" class="img-fluid" alt="">
                            </div>
                            <div class="p-2">
                                <h4 class="py-2">မျိုးညွန့်</h4>
                                <h6>ကိုယ်ပိုင်အထက်တန်းကျောင်း</h6>
                                <p>G-6 မှ G-12 အထိ သင်ကြားပေးပါသည်။</p>
                                <p>"မြေမျိုးမှန်၍ အပင်သန်ကြသည်။"</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-6 col-md-2 text-center">
                        <a href="" class="nav-link ps-5 py-2 text-white">Home</a>
                        <a href="" class="nav-link ps-5 py-2 text-white">About Us</a>
                        
                    </div>
                    <div class="col-6 col-md-2 text-center">
                        <a href="" class="nav-link ps-5 py-2 text-white">News & Events</a>
                        <a href="" class="nav-link ps-5 py-2 text-white">Contact Us</a>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="row">
                            <div class="col-1">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div class="col-11">
                                အမှတ်(၂၈၆)၊ ၃၃ လမ်း နှင့် ၈၄-၈၅ လမ်းကြား၊ မန်းတလေးမြို့။
                            </div>
                            <p class="py-1">
                                <i class="fa-solid fa-phone pe-2"></i>၀၉၇၇၇၇၃၂၀၃၃၊
                                ၀၉၇၇၇၇၃၂၀၃၀
                            </p>
                            <p class="py-1">
                                <i class="fa-solid fa-envelope pe-2"></i>myonyuntmath.mm@gmail.com
                            </p>
                            <p>
                                <i class="fa-brands fa-facebook fa-2x p-2"></i>
                                <i class="fa-brands fa-square-instagram fa-2x p-2"></i>
                                <i class="fa-brands fa-viber fa-2x p-2"></i>
                            </p>
                        </div>
                        
                    </div>
                    <hr>
                    <p class="text-center pt-3">Designed by @ Hay Mar Kyaw</p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .layout{
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 10px;
    }
</style>