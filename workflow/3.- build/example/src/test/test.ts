import { SoapDemoClient } from "../soap-demo.client";

const client = new SoapDemoClient("");
const req = client.SoapDemoService.getDataSetByName({ name: "demo" });

req.then(res => console.log(res.data))
    .catch(console.error);