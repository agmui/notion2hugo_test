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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD74GSSJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBcYNd1MPR6jUl1BowRMBrRL0diHb17Sv4OBePfk8gSjAiEApO5GT3ovpyiOEJHj4DWOHE4Y7m4A5xkb8X0XAPqGXnoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdoKlQwPdHUS8dt4yrcAwbu8%2FbvbQeRJdNazFfoC9hqJ0atvYOk4FTcz%2BiPSOeloceIdH6tkPiPPwtWg7V5O8swTzaEN87wgmc4q47Fs07%2BLArZ6yFrwOwftqASozzmRwIZUtQdvM8zwn045n7J5lP3t2Q7vw2euzxPQKac7PXeU5n0lQX858VIQuLyFbHdtCglS0UamqsPGhvn0ktx9jUnM59yAWvwmHWdgRxA9kmt%2FEoRrgcLONu%2Fx0WMAHdY6teRLfCmH%2Bn%2BJkp%2Fa%2BwvCmndb4aRDAeqEvVF97KZf9ygM07GmuWb5qP2lfsUXRIIACqYSD32enIUJECmdUhzPw3kE%2BSLv%2FMeifXxWknPKPAcMRaX%2F4ZhzWHLgIOWZ2iCoy4yaLXRtn8zV2gVMIjiX%2FmLx%2BbgQ7Vv64vAmqAOG6VAF9IedEjU3Hpx1y9OJbrBs0ms3y%2FqfyeCzzgQ%2BHvMoJBp1TkDpk75uWh9yj4BHb0%2FhHbLVLggzhdrEp1vRlnl%2B10dQZdbTPF4HzYjUBcy1Da90vIy%2BQprxYQo1o3%2F2Bns%2FA5PI%2BJ5FjDatRj5f6OWO0RlYUy%2FL8tXGKKycDhFuS7EX%2B4WOTVv6fvDt3%2B8SXHGmLm2JOsLNW1oFCrXj8bkEZeVyJMu4785MRvXMO%2BqvL4GOqUB79SVkOPfxYVpl05%2BgImdgw2fJ0qh3ztPLH2j%2F0JWPbhxSAYb8ZbFgC7gwRUc8kKMC1BBVcA3CxAiypuU8qZObsla3xZU4xW%2BktlR7%2BwXcMFJPi8sCN%2FNXIs2QZ3eVTI22SN%2FOkDCVIHHwiMcdTyDmnTqDIYHihuadFu91nW2Kyo7Pox5mCYVa9DpNzgfpyf3GQ8NqqaSE97lQlhc7Cf%2BexunnaGt&X-Amz-Signature=65c02fe7763a3a2fcd70f081f09ebe9f74c592caf8461ae6cf243d6e9fb7f5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYFMMK7T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBcl3NdsJuPdas5hX6xL0dBaikZbbxp%2BHTI%2Bh9ff96ZaAiB7wGCrd5OYx4t%2BtzljBNK7bH2KJmfGH8bxZI%2F9VdNeISqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2BsdRIxWJrPaw%2BIBKtwDTRgxvCO4pTohE9loWO0mZJrToIiM53bgq00GHCq79J2WRdF0D0%2F6Q8q6eCMEwgJvLqWc%2FWezc42%2FIhD7NaX6mAiYfclAaSin91ya3KiHg6qhuMWNk87yLwtiq%2BnwjEK5txO0ORR%2BpdoVQ6CYgdOPWxA%2BGyh0ls%2BPIOb5fJSk%2FIPfDjCPdlMZpS7rkuTZJ29eeJvlJ7kcCxdKZHUNJm3qnhJy0a0v60NWHgvBn2N5w8ApgUz%2BTqRafn4ZdPxN%2BUVcdZi2RPvGQsNB1HYFOYQ8l72OMmLi6GqHSQhFeUvYq8%2FaFB%2BOvax9VPKZLt2DsNcH0xJvn%2FH88GKGLTNgFwIkfvyO6n%2FLhBPY5ZJg5pCrqCrPNBCX90nAs5VxZD8936k5c6Aparlw0wqBWpc1wW4d%2Ba6yp5U0WmaTjpC3eOJPoFqvMB0WXEjr9l%2BavMzkaqVcEkiufgQNxwY6J6et3rWLsQACr643OA2uq9aJ%2BEGOOHcPDxnb%2FBVi6XWKZXC9G98Q3k1sd9iadBTic4vvijNGhOTpysawX31nCScpO9aOZxgdfl9x5HBkhXP6RFiXDcszimcoPJF1en2BW5PwyNeEa%2F4oN9D8pkp60uTH22nS7MSBGLY14TI8hv8voZYw7qm8vgY6pgGpUo9NdcwP1vlIBYu%2FOTFbwL6dsmwcUoEOgy%2Brv%2BG%2FNvcroseTTnxm5g6j6Ka9a%2FOa8%2BA9EasLXpHPrp6hwPf7kweIhJPE9EolW9yPw1D1FBJrNnOeh3IrccrPBqdMDFkKpSZeo3o9blmDN2b12G2U7sGKoH2MBIs%2Fb73E1Cy0n1XARhMpNnwB%2BWzoGjbeTjHkZ0dWnqrPlZ9kOOPgcnrL04yYm%2BgX&X-Amz-Signature=e01b2919dee0a86a7930c480060d1350948c284af21b70074bce39c9b4846b61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
