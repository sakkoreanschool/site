import SteinStore from 'stein-js-client';
import Constants from '../constants';
import { confirmAlert } from 'react-confirm-alert';

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5d3fb20987c49c04cac13693"
);

function writeToDatabase(parentInfo, student, prepareStudent) {
    let registration = {...parentInfo, ...student};

    writeRegistration(registration, () => {
        confirmAlert({
            title: '추가 학생 등록',
            message: '추가 등록할 학생이 있습니까? (Do you need to enter an additional student?)',
            buttons: [
              {
                label: 'Yes',
                onClick: () => prepareStudent()
              },
              {
                label: 'No',
                onClick: () => { redirectRelative('confirmation'); }
              }
            ]
          });
    });
}

function writeRegistration(registration, postFunction) {
    store.append(Constants.dbYear, [registration], 
    {
        authentication: { username: Constants.username, password: Constants.auth }
    })
    .then(res => {
        postFunction();
    }).catch(err => {
        console.log(err);
        window.location.href = '/involvement/registration/';
    });
}

async function searchDatabase(email) {
    // console.log("em: " + email);
    return await store.read(Constants.previousDbYear,     
    {
        authentication: { username: Constants.username, password: Constants.auth },
        search: { email: email }
    })
    .then(data => {
        return data;
      }).catch(err => {
        console.log(err);
    });
}

// Replace the last path segment with a new one
function redirectRelative(dest) {
    let basePath = window.location.pathname.split('/');
    basePath.splice(-2, 1, dest);
    window.location.href = basePath.join('/');
}

export default {writeToDatabase, searchDatabase, writeRegistration};