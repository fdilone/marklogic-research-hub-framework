import Entity from '../Entity';

const icon = require('../../images/bullseye-solid.svg');
const recommendationBorderColor = '#F4364C';
const recommendationBorderSize = 5;

class YourEntityName extends Entity {

  getGraphTitle() {
    let title = 'Title';
    if (this.entity && this.entity.Name) {
      title =
        '<p><b>Name: </b>' +
        Entity.truncateTitle(this.entity.Name) +
        '</p>';
    }

    return title;
  }

  static getInstance(data) {
    return new YourEntityName(data);
  }

  static getEntityName() {
    return 'YourEntityName';
  }

  static getGraphColor() {
    return '#000000';
  }

  static getGraphShape() {
    return 'circularImage';
  }

  static getGraphIcon() {
    return icon;
  }

  static getIcon() {
    return 'fas fa-bullseye uf-icon';
  }

  static getGraphGroupOptions() {
    return {
      yourentityname: {
        color: YourEntityName.getGraphColor(),
        shape: YourEntityName.getGraphShape(),
        image: YourEntityName.getGraphIcon()
      },
      yourentitynamerecommendation: {
        borderWidth: recommendationBorderSize,
        shapeProperties: {
          useBorderWithImage: true
        },
        color: {
          background: YourEntityName.getGraphColor(),
          border: recommendationBorderColor
        },
        shape: YourEntityName.getGraphShape(),
        image: YourEntityName.getGraphIcon()
      }
    }
  }

  static getGraphGroupPrefixes() {
    return {
      yourentityname: 'yourentityname',
      yourentitynamerecommendation: 'yourentityname'
    };
  }

  static getSearchReducerNamespace() {
    return 'yourentitynameSearch';
  }

  static getWorkspacePredicates() {
    return ['isRelevant'];
  }

}

export default YourEntityName;
