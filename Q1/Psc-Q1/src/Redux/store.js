import { legacy_createStore } from "redux";
import { todoreducer } from "./reducer";

export const todostore = legacy_createStore(todoreducer)