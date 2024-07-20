import { msgSlice } from "./reciveSlice";

const { actions } = msgSlice;

export const msgActionFun =
  (queryParams: any) =>
  (dispatch: (arg0: { payload: any; type: string }) => void) => {
    return dispatch(actions.msgAction(queryParams));
  };
