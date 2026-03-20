export default function todoReducer(draft, action) {
    // type
    switch(action.type) {
        case 'added': {
            const { nextId, todoText } = action;
            draft.push({id: nextId, text: todoText, done: false})
            break;
        }
        case 'added_index' : {
            const { insertAt, nextId, todoText } = action;
            draft.splice(insertAt, 0, {id: nextId, text: todoText, done: false})
            break;
        }
        case 'deleted' : {
            const { deleteId } = action;
            return draft.filter(item => item.id != deleteId);
        }
        case 'done' : {
            const { id, done } = action;
            draft.find(item => item.id === id);
            target.done = done;
            break;
        }
        case 'reverse' :{
            return draft.toReversed();
        }
        case 'init': {
            draft.push(...action.data)
            break;
        }
        default: {
            throw Error('알 수 없는 액션 type:' + action.type)
        }
    }
}