<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link active" href="/"
                    >Inicio
                    <span class="visually-hidden">(current)</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/tiendas">Tiendas</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/contacto">Contacto</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>

    <div class="container">
        <router-view></router-view>
    </div>
  </main>
</template>
