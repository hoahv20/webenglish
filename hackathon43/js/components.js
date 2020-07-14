let components = {};

components.signUp = `
<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container" id="sign-up-container">
        <div class="card login-card">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img src="./img/signup-img.jpg" alt="login" class="login-card-img">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <div class="brand-wrapper">
                            <a href="#!" id="home-page-container">
                                <img src="./img/logoefun.png" alt="logo" class="logo">
                            </a>
                        </div>
                        <p class="login-card-description">ĐĂNG KÝ TÀI KHOẢN</p>
                        <form action="#!" id="form-sign-up">
                            <div class="form-group" id="name-field">
                                <label for="name" class="sr-only">Name</label>
                                <input name="name" id="name" class="form-control" placeholder="Your name">
                            </div>
                            <div class="message-error" id="name-error"></div>
                            <div class="form-group">
                                <label for="email" class="sr-only">Email</label>
                                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="message-error" id="email-error"></div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Password</label>
                                <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu">
                            </div>
                            <div class="message-error" id="password-error"></div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Confirm Password</label>
                                <input type="password" name="passwordConfirmation" id="confirm_password" class="form-control" placeholder="Xác nhận mật khẩu">
                            </div>
                            <div class="message-error" id="password-confirmation-error"></div>
                            <button name="signUp" id="sign-up-btn" class="btn btn-block signup-btn mb-4" >Đăng ký</button>
                            <div class="message-error" id="sign-up-error"></div>
                            <div class="message-success" id="sign-up-success"></div>
                        </form>
                        <p class="login-card-footer-text">Bạn đã đăng kí tài khoản?<a href="#!" id="sign-in-link" class="text-reset" style="color: orange !important;"> Cùng EFUN học nào!</a></p>
                        <nav class="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <br>
                            <a href="#!">Privacy policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
`

components.signIn = `
<div class="container" id="sign-in-container">
    <div class="card login-card">
        <div class="row no-gutters">
            <div class="col-md-5">
                <img src="./img/login-img.jpg" alt="login" class="login-card-img">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <a href="#" class="brand-wrapper" id="home--page--link">
                        <img src="./img/logoefun.png" alt="logo" class="logo">
                    </a>
                    <p class="login-card-description">ĐĂNG NHẬP TÀI KHOẢN</p>
                    <form action="#!" id="form-sign-in">
                        <div class="form-group">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="message-error" id="email-error"></div>
                        <div class="form-group mb-4">
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="message-error" id="password-error"></div>
                        <button id="login-btn" class="btn btn-block login-btn mb-4">Đăng nhập</button>
                        <div class="message-error" id="sign-in-error"></div>
                    </form>
                    <a href="#!" class="forgot-password-link">Bạn quên mật khẩu?</a>
                    <p class="login-card-footer-text">Tạo tài khoản mới? <a href="#!" class="text-reset" style="color: orange !important;" id="sign--up"> Đi theo EFUN nào!</a></p>
                    <nav class="login-card-footer-nav">
                        <a href="#!">Terms of use.</a>
                        <a href="#!">Privacy policy</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`
components.homePage = `
<div id="home-page-content">
    <!--Navbar -->
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-light sticky-top scrolling-navbar">
        <a class="navbar-brand" href="#"><img src="./img/logoefun.png" alt="LOGO" height="30"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-dark"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item active">
                <a class="nav-link" id="home-page-container" href="#home" style="color: orange !important;">TRANG CHỦ
                    <span class="sr-only">(current)</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#EFUN">EFUN <i class="fas fa-star" style="color:red !important;"></i></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#IDOLS">IDOLS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">BLOGS</a>
                </li>
                <button class="btn btn-link" id="sign-up-link" type="button" onclick="#">HỌC MIỄN PHÍ</button>
                
            </ul>
        </div>
    </nav>
    <!--/.Navbar -->

    <!-- header -->
    <!-- <div id="carousel-example-1z" class="carousel slide carousel-fade">

    <div class="carousel-inner" role="listbox"> -->

    <div class="view">
        <img class="d-block w-100" src="./img/cover-web.jpg" alt="LOGO">
    </div>
    <div class="container" id="home">
        <section class="section pb-3 text-center">

        <!--Section heading-->
        <h1 class="section-heading h1 pt-4">Tại sao bạn nên học tại <b style="color: orange !important;">EFUN ?</b>
        </h1>
        <!--Section description-->
        <p class="section-description">EFUN đang xây dựng một cộng đồng học tiếng anh miễn phí. Không chỉ giúp cho
            những
            người đi làm, không có nhiều thời gian mà còn giúp cho những học sinh, sinh viên không
            có điều kiện được học tập và luyện thi IELTS tại các trung tâm chất lượng.</p>

        <div class="row">

            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4">

            <!--Card-->
            <div class="card testimonial-card">

                <!--Background color-->
                <div class="card-up teal lighten-2">
                </div>

                <!--Avatar-->
                <div class="avatar mx-auto white"><img src="./img/support.jpg" alt="avatar mx-auto white"
                    class="img-fluid">
                </div>

                <div class="card-body">
                <!--Name-->
                <h4 class="card-title mt-1">HỖ TRỢ 24/7</h4>
                <hr>
                <!--Quotation-->
                <p> Luôn hỗ trợ người học
                    một cách nhanh chóng, dễ hiểu</p>
                </div>

            </div>
            <!--Card-->

            </div>
            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4">

            <!--Card-->
            <div class="card testimonial-card">

                <!--Background color-->
                <div class="card-up teal lighten-2">
                </div>

                <!--Avatar-->
                <div class="avatar mx-auto white"><img src="./img/studyfree.jpg" alt="avatar mx-auto white"
                    class="img-fluid">
                </div>

                <div class="card-body">
                <!--Name-->
                <h4 class="card-title mt-1">HỌC MIỄN PHÍ</h4>
                <hr>
                <!--Quotation-->
                <p>Học tập hay luyện thi
                    hoàn toàn miễn phí với
                    hàng nghìn đề ôn tập.</p>
                </div>

            </div>
            <!--Card-->

            </div>
            <div class="col-lg-4 col-md-12 mb-4">

            <!--Card-->
            <div class="card testimonial-card">

                <!--Background color-->
                <div class="card-up teal lighten-2">
                </div>

                <!--Avatar-->
                <div class="avatar mx-auto white"><img src="./img/lesson.jpg" alt="avatar mx-auto white"
                    class="img-fluid">
                </div>

                <div class="card-body">
                <!--Name-->
                <h4 class="card-title mt-1">BÀI GIẢNG CHẤT LƯỢNG</h4>
                <hr>
                <!--Quotation-->
                <p>Cung cấp các bài giảng
                    liên quan và các skills
                    quan trọng để làm
                    bài thi.</p>
                </div>

            </div>
            <!--Card-->

        </div>
    </div>

    </section>
    <div class="container" id="IDOLS">
    <section class="section pb-3 text-center">

        <!--Section heading-->
        <h1 class="section-heading h1 pt-4">Gương mặt thương hiệu <b style="color: orange !important;">EFUN</b>
        </h1>
        <!--Section description-->
        <div class="row">
        <div class="col-md-12 col-6 mt-5">
            <img alt="Hà Linh" style="width:128px" class="rounded-circle" src="./img/linh.jpg">
            <h5 class="pos mt-4">Linh Nguyễn</h5>
            <span>Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/quan.jpg">
            <h5 class="pos mt-4">Hoàng Văn Hòa</h5>
            <span>Co-Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/phuong.jpg">
            <h5 class="pos mt-4">Nguyễn Huy Hiếu</h5>
            <span>Co-Founder</span>
        </div>
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/ly.jpg">
            <h5 class="pos mt-4">Nguyễn Phương Ly</h5>
            <span>Employee Experience</span>
        </div>
        </div>
        <div class="row">
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/tee.jpg">
            <h5 class="pos mt-4">Nguyễn Thanh Tuấn</h5>
            <span>Developer</span>
        </div>
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/tung.jpg">
            <h5 class="pos mt-4">Nguyễn Thanh Tùng</h5>
            <span>Leader Team</span>
        </div>
        <div class="col-md-4 col-6 mt-5">
            <img alt="Phuong pham" style="width:128px" class="rounded-circle" src="./img/son.jpg">
            <h5 class="pos mt-4">Nguyễn Hoàng Sơn</h5>
            <span>IT Administrator</span>
        </div>
        </div>
    </section>
    </div>

    <section class="switchable switchable--switch feature-large mt-5" id="EFUN">
    <div class="container">
        <div class="row justify-content-center pb-5">
        <div class="col-md-8">
            <h1 class="text-center"><b style="color: orange !important;">EFUN</b> sở hữu những gì?</h1>
        </div>
        </div>
        <div class="row text-center">
        <div class="col-md-3 mb-5">
            <i class="fas fa-trophy" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="25" data-speed="1500">25</span>
            </h2>
            <p>Giấy chứng nhận đạt chuẩn</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fas fa-handshake" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="35" data-speed="1500">35</span>
            </h2>
            <p>Đối tác</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fab fa-readme" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="1000"
                data-speed="1500">1000</span>
            </h2>
            <p>Bài giảng chất lượng</p>
        </div>
        <div class="col-md-3 mb-5">
            <i class="fas fa-users" style="font-size: 100px;"></i>
            <h2>+
            <span class="timer count-title count-number" data-from="0" data-to="1500"
                data-speed="1500">1500</span>
            </h2>
            <p>Người truy cập</p>
        </div>
        </div>
    </div>
    </section>


    <!-- Footer -->
    <footer class="page-footer font-small special-color-dark pt-4">
    <div class="footer-copyright text-center py-3">
        <blockquote style="font-size:30px; font-style: italic; color:gray !important;">"Stay hungry, stay foolish."
        </blockquote>
        <p style="font-weight: bold;">Steve Job</p>
        <span>CEO Apple Inc</span>
    </div>
    <div class="container">
        <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
            <i class="fab fa-facebook-f"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
            <i class="fab fa-twitter"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
            <i class="fab fa-google-plus-g"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
            <i class="fab fa-linkedin-in"> </i>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
            <i class="fab fa-dribbble"> </i>
            </a>
        </li>
        </ul>
    </div>
    <div class="footer-copyright text-center py-3">
        <span class="type--fine-print">Made with &nbsp;&nbsp;<span
            style="font-size: 30px; vertical-align: middle;">⌨️</span>
        &nbsp; and &nbsp;
        <span style="font-size: 30px; vertical-align: middle;">🙌</span>
        </span>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">EFUN ENGLISH</a>
    </div>
    </footer>
    <!-- Footer -->
</div>
`