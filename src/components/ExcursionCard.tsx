import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "./StarRating";
import { MapPin, Clock, Users, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

export interface Excursion {
  id: number;
  name: string;
  location: string;
  duration: string;
  difficulty: "Fácil" | "Moderado" | "Difícil";
  ageRange: string;
  description: string;
  rating: number;
  totalVotes: number;
  comments: Comment[];
  image?: string;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  rating: number;
}

interface ExcursionCardProps {
  excursion: Excursion;
  onRatingUpdate: (id: number, newRating: number) => void;
  onAddComment: (id: number, comment: Omit<Comment, 'id' | 'date'>) => void;
}

export const ExcursionCard = ({ excursion, onRatingUpdate, onAddComment }: ExcursionCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [authorName, setAuthorName] = useState("");

  const difficultyColors = {
    "Fácil": "bg-green-100 text-green-800 border-green-200",
    "Moderado": "bg-yellow-100 text-yellow-800 border-yellow-200", 
    "Difícil": "bg-red-100 text-red-800 border-red-200"
  };

  const handleSubmitComment = () => {
    if (newComment.trim() && authorName.trim()) {
      onAddComment(excursion.id, {
        author: authorName.trim(),
        text: newComment.trim(),
        rating: newRating
      });
      setNewComment("");
      setAuthorName("");
      setNewRating(5);
    }
  };

  return (
    <Card className="shadow-card hover:shadow-mountain transition-all duration-300 border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold text-foreground">
              {excursion.name}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {excursion.location}
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={difficultyColors[excursion.difficulty]}
          >
            {excursion.difficulty}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {excursion.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {excursion.ageRange}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {excursion.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRating 
              rating={excursion.rating} 
              onRatingChange={(rating) => onRatingUpdate(excursion.id, rating)}
            />
            <span className="text-sm text-muted-foreground">
              ({excursion.totalVotes} valoraciones)
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1"
          >
            <MessageSquare className="w-4 h-4" />
            {excursion.comments.length}
            {showComments ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>

        {showComments && (
          <div className="space-y-4 pt-4 border-t border-border">
            {/* Comments list */}
            {excursion.comments.length > 0 && (
              <div className="space-y-3">
                {excursion.comments.map((comment) => (
                  <div key={comment.id} className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{comment.author}</span>
                      <div className="flex items-center gap-2">
                        <StarRating rating={comment.rating} readOnly size="sm" />
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Add comment form */}
            <div className="space-y-3 p-3 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background"
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">Tu valoración:</span>
                  <StarRating rating={newRating} onRatingChange={setNewRating} size="sm" />
                </div>
              </div>
              
              <Textarea
                placeholder="Comparte tu experiencia en esta excursión..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              
              <Button 
                onClick={handleSubmitComment}
                disabled={!newComment.trim() || !authorName.trim()}
                variant="default"
                size="sm"
                className="bg-gradient-mountain hover:opacity-90"
              >
                Publicar comentario
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};