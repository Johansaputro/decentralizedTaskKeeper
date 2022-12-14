export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'addNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'readNote' : IDL.Func([], [IDL.Vec(Note)], ['query']),
    'removeNote' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
