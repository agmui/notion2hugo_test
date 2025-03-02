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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKVJI7L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP7ljCyh8g0HweTZMOIfvgF2gGS4BvZRw7gwO%2FmkO4qAIgFV5%2FRgv3W28Xuk7bKyi%2FbLBRCWHiQwDAtN1M4gIFzVYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlN45r5z4JCi0H8LyrcAzmG3ZHFt42qJZIHLAyPjv8Wm9Ow%2FjRcsxiKeAAL7CmFUJGj9gpxabNj%2BXDTgCijvpqjwrDRksXCNRoyfVmcfZI11hHTHZvhG5AACBbbqauJ9mqk7XIOP0ots4jg5XYqKB1LPDDsr2Xi%2BZ8O9vbk3ONOY3kpeMsv5p3UgVlAxm4bU2G4oOBMBZPwUfFDkSTntQt46iZUYeFqaJvVdE7zVhn8j84WAiCXyCbUlcxMX%2BWgajODEnUDIEMdvdTy8SNRBN7e5s9%2BY4hpEEqomO8SO1sU%2F2lz2QdAnHyOk91u8XHNDGZzWI4hu0PMK2dPNxdNfbtLxR%2BmL8dpoIsMcGnLSaH%2BjhVlnsYzFQuDuFSdCSMBa9elPUgP7pbHrPWWEBFqhWGDtlToGFcchAyaHSIEp%2BAvkO2aVPrE6hr9zw2PQWlRK32T283ZYcnmV0Mee9oSrJbiSdQ5%2FtsUtlaGFmWXEURKhVUfEFzwR5VbpK7%2FNCfMXJHwCUzLUUa5OTpJzoF17ZDjYUGvqCsUiDxLJCU2CIEKV2PxFHlepMCUHT3KADcyZz2aLwwJNi%2FnHbP5AmzmiIakJGl1c8CJNFhGW7GPg35CZVja3e8ezzwkl6TvIl9fI9o4%2B2Up5Lnl8Du6MKWVkr4GOqUBJJ3077cDSjNy9Ja6Yr4xVISSahVHShzGgdg4BluflVTZcHLo1NxHDXZxQKxmqiSlcTLbZ2wFMQa7yl57clMVq9BO1WxhOYFyMshtZUO%2B869%2FKl3TvyF0tyzG%2FB6gDse821GaPk6i5fNYKSX%2BvcxNLNm4TuXR465X2tNtjCVnV0Ulzyym3XbpA0Ek99D4rrzeQW2K3Tnz3pJQrzBla1nfXrr%2BAB%2B7&X-Amz-Signature=49bf4a9edd6c8ca95fd78c2051080df469fb85ff3f5893ad1b0e87fc12abe790&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFF6SCJU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzTEcUPM9jObU%2BmDxlgB2yDJFOCV8uzwFdN6TkZwnWEQIgXGTVKZGI6n%2FdllKckSYg34xTLAijZTssLsGHhfSqRLAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyCfxub2FucU8ZlyyrcAzWvJ8Ss3%2BlHhN9WKwQsBnGfcKjK3%2BSVr%2BNxXBe4ZTYgnYe77UWEf6Hauku6udAzOJkbBPRWnTM1ecAtJ7KAB7SWiyURnERhavp5eb0Ld8vEsGoUU3%2BORcFMpeMyfvajGF40EIkJLAKEeYJZPvNAObBbwJa4U%2Ba%2BQU4FzqYqVJzDo%2BCQ237BRT4XGlaTCFeL%2Bf2rPG77hU%2FGTsWbSe4jl1c76PMy%2BPNXRQCvEspOrsVg1W7EaLwCoCrw0UYS2faXdPVjhxJD3z8Tht16vB%2ByRh2cNnIwEsqxTtV9wel8qSqgWrF64sc4XvHwpTAm3o2vG5tx6pqViayCAiug2YZSkTi2xg1OGA79Fd0FbgZu25kSJy9GmDP44WFjOTKsG%2B0IyfhgLmB3Zijl6MDxluTNJWDELY%2BQwx6pjSJvc3A7aRZiGMcyew8NGCU1%2FhAjKe3eOXDrZ77LDqExqJ%2BHKQhZdnusQ9PxUfx2rpF8%2B112egnjPpTS2wJm8oppaw%2BUQRz39iiIft0iWCl77NH6XVkTHICfij34pK61d8ySuWafz1eptwSlVoRDrojiQUwzsTGjNdX59DuRzka32ngTDOA47IrmlWXm%2FlgfXdE8H2okDmQUGyTPsuQNZkP8z6g2MLedkr4GOqUB1pGPeTPjF5W%2FO518FBaQbfmMG7n8NOKpFL8Gz%2BEKdcSUr7waj4KeFzHCzLYxqA5WufdjYhFUDVRmSvvsA38GWvbpaJ63Dcz0FXarq1%2FLHm5Snora9iKVUu87hpSqwz4pGGb8TpHo%2B4QlOnq6%2Bmf22HUdIipZAJXOXKAmTMPA3D48efglhooyasBUHplpIj4OKIJrQEovUSCc3Lf7x3cqle1P25Ft&X-Amz-Signature=d8a5849cc73a0dcd200ce8c6e2fa1ed9187c6e22311616a72dc67530580d7c75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
