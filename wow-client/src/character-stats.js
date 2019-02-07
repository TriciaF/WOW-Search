import React from 'react';
import {connect} from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList'
import CharacterItems from './character-items'
import {getCharacterItems} from './actions/search';



import './character-stats.css';

export class CharacterStats extends React.Component {

  onChange(value) {
    console.log('character item value selected = ', value);
    this.props.dispatch(getCharacterItems(this.props.charName, this.props.realmName))
    return <CharacterItems />
  };

  render() {

    //remove the first two values from the character items array and store in
    //dropdown list
    const characterItems = this.props.items.slice(2,this.props.items.length);
    console.log('characterItems = ', characterItems);
    const characterNames = characterItems.map( item => {
      return item.name;
    });
    console.log('characterNames = ', characterNames);

    return (
      <div className = 'character-stats-container'>
        <div className = 'character-container'>
          {/* <div className = 'character-stats'> */}
            {/* <div className = 'stat-container'> */}
            {/* <div className = 'stat-catagory'><img src={'https://render-eu.worldofwarcraft.com/character/'+ this.props.thumbnail} alt='image'></img>
            </div> */}
            <div className = 'catagory'><span className = 'catagory-title'>Attributes</span>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Level</span></div>
                    <div className = 'stat-value'><span>{this.props.level}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Health</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.health}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Strength</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.str}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Agility</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.agi}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Intelligence</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.int}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Stamina</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.sta}</span></div>
                </div>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Haste</span></div>
                    <div className = 'stat-value'><span>{this.props.stats.haste}</span></div>
                </div>
              </div>
              <form className = 'character-items'>
                  <div className = 'catagory'><span className= 'catagory-title'>Character Items</span>
                      <DropdownList
                          className='dropdown_customized'
                          data={characterNames}
                          onChange={value => this.onChange(value)}
                      />
                  </div>
              </form>
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className = 'character-container'>
          <div className = 'character-items'>
            <div className = 'item-container'>
            <div className = 'catagory'><span className = 'catagory-title'>Attributes</span>
                <div className = 'stat'>
                    <div className = 'stat-name'><span>Level</span></div>
                    <div className = 'stat-value'><span>{this.props.items.armor}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  charName: state.search.charName,
  realmName: state.search.realmName,
  stats: state.search.stats,
  level: state.search.level,
  thumbnail: state.search.thumbnail,
  items: state.search.items
});

export default connect(mapStateToProps)(CharacterStats);