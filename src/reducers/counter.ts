/**
 * Created by hcj on 24/01/2018.
 */
 export default function counter(state=0, action:{type:string}){
     switch (action.type){
         case 'INCREMENT_COUNTER':
             return state + 1;
         case 'DECREMENT_COUNTER':
             return state - 1;
         default:
             return state;
     }
}