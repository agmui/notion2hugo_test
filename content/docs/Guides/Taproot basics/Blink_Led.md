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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NO6XC6S%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDigIm9h%2F0JbGAcuSCUp8PrzQxxnumUbvMVRlGR7fbpagIgYl8sIOobUxQnRRjR9raYfzYU0cKZhTXyDbR37vb88uIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEUVb79n%2Fghl3%2BZcCrcAzGSNCt%2BIKkFTE7HZ35qym4OHMSs6zF5iQGMx85cxiVs5StLFDjrKTe62kIv3ixV66400OdPUSPYSO8eTiYkAMzkusu%2B%2F%2FULD9JreiIuY6P%2BuKjYgPTxuOdey0HQlFOE3zfn8%2BLQ08f%2FXxXH12Y26gtDBaG6yA8vEakkDg%2Bo2wyPa%2BjBy0wRnSp1Hy%2BJfHUviThzZfmyoyLL8wDkhUzc45nfmF8nJ7V7hkFTEfPY%2Bu7OTNvggo%2B1mREBiUx2QeNuLWG%2BVb%2FG%2FBwCufVmpRPGNkKYpPCyDfZYxWoISLX8euINOumquDp66ks9asUxab%2BSS22q8jFKpnqPRHJMTe6rugWYxk4tZQ7SV5pmgdRRFz3y1fv3Qcq9lXfgpiRbTK2K9Tr8fOmc2asqTzC7M%2BVfdTqAN4i5JUoDpFYccqOFTNzvq656kcB3taemK2tXcmybzsJN38nDiNqBDiC%2BycCSc9gHUVdiXIKkYFO7BC8ETIhdcf2GWqDJQxX4kApPk5W2S9uR5fNeRWf2qygEUwzZ5X5XhYRzBIIVVnWg5rdo0zE6fkc3xbU%2BMiPjoUqrtGoU0xJ7CkbUbQBzJPCqi%2Fb08UBtVBM6EnvCdpFEmuXseIGnyuSv0Phkllq5%2FnIMMJ79lb4GOqUBaN362dd91L8%2BAf9ud79uYeWt9Oo%2F%2Fh41lMRRbi46pyMFNuPnNGL2abMCMlyL2CMYMoh9hjCHgki9SVCs%2FkXZiwbMP94AR%2BDUNpf5xcJnJstmu%2F%2BNvAb11%2Fpw5Tzk7SAM8Xa6%2FhVGuC8tI4ClfcUkoJ2ROAEHtbzfX0EnRfQ6xmAoRSOufxbdLT5MPWGhJDIzX3eDMkoVIjXKTOjj0SCTTbBqjIUX&X-Amz-Signature=a453b7771e2689f3d15f7a0be6559c92d08647e79c96f643042b0e89cfd4703a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEAI4BP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEke3Y%2FMFxX3oVbRQCO2M3eXv0OCoTumiC9uQ5hNyekhAiAFAZgS9F4O%2B88wVwtmVqErd1%2Fh43nrRfy%2FHcAoY7efMiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcN6UPNTqertkyfh%2BKtwDe4dbBZEjAg2KWwPP49OVd6Fn0hS7RtOCHdj4KwHznXck8wXc2g60xvObOOJg9UjjSQWiYU2JOsS%2BsSQmMfrdoK2dKLerj3chUGxGm2cCFzHMSoM1yVYGY7BBq8qWqlT5O5GoDSX6u9qGY6zpasPiEIuT5Tz2aANSL79Flr1SKpp1unFSC%2FfTFrbv4tCbCP75FDp70rAn%2BA9puzJ%2F8RjFpC3uwNAdPzM71T5%2B%2BTnav13p2kwg8x6chY%2BKwQf6abwizPcBJi2gMtpkrAcdXeS13s4V7bclvcHRkWabKphjIENrU1AlFRL%2FICoUCG5q1S0MXdQY3yxdsfTkkkNrwKCq2ECjocAa%2F4V16c03gnxdJC9teQJh4gPMTEgFHkfJlKDd90yUWzOEGEWqjBOJ1GT%2B0knBQ%2BRZMw47zj1UEVhk5iJL5gCDlnLKq6mVDJAN9l%2BcOq80SMDW2H9hlDHlD%2BmAJ0Ttq9jPO%2B4rVKBqJoc9Z1LQhQdqupFL7HwcAwH0Bh2DJ4ChhmZkgizk4GraXhUJPt2lQp5yQ8gGwYBceSg3C5xH%2FiA9NVb6XfazSZWWUy1MuQL1HS0%2FADkx6WpT9f31zQbyJK7DKAC%2FGYqeSchzQk6O5ZtzD0gFndb20wwwh%2F2VvgY6pgFyN6KKwjhbjBLFv7pODhyL5coqriSnHrG2kvYLiIINRa84bpN%2FN%2FdokKP8TSVsQGAP04MyWHbmfHOusQtYAPZ0VXO3iTrx1GApIz9O11hl%2F%2FxtEe4aUq0bEkNsm1Y%2BPAC8QV6cRfE2D49al7DqBPNnF%2F04qkefX1CpFP25%2F6S242vr0XwFiuPo8ljaGoK9G9r7G9Hqoe19UlhBK9%2B5syzav4mypysr&X-Amz-Signature=38fa1bb4794e87922ed51e8fa0d54c2b7601c29c6a158dec20c8cbc88cec197c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
