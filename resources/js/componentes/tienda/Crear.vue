<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h2>Crear tienda</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="crearTienda">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label for="nombre">Nombre de la tienda</label>
                                        <input type="text" class="form-control" id="nombre" name="nombre" v-model="tienda.nombre" placeholder="Nombre de la tienda">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-floating">
                                        <label for="direccion">direccion de la tienda</label>
                                        <input type="text" class="form-control" id="direccion" name="direccion" v-model="tienda.direccion" placeholder="direccion">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <button type="submit" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'crear-tienda',
        data(){
            return{
                tienda:{
                    nombre:'',
                    direccion:''
                    }
                }
        },
        methods:{
            async crearTienda(){
                await this.axios.post('/api/tienda', this.tienda)
                    .then(response => {
                        this.$router.push({name:"mostrarTiendas"});
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
