import { createContext, useContext, useReducer } from "react"

const InfosContext = createContext(null)
const InfosDispatchContext = createContext(null)



export function InfosProvider({children }) {
  const [infos, dispatch] = useReducer(infosReducer, initialInfos)

  return (
    <div>
      <InfosContext.Provider value={infos}>
          <InfosDispatchContext.Provider value={dispatch}>
              {children }
          </InfosDispatchContext.Provider>
      </InfosContext.Provider>
    </div>
  );
}

export function useInfos() {
    return useContext(InfosContext);
}
export function useInfosDispatch() {
    return useContext(InfosDispatchContext)
}

const initialInfos = {
  inputs: {
      firstName: '',
      lastName: '',
      job: ''
  },
  result: {
      firstName: ' . . . ',
      lastName: ' . . . ',
      job: ' . . . '
  }
};

function infosReducer (infos, action) {
    switch (action.type) {
      case "submit" : {
        return {inputs: {...initialInfos.inputs}, result: {...infos.inputs}}
      }
      case "change": {
        return {inputs: {...infos.inputs, [action.prop]: action.value}, result: {...infos.result}}
      }
      case "reset": {
        return {inputs: {...initialInfos.inputs}, result: {...initialInfos.result}}
      }
      default: {
        throw Error(`unknown action=>${action.type}`)
      }
    }
  }

