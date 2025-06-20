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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMEGEKJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3ztJ3EM3x9WDqizM18DCZKhCdu2kgm6onQjRZZD5%2B1AiEA5OpQtJcDHVyMS9FgohG0P5ClatuaECMSlEoeYIP%2F%2BzoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnBkeEi24M23EWAyrcA4e9NWLYnqKd9O8Kw4oK%2F60xQMm%2BFaLXuinapCltgjofDE%2BPFF1oOvtbCSasQH%2BA4UKinNWqCn3%2Bf52nGuB61SUKKTsg44SGzWhhVbaujcraNxC2FSUicMFbOxNACbKgBfOrCAwpN6OEL8K%2F3Bjq4Z4NqK8otiP50i%2FoAvN1Br25o4OSS1fLX4wpyjx44pEBEJtU5h68FE3rPmBgo%2FQgVrFnTP9PZuKDfS8CMWpgzbJ%2FUk7UGGGvV3mPZcbFPhtofbfLBFrQqZda8JmDO2FdaNCYMVxvzXE7yrEj8bTwWX1UkglU3tslfEd2gCYU2u7%2Fe8%2Bm6QrKON14KDuvqJwiyQENLwRsR6fPL3ZS7WWnDCuHU9sCIwZSoA4rody3PKq9XwPDAfaxO%2FNyVEn6LrpinKPW7Ur3%2BIexIgS2ZxiQD6bGhrNSEbKVCf7hGnClYqgIGGJopY9%2BtJUxy0VbnPmmc3iUBlv5tAtcUjpNN4Ef9Kd7360cOy7y3Nf0XvU%2FHHCftiHzc8qAa7SKQun11YzDtwza2BMqCEq%2BWZprXRQqb%2FKyt51zxxCW7SL3FTwr2RMVsG0fwrBYRXL0YqoTbjOhObjQ8HUmQXWeCzGEDZhQcGox5CtjUtOw0Djh82CGMLjx1MIGOqUB6mf%2F3W2wghh5MyC0xG0mFZ17XEJ5kQ9T1XC7sSpaSs6usWLrmLWkgjqJemo4UUlDmOvwOWrPJOt%2F3zqxhgdS8u0hJMbf2gc%2BSyWuvWONG%2BgloKmL5KdJUYLWs3cHGxkL2EXZCn6XqND1tTNlW8b8kUFL1%2FBI6OZrwhC87llbqZDBULs%2F4ujJWg9h1tqojov6xL6VJz2IfO5FERaluvUr%2B2DgB5PF&X-Amz-Signature=7d4b3d1527859798862aca470cc7ecb63b79bd11cb2c8fb59f9f4f6a9fd130fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2XTUOV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGIM3HfaGWJjH2zc1iU8j1zNdv2OPv%2FzVC6Qldni0GgAiEAxs7%2FyZlogL6DdxEPmAWvyTTw7HH8%2FJGC8uf0%2Bmv%2BlHoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3NGR7Ct04y03baVSrcA9WO3CsRD7a3m8aEJZjaUKnTBu2BXsDORKahQeuwtTeidwT6q3SgNW817J7tS%2Bf0iZZNEHAHFoTzXO%2BJILkOIv3Dlsj0Ww7qdCNDzzsa%2B0FlKYQKL2j1m%2BXOUhlSP7O4iuEefvGcOsg5uo4UgICJAxZ5NY4b1y7swnTiX%2FOnQx4SzCKWBB%2BkQQcIueWRWx5McWDQTKO2duVOJ3LRySAYmL6oHjlscV6N8jv%2F%2FavPrFwoF8SBs4SrWTtTMUqfhydaLisng6RDs3AYYFVntg2HXSCy%2FaNn1sJYrkAjOIjD2QS86yTZqNcOykfsAqUOkdv9jk0wVYTAfQpibkJZp2M0fnGkv0QGL1lBzsBisVwQpVAz%2BUcNQgVxY2Py2wdsJ%2BdGdHnKwwV80ITWYab17SwaW4lPuWqDDSwEpKI7W5cKV8T8wYWWN%2BJAv0VV3faMIL9gDFPr5%2FlYyrXG5fbAA1VWshblyLfqtE%2F92kA%2BN7aVg4adoK2cqYoBdTMYgUyO2GtmWhooK5B3LCZdHGrnt2ZYy5x4GyXRRwbsHItNaCbyt1c275ytbLSyH1Dd5eStPLpJJx9hZ0mmmu85o0ou212OIrQfkg%2FAy5qbAjetTs%2F7qCTbMD6bLUihj70vPTD1MKPx1MIGOqUBsmYtv4UkoTTE9qfEGr8M%2FFLr8Hp0%2B7FYuERejG%2FoJI7VGT2GROWfncaCaz6Acl1OMSxFyuo%2FcegsPdQC5blcrgykACmX2C2FT6PF93WqQ0hLIlVCEC0W59kXBedAHcuZYeTRnemWssyDz35nyHtpU%2BbElnBVgPEe5UNV8fFUXFQoMrPNH1LOIIUL8EI9dFN9iqB4N82ArA69798ff5TsCbeDoryD&X-Amz-Signature=7aa320880f6474dbac6c241e368797bbca7dc2fa979b34f157eda8764ecdaa64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
