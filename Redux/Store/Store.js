import {createStore} from "redux"
import { Reducer } from "../Reducers/Reducers"

export const myStore=createStore(Reducer);