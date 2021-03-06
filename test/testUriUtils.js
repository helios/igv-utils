import {URIUtils, StringUtils, TrackUtils} from "../src/index.js"
import {assert} from 'chai';

suite("testUriUtils", function () {

    /**
     * Parsing a uri => dictionary of parts
     */
    test("Parse URI", function () {
        this.timeout(10000);
        const uri = "https://igv.org/app?session=foo&args=bar";
        const result = URIUtils.parseUri(uri);
        assert.ok(result);
        assert.equal("igv.org", result.host);
        assert.equal("/app", result.path);
        assert.equal("session=foo&args=bar", result.query);
        assert.equal("https", result.protocol);
    })

    test("Test decode URI", function () {
        const dataURI = "data:application/gzip;base64,H4sIANPMClwC/32WQW/bMAyFz/JfmVSIpCiJGHZwk6YNuqaBYwxtL8Gww7bbDvv/GJV1s2MLugSwGed9eXwi3W/6Te/caew3aCITZ5OBcjb77adx2B/24+v5/v4McP7mz9/h/BM+1m/f/Pr6+0e7eK4XDXhvPlyJe0MmkZVkEfXKAgb94Oyx6x824w6cO/R9bwBjNoyQ0pKX67zc4uUWLy95Z9oFF4hsSkoqyhskebLsU/bddr99Vt5x3JcnMxkKiWnBi1VcbNBiA3aqGZGCOsl6gyYFq3cUk4gjdk93W+XrN6cdGs7AhrQVYWlorBsaW4bGlqFxaehM+9J/sCg2x9J+rxfkI9E77Gl8uT0GA0BgAgsu4ypVWGmwSgNVrkndXPfSesiWs6WCGqh0PoQUoRuOp/h4W3APu1yaEAzmkGRpra9b61vW+pa1fpXVSdsb9Y2jZbBAYovZFtn7YDF6ZouJFF3nwbAl57bPj1yezgYJ/TIUqQqeGtypgZ1WNk+6l9iKni4ouCDCivgC0bmhv9PvJ0oGcsDlHKAqITUIqUFIK18n3XdCoZLXyJK68WHoy7ny4iOmm/IMZzEIUdNzjalnAdaY09015rJ2rtb+GzkJl8CyzqmQbAyXs1WuvKTcjc+XsL4ehnuDUdCQkIZ6kdZ6WFtZbUV12fOZbkmqKCDo2Y8WfRlYDBz0k3M5bhFDNw7HTeiPzj0Nx8+Bje6LbMgn/bEFdz0K0MoCtMIAqzTMtEsaRPNalgFm/T9rUIo6k0GIK6BQB4UWKLRAr/Mw0y6gWPbBZQ5IiLn70h9vnds/vu10tKHXujCuKOsbC1orC1o7a1b8l9pJ+zJlRTFBs8pcUJPXCYYZFPjt6fWwzc5t7o46yXTOSSwZZ15Og/pLQeudoPVKwIstO9ctwIU35r/BxSQaB8ycQvcHZwncbXMJAAA="
        let plain = URIUtils.decodeDataURI(dataURI)
        let str = String.fromCharCode.apply(null, plain)
        assert.ok(str);
        const session = "data:application/gzip;base64,H4sIAAbNClwC/w3Hx5KiQAAA0F/Z8spWMWiDMlt7gBaVHCTfmtzkgSbo1Pz77ru978OUF/mU92l++Pz1fSjQTJDnaP9zyBBBn2gcW5wigoeeLt94/JOgOefA7weYZUFIDNhukD4zTzM4X3XxOl/AcLGbJFUsEcOeLS0MN+/+9aA/smPcNGMWQamC+2uJd41ecPHm1wkc1/lN36k1OCV0wcEWG5RrViKREo6hlnmy0TAGUQDcUSDn6sq/G0uU2ODEh3u1uTS3aCcVlukgJrYQqSQetG1UpizAvnX/6urT7Wrns1NrpJMm3ryEmqzfZBbm5l1NGiojprBFk1EitJAqym03atrjwu2KjFpfkmZx7PbgbTh67giLsmGPudn9DFaPEWAjHut0iXp2hhi9CGllRt2tm4YNxglQ7O8M10+ZCtTJ3GmMwqxYPO/RlVjb3C7zta7K9a/bjsJYbuPUYPdwKlu+1ja2q+2zo6n3RlEweQFv9fXKcuJx3J7bs2vb+pWubs5TelQMH3V4YsBC0QX0awas4CoIwt/Dz88/fLgIFuABAAA=";
        str = URIUtils.decodeDataURI(session)
        assert.ok(str)
    })

})

