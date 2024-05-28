

export async function save<Type extends object>(model: any, payload: object) {
   const data = model(payload);
   return <Type>await data.save();
}

export async function list<Type>(model: any, condition: object) {
   return <Type>model.find(condition)
}

export async function update<Type>(model: any, payload: object, condition: object) {
   return <Type>model.updateOne(condition, { $set: payload })
}

export async function deleteById<Type>(model: any, condition: object) {
   return <Type>model.deleteOne(condition)
}

export async function aggregate<Type>(model: any, condition: object) {
   return <Type>model.aggregate(condition)
}