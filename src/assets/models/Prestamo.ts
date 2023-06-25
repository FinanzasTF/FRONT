export class Prestamo {
    anualidad!: number
    fechasEmision: string[] = []
    fechasVencimiento: string[] = []
    tasaCalculo!: number;
    constructor(
        public tasaEfectivaAnual: string,
        public frecuenciaPago: string,
        public fechaPrestamo: Date,
        public unidadTiempo: string,
        public duracionPrestamo: string,
        public montoPrestamo: string,
        public MontoBonoFondoMiVivienda: string,
        public TipoTasa: string
    ) { }

    //crea las fechas de emision y vencimiento
    mostrar() {
        this.fechasEmision = []
        this.fechasVencimiento = []
        switch (this.frecuenciaPago) {
            case "Quincenal": this.agregarDias(15); break;
            case "Mensual": this.agregarMeses(1); break;
            case "Bimestral": this.agregarMeses(2); break;
            case "Trimestral": this.agregarMeses(3); break;
            case "Cuatrimestral": this.agregarMeses(4); break;
            case "Semestral": this.agregarMeses(6); break;
            case "Anual": this.agregarMeses(12); break;
        }
    }

    //agrega días, solo aplica para cuando la frecuencia de pago es quincenal y carga las fechas de emision y vencimiento
    private agregarDias(cantidadDias: number): void {
        for (let i = 0; i < parseInt(this.duracionPrestamo); i++) {
            let fecha = new Date(this.fechaPrestamo)
            fecha.setDate(fecha.getDate() + cantidadDias)
            this.fechaPrestamo = fecha
            this.fechasEmision.push((fecha.getDate()) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear())
            let aux = new Date(fecha)
            aux.setDate(aux.getDate() + 10)
            this.fechasVencimiento.push((aux.getDate()) + "/" + (aux.getMonth() + 1) + "/" + aux.getFullYear())
        }
    }

    //agrega meses y carga las fechas de emision y vencimiento
    private agregarMeses(cantidadMeses: number): void {
        for (let i = 0; i < parseInt(this.duracionPrestamo); i++) {
            let fecha = new Date(this.fechaPrestamo)
            fecha.setMonth(fecha.getMonth() + cantidadMeses)
            this.fechaPrestamo = fecha
            this.fechasEmision.push((fecha.getDate()) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear())
            let aux = new Date(fecha)
            aux.setDate(aux.getDate() + 10)
            this.fechasVencimiento.push((aux.getDate()) + "/" + (aux.getMonth() + 1) + "/" + aux.getFullYear())
        }
    }

    //hace el calculo de la cuota
    calcular() {
        this.tasaToFrecuenciaPago()
        
        if(this.MontoBonoFondoMiVivienda!==''){
            let a = parseInt(this.montoPrestamo) - parseInt(this.MontoBonoFondoMiVivienda)
            this.montoPrestamo = a.toString()
        }

        this.anualidad = ((parseInt(this.montoPrestamo)) * (this.tasaCalculo)) /
            (1 - (1 + (this.tasaCalculo)) ** (parseFloat(this.duracionPrestamo) * -1))
    }

    //convierte la duracion del prestamos a la unidad en la que se encuentra la frecuencia de pago
    //solo se debe usar una vez porque, este modifica un atributo de la clase
    public duracionPrestamoToFrecuenciaPago() {
        const duracionPrestamoNum = parseInt(this.duracionPrestamo);

        if (this.unidadTiempo === "Años") {
            switch (this.frecuenciaPago) {
                case "Quincenal":
                    this.duracionPrestamo = (duracionPrestamoNum * 26).toString(); // 26 quincenas en un año
                    break;
                case "Mensual":
                    this.duracionPrestamo = (duracionPrestamoNum * 12).toString(); // 12 meses en un año
                    break;
                case "Bimestral":
                    this.duracionPrestamo = (duracionPrestamoNum * 6).toString(); // 6 bimestres en un año
                    break;
                case "Trimestral":
                    this.duracionPrestamo = (duracionPrestamoNum * 4).toString(); // 4 trimestres en un año
                    break;
                case "Cuatrimestral":
                    this.duracionPrestamo = (duracionPrestamoNum * 3).toString(); // 3 cuatrimestres en un año
                    break;
                case "Semestral":
                    this.duracionPrestamo = (duracionPrestamoNum * 2).toString(); // 2 semestres en un año
                    break;
                case "Anual":
                    break; // Duración del préstamo ya está en años
            }
        } else if (this.unidadTiempo === "Meses") {
            switch (this.frecuenciaPago) {
                case "Quincenal":
                    this.duracionPrestamo = (duracionPrestamoNum / 24).toString(); // 24 quincenas en un año (considerando 2 quincenas por mes)
                    break;
                case "Mensual":
                    break; // Duración del préstamo ya está en meses
                case "Bimestral":
                    this.duracionPrestamo = (duracionPrestamoNum / 2).toString(); // 2 bimestres en un año (considerando 2 meses por bimestre)
                    break;
                case "Trimestral":
                    this.duracionPrestamo = (duracionPrestamoNum / 4).toString(); // 4 trimestres en un año (considerando 3 meses por trimestre)
                    break;
                case "Cuatrimestral":
                    this.duracionPrestamo = (duracionPrestamoNum / 3).toString(); // 3 cuatrimestres en un año (considerando 4 meses por cuatrimestre)
                    break;
                case "Semestral":
                    this.duracionPrestamo = (duracionPrestamoNum / 6).toString(); // 6 semestres en un año (considerando 6 meses por semestre)
                    break;
                case "Anual":
                    this.duracionPrestamo = (duracionPrestamoNum / 12).toString(); // 12 meses en un año
                    break;
            }
        }
    }


    //convierte la tasa a la unidad en la que está la frecuencia de pago
    //solo se debe usar una vez porque, este modifica un atributo de la clase
    public tasaToFrecuenciaPago() {
        this.tasaCalculo = this.convertirStringAPorcentaje()
        let tasaTemp = 0;
        switch (this.TipoTasa) {
            case "Mensual":
                tasaTemp = 12;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.tasaCalculo; break;
                    case "Bimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,6); break;
                    case "Trimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,4); break;
                    case "Cuatrimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,3); break;
                    case "Semestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,2); break;
                    case "Anual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,1); break;
                }
                break;
            case "Bimestral":
                tasaTemp = 6;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,12); break;
                    case "Bimestral": this.tasaCalculo = this.tasaCalculo; break;
                    case "Trimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,4); break;
                    case "Cuatrimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,3); break;
                    case "Semestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,2); break;
                    case "Anual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,1); break;
                }
                break;
            case "Trimestral":
                tasaTemp = 4;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,12); break;
                    case "Bimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,6); break;
                    case "Trimestral": this.tasaCalculo = this.tasaCalculo; break;
                    case "Cuatrimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,3); break;
                    case "Semestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,2); break;
                    case "Anual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,1); break;
                }
                break;
            case "Cuatrimestral":
                tasaTemp = 3;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,12); break;
                    case "Bimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,6); break;
                    case "Trimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,4); break;
                    case "Cuatrimestral": this.tasaCalculo = this.tasaCalculo; break;
                    case "Semestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,2); break;
                    case "Anual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,1); break;
                }
                break;
            case "Semestral":
                tasaTemp = 2;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,12); break;
                    case "Bimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,6); break;
                    case "Trimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,4); break;
                    case "Cuatrimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,3); break;
                    case "Semestral":this.tasaCalculo = this.tasaCalculo; break;
                    case "Anual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,1); break;
                }
                break;
            case "Anual":
                tasaTemp = 1;
                switch (this.frecuenciaPago) {
                    case "Mensual": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,12); break;
                    case "Bimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,6); break;
                    case "Trimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,4); break;
                    case "Cuatrimestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,3); break;
                    case "Semestral": this.tasaCalculo = this.convertirTasa(this.tasaCalculo,tasaTemp,2); break;
                    case "Anual": this.tasaCalculo = this.tasaCalculo; break;
                }
                break;
        }
    }

    //formula de la anualidad
    private convertirTasa(tasaConocida: number, capAnuales: number, capBUscadas: number) {
        let tasa = (1 + tasaConocida) ** (capAnuales / capBUscadas) - 1
        return tasa
    }

    //convierte el numero ingresado en porcentaje a su valor decimal
    public convertirStringAPorcentaje() {
        const porcentaje = parseFloat(this.tasaEfectivaAnual.replace('%', ''));
        return porcentaje / 100;
    }
}