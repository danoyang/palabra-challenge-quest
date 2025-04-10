
import { ReadingPassage } from '@/data/spanishReadings';

export interface CollectedWord {
  word: string;
  translation: string;
}

export interface GameState {
  currentPassage: ReadingPassage | null;
  collectedWords: CollectedWord[];
  selectedAnswer: number | null;
  isAnswerCorrect: boolean | null;
  isGameComplete: boolean;
  isInChallengeMode: boolean;
  remainingHearts: number;
  currentWordIndex: number;
}

export interface GameContextType extends GameState {
  startGame: (passageId?: string) => void;
  collectWord: (word: string) => string | null;
  selectAnswer: (answerIndex: number) => void;
  nextPassage: () => void;
  resetGame: () => void;
  startChallengeMode: () => void;
  checkVocabularyAnswer: (answer: string) => boolean;
  loseHeart: () => void;
  nextWord: () => void;
}
