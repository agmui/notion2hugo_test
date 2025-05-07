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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHGGI2O%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhNx2wcKLTklMNK32mwzqEdH6Fv9f6%2BiKlTDqXK5wL0QIhAMpbjDqvX1Y05%2BIJ9GxoslooGWGtbH%2Bw5yoEQFZuXAozKv8DCF0QABoMNjM3NDIzMTgzODA1IgxA9aMJhQWMjI8DjqUq3AOalV1OKVJn1p6BbjiJEGFob%2BvtigtfFNQ7nF74ZOTikW1hgrW3eXmYBUzEytgYAFCXb177Nz20Cgb73ZzfRsYlLuj1a35eqhN73t%2Bauw5X6ZIMTtZXQWXBrCmK1vRasaUPlvE3MJNoHBXOjz%2Be3N1zFRYga8LRPT3Y7x%2BgSAB3RzyGLvalK%2F488irZVdzaEz1eRF7FIIXsiw6HUQ3svQ6cKx6lPKjaxh0o1sveNrHgwuo4p6AAH7QDyUnDCEj35hWRDDh1UqkL0qoyNSebIISoOa8Pw2AH1MI2O2OgaPSyylOVEwmFOoLSDTtVtYA9DbG8h5dBlNjTalZG5b0sXApTuSWvyufyNsccixNSazrgyavANAdJnpYAy0eYBzxI23qGIRN2dmJhJS3O58ILQ0E6nzOv9ndXIrF%2BCrP3FrrgSaAhcmC09djjruSwB7VotAjcIDl%2F%2Byr76F2PoQqjQS3vYQhaI09rTfmy0LVslln%2BAbnPez54ZyMEwrtoQHa9JjbdzqNxcbh7aBvprBzofoS4sLcsL38mx6QqEGqB1nzg6ZNuH%2BBFlOPj0bIdJ4pG8ikfIZpMCS7pFRbhvtiMKAJeDP4NRz42byaI%2BjSEKuhOFl6%2BQwZoHCz9rm7wnTCbmu3ABjqkAT68FT2RBUIAGLSuOYwXkB4idfWs%2B%2B6F7Lhm8O%2FYVO%2FyfNS%2Fh89lx%2BhYKE6%2BfTIqx8NBfyH0cDZMHhBJFwhXxuiyWNi7qD68iCTSfMHJPdtJmQ%2BIaVsVZRIW3vwW4rFwbWeu5mYvzwnF7hwQwvmdFuPsrfIiWWidQUEK9oRx8Z5%2Bjti7Ke0LPJe1tCE4JqLRYpdv%2BpMH3pfXIBagAJjei%2FZpjNAB&X-Amz-Signature=a87492901317ad32938380e4bf3dc0be02b1c88c735f88334ac1e3c6a1919665&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWHZ3VV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMiq9PDL9QvQuW%2FQh9ihbAhTfe9dFYh0uCdcuma0NuSAiAO5x8J%2FQn5DrYy%2F%2FY8%2FGpgNBm3RAsKmOXMVRnuwx%2BCxyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM8P6l%2FTSN2YDG4KbmKtwDWyPoTYnI%2B%2FA9lVhY95xHUOtpWHK2RBK8cbqIJ8IUSWTaeM7Iy%2B22ZpX8dGV2TflVHcLKlZhdcMMsOuxKbHg8neDGHKuugGOyn%2BOBpQ%2BQ10PAd80CCXqk3dhs7bmpHjTxlPKMSgLbq%2BphcEZr%2FIUtzPGv7zn4Hwp2tKkC2pJYr97PF%2BDBtqXs5aafQbM%2Bgs6aP4M%2B8jiVonYZNr3Gfd5VhgI8jB8svQxu3xTtAfRcKfoKb1wyEDc5kd4vnND4qgxhDdMVCeOU63OGNaJCHPlGX6%2Bp54C%2BURpr7CpvrZjyxFswcy12zob4U4akTD34P8fp22%2FVGHGQy6lvZQeW1Kf6sUEXRYBmBqSzQwLOIpPBcV6rZWRX4ZN0tZ%2BvFHHllDe3lClXr4G0RBrekqhSXmJ%2F65pqjJSj8gZSNZ0Alxmm9eohjY9Q3v1MIjFU5TXgI1IVYl99O8sVr%2FaQ5whEDijexsXc4z6DeSxyeSjZI0jYyaTtOvTSHc9%2FU%2Flv5U3j2OBAoNKPggr9ofpGk%2F7x9hq7ptWRpDv5xu4dHhrfn3yz5fjvbwRKdJW%2BNyQK2cfjHKLEjJ2aCLYvm00MZmlgOVrMcG98k24pyXkV%2B%2BBMIAqH3dU4QIbvoYuZGj6CIBAw2ZrtwAY6pgE0bvGoYFUbZFnyE%2B8FZGVOHJZS9zh610uLaZEMh%2BB5kXFTBNhTWej5dp1p3m9VKuAmgF8axmUoZ%2BgN8yblWGecsdyArMiKy%2BTPlLVyP2toiTncHpHzuryV8XafuiOq%2ByZyFNPe8Tf%2FF8O8TzOP9Zheo9NZSt9YoKbkUZsVaT3Aa3Xkc%2B9%2BUkeVxmCD9pLuN9F4VFit8oS3TI%2F08JvbfjuzfCtPuXd3&X-Amz-Signature=d0bae2e3f4fddac4782b48db6b41cb7fbc71351bfdd1761fde3a7ab2dc81ec9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
