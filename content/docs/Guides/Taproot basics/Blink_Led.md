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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5CPUDL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBncHpLA21o%2BFfGN31%2FzRPbXQ0rDtIdj6vGM7QrRc3OqAiB6vtYPav7BSetF43Wj77gmSM90jYGFYpuNkJssG%2BrsTSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnp6pNWqnhHN2jFY6KtwDP9omBeFOW4kuN2Ik94uhVjckSW6fHhcYVkZewKcXyPxYENs3mx78N%2BT0XjmfycwL1agtqmRn2eC747T0nUPF%2BFlN3dHS3npshStohMOkt%2BdeJMLyJ9zb5U2%2B3mpW8qY2t2fgtkpftD9QKB%2BKAb9Pg56x1ypjW68wcXiVELrpWuKIFc2lCiY3DeATf6w%2BEiPdK6NaZh1vBQT6qd1JtOWf89VmEBLof%2F7RX9KE0OHWvvqLQ11cDihathdVYA5tDVxfT8qkiSHQanVf7f0i%2FRdSUyR%2F8CY9oYZpJrBvQ0yFgiedYUwsXK19caDY5klLDOF3rgVEoQ1Wmsr%2BoIxWUZjC8Ck%2BuaA9n4SA3B1eViadYqsTCO%2BdBum8QN4%2FUToYlPsieJkKZIhpKqnYTco8Q6Lmc2bJzC%2BB8gZpqV1RQQ7Epbf45v0LiYZKxtatDpbqYSUSLKgVrtHBZJtm6jaVV6JdQqu7CPfe%2BTdtLF%2FhstfqNzd9n4milMhzy3lg1%2BOWY9Mi8ECuaO14VP6LR%2BTdn4Vj3CFP3wyXu0N88dY%2BH3P67dm3eUkWFJojEB0mOX0a%2FJp5Rgw%2FuTNvSl77DJR%2Fgfb84I5GyCfNMfeJrQ3AJkq3jsHEgP8E4dVoLoqMrcEwpJysvQY6pgEc7yjJ6g4Ua%2FKCbsJovkJmcoegQVjmxW7mHiraD6E51maYOHM3c6h7gdmRB9TEhYZzEvP61p0K5OkxJ%2FZsOgI1ZPvXTNuUe3Nja8pR3G19O6f2vetnlkFV2sYavlERivBuxEi3d2tA3w5kF2Wn3p29wFqYP%2Bpwd6lpZiajVfempVHyI3n0OKqtmF7F6qSJ7tVx5ua75W02KoBCM%2FuJhz0nqncSdgPB&X-Amz-Signature=072d3092150dd2e76797581ee86622f7a50be4ff52d68220d1a3d86ccb266228&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWSIQKD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwIh7bDird24PmXtHjsYm2afJD4eNT8UoPaPlrArFvaAIgFv52f7%2BldvTLv%2BliDUy5obdjDQeCfS8TZmVmwPsGoagqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwSSRLaXc919jsQkircA35%2FuFaN6mJOBfEzhjNxlv9QDYlfW7bMxUHjGJzlPX1PKxSlhWOo5rnz%2Bu7FOAeKpg17MSHNUjxz%2FiKhbjwOTaIMK%2Bd1jnxqSOiknm0gt%2FKhzUQfi0LgTLE8BkTqh9JJTXG86A9b7BObTSunvnomKHyf%2FByXDNRcSpKCBcchqJT0FlR5UZJResMxk6C%2FZK0fAs%2F9EiY4krVZ3kQcTu2qTbOD4He7u%2FpIL637kWBsOtM3Tk2b2%2FvCHfN5mHIOoq0NkqMpduFKnI%2FYaaVCVyCcYA5BiP%2FZBA%2BTTNc%2FbNz7lQdb2ndfHk8SbOtpSYmdcNS1uiRqQ2sFj7lDxPzSkJaqMq2pMs0ejHLFLHLvhqyfHmEZ0stKBD1u%2FgAKyPkF7q42lrM1dyNXnin5Z%2BDAg3NCqRWMqBy0bxx%2B8ucs5zYGAEc07MLIPEu%2FEz33NOCWO%2BuuQ5UxXZ70SCs7CB9DBX%2B8v13%2FqQwWu3VzQAJ0FkED4zPdl4ex2gvy7S3ytzwiC2uOZ2T2Bo%2F5Tckv8%2BiaBf2x4kZONR7T1jNDi%2BjyzxU89DJ0twUHL71TrTbbnakLbNrfVaAgQCHHbXN%2BmgpcUC3DhtvOIXkQ7K1TQr7RrRzlUYokYDOabhe5Tq5x9s6%2FMJqbrL0GOqUBEetdZGd7BQJX7dYjKd0tKFPHPRdTzdBw2c%2FCrLfFBwcRyBQdg6lAxKwoO64aL3%2BuyF4Sh06NAY2xA47cRdiSkPwuf%2BYsfPxbCdWzfPbOAXAZhKn9X288aWc%2F7yLoMHanCknQy8UwrQYu2wPe%2BAj%2BNXg7HPuJmd9fCtgsl2BGg4sUlDSSEaeO9XAsZ9ipiqx6u6ComYPly3GWqWu7IZoRloOqJg5o&X-Amz-Signature=b5ce36f70a79210b42f51d7780d592342c19f5be9f5b39c8a917ba1c123ee3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
