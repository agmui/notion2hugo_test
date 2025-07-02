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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3OVGH2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbDQTEELIhJU6AN08plXSqAMCfCZqso36xouFhTQ4ozAiEAneb6gH2txDPGittp8c3uOI2yVZ3%2BYIGgFVu4Gal5lkEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqGe%2FTAqzNsosyiiSrcAxMDn7pYU1XrgvmTuVgPw3qZTMFxDSSYuLUQ5EVtcQc8AREGlionzMvym%2BMCJRRjQkoXnioDxMvJXpgotgO%2FgwVyrplPxZ9%2FKW9nXM6BUVW9ec9F3NcAHIMm8NIkSIrfz9ufkbQpe8vNOVOPnw%2ByrFJIZHL1XG5zgHqDT2n%2FQQWA5WJFqMUm1ofIzNN6XwJM7545b5RFzQL2UQRZm3zK9P9bibnEi40LQJbkbzx0UM5YS9ywEBBvMFlbi8mo5LOe1yKDLLs0Z6a%2BdgrQsAxxfBClpV%2FcLvfTUoPoAhR%2FUeABicWBq7CeVEPepmynlBNnqzACtsBovDJVIiT4DNCySwobTqhnvNOjHnj0U0vwm%2BY%2FMmgYo%2B%2FHjrPgrC%2BNBQb0Ypd3BgNUimOpO03iQLXTX1Wa5B7JnN%2F25vUZNPgtO8XRxlR4a9Dn1XGSw1rnGFhi6q%2F8vQVRohThy0aUnJ%2FCCwXZNC15PBVRQXMnF4QRX3HL%2FDG4kTUXCiunvqaiaCs1uhXW4mdV%2F3cWp0gwY36bMg1kbFiyeE9aDpAAf64DsnsVbTEqLKl9GtyDZ7BLbZ9%2BH98utCHZLHPtinjpDq5lR8UvNlBXgWC5WvL0jQbdQ0NBvHymUygZMSR0rIFoMP28lsMGOqUBJFtt6TgVgVNXJaHoq9FOm4P4nX2nmFgOc5VHfjP8rIWmslfsPUHTD5YAvi2FoDJs2PCXYKIpS0kd%2Be27xzk3%2FFBw61squN10oPwWCcZlFszww3wVvmxNIwGIzbqLJG7OM5hgSKGCKW80ZiCnmFSzvfY3kxvrfto0c8nbnhpFOSknmJcEy9bvGuZyDCCpeIrTXTHGlznXKhPBqPELStasfKrqRBz1&X-Amz-Signature=2b7e83fe3dc5edfa745bc5a46f4d55e2076c175df3f963b71e65e5baacf27152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEMFEO5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs2W6KY3XasRm8xEJX4AXsHBo%2BkFYGopIUlIk67FPM9AiEA7qZtp3cDaibsBwhE1ghLvuiod05PNIeMD2cTAgkibMoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaS1VZkRjHSiMBTAyrcA3yGiHEUvz6May%2FSauSwihwNc8h45ooHvkz10iVTLcCY72z%2FPc9ve8LgEwWfByp3F2zw%2FSUb%2B5%2B8LNvb9fFTAeDjQPFr%2FEZramvk7xuPT%2F2kN1vVPYySziV36CTaXb6O3%2F5Y6qd1QWP8vYUZURfmpcok65yZiswXD40MeTfvzCiRuqTBkTI6jopeBw4tAivwZ%2Fx7dcJK3uxkj1lq8%2FFrzftMgOAIpPDbqjK2Jpe0PQ4or%2BiH0OvRyvSXioAtpC6QmaHvcuD579dt8GsLUZKLaT85nVJ6vRsUdbWySbdPPoLtDvJ%2B7fv9ZpeJUx2mb%2FfTF0dizv92ayOW9BKm95bUeDxjZezf7eNf85fDV90r33mvVC5XUtqAAo2%2F9qGCRoOO0telXLi2EZYuIlwiqpfskJNMgHxLXoYEwDxeTVirSLBz%2FAi9w6wvWIQyrArLX%2FHUQ7xWtc6eR2aNHd6p5oUJrem0PRbfIcUwX6aE0iskJ6TZ5FF7Dp9jyyugrxKe0ejd6RqLp9AHFmouaj5M1dGl%2FjiBMs%2FmVlEPnUqoaAs1ZKHjtJYDG695FRQL3zcIHpgCeXg%2F%2FYZkK9Lp23Wzedc1zA4TJ3mpn6gkGdDYZmJ3i1Suxzvg3M8dEHGqZztDMOm9lsMGOqUBS2TKOAjk9yJjzbog5X0Ivs6t2SQUaPnk5xNvM1T0JxO8E4KBFkTJX2gV7VdkkVf%2B3I%2BrnljHTEVhTm0AkDlkZYfivug%2FA9053X%2Bo5IbPOUUmGMxNXeENbqQCviaRZCnXGIG6PxqIDjek%2FaD5GQkT8RSZxENRyaoyI942ddonZjdlD5sMPvtzNH4mng5V3hCV%2FdrZWcTs5HXex6ZboFrtMWdxVLsh&X-Amz-Signature=db00038aceaeccb649ad9d481265276c5da7e99aa40ca2be1fe4fbceb2bec51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
