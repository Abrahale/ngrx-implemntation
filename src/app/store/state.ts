import { UserStoreState} from './user-store';
import { ApplicationListStoreState} from './application-list-store';

export interface State{
    userStore: UserStoreState.State;
    applicationList: ApplicationListStoreState.State;
}
