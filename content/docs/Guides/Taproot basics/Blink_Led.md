---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7HEDDL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEDQ%2Fo25fFthNXF%2FRsmNGytPLiE1Ru8%2BAgXeVVqCgxu0AiEAy1i3u0r09RL37sa3CBMr2nbGY85oylXSLLlGF%2B5zgp4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPQA1Eb2awoUNXvjHCrcA%2FtRFzwazSGapsQlo%2BzYKqMF%2FwWwx08S%2BOB01FbA0TbiWIlDnRV%2FVgBdrA2aRKz3QVNtG16R0DJo37SwSHQ1TM2PDt5XAQOS5POTQhsuwA7pp4mctKHfnBhrbmJ2e0Yfln66q1U2uibKtqZDRim5DMy3CaTLM7DkqNdX8vKotUrVuqO9Im2hzIPcmmWM1SqG71yKGrQyLHgRnIY%2BQprRCFh5%2FVI3yTzPEgn568s6xJZcq8oO2QPCqZYEtz8%2B1eibfKSJ1IPckGSHZMrjGjM05nauf5ypLRdkV4FG49fkHmqFmscNakKDuCOeu75RLjlSS4rl6A7jodjS2QzzopI3045olK7uHRJW7gi6aCX%2B%2Bs%2BmSfNTKxjzX4M6CvnV8fb%2BMC1mspRJMcJ2g9QRaRqUspOfK%2FqcQlAfmSOQ9i9ZlmuY2MIpYW48zNTjmKGRHT%2FUgQYe2AW4Zd7TC0ak3PoOQQE0Fbc%2FPTmeM4gyq3lwZ5QklQ0tNVXNU%2FYKROpZOJ8p9qjVTQ9mdCB%2BbLlBAACf7pfs4ZOePIJYKYmzaVrYUpcX1QpYpaOIY9Xgl8G%2F4n4%2FEGYAL%2BMkNvoOravND%2FxOYD4l7FbTIQX3K7UV2WnmOUSRmuB5YNaLZrZxMFsqMMjbxsQGOqUBYE2uGOh0TEQXg3elxpqQUsnuBFSUCp%2B5MgsbEnKfHtrEA96K5JPQBaMWhzuHl6ndMXN0%2BqQxGXE%2BvKkU%2BKZTbnBg2rCkvrG4jVFrWfVXm9xI59JDaYW24jBi2PuU9G5ufFDQzO1EGtlQHuwZyIiGC2WaAbdPE6Fqtj51DNLYVZKdT7yHaIczX8ULe3aqIVbnz%2F4El40J9s7MUiSigSftTXFx0b3W&X-Amz-Signature=d27385004c5a0beaf41503a49cbd4d40a592c3a1a876f7e89067cdd5281e81af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZBBBVS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFxN9rCw6ih1Gv6BPy8piL8k3Cdp19zZYnfmIag4QxRqAiEA1x%2FPTLvK4QIlziO8ErmYA1%2FWgDuIO1T7hfs8NL9w%2Fc0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJftfgy7thsobKdbpSrcA7eqFc9XhrMY5ZepvH2SgZbcso3VdwsF004OGTsOqGyLCxhCRVdh3RhrynFYSmX9It8O4Yk8XvWVmAmVYB8JzpFDQTykq4EdFGW5xmkVrvc7y7lcvb9vJbqL8BDEc0Raq7TsP0%2BIRg%2FBLNeJrBUwGYghdQDhCcJo3Ec%2F%2BKY0b9vSZoQ%2F9RB%2BruYGnFx2jxiV4OuMES8z4ovAyhF3Ar6ySLzUE0suAlV%2Bz5Mk18Gs97Eif4Y5MnqLQD9r0V3YkJGMBc3JZIoE40DrlzH%2Bdo3gjkvte2BydyO22HsEOGnBbomgxjJ15uGG8egYw6J0Qxq%2FwZ4Y6KoHf9nmj38QnajvUgyED1REp%2BFMtIig%2FRiPj0YVn2RqvRO6J0VwC49cmy8Biq53q3YL%2Fywkf4GvpEjNMgsy2DSD4VulyeKsFBtfFfyXUfLPdqNKUt1retJDgLg4kvN3zWuxo6yuMDh4ky80aEOf86Gftix%2F7p0k6SbrxM6j2193FC9UFZSI092KSmqReFWeThlOJ0ShSVZe9VNJMvQM%2Bc%2B34Tj%2BCPowREBe7q4arLfDcUKlgIOoMMmnMEW7fJiXRWqT%2Fz%2BdF7BMWgYNHm%2Fms313o8cTVbyPOCX3nz85x%2B9tlBV8v2oBd66rMPPaxsQGOqUB6EsCtqPSHDLerGju5y%2FBhsxVxowjqnrjGo00vFm8t9AENlSERFLYJKEu4t%2BN4F0qy5mrxUdXKPykRl8ZW4MIbwG8F2jRotv1c5nPMUB1%2B4kqSZK6Zfb4DcMwXjsNjyW3t5CWSlvrOBKqWCU5MLvpevtvl7KA458FGljv9cdvkH9XSqCwX9PoLoxuuftHw%2BH%2FVfibrHH9LL%2Fz4eQO%2B%2FNUFqKWos5C&X-Amz-Signature=dad070b32bd3a8a0160a97e44074519bb0a6b6120a5670a7547c9e5059038b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
