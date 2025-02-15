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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFDXUSGN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD3myeJ%2FsQCIV1%2B98IRA03Ax7fSGj5mTVbif2dU8fzIKQIgZElJg3B%2F7W28uH5PnN9pKKEaYmaqSu4PoW4%2F1tLOoqIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPSoy4igQofvPGLvSircAxwh5EjKUcXEidA51KXaTL%2ByArHYCs%2FunYieYx4V5LL6L5gV8RyosgVYxXbHs2%2FwfF1CzdKYh1%2FW%2B0OBxF9ZJCXzSGGYYxvJayTzb%2BiNSMgK7s%2Ft1%2BqiwOkcL6yaZ0zGIReYTCTWnU17Y41LVV9VGWHqx%2Fa1h%2F9L88qETfJxXEtmmiAOBUWCwCAhZtfNBvP6AjRn%2BsgnJANI68UdS6zY4M78XNTzH2Eyq0USa2VK4cxwOJf%2Bf8Y4YLoIeINUsDX0xdU92Xk4i3U9r9eSCzH2XzFov2kiXR4qLtNcvKaGUenweobI61Lrs0blSIEIdpgimGQYXFa3WlUAHU4JtAIc0ZGY9vMpVDABpcZPju%2Fs3kVOziQZ%2FLD%2BuN5m1voorwel7aS%2FPF0adaYk8yQwe6qKGM3gaM2OZG5SKRFfOGFlh6N1H16fjxynr6NwT6gD3Eu81LFb07NrUaQREBgqLi8MlNbug6yAzQWeiPAGg5GQNEZXROWDz4zmZGCXW0%2BW46O405VFiNZDz%2B5%2F%2BVjYBFXaCvbERXJx4VemBD9S6kx4TiDauukfrAu%2F6Oqkncd3m5yGHyg1iX1CLaYV2aGYsQTeZ%2Bfo%2FpomzuM2QsfhsCylWisvPhkQUvVOmUtZ7xAMMN2%2Bwb0GOqUB5I9QYFd4beL69%2F0mpJ4%2BrOYMJA3Z0QwMW5qPEuF%2B%2FmCLeX9Rxko712CVa2ALYcM8Kfvl98BfyW3FWO6%2FM8blxZa%2BNeMI5UaaHFDTiqYsHkvIboYCrHeOQE1n8MMSBHnE9N0T2sqiEd0Gs1Xw1TFDFPCJJD4nurhhzRJ4N1HX7G5D7MfkQV205pPCUgdQfbMNcPGZ8ZVJfFxZWpKGFcQtlc1EVjwz&X-Amz-Signature=86807b61a87bad8ee19ffa6345199163198d37bb3c69df970d3b7eb7262e0ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSCEZLU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIH9s23hoPTxSdMQuJCC%2FQJMAWX7Lavdu%2Fof6GAWTZjO%2FAiAx7v1oPP9U%2BAl8%2BZuqoIyQRHYQofeSsrvq2Nj2c07AaSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM6w9bwOyj3gmA6sOYKtwDm2O0%2Fv2qj1i9RgUlfcSxbozUMOn2ti00oeXAS%2BA7GCriVGvwBSnehiJybryHOqWEOMEpddRojGD1wqK5BsIreN4Pvl8Acigteq0Cr53xDfcwvu5eQTLjHT3lS0WAqWVJS0iqCEuJYQAc9XIg%2FjBzFxEH0aovfKrvCAyh7hQQAy8wXeF5s6SaB%2BB3KsrVZSzpsRBcE2lnaJbNxTp7H%2B1kjGRoRd4HYT%2FvAGdut6mI9P4CSxC8kgyRkImnSXneFNzK6SGPEMj3t%2FwbYPKR2uGq1NyDy2HbfoHXecAeZiBabgd8VkzhIE9jnE6MhOpC7JcgmsF%2FboMOh3xGBaafoVI7a0yXtEHGTX%2FSwbZNK6mF1tdR2xADtVA1YIcyRtGRew%2F%2BRD1FsmNoidCKHEdQWFwWXDWEf%2FotyoWJbEoJPMUPWr02Gc3tKTpBngDF60b2OyUV0B%2BDN2rbJNunbjXnb6UbsLMwHpRoDarWtNVq8VbqVLrQB2QWEf8FuhvZiC2Q%2FOkMeRMwN8o8HN07aSTYQ1UkjBY%2F7EfIqUabJBmVWvuHcPmxUqKhdBiZkDvk%2BZccpZyzySa6ejwONr2osKMP85sdUEoO30kUe1TFr9GHcAawl2SkfczWVLONJL520gwwrb7BvQY6pgFUXNgOWuhf%2Bhw3LD0PIzSoyfPrvv7oyh3YQGjv6shKWhPWp155JxBa3ZfoNAgm4kzHQaHznMwai%2FfVQsZToE34RmQUeDTa0RsGdt%2FT515ACQYr256WyrSP1Ds8JLSDulY754dtzjDcLLJkvrtBeexF5lsUKHlMITgxapMlgZ%2BnfImnKcUH6pkxyFgYpgMY6JUyqfJaL39Q4CCi2%2BxO2%2BgWhB1xegY8&X-Amz-Signature=e03fe5d7f5685aed26671710261147c80c08446840dddc3b2fb4d01959c13874&X-Amz-SignedHeaders=host&x-id=GetObject)

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
