const app = new Vue({
    el: '#taskApp',
    data: {
        title: 'App de tareas',
        tareas: [{
            titulo: 'Tarea 1',
            estado: false
        },
        {
            titulo: 'Tarea 2',
            estado: false
        },
        {
            titulo: 'Tarea 3',
            estado: false
        }
    ]
    },
    methods: {
        eliminarTareas(tarea){
           this.tareas.splice(this.tareas.indexOf(tarea),1)
        },
        agregarTarea: function(e){
            e.preventDefault();
            this.tareas.push({
                titulo: this.tareas.titulo,
                estado: false
            })
            this.tareas.titulo = "";
        }
    }
});