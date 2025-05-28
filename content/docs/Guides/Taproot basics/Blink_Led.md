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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7PEZPD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcVTbGyDdudAU%2BhJX6VLs1zy1MUz05uQFTat5j0XuKQIhAJWh6szbt3JI3S0ULhnRlEKqVTv2J01sy4XYUnwTFMbVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzeX9Uahe%2Fdc3rkdwcq3APkuUH6I0MUCuVAA65G4WJOFX953FZM%2FxRzX0AgvGo6Qv%2FL0yq1V0kvcDfRaUZqir4m2ulXU8mSpZGWJGzPVJiyI2MxMDdfuHbMkkacJbwmmLeMzKWUGqP0qbBM6Bc15gbjOpLIW9zHt%2B0A7jgRFAG7iEAzk%2FvGYLxUq%2BdWgbcsq%2F3XN0k9mdEpl7JNzk6tNswdyT4%2BR7vyjL1oE2w7%2B7QjIXtR3GCD9OyZMPeJB1a1V%2F3bzAXUOg%2FGDwPCTKIIK0HQ8dI9ym4Fk9dyYA6ABFasBzyQbGx8aTfdKhNpCZJKdI9nMuobtjxMid4xLmPhtelVzzN3OwAhjAaCnBEcSJO3H97le%2BUWaUtV6EfY0gXkTEZN8UEQ27CpDMLLSjPIAxCv%2BbEH47J9rvfDRlZ8JTOBV8KD3neYvMEByNJtdbRYrploGKNI4wnKt%2BavbAzAnf%2BNNZWYYFX4fVM6unKisfYmGqBNI7TBf6OxDqMAmCREJwDYSPVBJTE8GP8aPBNwutrJqM9MPAp%2F53xa6%2BTBnxAS5LBWjRLOi3wOoJhBjo0ShjM%2B4g%2FqU%2BCGiwk88ypJsX36yuNhqJ2r0o2saYypvQpVS%2B5aBsaJEY%2F24L55NTOssB6vfnFgsvqag4miszClld3BBjqkAR2qknNW8xTtTquY3Dqk1lHB%2BPkChXnHWFnCYPfoOsDq1hyULrfDjfGVllNWjtlOkpcAhksBCkCEsHPMqIc0VNkPhA8r1C9n%2BNa9Eigd7Ce8XtN%2FpGelSWuAM8VuPSUcPR9oRklmA02WRigGItKV1LQszJBeMHuRHVsOrxNdo39%2BeJHxCJTqtpd8y%2BHS1QS55ErKizYc4iZrWLgkjMBadtvogUj%2F&X-Amz-Signature=74fb5afc3cf7259442214de00644d0e6ae77725c8c4dcea5e0d4dc9dcb9614fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQAQTJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNF6HYBJLx%2BcpIGXMTRjxcNWzF05TEeSi8Dbgb6x8PyAiAnKPFzWjjpoy13h0Lt55DK5O3TWAIKdd6vI8oGAlprJCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSj0a9qsjq846Xym7KtwDuIJqwO00puUzcn6KNjXw%2F%2BHeV4kPN3CTQEyuME7GLgkEBDt2XdPwArRQhqQAAs4T8JVBxdg2u0xfnmC8cixbBoJBv0hTJd98dcQpZBn5QtZdslTelJFPnfobblR58kN9xSudc2pBBVaV18eno32jzTXXXS3eSwMLuTNXqj%2FtwRE14rCkjkocdp1tKXO6fecFx3mNJbMNhIfHQuWcGZ6B5yEr6bFdOEF%2BiL47LC7i4Lw9QWkYad%2BKE2uVRqigZpn%2Bg4OIjBRMrbfx0ZwzgWH4FPTZwN1uJr73xmLMSBAOlZEgZdDW9Fjj2BJws9DG4ZWGoJn%2BSNgNupTOPD4Pda%2FtMEHaB8ZIqkgqU14jv8Y38gIGx4eQDspKrd9duDwZ8bsr68VewlDrEGcDU6HM%2BeejISgWx0IQcreuswhIBspm92tIuAHj0sAqI7mGvmNwgG5YxPWV6KUWBjvPyDgfpysj0yQaIA2Y6MsiZjF%2FOKYUfGBzFVqCp5o0gm9IGSDMXZrmaIiRa4pm2lr48va4aKCwOFnNOWXq28ENMQSky8BakVkeH9HQVjw2oq0tz60bJL2WQ05QRt36upn%2Be5HHs02IqmA%2FKu81rQYL0qmcgRBOzM40BVU1ukR3WuGhMdQww%2FjcwQY6pgFyQuSv5HOeP%2FhkHZO5i2EEGk5n%2FZgROsVOYjECM2sEwvfHyMwRQCZ7r5u4eFiO1gmEmAUrar9qvsGahL3guQZbGPy75BwfCG3LPSrZh3NXovT4z8NKOECVM9BbtO%2Bbrqwf%2BCReNjK3gJ9sIexuDINs3A58JaJceKeYDvAj9vXnYEiklFzKmkC5iPY74NlLbHwMMIKF1swuFsJrYfjcrslAyE%2BNklO1&X-Amz-Signature=2e88cef7cc02102d77e1cbcec792154d831cebcf00f428bf30cab79b087f467d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
