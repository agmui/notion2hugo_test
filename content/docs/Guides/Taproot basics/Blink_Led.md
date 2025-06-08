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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Z4WZRR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgDVgisRQGlDSkE8VZSp2gi%2BG2WOaYIjC6nHGmGiLRxAiEAoEihHOM6%2FcR2ZUghCMrOQ%2FXDMcJmAMj2UxrvcikyEZYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtMeFP42uxeVjMfaircA3Kg9%2B%2Fao1aH%2FlF%2BWVfd6CKekAep6S0Vw0ZaqFjEZxcqa9pnYE9wggfnDcMpQvr7Cy8Q2tOE1jrPXh%2B%2FI52OF4WnEU61IIDp4Nw%2FEUiMs4kQ%2B7H5ytMhb35f%2FIS%2FhuQMNykh%2BM06bujEn6v0uML2CrYMAbsZWLdlmvbC2UtYOykY6MQuyuPzSjeDNrycivV9gSi%2Btv6mHjQXt%2BWSimA0dtJTyFzyy20XN7dVxRnB4Or%2BMz6fTs0O5alR8hmbzw2MBGoXUQWYGw3KeBphXHdwBsEPFDVCXp5dmNjxaBiT4z07jJe4qaPVARZT9rR6tECEFEhDQQB6NJFPuw%2BVlBX4U7ifXzeBu3NnM5WpR7H2IGlcYrai7ra9oH366lnnTraHb6PBVwo4nZHjFrtegX%2BJNO5ZRPuE182Om%2FFUp%2Flbiv8PFqTDjMXlIqiB9l0KKmcJ%2Bhi%2FaDIoZArulqw5RKhR0yVpupl0LXRgJy%2FR49SY1BLmx0%2FGetE1KLGB7pXwzrzE78iSrXllxYE%2BPk20kOdSHaxpsFzpstrW3wWo3sPFhj1qUuEhgX1zlMgdbAMMynG55D40zPsHAg6m5%2BrqTbCCAdaiTuiFE%2F7hxSFib4NOw%2FacFWOyf4RCPGQ7Yf2WMLHil8IGOqUBww701AKW688teqPh%2BVo%2Bz84kvhWWDu4zDAyd3laKZBq4yHWRT2Miol2K0cwZce1GhgHblMpgSDCBJrQc8DY59A8z0CG2jWvmtyueh2NwFIt%2Fvr%2FNKF3dBjZYv%2FWtcNQSd4k%2FbGUQCiTk73dszES2iQptY1lAN%2BaArRs465Vf3bZz4Xy6ykzEc6UAxzOW%2BxIZxenlV5ho700uqxdjvQtYWHbR%2Bpux&X-Amz-Signature=d07c36045d8570a9242de7ba415b7fbfbe714f3c1c1307b658642617080343ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5KW5G3M%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHElT%2BP903or%2B%2FQtkjePb0zurRDsK%2F145DNdBe9JeKTfAiAeQjiy%2FJFAUy9XYRtNd9ATUlXM7SV73eRpZzBKKYGZSSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmMzWGamxe2tzPxVIKtwD69Czb8sF%2B6OV3Y5e52q25djuDONH%2FMDrJ1H41oK6U0%2BhUJ%2Bq98y5jUlsiUPgrBbT%2BX%2Ff5K2n4Bkli1EnGlEzZyL0psDD%2BF9iOCnMvS%2BK2TEBix8LVmKdsPqIcSTCNs3SYN2XE7j%2FUhTRlhvl3MsJJLsVz1fGSw00Z2HWW3lNL58nhesnSe3XgEDnabHPBACBpKIf4BdoWcwDdmP%2FF%2BQfnXtEpwIWH3S7i%2B8VsPvmCslfkqMCTXMTqYuP3iblT2ZNpt28lHBcz2%2BWzZHMnOfGkIV9wrOQHWV8clpXZqaDCDppwyYB8iB4x8PJFcrrpyNhW3YG7l4a8qHjgvhWFyJocJgHJEwuCznjIRWkmgaWUlq%2Fvj%2FrhMPJPW9upb%2BQ3%2B9gp%2Fff%2B79wQuwPD%2BCpa7ZfLiEMZqmg52hS366EePq87UYaInJRM%2FUmhy1ejeYb198tTUjl3FIqqMjlbfuknLCDsLju5diLA2M0LVEwJLn4bBj1p0V8wV2yfOmZPsaz2kZeTL9cNnUtzI%2FtiRbPd3N%2Fqx00HtV0vAaX0tLOTOvHCfCCsjO3%2FW3qqNyTsudYnEA44N7tuttFvnnGVgTKvuRvqkryb8YW1wCAm1QXZJLbx%2Bw29%2B1AdIot3skPC7Iwm%2BKXwgY6pgHjYGGQUHLa7qABpCKJHaUZT%2FPNSYLu83fzlNsG%2BXd9XXeef2ESV1kiCMZ00SuA4ph9Y%2BEKU5%2BzCCouKGGd%2BrmYe%2FtfXDHeUoZ%2FfwNG8gv6KIn%2BMoFu8lwIGXOAkQDDsFFIDIoOZN3t7qrtKgpaClQMKqyqB%2Fq8wFa79RefDTqkL3sjUAicuXaXX7Bawtg5Vh9bPeXITdMbe1xQGWCEIVwYsWCxdLUm&X-Amz-Signature=69386142a3cf436f39b26e963fba71a5cef4f98f864b4fe50d77330a2a23759c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
