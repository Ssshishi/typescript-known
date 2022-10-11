const arr1: string[] = [];

const arr2: Array<string> = [];

const arr3: string[] = ['shen', 'shi', 'shi'];

console.log(arr3[599])

const arr4: [string, string, string] = ['shen', 'shi', 'shi']

const arr5: [string, number, boolean] = ['shenshishi', 120, true]

console.log(arr4[500]) 
//  Tuple type '[string, string, string]' of length '3' has no element at index '500'.

const arr6: [string, number?, boolean?] = ['shenshishi' ]

type TupleLength = typeof arr6.length

const arr7: [name: string, age: number, male: boolean] = ['shenshishi', 121, true]

const  [name, age, male] = arr5