import { Map, List } from 'immutable';
 
const INITIAL_STATE = Map({
    totalContentItems: "0",
    pageNumRequested: "0",
    pageSizeRequested: "0",
    pageSizeReturned: "0",
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
            let cinemaListInState = state.get('cinemaList')
            return state.merge({
                totalContentItems: action.payload.page['total-content-items'],
                pageNumRequested: action.payload.page['page-num-requested'],
                pageSizeRequested: action.payload.page['page-size-requested'],
                pageSizeReturned: action.payload.page['page-size-returned'],
                cinemaList: cinemaListInState.concat(action.payload.page['content-items'].content),
                view: {
                    isLoading: false
                }
            });
        default: return state;
    }
}
 