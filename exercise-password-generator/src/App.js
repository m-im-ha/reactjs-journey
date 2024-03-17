import { useState } from "react";

// export default function App() {
//   const [passLength, setPassLength] = useState(6);
//   const [check, setCheck] = useState(false);

//   const numbers = "0123456789";
//   const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
//   const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
//   let password = "";


//   for(let i=0;i<passLength;i++){

//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <Header />
//       <Password />
//       <Selection passLength={passLength} setPassLength={setPassLength} check={check} setCheck={setCheck} />
//       <Button />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div>
//       <h1>Password Generator</h1>
//     </div>
//   );
// }
// function Password() {
//   return (
//     <div>
//       <p style={{ color: "tomato", fontSize: "40px" }}>&8Dx^;</p>
//     </div>
//   );
// }

// function Selection({passLength,setPassLength,check,setCheck}) {
//   // console.log(passLength);
//   console.log(check);
//   return (
//     <div style={{ display: "flex" }}>
//       <p>password length</p>
//       <input
//         style={{ width: "40px" }}
//         type="number"
//         value={passLength}
//         onChange={(e) => setPassLength(e.target.value)}
//       />
//       <p>Add Uppercase Letters</p>
//       <input type="checkbox" onChange={() => setCheck(!check)} />
//       <p>Add Lowercase Letters</p>
//       <input type="checkbox" />
//       <p>Add Numbers</p>
//       <input type="checkbox" />
//       <p>Add Symbols</p>
//       <input type="checkbox" />
//     </div>
//   );
// }

// function Button() {
//   return (
//     <div>
//       <button>Generate Password</button>
//     </div>
//   );
// }

export default function App(){
  const [passLength, setPassLength] = useState(6);
  // console.log(passLength);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const characters_length = characters.length;
  let password = "";
  
  for(let i=0;i<passLength;i++){
    const random_character = characters[Math.round(Math.random()*characters_length)];
    password += random_character;
    console.log(password);
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Password Generator</h1>
      <h2>{password}</h2>
      <div>
        <p>Password length</p>
        <input type="number" value={passLength} onChange={(e)=>setPassLength(e.target.value)} />
      </div>
      <button style={{marginTop:"20px"}}>Password Generate</button>
    </div>
  )
}
