import { action, observable, makeObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';
import { useMemo } from 'react';
enableStaticRendering(typeof window === 'undefined');

let store: CountStore;

export class CountStore {
  constructor() {
    makeObservable(this);
  }

  @observable number = 0;

  @action increase = () => {
    this.number += 1;
  };

  @action decreaes = () => {
    this.number -= 1;
  };

  @action hydrate = (data: { number: number } | null) => {
    if (!data) return;
    this.number = data.number !== null ? data.number : 0;
  };
}

const initializeStore = (initialData = null) => {
  const _store = store ?? new CountStore();

  if (initialData) {
    _store.hydrate(initialData);
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export const useCountStore = (initialState: null | undefined) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
