import { combineReducers } from 'redux';
import projects from './projects';

const rootReducer = combineReducers({
    projs: projects
});

export default rootReducer;