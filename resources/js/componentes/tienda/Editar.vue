<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h2>editar tienda</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="editar" >
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
        name: 'editar-tienda',
        data(){
            return{
                tienda:{
                    nombre:"",
                    direccion:""
                    }
                }
        },
        mounted(){
            this.mostrarTiendas();
        },
        methods:{
            async mostrarTiendas(){
                await this.axios.get('/api/tienda/'+this.$route.params.id)
                .then(response => {
                    const {nombre, direccion} = response.data;
                    this.tienda.nombre = nombre;
                    this.tienda.direccion = direccion;
                })
                .catch(error => {
                    console.log(error)
                });
            },
            async editar(){
                await this.axios.put(`/api/tienda/${this.$route.params.id}`,this.tienda)
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
