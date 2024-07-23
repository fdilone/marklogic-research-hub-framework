import Concept from './Concept';

const icon = require('../images/bullseye-solid.svg');
const recommendationBorderColor = '#F4364C';
const recommendationBorderSize = 5;

class YourConceptName extends Concept {

  getGraphTitle() {
    return this.concept.preferredName;
  }

  static getInstance(data) {
    return new YourConceptName(data);
  }

  static getConceptName() {
    return 'YourConceptName';
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

  static getGraphGroupOptions() {
    return {
        yourconceptname: {
            color: YourConceptName.getGraphColor(),
            shape: YourConceptName.getGraphShape(),
            image: YourConceptName.getGraphIcon()
          },
          yourconceptnamerecommendation: {
            borderWidth: recommendationBorderSize,
            shapeProperties: {
              useBorderWithImage: true
            },
            color: {
              background: YourConceptName.getGraphColor(),
              border: recommendationBorderColor
            },
            shape: YourConceptName.getGraphShape(),
            image: YourConceptName.getGraphIcon()
        }
    }
  }

  static getGraphGroupPrefixes() {
    return {};
  }

}

export default YourConceptName;
