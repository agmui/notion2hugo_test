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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLLVFD7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBcw5ZHzLSbXMSnrR6On%2BLYllGIcmFPAGth%2BFrRkIdXAiEAyzdmT9HJWCkLwrE1JxEMxHUk8fDaYtcQd8SOjklDYQEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVaHama%2BJN7aTZ%2BjSrcAwTIfdZgmKUzdL7C41SFxzhNmdYlM%2B2wLFKo3S6KxBlFY9F0X2%2FpCSAWCdPUM64W%2FIWvap%2FDxWgH1KrLyM7eXu3aFTZ52oV2xKg8HNvoz4QIf06grcXI3NTpltxuAUPN9S4iWXII15MXXblRRdaenSCxODJwQmI9Gc6Y1mZ3Y9FLw%2BbtgPb4zB536KtwhjF67QAq0PUU6UviyE%2Bum53wRsM2wxc8rFuSAxutfzOnpF2cApIyV0KHOjEIS%2FUdKwrL%2B9Zyuu8Zf43RZKUg%2BZfnBOyZfq6P2vjeL2jPnySCFyfHQltnMglgqdO2DYbHk02%2B3%2BYKLoNY%2FLtNXZzS7eLjqvrhwYoZIkyCXR2fgLv9tusSBCLnl882CZmNRh%2FAkf2n%2FICzOtq63LiU54FJiEiy1LUDkcOL2OHk3j0t%2Bc5eQKqy0x2jY7MS%2BdOgqA6VDho1iFMh5mXBSTh4fwtEQVjl8wNFxfUsJCzKeHA%2B3u0%2FFte3khNXvhaA9Z9Yyx49CJy%2FYsszyYhHvfMKK2Z05exVrJpOT1tdJpHjrL1lB90eeSm6XKh5ik7DVhjYOzNokHyPN%2FVHLt9w5I5i1dXjl7WAN520oUg6gtCg5JsuJAK0uoo45xxsEXDTUWfwopovML%2Fq5r0GOqUBmpJuB%2BaS1vScc49ElEpKOo5Np%2F3qsVtYqomIBnb6EL8EsK%2F38qhHRZW%2FpKap9ILYsyP134I%2FftrYoS7T62w%2FDyPWxddQMtLJUQ5gITuJ0DBl6ZyhX2G5SaFK1mhEus4%2FtArKsW7SPEmso7%2BezozsCxxXqdBRT1ygqWs0lfwj71W4ptv3VhTZardv1rETbhh8V1AicLO0D%2FxDUwgOEO%2F1SASDkEF5&X-Amz-Signature=acf5d78cc22175e5d9fe87edc587c065162014977e87096bed6fb58f000d1784&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3VPALC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH0eG6X%2FWAdfYy0q5ZHIQdPDY2qsTUUA48JpkMgkStbAiEA4RyfZDQx1hdXZOTqL40WiExGq2s3abMI%2Fp0lkK2obQEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKxTnQVaWxyvEo83SrcA%2FpwOHxJ4jDIQBU2dY15E63RUYXj92rFg00BzXFj8Qc2uOqzHmxx7uzHbwXCyCZPHaImnn%2FC5G5KKNYJBYV5QfcXqaIeGMStsjY2ezwRkcvyKWiArbkZFpyZjAQtEcV7I%2BCa3EhYDxmZWf%2FMQSy1YU%2FpghpEJEA9LFLEPt66J2SP09NaA3m4gtwzMydl7DViHM3EsIFaCdYkPsdQgqoVnqBcw6klo3%2BaENjCQJBa33hDZEYk4zqB5mdh11pkEBlcICXr0QajYhsx9lEVM%2ByGkBjZgGWCqj9vSmUfongxEnnaEVa%2BystZE2qq4Hq0TCyKYUeEfZjzg1uJDdYXzfcbPX9M3YgYHH1ZbPnGZ7koaJ0G2rTUa1bo%2ButmtkhxAyG%2BJM5lT%2FSBvcDYu26TQvIt02uiQeMC%2F%2BOKjWAH5czVyXitzo56u%2BRIMmlO5od4ZgjfzTFffF%2BcVKCQMYVhGOSftsJYTlbPNtQXVfmG3pzhAxrgYUAOePqkpnya5VX%2FFEHINebTxqQsNBh7xPYnFYBjw7BgorJaXIsywARp4avQ6RK9FQwdYoRO7QC2k4KkDIshITqf06eTt1yIhtqDQK7JABSwAHgPxjioAl54ej%2FM6H4PiVuZ7bauJk8GHTz5MIj65r0GOqUBby1LPtfXByDKfDZBMO8I6FnY6V4NKR%2FY6N6S7Xwu0UzbwQkMS7Mz6%2F%2FjBficv%2FfMPl4LTOdtWtNRqglpnp9serLg52ApwU%2BJUbwTQT%2FvGF96UTQXX2Eb5jPD0eNA216ycFAcIEO8sBIQH646%2B8ia6zvmpKatSFi%2F2DwXiTE7gp2wESrX%2BYcIQvhRtHG%2F98ShEt5tRLfNYB4C2uT5dbiv1a6M6xTG&X-Amz-Signature=c2be3a6dc47e160b3337304438a961e5d6ede66e56a1a266737544cd18260f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
