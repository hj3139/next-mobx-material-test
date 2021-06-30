import { action, observable, makeObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';
import { PageWrapper } from 'models';
import { useMemo } from 'react';
import { ResponseEventListModel } from './event.model';
import { eventAPI } from './event.api';
enableStaticRendering(typeof window === 'undefined');

let store: EventStore;

export class EventStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  eventList!: PageWrapper<ResponseEventListModel>;

  @action getEvent = async () => {
    const event = await eventAPI.getEvent(
      this.eventList.page + 1,
      this.eventList.size
    );

    this.eventList = {
      ...event,
      content: this.eventList.content.concat(event.content)
    };
  };

  @action hydrate = (
    data: { eventList: PageWrapper<ResponseEventListModel> } | null
  ) => {
    if (!data) return;
    this.eventList =
      data.eventList !== null
        ? data.eventList
        : {
            content: [],
            page: 0,
            size: 0,
            totalElements: 0,
            totalPages: 0,
            first: true,
            last: true
          };
  };
}

const initializeStore = (initialData = null) => {
  const _store = store ?? new EventStore();

  if (initialData) {
    _store.hydrate(initialData);
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export const useEventStore = (initialState: null | undefined) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
