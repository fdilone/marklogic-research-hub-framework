import { default as YourEntityName } from './YourEntityName';
import { default as YourEntityNameDetailView } from './YourEntityNameDetailView';
import { default as YourEntityNameCard } from './YourEntityNameCard';
import { default as YourEntityNameResult } from './YourEntityNameResult';

export default {
    class: YourEntityName,
    plural: 'yourentitynames',
    cardView: YourEntityNameCard,
    detailView: YourEntityNameDetailView,
    resultView: YourEntityNameResult,
    route: '/yourentityname'
}
