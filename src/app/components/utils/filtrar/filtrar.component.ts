import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { MultimediaVista } from '../../../dto/multimedia-vista';
import { ApiComunicationService } from '../../../services/api-comunication.service';
import { UpdateData } from '../../../services/update-data';
import { Multimedia } from '../../../model/multimedia';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrl: './filtrar.component.css',
})
export class FiltrarComponent {
  //-----------------------------------------------------DECLARACION-----------------------------------------------------

  constructor(
    private servicio: ApiComunicationService,
    private servicioConfig: UpdateData
  ) {}

  @Input() multimediasPura!: MultimediaVista[] | Multimedia[];
  @Input() modo: string = '';
  @Output() filtrado = new EventEmitter<MultimediaVista[] | Multimedia[]>();

  //Lista que luego se devolvera
  multimediasFiltradas: MultimediaVista[] | Multimedia[] = [];

  //Variable para enseñar el menu de filtrar
  menuFiltrar: boolean = false;
  menuOrdenar: boolean = false;
  verMultimedias: boolean = true;

  //Esta variable es para que solo se ejecute una vez al iniciarse la app
  primeraVez: boolean = true;

  //-----------------------------------------------------INICIALIZAR-----------------------------------------------------

  //Variables para el menu de filtrado
  tipos: string[] = [];
  generos: string[] = [];
  plataformas: string[] = [];
  estados: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.multimediasPura.length > 0 && this.primeraVez && this.modo) {
      this.verMultimedias = this.modo === 'multimedia';
      this.multimediasFiltradas = this.multimediasPura.sort(
        (
          multimedia1: Multimedia | MultimediaVista,
          multimedia2: Multimedia | MultimediaVista
        ) => this.defaultOrder(multimedia1, multimedia2)
      );
      this.filtrado.emit(this.multimediasFiltradas);
      this.primeraVez = false;
      this.inicializarOrdenar();
    }
  }

  ngOnInit(): void {
    this.getTipos();
    this.getGeneros();
    this.getPlataformas();
    this.getEstados();
  }

  getEstados() {
    this.estados = ['Acabada', 'Continuara', 'En Emision', 'Sin Acabar'];
  }

  getTipos() {
    this.servicioConfig.getPlataformas().subscribe((response: string) => {
      this.tipos = response.split('\n')[2].split(',');
    });
  }

  getGeneros() {
    this.servicioConfig.getPlataformas().subscribe((response: string) => {
      this.generos = response.split('\n')[0].split(',');
    });
  }

  getPlataformas() {
    this.servicioConfig.getPlataformas().subscribe((response: string) => {
      this.plataformas = response.split('\n')[1].split(',');
    });
  }

  //-----------------------------------------------------FILTRAR-----------------------------------------------------

  //Variables de filtrado
  nombreF: string = '';
  tipoF: string = 'Todos';
  generoF: string = 'Todos';
  plataformaF: string = 'Todas';
  estadoF: string = 'Todos';
  notaF1: string = '';
  notaF2: string = '';
  notaMode: string = 'eq';
  fechaF1!: Date | undefined;
  fechaF2!: Date | undefined;
  fechaMode: string = 'eq';
  variasFechas: boolean = false;
  variasNotas: boolean = false;

  filtrar() {
    this.multimediasFiltradas = this.multimediasPura;
    if (this.verMultimedias) {
      this.multimediasFiltradas = (this.multimediasPura as Multimedia[]).filter(
        (multimedia: Multimedia) => {
          if (this.tipoF !== 'Todos' && multimedia.tipo !== this.tipoF)
            return false;
          if (
            this.nombreF &&
            !multimedia.nombre
              .toLowerCase()
              .includes(this.nombreF.toLowerCase())
          )
            return false;
          if (this.generoF !== 'Todos' && multimedia.genero !== this.generoF)
            return false;
          if (
            this.plataformaF !== 'Todas' &&
            multimedia.plataforma !== this.plataformaF
          )
            return false;
          if (
            this.estadoF !== 'Todos' &&
            !multimedia.estado.includes(this.estadoF)
          )
            return false;
          return true;
        }
      );
    }

    if (!this.verMultimedias) {
      let notaF1Aux = parseFloat(this.notaF1);
      let notaF2Aux = parseFloat(this.notaF2);
      let fechaF1Aux = this.fechaF1 ? new Date(this.fechaF1) : null;
      let fechaF2Aux = this.fechaF2 ? new Date(this.fechaF2) : null;

      this.multimediasFiltradas = (
        this.multimediasFiltradas as MultimediaVista[]
      ).filter(
        (
          multimedia: MultimediaVista,
          index: number,
          array: MultimediaVista[]
        ) => {
          if (this.tipoF !== 'Todos' && multimedia.tipo !== this.tipoF)
            return false;
          if (
            this.nombreF &&
            !multimedia.nombre
              .toLowerCase()
              .includes(this.nombreF.toLowerCase())
          )
            return false;
          if (this.generoF !== 'Todos' && multimedia.genero !== this.generoF)
            return false;
          if (
            this.plataformaF !== 'Todas' &&
            multimedia.plataforma !== this.plataformaF
          )
            return false;
          if (
            this.estadoF !== 'Todos' &&
            !multimedia.estado.includes(this.estadoF)
          )
            return false;

          if (this.notaF1) {
            if (this.notaMode === 'eq' && multimedia.nota != notaF1Aux)
              return false;
            else if (this.notaMode === 'lt' && multimedia.nota >= notaF1Aux)
              return false;
            else if (this.notaMode === 'gt' && multimedia.nota <= notaF1Aux)
              return false;
            else if (
              this.notaMode === 'bt' &&
              this.notaF2 &&
              (multimedia.nota < notaF1Aux || multimedia.nota > notaF2Aux)
            )
              return false;
          }

          if (fechaF1Aux) {
            if (
              this.fechaMode === 'eq' &&
              multimedia.fechaAcabado.getTime() != fechaF1Aux.getTime()
            )
              return false;
            else if (
              this.fechaMode === 'lt' &&
              multimedia.fechaAcabado.getTime() >= fechaF1Aux.getTime()
            )
              return false;
            else if (
              this.fechaMode === 'gt' &&
              multimedia.fechaAcabado.getTime() <= fechaF1Aux.getTime()
            )
              return false;
            else if (
              this.fechaMode === 'bt' &&
              fechaF2Aux &&
              (multimedia.fechaAcabado.getTime() < fechaF1Aux.getTime() ||
                multimedia.fechaAcabado.getTime() > fechaF2Aux.getTime())
            )
              return false;
          }
          if (
            this.notaF1 &&
            this.notaF2 &&
            this.notaMode === 'bt' &&
            (multimedia.nota < notaF1Aux || multimedia.nota > notaF2Aux)
          )
            return false;

          return true;
        }
      );
    }
    this.ordenar();
  }

  filtroMultiple(opcion: string, tipo: string) {
    if (tipo === 'nota') {
      this.variasNotas = false;
      if (opcion === 'bt') {
        this.notaMode = 'bt';
        this.variasNotas = true;
      } else if (opcion === 'gt') this.notaMode = 'gt';
      else if (opcion === 'lt') this.notaMode = 'lt';
      else if (opcion === 'eq') this.notaMode = 'eq';
    } else {
      this.variasFechas = false;
      if (opcion === 'bt') {
        this.fechaMode = 'bt';
        this.variasFechas = true;
      } else if (opcion === 'gt') this.fechaMode = 'gt';
      else if (opcion === 'lt') this.fechaMode = 'lt';
      else if (opcion === 'eq') this.fechaMode = 'eq';
    }
    this.filtrar();
  }

  borrarFiltro() {
    this.nombreF = '';
    this.tipoF = 'Todos';
    this.generoF = 'Todos';
    this.plataformaF = 'Todas';
    this.estadoF = 'Todos';
    this.notaF1 = '';
    this.notaF2 = '';
    this.fechaF1 = undefined; // Asignar undefined para eliminar el valor de fecha
    this.fechaF2 = undefined; // Asignar undefined para eliminar el valor de fecha
    this.filtrar();
  }

  //-----------------------------------------------------ORDENAR-----------------------------------------------------

  //Variables para el ordenado
  vOrdenar!: string[];
  ordenarArray!: string[];
  ascendente!: boolean[];

  inicializarOrdenar() {
    if (this.verMultimedias) {
      this.vOrdenar = ['Nombre', 'Tipo', 'Estado'];
      this.ordenarArray = ['Seleccionar', 'Seleccionar', 'Seleccionar'];
      this.ascendente = [false, false, false];
    } else if (!this.verMultimedias) {
      this.vOrdenar = ['Nombre', 'Tipo', 'Estado', 'Fecha acabado', 'Nota'];
      this.ascendente = [false, false, false, false, false];
      this.ordenarArray = [
        'Seleccionar',
        'Seleccionar',
        'Seleccionar',
        'Seleccionar',
        'Seleccionar',
      ];
    }
  }

  ordenar() {
    if (this.verMultimedias)
      this.multimediasFiltradas = (
        this.multimediasFiltradas as Multimedia[]
      ).sort((multimedia1: Multimedia, multimedia2: Multimedia) =>
        this.ordenarListaMultimedias(multimedia1, multimedia2)
      );
    else if (!this.verMultimedias)
      this.multimediasFiltradas = (
        this.multimediasFiltradas as MultimediaVista[]
      ).sort((multimedia1: MultimediaVista, multimedia2: MultimediaVista) =>
        this.ordenarListaVistas(multimedia1, multimedia2)
      );

    this.filtrado.emit(this.multimediasFiltradas);
  }

  defaultOrder(
    multimedia1: MultimediaVista | Multimedia,
    multimedia2: MultimediaVista | Multimedia
  ): number {
    if (multimedia1.tipo === multimedia2.tipo) {
      if (this.verMultimedias)
        return multimedia1.nombre.localeCompare(multimedia2.nombre);
      else if (!this.verMultimedias)
        return (
          (multimedia2 as MultimediaVista).nota -
          (multimedia1 as MultimediaVista).nota
        );
    }
    return multimedia1.tipo.localeCompare(multimedia2.tipo);
  }

  ordenarListaVistas(
    multimedia1: MultimediaVista,
    multimedia2: MultimediaVista
  ): number {
    let ordenar: number = 0;
    for (let i = 0; i < this.ordenarArray.length; i++) {
      if (this.ordenarArray[i] === 'Seleccionar') {
        break;
      }
      let ordenarAux1: string =
        this.ordenarArray[i] === 'Fecha acabado'
          ? 'fechaAcabado'
          : this.ordenarArray[i].trim().toLowerCase();

      let prop1 = multimedia1[ordenarAux1];
      let prop2 = multimedia2[ordenarAux1];

      if (ordenarAux1 === 'nombre') {
        prop1 = prop1 as string;
        prop2 = prop2 as string;
        if (this.esSimboloOInicioNumero(prop1)) {
          ordenar = 1;
        } else if (this.esSimboloOInicioNumero(prop2)) {
          ordenar = -1;
        } else {
          ordenar = prop1.localeCompare(prop2);
        }
      } else if (typeof prop1 === 'string')
        ordenar = prop1.localeCompare(prop2 as string);
      else if (typeof prop1 === 'number') ordenar = prop1 - (prop2 as number);
      else if (prop1 instanceof Date)
        ordenar = prop1.getTime() - (prop2 as Date).getTime();
      else
        throw new Error(
          'Error-> ' + this.ordenarArray[i] + i + ' tiene un tipo no soportado'
        );

      //Controlamos si es ascendente o descendente
      if (this.ascendente[i]) {
        ordenar *= -1;
      }
      //Si no es igual a 0, es que ya hemos ordenado
      if (ordenar !== 0) {
        break;
      }
    }
    return ordenar;
  }

  ordenarListaMultimedias(
    multimedia1: Multimedia,
    multimedia2: Multimedia
  ): number {
    let ordenar: number = 0;
    for (let i = 0; i < this.ordenarArray.length; i++) {
      if (this.ordenarArray[i] === 'Seleccionar') {
        break;
      }
      let ordenarAux1: string = this.ordenarArray[i].trim().toLowerCase();

      let prop1 = multimedia1[ordenarAux1];
      let prop2 = multimedia2[ordenarAux1];

      if (ordenarAux1 === 'nombre') {
        prop1 = prop1 as string;
        prop2 = prop2 as string;
        if (this.esSimboloOInicioNumero(prop1)) {
          ordenar = 1;
        } else if (this.esSimboloOInicioNumero(prop2)) {
          ordenar = -1;
        } else {
          ordenar = prop1.localeCompare(prop2);
        }
      } else if (typeof prop1 === 'string') {
        prop2 = prop2 as string;
        ordenar = prop1.localeCompare(prop2);
      }

      //Controlamos si es ascendente o descendente
      if (this.ascendente[i]) {
        ordenar *= -1;
      }
      //Si no es igual a 0, es que ya hemos ordenado
      if (ordenar !== 0) {
        break;
      }
    }
    return ordenar;
  }

  esSimboloOInicioNumero = (str: string) => {
    return !str.charAt(0).match(/[A-Za-z]/);
  };

  borrarOrdenar() {
    this.ordenarArray = [
      'Seleccionar',
      'Seleccionar',
      'Seleccionar',
      'Seleccionar',
      'Seleccionar',
    ];
    this.ascendente = [false, false, false, false, false];
    this.multimediasFiltradas = this.multimediasFiltradas as MultimediaVista[];
  }
}
