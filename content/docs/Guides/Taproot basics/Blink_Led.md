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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAG4FK5C%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9F97jZlOMuhiql4kYDbntx0ZGub9MLhfKjqEv9MOqAIhAPPah0kEorgfFoDJOdx1g3%2BRHQ2mZYQXyEUE%2Bu%2F1qb7TKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDbdVV3SmIaSpz5l8q3AORX2L%2F1w5D2bp0G4GUjYjXGAOlevwgRBmXl9U4Jq3Dec3aJbUEZCXY%2FCTT3nCohpMZeWCjQmFjX0RFkAnHFMNqe84xaX8nTrOv43N3mimiCoNnlyWHy2KP6r3hWaxk05fx4lmYADAB8114%2FNhk0TIr6Oe3z0zmW6IZyA0hO0kM4gjqQMco8bfdQbTANfepioompXPe7w9ldKLKL%2FlLcEKH1JlAnvj93tttOcGkdtLkMh4DiYr%2FZiVFfEEE%2FP1xv0c4TNJt4hZqZFYKcqafa8mMK94p1RrwDh4ARySfZTxRhF1s%2BKoMNfGDFr3LSTlNvVuUwh2k%2FX66D9XB%2BMwJ31YVpQDzdoSt60Ax2rfRxtBP32p8XC9zStp7EBiADlgZU64CVCRVN%2Bh9NV4CXM8b4EVRr5oAMt9yNxGC3eh%2BCuNDaGo0nCU0CTbqrDhlByuaGl1X3qGI2WWrPtniovjdywIVctzpDRV9tKEbcq3L%2BO8tQIimo8ja1%2B4idVAXhbKslVn3DeQW%2BHp9GmgQDHgZoCq0BKk1jXxgpu1875pR56pXHwjuyg5RU%2B3V0Qx4wyEf44dVEXkfINrPmOS9PX1VCgYYRrA1Uj7zd8C7%2B7LjJNDsOE64M2Yt0VKRjpPtejD46%2FrABjqkAWpfPCaqGCwXdBd25VceuhKASIAWa2PJ%2Buo1bgDJ9d7tA6vuSsV7i6fnQWBDWEyqvzae75ghglLzsQw2G8FqrIPEUrHiUxBOO5yH3l13y18bJZ0koXY6%2BWUNgdTZCExaxgmveta1VT5QyUgDWGturfWHztKNnw3Gs5wy4eY4di3E0T6DExk8T4rtfUKF2hoB5n6fJfaH1abLzGiMdBxXbzmdzMhF&X-Amz-Signature=c8f1d02cb3c5c8170934de998c836d04ab16005e77484a2ed6920df78f91a0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNPTQW2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx5k5UgsLQmAv2xa85DPKXRWymVbeMGFimaANw4eaXCgIgYjZWJWJWR%2F4Lt3gdWZ0Je1TJ9tMpYYnAwFXqinU%2B0qwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FJkLhx0BgMy%2FSmDircA%2BXuy2SpGyryJiGHq09HANI2DT8N0AQ%2BtLbEhI2oaq%2FzpC0IAsfaC%2F%2FAIQMyO2SsoBkng07oj9k%2FTmsBGOepeOcW7wXSrUngaXu%2Ff1eCR7RWfUW0ykaoupefJo1U7itgp%2FHdjp%2Bt6gtHEx9k%2BAby5KOhJ1jiezj2NTM5%2BNhsqBYX2joJSAEdFCXSmuWDnfR%2B96eWlX5ZbT0BRZMD4JfGRIvxs4S2iyNU4n3gY%2FQ8f4qFqt5KuOOlBDXCUZRQs%2FZDMtftuAy4pNoeTd%2FTCI32DAwUSrPouzmQMYeCpea7Ihfwe4k3z51ALJUITB3RwYtUi0%2Fo83wjlaGF1B4tyx1V9BwJuN3axV6jl7ZV6rvSmu1SY5dJ5yF7hIrCQX%2B1mEr0BwRC1PwxEdNVN3qsStJd7BllhIUcHGhYNnsrbYs52r1IOoLz5GgYedEIWSo4m2l7ceJS4%2F01UIy%2ByY57%2B8HHoq0ZAahFtIo%2FK6BtUWDLY5lfaMd1qf65YJvsXY2MXtoxtxCL8Orw5sEO9gwCcl2TBS2f9S%2BeVkkuBfXD8zKlenDgxrO064CG7tDwP55%2BlWgWurnFW9t2Nh6KBHg2pYyMyewXRPvmHzdkgojmVhEYhNeoAUgpgERVoSgpfon0MOTr%2BsAGOqUB1gbNr7dpv%2BS0uzWWAm2i21LZNX%2Fm9W1f3DqQm3wAV%2BFf8ic%2FJbmOe8FnGKwL71UZ5AKU4D%2FCJ2KJCgvJhotW%2FqNQDAEO4Q%2F5gdPwgdJWxes50xOBqHgnIAjHtTkHFWMXRYMl0OGYJFswgJXzgop9IrQjWKWhdxPDR9LwI0Ct%2BB3adX9Zh47Ljp8aXJqHJEOehSJPNRUzOEPShKeles%2BavR8Pb27B&X-Amz-Signature=fafeb516cb55cb7a60aafe82234430888f46f34a7762f92846259f1c78c95eef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
