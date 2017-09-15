import { Map, List } from 'immutable';
 
const INITIAL_STATE = Map({
    totalContentItems: "",
    pageNumRequested: "",
    pageSizeRequested: "",
    pageSizeReturned: "",
    cinemaList: List([]),
    view: Map({
        isLoading: false
    })
});
 
export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_IMAGES':
                return state.merge({
                    view: {
                        isLoading: true
                    }
                });
        case 'GET_IMAGES_SUCCESS':
            return state.merge({
                totalContentItems: "",
                pageNumRequested: "",
                pageSizeRequested: "",
                pageSizeReturned: "",
                cinemaList: action.payload.page['content-items'].content,
                view: {
                    isLoading: false
                }
            });
        default: return state;
    }
}
 