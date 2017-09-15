import {
    takeLatest,
    delay
} from 'redux-saga';
 
import {
    put
} from 'redux-saga/effects';
 
const API_URL = 'http://localhost:8080/';
 
const getFromServer = () => {
    return fetch(API_URL + 'api/getCinemas?pageNumber=3&pageSize=20')
        .then(response => response.json());
}

function* loadImages () {
  try {
    yield delay(1000);
    const cinemaList = yield getFromServer();
    yield put({ type: 'GET_IMAGES_SUCCESS', payload: cinemaList });
  } catch (error) {
    yield put({ type: 'GET_IMAGES_FAILURE' });
  }
}
 
function* watchGetImages () {
  yield takeLatest('GET_IMAGES', loadImages);
}
 
export default function* rootSaga () {
  yield [
    watchGetImages()
  ]
}