import { useState, useEffect } from "react";
import Soundfont, { Player } from "soundfont-player";

interface Nota {
  cuerda: string;
  traste: number;
  nota: string;
}

const App = () => {
  const [acorde, setAcorde] = useState<Nota[]>([]);
  const [instrument, setInstrument] = useState<Player | null>(null);
  const [tooltip, setTooltip] = useState({ visible: false, note: "", position: { x: 0, y: 0 } });

  // Opciones de acordes basados en la escala mayor
  const acordes = {
    Do: [
      { cuerda: "re", traste: 2, nota: "E2" }, // Cuerda Re en el traste 2 (nota Mi)
    ],
    Re: [
      { cuerda: "re", traste: 4, nota: "F#2" }, // Cuerda Re en el traste 4 (nota Fa#)
    ],
    Mi: [
      { cuerda: "sol", traste: 0, nota: "G2" }, // Cuerda Sol al aire (nota Sol)
    ],
    Fa: [
      { cuerda: "sol", traste: 0, nota: "G2" }, // Cuerda Sol al aire (nota Sol)
    ],
    Sol: [
      { cuerda: "sol", traste: 2, nota: "A2" }, // Cuerda Sol en el traste 2 (nota La)
    ],
    La: [
      { cuerda: "la", traste: 0, nota: "A2" }, // Cuerda La al aire (nota La)
    ],
    Si: [
      { cuerda: "re", traste: 1, nota: "C#2" }, // Cuerda Re en el traste 1 (nota Re#)
    ],
  };

  // Cargar el instrumento al montar el componente
  useEffect(() => {
    const audioContext = new AudioContext();
    Soundfont.instrument(audioContext, "acoustic_bass").then((bass) => {
      setInstrument(bass);
    });
  }, []);

  // Función para manejar el cambio de acorde
  const handleAcordeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const acordeSeleccionado = event.target.value as keyof typeof acordes;

    // Si el valor seleccionado es vacío, limpiamos el estado
    if (!acordeSeleccionado) {
      setAcorde([]);
    } else {
      // De lo contrario, actualizamos el estado con el acorde seleccionado
      setAcorde(acordes[acordeSeleccionado]);
    }
  };

  // Función para reproducir una nota al hacer clic en una casilla
  const handleClickNota = (nota: string, event: React.MouseEvent) => {
    if (instrument) {
      instrument.play(nota); // Reproducir la nota
    }

    // Mostrar el tooltip con la nota
    setTooltip({
      visible: true,
      note: nota,
      position: { x: event.clientX, y: event.clientY },
    });

    // Ocultar el tooltip después de 2 segundos
    setTimeout(() => {
      setTooltip({ ...tooltip, visible: false });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bajo.jpg"
          alt="Bajo"
          className="w-full h-full object-cover opacity-30" // Ajusta la opacidad y el tamaño
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">
          Generador de Acordes de Bajo
        </h1>

        {/* Selector de acordes */}
        <div className="mb-8 w-full max-w-md mx-auto">
          <select
            onChange={handleAcordeChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona un acorde</option>
            {Object.keys(acordes).map((nombreAcorde) => (
              <option key={nombreAcorde} value={nombreAcorde}>
                {nombreAcorde}
              </option>
            ))}
          </select>
        </div>

        {/* Representación visual del bajo en formato de tablatura */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto overflow-x-auto">
          {["sol", "re", "la", "mi"].map((cuerda) => (
            <div key={cuerda} className="flex items-center mb-2 md:mb-4">
              <span className="w-10 md:w-26 text-right pr-2 md:pr-4 font-mono text-gray-400 text-sm md:text-base">
                {cuerda}
              </span>
              <div className="flex">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((traste) => {
                  const nota = acorde.find(
                    (n: Nota) => n.cuerda === cuerda && n.traste === traste
                  );
                  return (
                    <div
                      key={traste}
                      className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border-l border-r border-gray-600 relative ${
                        nota ? "bg-blue-600 cursor-pointer hover:bg-blue-700" : "bg-gray-700"
                      }`}
                      onClick={(event) => nota && handleClickNota(nota.nota, event)} // Reproducir nota al hacer clic
                    >
                      {/* Línea horizontal que representa el traste */}
                      <div className="absolute w-full h-1 bg-gray-500 top-0 left-0"></div>

                      {/* Mostrar "aire" si el traste es 0, de lo contrario, un círculo */}
                      {nota ? (
                        nota.traste === 0 ? (
                          <span className="text-xs text-white">aire</span>
                        ) : (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-800 border-2 border-blue-400"></div>
                        )
                      ) : (
                        <span className="text-gray-500 text-xs md:text-sm">---</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow-lg z-20"
          style={{
            top: tooltip.position.y - 40, // Posición Y del tooltip
            left: tooltip.position.x - 20, // Posición X del tooltip
          }}
        >
          {tooltip.note}
        </div>
      )}
    </div>
  );
};

export default App;