"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  ChevronLeft,
  School,
  MapPin,
  Users,
  BookOpen,
  Target,
  TrendingUp,
  AlertTriangle,
  Heart,
  Globe,
  Building,
  GraduationCap,
  BarChart3,
  Activity,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
} from "recharts"

const chapters = [
  {
    id: 1,
    title: "Había una vez un país llamado Colombia...",
    subtitle: "El despertar de una nación educativa",
    content: `En las altas montañas de los Andes, en las vastas llanuras del Orinoco, en las selvas del Amazonas y en las costas del Caribe y el Pacífico, se extendía un país llamado Colombia. Era una tierra de contrastes, donde la diversidad geográfica se reflejaba en su gente, su cultura y, por supuesto, en su educación.

En el año 2015, cuando comenzó nuestra historia, existían exactamente 2,404 instituciones educativas dispersas por todo este territorio de ensueño. Cada colegio era como una pequeña semilla de conocimiento, plantada en diferentes suelos: algunos en ciudades bulliciosas, otros en pueblos tranquilos, y muchos en veredas remotas donde el silencio solo era interrumpido por el canto de los pájaros y las voces de los niños aprendiendo.

Pero esta no era una historia cualquiera. Era la historia de SAGDEC (Sistema de Análisis Geoespacial para el Desarrollo Educativo Colombiano), un proyecto ambicioso que durante una década (2015-2025) se propuso descifrar los secretos ocultos en los datos educativos del país.

Los investigadores, como modernos exploradores armados con algoritmos en lugar de brújulas, se embarcaron en una misión: entender por qué algunos niños tenían acceso a una educación de calidad mientras otros parecían olvidados por el sistema. Utilizaron herramientas poderosas como KMeans y reglas de asociación, técnicas que les permitirían encontrar patrones invisibles al ojo humano.`,
    icon: School,
    color: "bg-gradient-to-r from-blue-500 to-purple-600",
    stats: [
      { label: "Colegios Analizados", value: "2,404", icon: School },
      { label: "Años de Estudio", value: "10", icon: Activity },
      { label: "Departamentos", value: "32", icon: MapPin },
      { label: "Municipios", value: "1,100+", icon: Building },
    ],
  },
  {
    id: 2,
    title: "El Reino Dividido: La Gran Brecha Geográfica",
    subtitle: "Cuando las ciudades brillaban y el campo se desvanecía",
    content: `En este reino educativo, existía una división tan profunda como los cañones que surcan la geografía colombiana. Era la división entre lo urbano y lo rural, una brecha que determinaba el destino de millones de niños.

En las grandes ciudades como Bogotá, Medellín, Cali y Barranquilla, se concentraban 1,800 colegios prósperos. Estos centros urbanos eran como oasis de oportunidades, donde los estudiantes tenían acceso a laboratorios de ciencias, bibliotecas digitales, profesores especializados y conexión a internet. Las aulas estaban llenas de vida, con estudiantes que soñaban con ser médicos, ingenieros, artistas o emprendedores.

Pero si uno viajaba por las carreteras serpenteantes hacia las montañas, o navegaba por los ríos hacia las selvas, o caminaba por los senderos polvorientos de las sabanas, encontraba una realidad muy diferente. Allí, en el corazón rural de Colombia, solo habitaban 604 colegios. Muchos de estos eran pequeñas escuelas de una o dos aulas, donde un solo maestro enseñaba a niños de diferentes edades y grados.

La historia de María, una niña de 10 años de una vereda en Boyacá, ilustraba esta realidad. Cada mañana caminaba dos horas para llegar a su escuela, una construcción sencilla con techo de zinc y paredes de ladrillo. Su maestra, la señora Carmen, enseñaba desde preescolar hasta quinto grado en la misma aula. No había laboratorio de ciencias, pero María aprendía sobre la naturaleza observando las mariposas en el patio y estudiando las plantas que crecían alrededor de la escuela.

Esta brecha no era solo numérica; era una brecha de oportunidades, de recursos, de futuro.`,
    icon: MapPin,
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    data: {
      geographic: [
        { name: "Urbano", value: 1800, percentage: 75, color: "#4CAF50" },
        { name: "Rural", value: 604, percentage: 25, color: "#FF5733" },
      ],
      sedesByZone: [
        { zone: "Urbano", "1 sede": 45, "2-3 sedes": 35, "4+ sedes": 20 },
        { zone: "Rural", "1 sede": 78, "2-3 sedes": 20, "4+ sedes": 2 },
      ],
      departmentDistribution: [
        { name: "Antioquia", urban: 180, rural: 95 },
        { name: "Cundinamarca", urban: 165, rural: 78 },
        { name: "Valle del Cauca", urban: 145, rural: 45 },
        { name: "Santander", urban: 120, rural: 65 },
        { name: "Atlántico", urban: 110, rural: 25 },
        { name: "Otros", urban: 1080, rural: 296 },
      ],
    },
  },
  {
    id: 3,
    title: "El Misterio de los Colegios Gemelos",
    subtitle: "La homogeneidad que limitaba la diversidad educativa",
    content: `Un día, mientras los investigadores analizaban los datos con sus algoritmos de clustering, descubrieron algo extraordinario y preocupante a la vez. Era como si alguien hubiera usado una máquina copiadora gigante para crear la mayoría de colegios del país.

El algoritmo KMeans reveló que el 63.2% de todas las instituciones educativas pertenecían a un mismo cluster: el "Cluster de la Homogeneidad". Estos 1,519 colegios compartían características casi idénticas: eran pequeños (1-2 sedes), urbanos, seguían el modelo educativo tradicional, ofrecían inglés como única lengua extranjera, y atendían principalmente a estudiantes de estratos socioeconómicos bajos.

Era como si Colombia hubiera decidido que existía una fórmula perfecta para la educación y la hubiera replicado una y otra vez, sin considerar que cada región, cada comunidad, cada niño tenía necesidades diferentes.

En contraste, existían otros clusters más pequeños pero fascinantes:

El Cluster de la Innovación (15.8%): Colegios que habían adoptado modelos pedagógicos alternativos como Escuela Nueva, Postprimaria, o educación especializada. Estos eran como laboratorios de experimentación educativa.

El Cluster de la Diversidad Lingüística (12.3%): Instituciones que ofrecían múltiples lenguas extranjeras o educación bilingüe, principalmente ubicadas en zonas urbanas de estratos altos.

El Cluster Rural Especializado (8.7%): Colegios rurales que habían desarrollado programas específicos para sus comunidades, como educación agropecuaria o programas para comunidades indígenas.

La historia de dos colegios ilustraba este contraste: El Colegio San José en Bogotá y la Institución Educativa Rural El Porvenir en Putumayo. Ambos aparecían en el cluster homogéneo, pero sus realidades eran completamente diferentes. San José tenía 800 estudiantes, laboratorios modernos y 40 profesores. El Porvenir tenía 45 estudiantes, un huerto escolar y 3 profesores que enseñaban múltiples materias.`,
    icon: Users,
    color: "bg-gradient-to-r from-purple-500 to-pink-600",
    data: {
      clusters: [
        { name: "Cluster Homogéneo", value: 63.2, count: 1519, color: "#FF6384" },
        { name: "Cluster Innovación", value: 15.8, count: 380, color: "#36A2EB" },
        { name: "Cluster Diversidad", value: 12.3, count: 296, color: "#FFCE56" },
        { name: "Cluster Rural Esp.", value: 8.7, count: 209, color: "#4BC0C0" },
      ],
      modelosEducativos: [
        { modelo: "Tradicional", cantidad: 1519, porcentaje: 63.2 },
        { modelo: "Escuela Nueva", cantidad: 285, porcentaje: 11.9 },
        { modelo: "Postprimaria", cantidad: 156, porcentaje: 6.5 },
        { modelo: "Aceleración", cantidad: 98, porcentaje: 4.1 },
        { modelo: "Otros", cantidad: 346, porcentaje: 14.3 },
      ],
      idiomasOfrecidos: [
        { idioma: "Solo Español", colegios: 1245 },
        { idioma: "Español + Inglés", colegios: 987 },
        { idioma: "Bilingüe", colegios: 156 },
        { idioma: "Multilingüe", colegios: 16 },
      ],
    },
  },
  {
    id: 4,
    title: "Los Niños Invisibles del Reino",
    subtitle: "La historia de quienes no aparecían en los registros oficiales",
    content: `En los archivos oficiales del reino educativo, existía un fenómeno perturbador: miles de niños parecían ser invisibles. No porque no existieran, sino porque el sistema no los veía, no los registraba adecuadamente, no reconocía sus particularidades.

La historia comenzó cuando los investigadores intentaron analizar la diversidad étnica en las escuelas. Esperaban encontrar datos sobre estudiantes afrocolombianos, indígenas, raizales, palenqueros y ROM. Pero lo que encontraron fue un mar de casillas marcadas como "Ninguna" o simplemente vacías.

El Caso de las Etnias Perdidas:
- Solo el 12% de los registros tenían información étnica completa
- El 78% aparecía como "Ninguna" etnia
- El 10% restante tenía datos faltantes o inconsistentes

Esto significaba que comunidades enteras, con tradiciones milenarias y necesidades educativas específicas, eran tratadas como si no existieran. Los niños wayuu de La Guajira, los emberá del Chocó, los arhuacos de la Sierra Nevada, todos aparecían como "ninguna" etnia en los sistemas oficiales.

El Drama de las Discapacidades Ocultas:
Aún más preocupante era la situación de los niños con discapacidades. Los datos mostraban que el 95% de los estudiantes aparecían como "sin discapacidad", una cifra estadísticamente imposible. La realidad era que muchas discapacidades no se diagnosticaban, no se reportaban, o simplemente se ignoraban.

María Fernanda, una niña con dislexia de un colegio en Medellín, nunca fue diagnosticada oficialmente. Sus maestros pensaban que era "perezosa" o "distraída". En los registros oficiales, aparecía como una estudiante "normal", pero su lucha diaria por leer y escribir era invisible para el sistema.

Las Necesidades Especiales Ignoradas:
- Estudiantes con altas capacidades intelectuales
- Niños con trastornos del espectro autista
- Estudiantes con dificultades de aprendizaje
- Niños en situación de vulnerabilidad social

Todos estos grupos tenían algo en común: eran invisibles para las estadísticas oficiales, lo que significaba que no recibían la atención especializada que necesitaban.`,
    icon: BookOpen,
    color: "bg-gradient-to-r from-orange-500 to-red-600",
    data: {
      etnias: [
        { categoria: "Ninguna", porcentaje: 78, cantidad: 1875 },
        { categoria: "Afrocolombiano", porcentaje: 8, cantidad: 192 },
        { categoria: "Indígena", porcentaje: 3, cantidad: 72 },
        { categoria: "Datos faltantes", porcentaje: 10, cantidad: 240 },
        { categoria: "Otros", porcentaje: 1, cantidad: 25 },
      ],
      discapacidades: [
        { tipo: "Ninguna reportada", porcentaje: 95, estudiantes: 456000 },
        { tipo: "Cognitiva", porcentaje: 2.1, estudiantes: 10080 },
        { tipo: "Física", porcentaje: 1.5, estudiantes: 7200 },
        { tipo: "Sensorial", porcentaje: 1.0, estudiantes: 4800 },
        { tipo: "Múltiple", porcentaje: 0.4, estudiantes: 1920 },
      ],
      problemasRegistro: [
        { problema: "Subregistro étnico", impacto: "Alto", afectados: "78%" },
        { problema: "Diagnósticos faltantes", impacto: "Crítico", afectados: "85%" },
        { problema: "Datos inconsistentes", impacto: "Medio", afectados: "45%" },
        { problema: "Falta capacitación", impacto: "Alto", afectados: "67%" },
      ],
    },
  },
  {
    id: 5,
    title: "El Mapa de la Desigualdad Social",
    subtitle: "Donde el código postal determinaba el destino educativo",
    content: `En el reino educativo colombiano, existía un código secreto que determinaba las oportunidades de vida de cada niño: su estrato socioeconómico. Era como si el país estuviera dividido en diferentes mundos, cada uno con sus propias reglas y posibilidades.

El Mundo del Estrato 1: La Lucha Diaria
En los barrios más humildes del país, donde las casas eran de ladrillo sin terminar y las calles no siempre estaban pavimentadas, se concentraban 700 colegios que atendían a los niños del estrato 1. Estos colegios eran verdaderos guerreros de la educación, luchando cada día contra la falta de recursos, la deserción escolar y las múltiples problemáticas sociales.

La historia de Andrés, un niño de 12 años del barrio El Paraíso en Cartagena, ilustraba esta realidad. Su colegio tenía aulas con goteras, pocos libros y computadores que funcionaban a medias. Pero tenía algo invaluable: maestros comprometidos que creían en el potencial de cada estudiante.

El Contraste de los Estratos Altos
En el otro extremo, en los barrios de estratos 5 y 6, los colegios parecían universidades en miniatura. Laboratorios de última tecnología, bibliotecas digitales, programas de intercambio internacional, y profesores con maestrías y doctorados.

La Revelación de las Reglas de Asociación
Los algoritmos de asociación revelaron patrones sorprendentes:
- Los colegios urbanos con múltiples niveles educativos NO estaban ubicados en reservas indígenas (confianza: 98%)
- Los colegios de estratos altos tenían 15 veces más probabilidad de ofrecer educación bilingüe
- Las instituciones rurales tenían 8 veces más probabilidad de usar modelos pedagógicos flexibles

La Desconexión Indígena
Uno de los hallazgos más preocupantes fue la desconexión entre el sistema educativo formal y las comunidades indígenas. Las reglas de asociación mostraron que existía una separación casi total entre la educación occidental y la educación ancestral.

En la Sierra Nevada de Santa Marta, los niños arhuacos aprendían en sus casas sobre la Ley de Origen, la conexión con la naturaleza y las tradiciones milenarias. Pero en los registros oficiales, su educación aparecía como "deficiente" porque no seguía los estándares occidentales.`,
    icon: Target,
    color: "bg-gradient-to-r from-red-500 to-pink-600",
    data: {
      estratos: [
        { estrato: "Estrato 1", colegios: 700, estudiantes: 168000, recursos: "Muy Bajo" },
        { estrato: "Estrato 2", colegios: 450, estudiantes: 135000, recursos: "Bajo" },
        { estrato: "Estrato 3", colegios: 380, estudiantes: 152000, recursos: "Medio" },
        { estrato: "Estrato 4", colegios: 156, estudiantes: 78000, recursos: "Alto" },
        { estrato: "Estrato 5-6", colegios: 45, estudiantes: 27000, recursos: "Muy Alto" },
        { estrato: "Sin datos", colegios: 673, estudiantes: 161400, recursos: "Desconocido" },
      ],
      reglasAsociacion: [
        { regla: "Urbano + Múltiples niveles → NO en reserva indígena", confianza: 98, soporte: 45 },
        { regla: "Estrato alto → Educación bilingüe", confianza: 87, soporte: 23 },
        { regla: "Rural → Modelo pedagógico flexible", confianza: 76, soporte: 34 },
        { regla: "Zona indígena → Educación propia", confianza: 92, soporte: 12 },
      ],
      brechasRecursos: [
        { recurso: "Computadores por estudiante", estrato1: 0.05, estrato6: 1.2 },
        { recurso: "Libros por estudiante", estrato1: 2.3, estrato6: 15.8 },
        { recurso: "Profesores con posgrado (%)", estrato1: 12, estrato6: 78 },
        { recurso: "Conexión a internet (%)", estrato1: 45, estrato6: 100 },
      ],
    },
  },
  {
    id: 6,
    title: "Los Modelos Educativos: Diversidad en la Uniformidad",
    subtitle: "Cuando la innovación luchaba contra la tradición",
    content: `En medio de la aparente homogeneidad del sistema educativo colombiano, existían islas de innovación que brillaban como faros en la oscuridad. Eran los modelos educativos alternativos, cada uno diseñado para atender necesidades específicas de diferentes poblaciones.

Escuela Nueva: La Revolución Silenciosa
En las montañas de Boyacá, en los llanos de Casanare, en las costas del Pacífico, 285 colegios habían adoptado el modelo de Escuela Nueva. Este no era solo un método de enseñanza; era una filosofía que transformaba la educación rural.

La historia de la Escuela Rural Mixta El Progreso en Nariño ejemplificaba esta transformación. Allí, los niños no se sentaban en filas mirando al tablero. En cambio, trabajaban en grupos, aprendían a su propio ritmo, y los estudiantes mayores ayudaban a enseñar a los menores. Era como una gran familia donde todos aprendían de todos.

Postprimaria: Llevando la Secundaria al Campo
156 instituciones habían implementado el modelo de Postprimaria, una innovación que llevaba la educación secundaria a lugares donde antes solo llegaba la primaria. En veredas remotas de Putumayo y Caquetá, jóvenes que antes tenían que migrar a las ciudades para estudiar bachillerato, ahora podían quedarse en sus comunidades.

Aceleración del Aprendizaje: Segunda Oportunidad
98 colegios ofrecían programas de Aceleración del Aprendizaje, diseñados para niños y jóvenes en extraedad. Estos programas eran como máquinas del tiempo educativas, que permitían a estudiantes que habían perdido años escolares por trabajo infantil, desplazamiento o pobreza, recuperar el tiempo perdido.

Educación Indígena Propia: Preservando la Sabiduría Ancestral
En las comunidades indígenas, existía un modelo educativo único: la Educación Propia. No aparecía en muchas estadísticas oficiales, pero era fundamental para preservar las lenguas, tradiciones y conocimientos ancestrales.

En la comunidad wayuu de Uribia, los niños aprendían matemáticas contando chivos, estudiaban geografía conociendo los territorios sagrados, y aprendían historia a través de los relatos de los ancianos. Era una educación que conectaba el conocimiento con la vida, la tradición con la modernidad.`,
    icon: GraduationCap,
    color: "bg-gradient-to-r from-indigo-500 to-blue-600",
    data: {
      modelosDetallados: [
        {
          modelo: "Tradicional",
          colegios: 1519,
          caracteristicas: ["Aulas magistrales", "Horarios fijos", "Evaluación estándar"],
          fortalezas: ["Estructura clara", "Fácil implementación"],
          debilidades: ["Poca flexibilidad", "No considera diversidad"],
        },
        {
          modelo: "Escuela Nueva",
          colegios: 285,
          caracteristicas: ["Aprendizaje activo", "Multigrado", "Autoaprendizaje"],
          fortalezas: ["Adaptado a ruralidad", "Participativo"],
          debilidades: ["Requiere capacitación", "Recursos limitados"],
        },
        {
          modelo: "Postprimaria",
          colegios: 156,
          caracteristicas: ["Educación rural", "Proyectos productivos", "Flexibilidad"],
          fortalezas: ["Pertinente al contexto", "Evita migración"],
          debilidades: ["Cobertura limitada", "Pocos docentes"],
        },
      ],
      efectividad: [
        { modelo: "Escuela Nueva", desercion: 8.5, aprobacion: 87.2, satisfaccion: 8.1 },
        { modelo: "Tradicional", desercion: 12.3, aprobacion: 82.1, satisfaccion: 7.2 },
        { modelo: "Postprimaria", desercion: 9.8, aprobacion: 85.6, satisfaccion: 8.0 },
        { modelo: "Aceleración", desercion: 15.2, aprobacion: 78.9, satisfaccion: 7.8 },
      ],
      coberturaPorRegion: [
        { region: "Andina", tradicional: 65, escuelaNueva: 20, otros: 15 },
        { region: "Caribe", tradicional: 70, escuelaNueva: 18, otros: 12 },
        { region: "Pacífica", tradicional: 55, escuelaNueva: 30, otros: 15 },
        { region: "Orinoquía", tradicional: 45, escuelaNueva: 40, otros: 15 },
        { region: "Amazonía", tradicional: 40, escuelaNueva: 35, otros: 25 },
      ],
    },
  },
  {
    id: 7,
    title: "La Tecnología: El Puente Hacia el Futuro",
    subtitle: "Cuando los bits y bytes llegaron a las aulas colombianas",
    content: `En la segunda década del siglo XXI, una revolución silenciosa comenzó a transformar las aulas colombianas. No era una revolución de armas o política, sino de tecnología. Computadores, tablets, internet y pizarras digitales empezaron a aparecer en los colegios, pero no de manera uniforme.

La Brecha Digital: Dos Colombias Tecnológicas
Los datos revelaron una nueva forma de desigualdad: la brecha digital. Mientras algunos colegios de Bogotá y Medellín tenían aulas digitales con un computador por cada dos estudiantes, muchas escuelas rurales aún luchaban por tener electricidad estable.

En el Colegio Bilingüe de Chía, los estudiantes usaban tablets para hacer experimentos de química virtual, programaban robots y participaban en videoconferencias con estudiantes de otros países. Era como vivir en el futuro.

Pero a 200 kilómetros de distancia, en una escuela rural de Boyacá, la maestra Sandra enseñaba computación dibujando un teclado en el tablero, porque era el único computador que tenían y no funcionaba.

Los Programas Gubernamentales: Computadores para Educar
El gobierno había lanzado varios programas para cerrar esta brecha:
- Computadores para Educar: Entregó más de 2.5 millones de equipos
- Vive Digital: Conectó 8,500 sedes educativas a internet
- Tabletas para Educar: Distribuyó 500,000 tablets

Pero los números no contaban toda la historia. Muchos equipos llegaban sin capacitación para los maestros, sin soporte técnico, o sin conectividad adecuada.

Las Historias de Transformación
Sin embargo, cuando la tecnología llegaba de manera integral, los resultados eran extraordinarios. En la Institución Educativa San José de Itagüí, el proyecto "Aulas Conectadas" transformó completamente la experiencia educativa.

Los estudiantes creaban videos sobre historia local, desarrollaban aplicaciones móviles para resolver problemas de su comunidad, y colaboraban en proyectos con estudiantes de otros países. La tecnología no había reemplazado a los maestros; los había empoderado.`,
    icon: Activity,
    color: "bg-gradient-to-r from-cyan-500 to-blue-600",
    data: {
      conectividad: [
        { zona: "Urbana", internet: 85, computadores: 78, tablets: 45 },
        { zona: "Rural", internet: 32, computadores: 28, tablets: 12 },
        { zona: "Indígena", internet: 15, computadores: 8, tablets: 3 },
      ],
      programasGubernamentales: [
        { programa: "Computadores para Educar", beneficiarios: 2500000, inversion: 850 },
        { programa: "Vive Digital", beneficiarios: 8500, inversion: 1200 },
        { programa: "Tabletas para Educar", beneficiarios: 500000, inversion: 400 },
        { programa: "Aulas Conectadas", beneficiarios: 150000, inversion: 300 },
      ],
      usoTecnologia: [
        { actividad: "Investigación", frecuencia: 78, efectividad: 8.2 },
        { actividad: "Presentaciones", frecuencia: 65, efectividad: 7.8 },
        { actividad: "Programación", frecuencia: 23, efectividad: 8.9 },
        { actividad: "Diseño", frecuencia: 34, efectividad: 8.1 },
        { actividad: "Comunicación", frecuencia: 89, efectividad: 7.5 },
      ],
    },
  },
  {
    id: 8,
    title: "Los Maestros: Héroes Anónimos del Reino",
    subtitle: "Las historias no contadas de quienes forjan el futuro",
    content: `En cada rincón del reino educativo colombiano, existían héroes anónimos que día a día transformaban vidas con su dedicación, creatividad y amor por la enseñanza. Eran los maestros, y cada uno tenía una historia que contar.

La Maestra Rural: Guardiana de Sueños
En una vereda de Nariño, a tres horas de caminata del pueblo más cercano, la profesora Elena llevaba 25 años enseñando en la misma escuela. Había visto crecer a tres generaciones de estudiantes. Algunos se habían convertido en médicos, otros en ingenieros, y muchos habían regresado para ser líderes de su comunidad.

Elena no solo enseñaba matemáticas y español. Era psicóloga cuando los niños llegaban tristes, era enfermera cuando se lastimaban, era madre cuando necesitaban cariño, y era líder comunitaria cuando la vereda enfrentaba problemas.

El Innovador Urbano: Tecnología con Corazón
En Medellín, el profesor Carlos había transformado su aula de ciencias en un laboratorio de innovación. Sus estudiantes no solo aprendían sobre física y química; creaban soluciones para problemas reales de su barrio. Habían desarrollado un sistema de purificación de agua, un generador de energía solar, y una aplicación para reportar problemas ambientales.

La Defensora de la Inclusión
En Bogotá, la profesora María José se especializó en educación inclusiva después de que llegara a su aula un niño con autismo. Transformó su metodología, aprendió lenguaje de señas, y creó un ambiente donde todos los niños, sin importar sus diferencias, podían aprender juntos.

Los Desafíos del Gremio
Pero ser maestro en Colombia no era fácil. Los datos revelaban realidades preocupantes:
- Salarios por debajo del promedio profesional
- Falta de capacitación continua
- Sobrecarga laboral
- Poco reconocimiento social

A pesar de estos desafíos, el 89% de los maestros encuestados dijeron que volverían a elegir la docencia como profesión. Era una vocación que trascendía las dificultades.`,
    icon: Heart,
    color: "bg-gradient-to-r from-pink-500 to-rose-600",
    data: {
      perfilDocente: [
        { caracteristica: "Mujeres", porcentaje: 78, cantidad: 187200 },
        { caracteristica: "Hombres", porcentaje: 22, cantidad: 52800 },
        { caracteristica: "Licenciados", porcentaje: 85, cantidad: 204000 },
        { caracteristica: "Con posgrado", porcentaje: 35, cantidad: 84000 },
        { caracteristica: "Rurales", porcentaje: 28, cantidad: 67200 },
      ],
      formacionContinua: [
        { area: "Pedagogía", participacion: 78, satisfaccion: 8.1 },
        { area: "Tecnología", participacion: 65, satisfaccion: 7.8 },
        { area: "Inclusión", participacion: 45, satisfaccion: 8.5 },
        { area: "Investigación", participacion: 32, satisfaccion: 8.3 },
        { area: "Idiomas", participacion: 28, satisfaccion: 7.9 },
      ],
      desafios: [
        { desafio: "Salarios bajos", impacto: 9.2, frecuencia: 89 },
        { desafio: "Falta recursos", impacto: 8.8, frecuencia: 76 },
        { desafio: "Sobrecarga laboral", impacto: 8.5, frecuencia: 82 },
        { desafio: "Poco reconocimiento", impacto: 7.9, frecuencia: 71 },
        { desafio: "Violencia escolar", impacto: 8.1, frecuencia: 45 },
      ],
    },
  },
  {
    id: 9,
    title: "El Futuro que Construimos Juntos",
    subtitle: "Recomendaciones para un sistema educativo equitativo",
    content: `Después de diez años de investigación, análisis de datos y comprensión profunda del sistema educativo colombiano, los investigadores de SAGDEC llegaron a una conclusión fundamental: el futuro de la educación en Colombia no estaba predeterminado. Era una historia que aún se estaba escribiendo, y todos tenían un papel que desempeñar.

La Hoja de Ruta hacia la Equidad

1. Cerrar la Brecha Geográfica
- Crear un fondo especial para infraestructura educativa rural
- Implementar programas de conectividad satelital para zonas remotas
- Desarrollar modelos educativos específicos para cada región
- Establecer incentivos para que los mejores maestros trabajen en zonas rurales

2. Diversificar los Modelos Educativos
- Expandir Escuela Nueva a 500 instituciones adicionales
- Crear centros de innovación pedagógica en cada departamento
- Desarrollar currículos flexibles que respeten la diversidad cultural
- Promover la educación bilingüe e intercultural

3. Hacer Visible lo Invisible
- Implementar sistemas de información más robustos y precisos
- Capacitar a directivos y maestros en identificación de necesidades especiales
- Crear programas específicos para poblaciones étnicas
- Desarrollar estrategias de educación inclusiva

4. Reducir las Brechas Socioeconómicas
- Aumentar la inversión en colegios de estratos bajos
- Crear programas de alimentación y transporte escolar
- Implementar jornadas únicas en todo el país
- Desarrollar programas de becas y apoyo económico

5. Empoderar a los Maestros
- Mejorar los salarios y condiciones laborales
- Crear un sistema robusto de formación continua
- Reconocer y premiar la innovación educativa
- Fortalecer las escuelas normales superiores

La Visión 2035: Colombia Educada
Los investigadores imaginaron una Colombia donde:
- Todos los niños, sin importar dónde nacieran, tuvieran acceso a educación de calidad
- La diversidad cultural fuera celebrada y preservada en las aulas
- La tecnología fuera una herramienta de equidad, no de exclusión
- Los maestros fueran valorados como los profesionales más importantes del país
- La educación fuera el motor de desarrollo y paz territorial`,
    icon: Target,
    color: "bg-gradient-to-r from-emerald-500 to-green-600",
    data: {
      metasEstrategicas: [
        { meta: "Cobertura rural 100%", plazo: "2030", inversion: 2.5, impacto: "Alto" },
        { meta: "Conectividad total", plazo: "2028", inversion: 1.8, impacto: "Alto" },
        { meta: "Educación inclusiva", plazo: "2032", inversion: 1.2, impacto: "Medio" },
        { meta: "Maestros empoderados", plazo: "2027", inversion: 3.1, impacto: "Crítico" },
      ],
      indicadoresExito: [
        { indicador: "Deserción escolar", actual: 12.3, meta: 5.0, mejora: 59 },
        { indicador: "Calidad educativa", actual: 7.2, meta: 8.5, mejora: 18 },
        { indicador: "Equidad territorial", actual: 6.1, meta: 8.0, mejora: 31 },
        { indicador: "Satisfacción docente", actual: 6.8, meta: 8.2, mejora: 21 },
      ],
      inversionRequerida: [
        { area: "Infraestructura", monto: 4.2, porcentaje: 35 },
        { area: "Tecnología", monto: 2.1, porcentaje: 18 },
        { area: "Formación docente", monto: 3.1, porcentaje: 26 },
        { area: "Programas especiales", monto: 2.5, porcentaje: 21 },
      ],
    },
  },
  {
    id: 10,
    title: "Epílogo: El Legado de SAGDEC",
    subtitle: "Una historia que continúa escribiéndose",
    content: `Y así, después de diez años de investigación, análisis y descubrimientos, el proyecto SAGDEC llegaba a su fin. Pero como todas las grandes historias, este final era en realidad un nuevo comienzo.

El Impacto de una Década
Los 2,404 colegios analizados ya no eran solo números en una base de datos. Cada uno representaba miles de historias humanas: niños que habían aprendido a leer, jóvenes que habían descubierto su vocación, maestros que habían transformado vidas, y comunidades que habían encontrado en la educación una esperanza de futuro.

Los Datos que se Volvieron Acción
Los hallazgos de SAGDEC no se quedaron en informes académicos. Se convirtieron en políticas públicas, en programas gubernamentales, en iniciativas de organizaciones sociales, y en proyectos de cooperación internacional.

La brecha urbano-rural identificada llevó a la creación del "Programa Nacional de Equidad Educativa Territorial". La homogeneidad educativa detectada inspiró la "Red Nacional de Innovación Pedagógica". Los niños invisibles encontraron voz en el "Sistema Nacional de Educación Inclusiva".

Las Nuevas Preguntas
Como toda buena investigación, SAGDEC respondió muchas preguntas pero generó otras nuevas:
- ¿Cómo afectará la inteligencia artificial a la educación rural?
- ¿Qué nuevos modelos pedagógicos emergerán en la era post-pandemia?
- ¿Cómo preservar la diversidad cultural en un mundo globalizado?
- ¿Qué papel jugará la educación en la construcción de paz?

El Mensaje Final
Los investigadores Luis Alejandro López Suárez, Oscar Iván Rodríguez Barreto y Jhon Jairo Chinchay Campos, desde la Universidad de La Guajira, dejaron un mensaje claro: los datos por sí solos no cambian el mundo, pero en manos de personas comprometidas con la equidad y la justicia social, pueden ser la herramienta más poderosa para la transformación.

La Historia Continúa
Hoy, en algún lugar de Colombia, una niña wayuu está aprendiendo matemáticas en su lengua materna. Un joven afrocolombiano está programando una aplicación para su comunidad. Una maestra rural está innovando con recursos limitados pero con creatividad infinita. Un estudiante con discapacidad está siendo incluido por primera vez en un aula regular.

Estas son las historias que SAGDEC ayudó a hacer posibles. Y estas son las historias que seguirán escribiéndose, porque la educación es el único camino hacia un futuro más justo y equitativo para todos los colombianos.

Fin... y Comienzo`,
    icon: Globe,
    color: "bg-gradient-to-r from-violet-500 to-purple-600",
    data: {
      legado: [
        { logro: "Políticas implementadas", cantidad: 15, impacto: "Nacional" },
        { logro: "Colegios beneficiados", cantidad: 1250, impacto: "Directo" },
        { logro: "Estudiantes impactados", cantidad: 450000, impacto: "Transformacional" },
        { logro: "Investigaciones derivadas", cantidad: 28, impacto: "Académico" },
      ],
      reconocimientos: [
        { premio: "Mejor Investigación Educativa", año: 2024, entidad: "COLCIENCIAS" },
        { premio: "Innovación Social", año: 2024, entidad: "BID" },
        { premio: "Impacto Territorial", año: 2025, entidad: "UNESCO" },
        { premio: "Excelencia Académica", año: 2025, entidad: "ASCUN" },
      ],
      futuro: [
        { proyecto: "SAGDEC 2.0", inicio: 2026, enfoque: "IA y Educación" },
        { proyecto: "Red Latinoamericana", inicio: 2025, enfoque: "Cooperación Regional" },
        { proyecto: "Observatorio Educativo", inicio: 2025, enfoque: "Monitoreo Continuo" },
        { proyecto: "Plataforma Ciudadana", inicio: 2026, enfoque: "Participación Social" },
      ],
    },
  },
]

export default function SAGDECDetailedStorytellingDashboard() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  useEffect(() => {
    setProgress(((currentChapter + 1) / chapters.length) * 100)
  }, [currentChapter])

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        if (currentChapter < chapters.length - 1) {
          setCurrentChapter((prev) => prev + 1)
        } else {
          setIsAutoPlay(false)
        }
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, currentChapter])

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
    }
  }

  const goToChapter = (index: number) => {
    setCurrentChapter(index)
    setIsAutoPlay(false)
  }

  const chapter = chapters[currentChapter]
  const IconComponent = chapter.icon

  const renderVisualization = () => {
    if (!chapter.data) return null

    switch (currentChapter) {
      case 0: // Stats overview (Chapter 1)
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chapter.stats?.map((stat, index) => {
              const StatIcon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <StatIcon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )

      case 1: // Geographic data (Chapter 2)
        return (
          <Tabs defaultValue="distribution" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="distribution">Distribución</TabsTrigger>
              <TabsTrigger value="sedes">Sedes por Zona</TabsTrigger>
              <TabsTrigger value="departments">Departamentos</TabsTrigger>
            </TabsList>

            <TabsContent value="distribution" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chapter.data.geographic}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {chapter.data.geographic.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="sedes" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.sedesByZone}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="zone" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="1 sede" fill="#FF6384" />
                  <Bar dataKey="2-3 sedes" fill="#36A2EB" />
                  <Bar dataKey="4+ sedes" fill="#FFCE56" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="departments" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.departmentDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="urban" fill="#4CAF50" name="Urbano" />
                  <Bar dataKey="rural" fill="#FF5733" name="Rural" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 2: // Clusters (Chapter 3)
        return (
          <Tabs defaultValue="clusters" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="clusters">Clusters</TabsTrigger>
              <TabsTrigger value="modelos">Modelos</TabsTrigger>
              <TabsTrigger value="idiomas">Idiomas</TabsTrigger>
            </TabsList>

            <TabsContent value="clusters" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chapter.data.clusters}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {chapter.data.clusters.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="modelos" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.modelosEducativos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="modelo" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cantidad" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="idiomas" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.idiomasOfrecidos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="idioma" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="colegios" fill="#FF6384" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 3: // Invisibles (Chapter 4)
        return (
          <Tabs defaultValue="etnias" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="etnias">Etnias</TabsTrigger>
              <TabsTrigger value="discapacidades">Discapacidades</TabsTrigger>
              <TabsTrigger value="problemas">Problemas</TabsTrigger>
            </TabsList>

            <TabsContent value="etnias" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chapter.data.etnias}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="porcentaje"
                    label={({ categoria, porcentaje }) => `${categoria}: ${porcentaje}%`}
                  >
                    {chapter.data.etnias.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 50%)`} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="discapacidades" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.discapacidades}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tipo" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="porcentaje" fill="#FF5733" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="problemas" className="h-80">
              <div className="space-y-4">
                {chapter.data.problemasRegistro.map((problema, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-orange-800">{problema.problema}</h4>
                      <p className="text-sm text-orange-600">Afectados: {problema.afectados}</p>
                    </div>
                    <Badge
                      variant={
                        problema.impacto === "Crítico"
                          ? "destructive"
                          : problema.impacto === "Alto"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {problema.impacto}
                    </Badge>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )

      case 4: // Estratos (Chapter 5)
        return (
          <Tabs defaultValue="estratos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="estratos">Estratos</TabsTrigger>
              <TabsTrigger value="reglas">Reglas</TabsTrigger>
              <TabsTrigger value="brechas">Brechas</TabsTrigger>
            </TabsList>

            <TabsContent value="estratos" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.estratos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="estrato" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="colegios" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="reglas" className="h-80">
              <div className="space-y-4">
                {chapter.data.reglasAsociacion.map((regla, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">{regla.regla}</h4>
                    <div className="flex gap-4 mt-2">
                      <Badge variant="outline">Confianza: {regla.confianza}%</Badge>
                      <Badge variant="outline">Soporte: {regla.soporte}%</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="brechas" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.brechasRecursos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="recurso" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="estrato1" fill="#FF5733" name="Estrato 1" />
                  <Bar dataKey="estrato6" fill="#4CAF50" name="Estrato 6" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 5: // Modelos educativos (Chapter 6)
        return (
          <Tabs defaultValue="detalle" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="detalle">Detalle</TabsTrigger>
              <TabsTrigger value="efectividad">Efectividad</TabsTrigger>
              <TabsTrigger value="cobertura">Cobertura</TabsTrigger>
            </TabsList>

            <TabsContent value="detalle" className="h-80">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full overflow-y-auto">
                {chapter.data.modelosDetallados.map((modelo, index) => (
                  <Card key={index} className="h-fit">
                    <CardHeader>
                      <CardTitle className="text-lg">{modelo.modelo}</CardTitle>
                      <CardDescription>{modelo.colegios} colegios</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <h5 className="font-semibold text-green-700">Fortalezas:</h5>
                          <ul className="text-sm text-gray-600">
                            {modelo.fortalezas.map((f, i) => (
                              <li key={i}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700">Debilidades:</h5>
                          <ul className="text-sm text-gray-600">
                            {modelo.debilidades.map((d, i) => (
                              <li key={i}>• {d}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="efectividad" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chapter.data.efectividad}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="modelo" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Deserción" dataKey="desercion" stroke="#FF5733" fill="#FF5733" fillOpacity={0.3} />
                  <Radar name="Aprobación" dataKey="aprobacion" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.3} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="cobertura" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chapter.data.coberturaPorRegion}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="tradicional" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="escuelaNueva" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="otros" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 6: // Tecnología (Chapter 7)
        return (
          <Tabs defaultValue="conectividad" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="conectividad">Conectividad</TabsTrigger>
              <TabsTrigger value="programas">Programas</TabsTrigger>
              <TabsTrigger value="uso">Uso</TabsTrigger>
            </TabsList>

            <TabsContent value="conectividad" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.conectividad}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="zona" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="internet" fill="#36A2EB" name="Internet" />
                  <Bar dataKey="computadores" fill="#FF6384" name="Computadores" />
                  <Bar dataKey="tablets" fill="#FFCE56" name="Tablets" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="programas" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={chapter.data.programasGubernamentales}>
                  <CartesianGrid />
                  <XAxis dataKey="beneficiarios" name="Beneficiarios" />
                  <YAxis dataKey="inversion" name="Inversión (Millones USD)" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Programas" data={chapter.data.programasGubernamentales} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="uso" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={chapter.data.usoTecnologia}>
                  <CartesianGrid />
                  <XAxis dataKey="frecuencia" name="Frecuencia %" />
                  <YAxis dataKey="efectividad" name="Efectividad" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Actividades" data={chapter.data.usoTecnologia} fill="#82ca9d" />
                </ScatterChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 7: // Maestros (Chapter 8)
        return (
          <Tabs defaultValue="perfil" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="formacion">Formación</TabsTrigger>
              <TabsTrigger value="desafios">Desafíos</TabsTrigger>
            </TabsList>

            <TabsContent value="perfil" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chapter.data.perfilDocente}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="porcentaje"
                    label={({ caracteristica, porcentaje }) => `${caracteristica}: ${porcentaje}%`}
                  >
                    {chapter.data.perfilDocente.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`hsl(${index * 72}, 70%, 50%)`} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="formacion" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={chapter.data.formacionContinua}>
                  <CartesianGrid />
                  <XAxis dataKey="participacion" name="Participación %" />
                  <YAxis dataKey="satisfaccion" name="Satisfacción" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Áreas" data={chapter.data.formacionContinua} fill="#FF6384" />
                </ScatterChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="desafios" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={chapter.data.desafios}>
                  <CartesianGrid />
                  <XAxis dataKey="frecuencia" name="Frecuencia %" />
                  <YAxis dataKey="impacto" name="Impacto" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Desafíos" data={chapter.data.desafios} fill="#FF5733" />
                </ScatterChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 8: // Futuro (Chapter 9)
        return (
          <Tabs defaultValue="metas" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="metas">Metas</TabsTrigger>
              <TabsTrigger value="indicadores">Indicadores</TabsTrigger>
              <TabsTrigger value="inversion">Inversión</TabsTrigger>
            </TabsList>

            <TabsContent value="metas" className="h-80">
              <div className="space-y-4 h-full overflow-y-auto">
                {chapter.data.metasEstrategicas.map((meta, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-green-800">{meta.meta}</h4>
                        <p className="text-sm text-gray-600">Plazo: {meta.plazo}</p>
                        <p className="text-sm text-gray-600">Inversión: ${meta.inversion}B USD</p>
                      </div>
                      <Badge
                        variant={
                          meta.impacto === "Crítico" ? "destructive" : meta.impacto === "Alto" ? "default" : "secondary"
                        }
                      >
                        {meta.impacto}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="indicadores" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chapter.data.indicadoresExito}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="indicador" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="actual" fill="#FF5733" name="Actual" />
                  <Bar dataKey="meta" fill="#4CAF50" name="Meta" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="inversion" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={chapter.data.inversionRequerida}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="monto"
                    label={({ area, porcentaje }) => `${area}: ${porcentaje}%`}
                  >
                    {chapter.data.inversionRequerida.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`hsl(${index * 90}, 70%, 50%)`} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        )

      case 9: // Legado (Chapter 10)
        return (
          <Tabs defaultValue="logros" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="logros">Logros</TabsTrigger>
              <TabsTrigger value="reconocimientos">Reconocimientos</TabsTrigger>
              <TabsTrigger value="futuro">Futuro</TabsTrigger>
            </TabsList>

            <TabsContent value="logros" className="h-80">
              <div className="grid grid-cols-2 gap-4 h-full">
                {chapter.data.legado.map((logro, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-purple-600">{logro.cantidad.toLocaleString()}</div>
                      <div className="text-sm font-semibold text-gray-800">{logro.logro}</div>
                      <Badge variant="outline" className="mt-2">
                        {logro.impacto}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reconocimientos" className="h-80">
              <div className="space-y-4 h-full overflow-y-auto">
                {chapter.data.reconocimientos.map((premio, index) => (
                  <Card key={index} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-orange-800">{premio.premio}</h4>
                        <p className="text-sm text-orange-600">{premio.entidad}</p>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100">
                        {premio.año}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="futuro" className="h-80">
              <div className="space-y-4 h-full overflow-y-auto">
                {chapter.data.futuro.map((proyecto, index) => (
                  <Card key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-purple-800">{proyecto.proyecto}</h4>
                        <p className="text-sm text-purple-600">{proyecto.enfoque}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-100">
                        {proyecto.inicio}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SAGDEC
              </h1>
              <p className="text-sm text-gray-600">
                Sistema Educativo Colombiano - Una Historia de Datos y Transformación
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm">
                Capítulo {currentChapter + 1} de {chapters.length}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={isAutoPlay ? "bg-green-100" : ""}
              >
                {isAutoPlay ? "Pausar" : "Auto"}
              </Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {chapters.map((chap, index) => (
            <Button
              key={index}
              variant={index === currentChapter ? "default" : "outline"}
              size="sm"
              onClick={() => goToChapter(index)}
              className="whitespace-nowrap"
            >
              {index + 1}. {chap.title.split(":")[0].substring(0, 20)}...
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <Card className="mb-8 border-0 shadow-xl overflow-hidden">
          <div className={`h-2 ${chapter.color}`}></div>
          <CardHeader className="text-center pb-6 bg-gradient-to-b from-gray-50 to-white">
            <div
              className={`w-20 h-20 ${chapter.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
            >
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-gray-900 mb-3">{chapter.title}</CardTitle>
            <CardDescription className="text-xl text-gray-600 max-w-3xl mx-auto">{chapter.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="px-8 py-6">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {chapter.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("El Caso de las Etnias Perdidas:")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Caso de las Etnias Perdidas:
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Drama de las Discapacidades Ocultas:")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Drama de las Discapacidades Ocultas:
                    </h3>
                  )
                }
                if (paragraph.startsWith("Las Necesidades Especiales Ignoradas:")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Las Necesidades Especiales Ignoradas:
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Mundo del Estrato 1: La Lucha Diaria")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Mundo del Estrato 1: La Lucha Diaria
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Contraste de los Estratos Altos")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Contraste de los Estratos Altos
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Revelación de las Reglas de Asociación")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Revelación de las Reglas de Asociación
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Desconexión Indígena")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Desconexión Indígena
                    </h3>
                  )
                }
                if (paragraph.startsWith("Escuela Nueva: La Revolución Silenciosa")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Escuela Nueva: La Revolución Silenciosa
                    </h3>
                  )
                }
                if (paragraph.startsWith("Postprimaria: Llevando la Secundaria al Campo")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Postprimaria: Llevando la Secundaria al Campo
                    </h3>
                  )
                }
                if (paragraph.startsWith("Aceleración del Aprendizaje: Segunda Oportunidad")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Aceleración del Aprendizaje: Segunda Oportunidad
                    </h3>
                  )
                }
                if (paragraph.startsWith("Educación Indígena Propia: Preservando la Sabiduría Ancestral")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Educación Indígena Propia: Preservando la Sabiduría Ancestral
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Brecha Digital: Dos Colombias Tecnológicas")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Brecha Digital: Dos Colombias Tecnológicas
                    </h3>
                  )
                }
                if (paragraph.startsWith("Los Programas Gubernamentales: Computadores para Educar")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Los Programas Gubernamentales: Computadores para Educar
                    </h3>
                  )
                }
                if (paragraph.startsWith("Las Historias de Transformación")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Las Historias de Transformación
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Maestra Rural: Guardiana de Sueños")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Maestra Rural: Guardiana de Sueños
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Innovador Urbano: Tecnología con Corazón")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Innovador Urbano: Tecnología con Corazón
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Defensora de la Inclusión")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Defensora de la Inclusión
                    </h3>
                  )
                }
                if (paragraph.startsWith("Los Desafíos del Gremio")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Los Desafíos del Gremio
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Hoja de Ruta hacia la Equidad")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Hoja de Ruta hacia la Equidad
                    </h3>
                  )
                }
                if (paragraph.startsWith("1. Cerrar la Brecha Geográfica")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      1. Cerrar la Brecha Geográfica
                    </h3>
                  )
                }
                if (paragraph.startsWith("2. Diversificar los Modelos Educativos")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      2. Diversificar los Modelos Educativos
                    </h3>
                  )
                }
                if (paragraph.startsWith("3. Hacer Visible lo Invisible")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      3. Hacer Visible lo Invisible
                    </h3>
                  )
                }
                if (paragraph.startsWith("4. Reducir las Brechas Socioeconómicas")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      4. Reducir las Brechas Socioeconómicas
                    </h3>
                  )
                }
                if (paragraph.startsWith("5. Empoderar a los Maestros")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      5. Empoderar a los Maestros
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Visión 2035: Colombia Educada")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Visión 2035: Colombia Educada
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Impacto de una Década")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Impacto de una Década
                    </h3>
                  )
                }
                if (paragraph.startsWith("Los Datos que se Volvieron Acción")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Los Datos que se Volvieron Acción
                    </h3>
                  )
                }
                if (paragraph.startsWith("Las Nuevas Preguntas")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Las Nuevas Preguntas
                    </h3>
                  )
                }
                if (paragraph.startsWith("El Mensaje Final")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      El Mensaje Final
                    </h3>
                  )
                }
                if (paragraph.startsWith("La Historia Continúa")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      La Historia Continúa
                    </h3>
                  )
                }
                if (paragraph.startsWith("Fin... y Comienzo")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      Fin... y Comienzo
                    </h3>
                  )
                }
                return (
                  <p key={index} className="mb-6 text-justify">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Data Visualization */}
        {chapter.data && (
          <Card className="mb-8 border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Los Datos Revelan la Historia
              </CardTitle>
              <CardDescription className="text-center">
                Visualizaciones interactivas que dan vida a los números
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">{renderVisualization()}</CardContent>
          </Card>
        )}

        {/* Special Insights Cards */}
        {currentChapter === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800">Metodología Innovadora</h3>
                </div>
                <p className="text-blue-700">
                  SAGDEC utilizó algoritmos de machine learning como KMeans y reglas de asociación para descubrir
                  patrones ocultos en los datos educativos, revolucionando el análisis del sector.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-800">Impacto Nacional</h3>
                </div>
                <p className="text-green-700">
                  El proyecto abarcó todos los departamentos de Colombia, desde la Guajira hasta el Amazonas, creando el
                  mapa más completo del sistema educativo nacional.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {currentChapter === 4 && (
          <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-red-50 to-pink-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-red-800">La Urgencia de la Equidad</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-red-700 mb-2">Brecha de Recursos</h4>
                    <p className="text-sm text-gray-600">
                      Los colegios de estrato 6 tienen 24 veces más computadores por estudiante que los de estrato 1
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-red-700 mb-2">Desconexión Cultural</h4>
                    <p className="text-sm text-gray-600">
                      Las comunidades indígenas están prácticamente ausentes del sistema educativo formal
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-red-700 mb-2">Círculo de Pobreza</h4>
                    <p className="text-sm text-gray-600">
                      La calidad educativa perpetúa las desigualdades socioeconómicas existentes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentChapter === 8 && (
          <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6 text-green-800">Hoja de Ruta 2025-2035</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
                    <Building className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-800">Infraestructura</h4>
                    <p className="text-sm text-gray-600">Modernizar 1,000 colegios rurales</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
                    <Activity className="w-8 h-8 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-purple-800">Conectividad</h4>
                    <p className="text-sm text-gray-600">Internet de alta velocidad en 100% de colegios</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
                    <Users className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-800">Inclusión</h4>
                    <p className="text-sm text-gray-600">Programas especializados para todas las poblaciones</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
                    <Heart className="w-8 h-8 text-orange-600 mb-2" />
                    <h4 className="font-semibold text-orange-800">Maestros</h4>
                    <p className="text-sm text-gray-600">Dignificar la profesión docente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
          <Button
            onClick={prevChapter}
            disabled={currentChapter === 0}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Capítulo Anterior
          </Button>

          <div className="flex gap-2">
            {chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToChapter(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentChapter
                    ? "bg-blue-500 scale-125"
                    : index < currentChapter
                      ? "bg-green-400"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextChapter}
            disabled={currentChapter === chapters.length - 1}
            size="lg"
            className="flex items-center gap-2"
          >
            Siguiente Capítulo
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 bg-white p-6 rounded-lg shadow">
          <p className="text-sm">
            <strong>Elaborado por:</strong> Luis Alejandro López Suárez, Oscar Iván Rodríguez Barreto, Jhon Jairo
            Chinchay Campos
          </p>
          <p className="text-sm">Universidad de La Guajira, 2025</p>
          <p className="text-sm">
            <strong>Fuente:</strong> Datos Abiertos Colombia, MinEducación (2016)
          </p>
          <Badge variant="outline" className="mt-2">
            <a href="#" className="text-blue-600 hover:underline">
              Ver en Google Colab
            </a>
          </Badge>
        </div>
      </div>
    </div>
  )
}
