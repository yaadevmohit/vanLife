import { useOutletContext } from "react-router-dom";

import { type ContextType } from "../types/index";



export function useVanData() {
    return useOutletContext<ContextType>();
}
