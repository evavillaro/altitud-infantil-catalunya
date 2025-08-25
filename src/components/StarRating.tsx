import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export const StarRating = ({ 
  rating, 
  onRatingChange, 
  readOnly = false,
  size = "md" 
}: StarRatingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => !readOnly && onRatingChange?.(star)}
          className={cn(
            "transition-colors duration-200",
            !readOnly && "hover:scale-110 cursor-pointer",
            readOnly && "cursor-default"
          )}
        >
          <Star
            className={cn(
              sizeClasses[size],
              star <= rating
                ? "fill-accent text-accent"
                : "fill-muted text-muted-foreground",
              "transition-all duration-200"
            )}
          />
        </button>
      ))}
    </div>
  );
};