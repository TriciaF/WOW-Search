import React from 'react';
import {connect} from 'react-redux';



import './character-stats.css';

export class CharacterStats extends React.Component {

  render() {


    return (
      <div className = 'character-stats-container'>
        <div className = 'character-stats'>
          <div className = 'stat-container'>
           <div className = 'stat-title'><span>Attributes</span>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Strength</span></div>
                <div className = 'stat-value'><span>{this.props.stats.str}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Agility</span></div>
                <div className = 'stat-value'><span>{this.props.stats.agi}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Intillect</span></div>
                <div className = 'stat-value'><span>{this.props.stats.int}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Stamina</span></div>
                <div className = 'stat-value'><span>{this.props.stats.sta}</span></div>
              </div>
          </div>
          <div className = 'stat-title'><span>Defence</span>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Armor</span></div>
                <div className = 'stat-value'><span>{this.props.stats.armor}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Dodge</span></div>
                <div className = 'stat-value'><span>{this.props.stats.dodge}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Parry</span></div>
                <div className = 'stat-value'><span>{this.props.stats.parry}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Block</span></div>
                <div className = 'stat-value'><span>{this.props.stats.block}</span></div>
              </div>
          </div>
          <div className = 'stat-title'><span>Attack</span>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Damage</span></div>
                <div className = 'stat-value'><span>{this.props.stats.armor}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Speed</span></div>
                <div className = 'stat-value'><span>{this.props.stats.dodge}</span></div>
              </div>
          </div>a
          <div className = 'stat-title'><span>Enhancements</span>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Crit</span></div>
                <div className = 'stat-value'><span>{this.props.stats.armor}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Haste</span></div>
                <div className = 'stat-value'><span>{this.props.stats.dodge}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Mastery</span></div>
                <div className = 'stat-value'><span>{this.props.stats.parry}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Leech</span></div>
                <div className = 'stat-value'><span>{this.props.stats.block}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Versatility</span></div>
                <div className = 'stat-value'><span>{this.props.stats.block}</span></div>
              </div>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Leech</span></div>
                <div className = 'stat-value'><span>{this.props.stats.block}</span></div>
              </div>
          </div>
          <div className = 'stat-title'><span>Spell</span>
              <div className = 'stat'>
                <div className = 'stat-name'><span>Mana Regen</span></div>
                <div className = 'stat-value'><span>{this.props.stats.armor}</span></div>
              </div>
          </div>
         </div> 
        </div>
        <div className = 'compare-stats'>
        
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  stats: state.search.stats
});

export default connect(mapStateToProps)(CharacterStats);