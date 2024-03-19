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
  const [pass,setPass] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const characters_length = characters.length;
  
  function pass_generator(){
    let password = "";

    for(let i=0;i<passLength;i++){
      const random_index = Math.floor(Math.random()*characters_length);
      password += characters[random_index];
    }
    setPass(password);
  }

  function passwordStrength(){
    if(pass.length >= 10){
      return "Strong";
    } else if (pass.length >= 6) {
      return "Medium";
    } else {
      return "Weak";
    }
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Password Generator</h1>
      <h2>{showPassword ? pass : "*".repeat(passLength)}</h2>
      {pass && <p>Password Strength : {passwordStrength()}</p>}
      {pass && <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>}
      {pass && <button style={{marginTop:"-100px"}} onClick={()=>navigator.clipboard.writeText(pass)}>Copy</button>}
      <div>
        <p>Password length</p>
        <input type="number" value={passLength} onChange={(e)=>setPassLength(Number(e.target.value))} />
      </div>
      <button style={{marginTop:"20px"}} onClick={pass_generator}>Password Generate</button>
    </div>
  )
}
