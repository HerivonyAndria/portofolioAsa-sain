// src/components/ui/ParticlesBackground.tsx
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Configuration pour le mode clair
  const lightConfig = {
    background: {
      color: {
        value: "#fafafa", // Couleur de fond light
      },
    },
    particles: {
      color: {
        value: "#3b82f6", // Bleu pour les particules
      },
      links: {
        color: "#93c5fd", // Liens plus clairs
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
      },
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
    },
  };

  // Configuration pour le mode sombre
  const darkConfig = {
    background: {
      color: {
        value: "#171717", // Couleur de fond dark
      },
    },
    particles: {
      color: {
        value: "#60a5fa", // Bleu plus clair pour dark mode
      },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
      number: {
        value: 70, // Plus de particules en dark mode
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
    },
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null; // Ne rien rendre tant que particles n'est pas initialisé
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles"
        options={currentTheme === "dark" ? darkConfig : lightConfig}
        className="absolute inset-0"
      />
      {/* Masque pour adoucir les bords comme votre design actuel */}
      <div
        className={cn(
          "absolute inset-0",
          "mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]",
          "dark:mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]"
        )}
      />
    </div>
  );
};

export default ParticlesBackground;