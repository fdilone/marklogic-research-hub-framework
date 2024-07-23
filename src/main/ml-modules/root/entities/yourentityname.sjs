const EntityConfig = require('./entityconfig').EntityConfig;

/** See superclass EntityConfig for comments on these methods **/

module.exports = class YourEntityNameConfig extends EntityConfig {
    constructor(entity) {
        super(entity);
    }

    getPreferredName() {
        return this.entity.envelope.instance.YourEntityName.name;
    }

    getType() {
        return 'yourentityname';
    }

    getContent() {
        return this.entity.envelope.instance.YourEntityName;
    }

    isEnrichable() {
       return false;
    }

    getRelationships(type, entityURI) {
        let relationships = [];

        // no relationships
        //relationships = relationships.concat(this.getRelatedEntitiesWhereSubject(entityURI, "impacts"));

        return relationships;
    }

    getPredicates() {
        return [
          //for instance: "PRH:hasSkill"
        ];
    }

    getCollection() {
        return 'YourEntityName';
    }

    getBoostQuery(entity, weight) {
        return cts.falseQuery()
    }
}
