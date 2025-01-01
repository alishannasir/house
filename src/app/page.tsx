"use client"

import Client from "@/(client)/Client";
import {useSwitchButton} from "@/GlobalStates/SwitchButtonContext"
import Owner from "@/(owner)/Owner";

export default function Home() {
  const { switchButton } = useSwitchButton();
  return (
    <>
     <div className="container">
      {
         switchButton === "Switch to Host" ? (
          <>
            <p> content for Host</p>
           <Owner/>
         </>
            
         ):(
           <>
             <p>Content for Client</p>
              <Client/>
           </>
         )}
     </div>
    </>
  );
}
