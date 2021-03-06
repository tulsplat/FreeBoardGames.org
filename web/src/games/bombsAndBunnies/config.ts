import { IGameConfig } from 'gamesShared/definitions/game';
import { BombsAndBunniesGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: BombsAndBunniesGame,
  bgioBoard: Board,
  debug: true,
};

export default config;
