import React from 'react';
import Reg from "./Reg";
import Tools from "./Tools";
import {  Routes, Route} from "react-router-dom";
import Theft from "./Theft";
import TheftReport from "./TheftReport";
import TheftEdit from "./TheftEdit";
import Responsible from "./Responsible";
import ResponsibleList from "./ResponsibleList";
import RespEdit from "./RespEdit";

const Main = (props) => {
    return (
        <main>
            < Routes>
                <Route  path= {"/"} element={<Tools {...props} />} />
                <Route  path= {"/reg"} element={<Reg {...props}  />  }  />
                <Route  path= {"/theft"} element={<Theft {...props}  />  }  />
                <Route  path= {"/theft/:id"} element={<TheftEdit {...props}  />  }  />
                <Route  path= {"/theftReport"} element={<TheftReport {...props}  />  }  />
                <Route  path= {"/responsible"} element={<Responsible {...props}  />  }  />
                <Route  path= {"/responsible/:id"} element={<RespEdit {...props}  />  }  />
                <Route  path= {"/responsibleList"} element={<ResponsibleList {...props}  />  }  />
            </ Routes>
        </main>
    );
};

export default Main;