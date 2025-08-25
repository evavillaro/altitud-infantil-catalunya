import { useState, useMemo } from "react";
import { ExcursionCard, type Excursion, type Comment } from "@/components/ExcursionCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Clock, Filter } from "lucide-react";
import { excursionsData } from "@/data/excursions";

const Index = () => {
  const [excursions, setExcursions] = useState<Excursion[]>(excursionsData);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Todas");
  const [selectedAge, setSelectedAge] = useState<string>("Todas las edades");

  const difficulties = ["Todas", "Fácil", "Moderado", "Difícil"];
  const ageRanges = ["Todas las edades", "2-5 años", "6-10 años", "11+ años"];

  // Filter excursions based on selected filters
  const filteredExcursions = useMemo(() => {
    return excursions.filter((excursion) => {
      const matchesDifficulty = selectedDifficulty === "Todas" || excursion.difficulty === selectedDifficulty;
      
      let matchesAge = true;
      if (selectedAge !== "Todas las edades") {
        const ageNum = parseInt(excursion.ageRange.split(" ")[2]) || 0;
        switch (selectedAge) {
          case "2-5 años":
            matchesAge = ageNum <= 5;
            break;
          case "6-10 años":
            matchesAge = ageNum >= 6 && ageNum <= 10;
            break;
          case "11+ años":
            matchesAge = ageNum >= 11;
            break;
        }
      }
      
      return matchesDifficulty && matchesAge;
    });
  }, [excursions, selectedDifficulty, selectedAge]);

  const handleRatingUpdate = (excursionId: number, newRating: number) => {
    setExcursions(prev => 
      prev.map(excursion => {
        if (excursion.id === excursionId) {
          const totalVotes = excursion.totalVotes + 1;
          const rating = ((excursion.rating * excursion.totalVotes) + newRating) / totalVotes;
          return { ...excursion, rating: Math.round(rating * 10) / 10, totalVotes };
        }
        return excursion;
      })
    );
  };

  const handleAddComment = (excursionId: number, newComment: Omit<Comment, 'id' | 'date'>) => {
    setExcursions(prev =>
      prev.map(excursion => {
        if (excursion.id === excursionId) {
          const comment: Comment = {
            ...newComment,
            id: Date.now(),
            date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
          };
          return { ...excursion, comments: [comment, ...excursion.comments] };
        }
        return excursion;
      })
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/cerdanya-hero.jpg')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mountain className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Excursiones en la Cerdaña
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Descubre las mejores rutas familiares entre Girona y Francia. 
            Comparte experiencias, puntúa y comenta tus aventuras montañeras favoritas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span>Rutas familiares</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Mountain className="w-5 h-5" />
              <span>Pirineos catalanes</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span>Actualizadas 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar excursiones</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Dificultad</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Badge
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "secondary"}
                      className={`cursor-pointer transition-all ${
                        selectedDifficulty === difficulty 
                          ? "bg-gradient-mountain text-primary-foreground" 
                          : "hover:bg-accent"
                      }`}
                      onClick={() => setSelectedDifficulty(difficulty)}
                    >
                      {difficulty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Edad recomendada</h3>
                <div className="flex flex-wrap gap-2">
                  {ageRanges.map((ageRange) => (
                    <Badge
                      key={ageRange}
                      variant={selectedAge === ageRange ? "default" : "secondary"}
                      className={`cursor-pointer transition-all ${
                        selectedAge === ageRange 
                          ? "bg-gradient-mountain text-primary-foreground" 
                          : "hover:bg-accent"
                      }`}
                      onClick={() => setSelectedAge(ageRange)}
                    >
                      {ageRange}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Excursions Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredExcursions.length} excursiones encontradas
            </h2>
          </div>

          {filteredExcursions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron excursiones con los filtros seleccionados.
              </p>
              <Button
                onClick={() => {
                  setSelectedDifficulty("Todas");
                  setSelectedAge("Todas las edades");
                }}
                variant="outline"
                className="mt-4"
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {filteredExcursions.map((excursion) => (
                <ExcursionCard
                  key={excursion.id}
                  excursion={excursion}
                  onRatingUpdate={handleRatingUpdate}
                  onAddComment={handleAddComment}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Mountain className="w-8 h-8" />
          </div>
          <p className="text-sm opacity-90">
            Excursiones Cerdaña - Tu guía definitiva para aventuras familiares en los Pirineos
          </p>
          <p className="text-xs opacity-75 mt-2">
            © 2024 - Creado con ❤️ para familias montañeras
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;