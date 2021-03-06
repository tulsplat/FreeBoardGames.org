import * as React from 'react';
import { BetButtonComponent } from './BetButtonComponent';

import css from './BetPanel.css';

export interface IBetPanelProps {
  playerIndex: number;
  minBet: number;
  maxBet: number;
  bet: (bet: number) => void;
  skip?: () => void;
}

export class BetPanel extends React.Component<IBetPanelProps, {}> {
  _bet = (bet: number) => {
    this.props.bet(bet);
  };

  render() {
    return <div className={css.bidPanel}>{this.renderBettingOptionsContainer()}</div>;
  }

  renderBettingOptionsContainer() {
    var props = this.props;
    var optionsCount = props.maxBet - props.minBet + (props.skip ? 1 : 0);

    const w: number = optionsCount * 40 + 80;

    return (
      <div className={css.betting} style={{ width: w }}>
        {this.renderBettingOptions()}
      </div>
    );
  }

  renderBettingOptions() {
    var bets = [];
    for (var bet = this.props.minBet; bet <= this.props.maxBet; bet++) {
      bets.push(bet);
    }

    return bets.map((bet: number, index: number) => this.renderBetOption(bet, index));
  }

  renderBetOption(bet: number, index: number) {
    return (
      <div key={index}>
        <BetButtonComponent click={() => this._bet(bet)} bet={bet} />
      </div>
    );
  }
}
