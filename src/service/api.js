import axios from "axios";
 const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});
export default api;
// https://agt.minfin.gov.ao/PortalAGT/#!/servicos/consultar-nif/542555