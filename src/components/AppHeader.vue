<template>
    <header class="text-white">
        <!--top right-->
        <div>
            <div class="box">
                <ul class=" nav  destra">
                    <li class="nav-item install">
                        <a class="nav-link color-text" href="#">Installa Steam</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-text" href="#">Accedi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-text" href="#">|</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle color-text" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Lingua
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">italiano</a></li>
                            <li><a class="dropdown-item" href="#">inglese</a></li>
                            <li><a class="dropdown-item" href="#">tedesco</a></li>
                        </ul>

                    </li>
                </ul>
                <!--top right-->
                <!-- center -->
                <ul class="nav justify-content-center cc">
                    <div>
                        <img class="logo" src="../img/steam-logo.jpeg" alt="">
                    </div>
                    <!-- s -->
                    <li class="nav-item">
                        <a class="nav-link active color-text" aria-current="page" href="#">NEGOZIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-text" href="#">INFORMAZIONI</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link color-text" href="#">ASSISTENZA</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link color-text" href="#">COMUNITA</a>
                    </li>
                </ul>
            </div>
            <!-- bottom header -->
            <div class="container_nav_header">
                <nav class="navbar navbar-expand-lg second-nav color-text">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav  ">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Il Tuo Negozio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Novità e Tendenze</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Categorie</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Negozio dei Punti</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Notizie</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Laboratori</a>
                                </li>
                                <form class="d-flex  ps-5" role="search">
                                    <div class="input-group">
                                        <input type="search" class="form-control  search" placeholder="Search"
                                            aria-label="Search" aria-describedby="basic-addon2">
                                        <span class="input-group-text  key" id="basic-addon2">@</span>
                                    </div>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    name: 'AppHeader'

}
</script>

<style scoped>
header {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.box {
    background-color: #171a21
}
.container_nav_header {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
}
.logo {
    width: 350px;
    height: 80px;
    padding-right: 50px;
}
.color-text {
    color: #fff;
    font-size: medium;
    font-weight: 400;
}
.search {
    background-color: #316282;
}
.key {
    background-color: #4f9ec9;
}
.cc {
    background-color: #171a21;
    display: flex;
    justify-content: center;
    align-items: center;
}
.second-nav {

    margin-top: 40px;
    background-image: linear-gradient(to right, rgba(26, 55, 121, 0.5), rgba(26, 55, 121, 1));

}
.destra {
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #171a21;
    color: #fff;

}
.topR {
    align-items: center;
    justify-content: center;
}
.install {
    background-color: #4B6A24;
}
</style>