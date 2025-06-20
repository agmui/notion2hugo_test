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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLZI5HK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgDV0SFfuvrPi%2B2mRlBfRWNa6AviFcMnHtnc3bioDCTAiA3uoTQyUkOychijEBWCfkiMbKZcgfM3gV3OSjcPsl%2BKyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XOZDrsHFQF5Sd%2FuKtwDZGyeTCjYqWU1pQjLhcHV1z6bRzY5mkA4V4G21CwyhN%2BCQrafaRuZIzTQQl%2F7Df1NchjyJrcb9%2FgMq3aYslA2k5J8ri%2BFGueHj6BLA7s2xyX4Eq1WzIZ%2F4tFsWuq0F2dUaD%2FA8pHxzwkSGFG6pKaDjs%2F%2FRmMfh3GciqNyB%2FeRZ6G8jv4ftIcGtqaz8JA%2BVj3Uf77FTzbal1%2FfC0EDx6HrwRcZeuPw64rIRbHUuEk9h1prvOP3YSK5UeXKKPD641%2FWOx98Fwj5tcSgyra9GxB8iQ9Q7mQ5ewrjLrXIExpAIXPUbMpXbZF5EB0xFfYTXFGnHpiAvmyOfj4aeBohmoDjq9y0ggmIqbFfepgsiGBWa1WhVyUclxVB2%2BWCVudZmDQ50yM%2BfA4kjyRTNvbI85La%2BbKF7B0GgMGhansXZHd2DC5YFcbzq3cCkhuRyXzXSLeWG%2B9KbpmC0X6TbKDN5Bt7gPH6iVGg%2BtZW2Jc5K%2BQSyQPxfyMizm%2BjNg1d3NL2%2BXX%2Bv2vT%2F6DmzDsiwzHkcUAXpC1ZVE1vreMDZ3AaD%2FtvRZ6j7V5BlWqEVeuYhKyD9AJpMyXR%2Fleyr7WT0Yy9u8m6XbIw%2FEiBRHO8LLDrMvbJbrvlNSz2m7cfDZ%2Bcis0wqbPWwgY6pgEovcIaCceBUa2v3SGlOWl9aHvSEGjTCIz%2FYtRKbicrsWpsjUyrzw0gwQIkFKNF%2FQV8GMRbgHOD1qnEsC2u7vXQZDFz2o2ds8kVKGhFdDeP5ZjtVKwJGmHoYfSPvHj3YCxBGXpCy9v%2FW7ITxatlSXJ1W00Zu3nsCfr7lTEwZoTrpwo5D6Kjl0YEXi6QykjTpG%2FseWz7CzEnKXeT%2FBk1NeMiZhgsJgd4&X-Amz-Signature=5176ebe1829278cac828b48d950c3aac2633e18cd6999b0fb9fe765c9ebdb8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4RUYJ3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC%2BZQtNBDoUYXK%2BloQ%2BoWSvdLepcA%2BxW5SGE%2FzOFXSZAiEAm2uvvCuTiUtaAjsLhiLjhfxkCxX%2Fc259uQkY95glv70qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acVDuyYzWmJpDuircA5yTgPhDkv6u0ThDhVWXAkAptDyDd%2FipT%2FZsLKy38b8Pjmgf3IBXr9CsfNfL7Nu2g96iTbdQg7wVbS%2F6dy78pwfywpD2tb3DOSS4SNUvSakJzN2dEgpQ2T9AMmDyOGt68CMNO9bIt28CwIDfIYuwplx0LDFUH8DoZFABCBuwpEsutEnmbk1cGwLptDRrMTDX7NJjAzWMo7f%2BAKWNW8drB15u4D%2FMpqwdbYOrbQjZr6sIihQUM4j98W5bBHdv2ywo1bu19VbqJLOt1z%2BNu8YNRPr6zkxmUfeAP7qrgtdAARg7puRNFCF4hCxjRGUBxrOYbVMT6FV%2FKlxVF2eUVH94%2BcLRqXj2%2BOhmmlmMMV4fPjh5ak2sVVrGynyniU17W3TlGWfHXXLIEyUIXhmGdvK%2Fag8gLZmgPs1e%2F5lglpR%2Fl5pKHqFsZVL2dhkwYfFGfL7iaZlm6%2FgiSgHi0pAf6GtsYTylOIumDMiD%2BW7vmZJFuuHqIIOkgctYxTadIjC1UCqtSAX4LQIB%2Fn%2BircvL1bMWM4Z0%2Bw8%2FrXfxCJKAeYfvRw6U6KJtHNFFcQ6HY3xWIvtfVHQiEQGLsU8UsAgeDnVQVyHN7mXRRilhFgLxDYsL61AptfQquihbNsoUavsaMJSy1sIGOqUBzaG84OcvrvnIYTgV4dSgzCyya8ZgwFZteH8WFlQBUu%2F2DHfnXV%2Ft7WozRaR8jtAbj0l9UgdX%2FrMIOtvaEs0TCZ3dak%2FBqNJ%2FYtJkM13x6jC8vAFUh%2FH7N9108bkYac3KbAj3CWJZlfqd%2BveeMURuy44cfo36vNtHM7giudF7fa5E4iNGuxHY6DeYyDoaI8qhrf1I94%2Bi%2BeyBvi8cDDLPblfm9OW4&X-Amz-Signature=c561d709d2c7cb15a4e9c85a8e8063518b3a0a7cda2268c6508d522d9838fe11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
