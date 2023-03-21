# Preguntas

- ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
  Son 4 las ceremonias de un sprint.

1. Sprint planning: planeción del sprint, el objetivo es llegar a acuerdos de lo que se hará y cómo se hará. Es como crear un ckecklist de las tareas por hacer.
2. Daily scrum: scrum diario: esta ceremonia es una reunión rápida, tiene como objetivo hacer que todos estén conectados y actualizados en el avance realizado en el sprint actual. Qué se hizo el día anterior, qué se está trabajando y cuáles han sido los obstáculos. Es en resumen una sincronización del trabajo.
3. Sprint review: revisión del sprint: revisar todo lo que se logró durante el sprint actual, se realiza cuando termina un sprint y se actualiza el backlog para la siguiente iteración.
4. Sprint retrospective: restrospectiva del sprint: no debería durar más de una hora. Es la oportunidad para discutir las mejoras a implementar para que el equipo avance.

- ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Es una representación visual de la estructura de una página web, se puede hacer a mano o usando con herramientas de software. Se utiliza para definir la posición y contenido de los bloques o componentes de una página web, también las rutas a otras páginas. Con esto se facilita la comunicaciónentre el cliente y el equipo de diseño y hace que sea rápido probar y crear múltiples diseños. Ejemplo [Figma](https://www.figma.com)

- Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

1. var: es la forma antigua de declarar variables. Tiene un alcance global y por esto puede tener problemas si se modifica, por ejemplo dentre de una función.
2. const: es una varible que guarda datos primitivos inmutables. por ejemplo una varible const valor=1, generararía un error si se asigna un valor diferente e.g. valor=2. A diferencia de var, let y const tiene alcance de bloque y no global.
3. let: es una varible con alcance de bloque que además permite modificaciones (no es inmutable). Se usa con frecuencia en la declaración de un ciclo for en el que el índice i cambia de valor en cada iteración. for(let i=0, "condicion", i++)

- ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

1. git checkout -b "rama-1"
2. git branch "rama-1"
3. git

- Explicar la diferencia entre git merge y git rebase.
  con git merge, se integra o combina una rama (feature por ejemplo), hacia otra rama (main por ejemplo) haciendo un nuevo commit en la rama main luego del merge.

Con rebase, se iguala la nueva rama (feature), con la rama nueva (main), esto implica quitar los commit de la rama feature provisionalmente para luego se colocar los commit al final de rama actualizada con rebase. A partir de este punto se puede hacer el merge y el resultado será un merge fast forward (sin un commit de combinación o integración)

- ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

Git pull se usa para traer la información desde el archivo remoto hacia nuestro repositorio local.

Una PR por otro lado es una solicitud para integrar los cambios que se realizaron, se subieron al repositorio y estan listos para ser evaluados y aprobados previamente a combinarlos en la rama de final (main o develop por ejemplo)

- ¿Qué es el Virtual DOM?

Es un modelo de objeto documento más eficiente al realizar cambios en la aplicación. Es una forma en la que trabaja react para estar comprobando si algún componente de react tiene un cambio y así actualizar ese componente únicamente y su descendencia pero no los padres o la jerarquía superior en el árbol de componentes, esto hace que sea más eficiente hacer un cambio en nuestra aplicación porque no requiere la actualización de todas las páginas o componentes.

- Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

[codePen solution](https://codepen.io/icabulo/pen/LYJgmpY?editors=1100)
