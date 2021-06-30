/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure } from 'mobx';
import { CountStore, useCountStore } from './count';
import { EventStore, useEventStore } from './event';
configure({
  enforceActions: 'never'
});
export class RootStore {
  count: CountStore;
  event: EventStore;

  constructor(props: any) {
    this.count = useCountStore(props);
    this.event = useEventStore(props);
  }
}

export const stores = (props: any) => {
  return {
    count: useCountStore(props),
    event: useEventStore(props)
  };
};
