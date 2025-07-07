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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HRSYR2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFYUOfL14dMYulZgBwO%2FvoJ6sRIsXrQh5uTEcPDHo1J8AiEAy2vFV%2FyHzbnvPt8V9CVOK088umBn39gAIaxHov6vo%2Bsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIgNc1LIngpF9Vy9QSrcA5FeTp8FgS67zcBDE2rc19Mg6PCn4shYM2Hll7rugZIgELhunrs8CM5u%2ByzOWRJTm8UIIiq3757wapj2fVz7j7hegtVpkFRu3oaNqFCGchRKoO%2BtVRm1yEa46NCDL8lWOfvGCI5WNQAKz4Tpx7mF%2BAEZ32MzmhzwLngSU1QvvBUFMpWSnZ7h%2FuqQYwO0Be45syOZ5lBUfk0Ab7YPhNATCsYeE40Wac%2BH0XaM188jl9Rq%2FQ0CZQsJLW4jkTFyhe5TBGWL6fV1ZvIwN%2FoJUkrEd9VLA2%2BOKul384xPxgsUTicbuTsclEraW%2Bg4UQ3ngDSM8P3B1qiuz8hIS0PBWvKVPrBaxbedcOoklmO66Ao2VZWgDMx%2B%2FmVbaG6WagKl1XpnOAGBLs%2FPrpF9U0r7gJfa3hexuqiNOxXsvz0aushGQrkl%2Fta1qDWhlOQz2eJ1Mg8WJe8UMO5fCXxGqs3a4M0s1gE%2BC0AcYO%2F2aPshNw6eo1VVBw0pS0%2Bb5cblNbdtrmxba%2BG9UaiFVg6L4hPdu1reR3Gw6ExuiK4MAj3L9b4CtyxutiKNyITMqS5Z7Bjr2Nm1x%2B4tJ7JWwI6Zx7w5ltxXXV%2BqyGdr9XQ6zSEJTKHGRBjuwIzGrtPlKDipNB53MKO1rcMGOqUBnT12KUA2ALtP3Q2bK6dMd8%2FOwYIDph8QOoQMVpdgkT%2BunTeT%2BRDnK%2FVh%2FfEhAw6zsrQDreNon5v7u00rBi0UqHfFLCi4P287RW714jUcs6uVhUBV%2BxO96T2awX7TpgkgtEqZvDxEbVs%2F2rT6k6YIhO5HlaznoCRq2Wbj%2B2xNQjq%2FD0y5704ciJnw%2FAO8PTUZiqW7wYahBI1xfg0YYL%2BNFb6T1GYL&X-Amz-Signature=3a4ec0c4743cb6e2d759a9a2fa105f62dd1a09aec5847ac7fafab118f5de6b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNFJ7KR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICHoF2%2F3stavpOTjtFcQwIC5z%2Bq6EHywvWMZqEzXzznpAiEAghV4qFTQd%2FuqKWHxnStvRZwKF3SU9JWwCSUlhgIDKAQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBCtp%2BG%2FMTPPIR%2FJmircA07wMN29mBkhVRrmZHqnoEzohhz7mE%2BaLVxKtZY0yqwIkTRozwiPt01LJbCgW%2BOMYIRAyly%2BE6aj6jPWLEvKfLEaWKQr7nv9HwCDOdWTrN%2FZ51%2BFAufksuAFURoOLBTZ6rjtA5EUEbeHy4CuIu85VCt0AiD8mpNGZ8dWzivY5%2F8LsZFh0QB5qffAeM9c7dEZg%2FeLgGKlsPUt7ZVsC8IjgNlsa5%2BpbiM9Q0kQh13vI69vDxcZ03Ajd8q2vsDqpma%2FllzPEYRLAfqLqNYzfA2x4qJ2NtP8Rvl9ZHvIIaAxumTLpyZpFaflfI2zbbMhQLOt1oHsqiD9kwnckh%2FQDwLxrLYUovzK1K3Bhjorx3Oshl%2BiZ7SkXx%2BybPh8Dw80fIQjugHK%2FE%2FKh0m5bQBBU1L%2FMxlFhkNEKwnkGQ4Btc3ndnOL%2BQPwl7LQ1ctno3%2FMq%2Bpjxr9L%2F%2FiPVqu1DRctXjQS128AQ0hfaRoA3HC2dAVlb5AGViOAm44NPclIgX8BY2LS%2B%2B3%2F7PmLepnYkDsyMtjjcybp20Dwy5CbZB1M764VrMFeVnNFPw8ylTnWhJBHXSjU6wwAFSQ8lstlKiLUBRZkDYui9Q%2FnPYOImFiKODhVSV0MSh3%2F5TPFy4hZsmLVMJ%2BxrcMGOqUBt9mucH7Bw9h4rnM0Avn1xaRIvRjrSpL3K6nBYPmXXo0335TB9ReXeOmle%2FIEfvLHpg88tUgRyjD1os8MIfRd61eetv9k8tjlFTg35MXoesdJni4rqTAt5CR7L%2B6tM5YFFETUkl0L0SMPiCSzixS64dEJrLDYOmwUsJT27%2FFR6pnnV4jS1bX1bpg%2BIRagymY5YUWPYyEqgU2cjti8dojH62EMASZO&X-Amz-Signature=27402552584402088b5034027fe985ffe2c6a46e332fa7725547a3a90d260462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
