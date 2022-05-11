<template>
    <div class="row">
        <div class="col-12 b-4 mt-2">
            <router-link :to='{name:"crearTienda"}' class="btn btn-success">Nueva</router-link>
        </div>

        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-boder">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>direccion</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tienda in tiendas" :key="tienda.id">
                            <td>{{tienda.id}}</td>
                            <td>{{tienda.nombre}}</td>
                            <td>{{tienda.direccion}}</td>
                            <td>
                                <router-link :to='{name:"editarTienda", params:{id:tienda.id}}' class="btn btn-info">Editar</router-link>
                                <a type="button" @click="borrarTienda(tienda.id)" class="btn btn-danger">eliminar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"tiendas",
        data(){
            return{
                tiendas:[],
            }
        },
        mounted(){
            this.mostrarTiendas();
        },
        methods:{
            async mostrarTiendas(){
                await this.axios.get('/api/tienda')
                .then(response => {
                    this.tiendas = response.data;
                })
                .catch(error => {
                    this.tiendas =[];
                });
            },
            borrarTienda(id){
                if (confirm("¿Esta seguro de eliminar?")){
                    this.axios.delete('/api/tienda/'+id)
                    .then(response => {
                        this.mostrarTiendas();
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            }
        }
     }
</script>
