import { ServiceBuilder, RequestInterceptorFunction } from "ts-retrofit";
import { SoapDemoService } from "./services/soap-demo.service";

export class SoapDemoClient {
    private apiKey: string;
    private SoapDemoServiceInstance: SoapDemoService | null = null;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private get requestInterceptor(): RequestInterceptorFunction {
        return (config) => {
            config.headers["Authorization"] = `Bearer ${this.apiKey}`;
            return config;
        };
    }

    public get SoapDemoService(): SoapDemoService {
        if (!this.SoapDemoServiceInstance) {
            this.SoapDemoServiceInstance = new ServiceBuilder()
                .setEndpoint("https://www.crcind.com:443/csp/samples/SOAP.Demo.cls")
                .setRequestInterceptors(this.requestInterceptor)
                .build(SoapDemoService);
        }
        return this.SoapDemoServiceInstance;
    }
}