const fetchPerson = () => {
  return fetch('https://randomuser.me/api')
    .then(x => x.json())
    .then(res => res.results[0]);
};

const STATUS_ERROR = 'error';
const STATUS_PENDING = 'pending';
const STATUS_SUCCESS = 'success';

const wrapPromise = promise => {
  let status = STATUS_PENDING;
  let result = '';

  let suspender = promise.then(
    res => {
      status = STATUS_SUCCESS;
      result = res;
    },
    e => {
      status = STATUS_ERROR;
      result = e;
    },
  );

  return {
    read() {
      if (status === STATUS_PENDING) throw suspender;
      else if (status === STATUS_ERROR) throw result;

      return result;
    },
  };
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
  };
};
