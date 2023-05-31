<template>
    <footer>

        <div>
        
            <hr class="info mt-5">
            <div class="d-flex justify-content-between ">
                <div><img src="../img/valve.png" alt="" class="logos"></div>
                <div><img src="../img/steam-logo.jpeg" alt="" class="logos"></div>
            </div>

            <div class="info corp">© 2023 Valve Corporation. Tutti i diritti riservati. Tutti i marchi appartengono ai
                rispettivi
                proprietari
                negli Stati Uniti e negli altri paesi.
                IVA inclusa nel prezzo (ove applicabile).
            </div>

            <ul class="nav info justify-content-center">

                <li class="nav-item">
                    <a class="nav-link" href="#">Informativa sulla privacy </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#"> Informazioni legali </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#"> Contratto di sottoscrizione a Steam </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Rimborsi </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Cookie </a>
                </li>

            </ul>


            <hr class="info">
            <div class=" mb-5">
                <ul class=" info nav justify-content-center">

                    <li class="nav-item">
                        <a class="nav-link" href="#">Informazioni su Valve</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Impieghi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Steamworks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Distribuzione su Steam</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Assistenza</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Buoni Regalo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> fb Steam</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">tw @steam</a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
</template>


<script>
export default {
    name: 'AppFooter'

}
</script>

<style scoped>
footer {
    width: 1520px;
    background-color: #171a21;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    /* è fixed in basso solo per una facilitazione grafica, nella fase finale va tolto (opzionale) */
}

.logos {
    width: 150px;
    height: 50px;
}

.info {
    color: white;
}

.corp {
    display: flex;
    justify-content: center;
    padding: 10px;

}
</style>
