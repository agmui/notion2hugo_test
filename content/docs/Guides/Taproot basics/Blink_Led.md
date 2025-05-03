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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEIKZ3C%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCF0qBdmoUq1%2FAMnvy%2F35zqkNtysLreTBvorpjv0piXTAIhAPrAmj1kZXfBPdCaWWr2hsB2MeZ0Pf71Jb5gqrI0%2Fod8KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5ZA9TzQS6LXfv4wsq3AOXSDQDE4grFUcmJq2AWFJwnPnnMyiUsW6ynifEGlOQH%2FT0eqbHUbnDMCScFZ6%2FYXyBWeocrlgpH0UVl%2BxhXvmvytF1ipFoFR0H630tiCysMAimRJGEy%2Fsh1lvtQdFyXOKbiJ3e4X43bqQ3ivLr%2FKRE4ECgKnDv1IrwMY22NSEFIHj1%2B7lfc6YmkoFLxZ32uvhCINkIzj5V8AWRzSjErcE7sYofR%2FbDWZUl3MThOAXeFwrHpZP6kzzSTZx6BpfOybliWBA5DB97l2DdPyMoBNhljl7Z3jvAqZhut9z%2BDJXfoJF7hoVhHXrJrDWBGsHjABaGTFLvxz6GN2T42NsGgOajs8E4j2mVGTLJnPFcBbwHnIqQTqd2uEmzIdVQN3NvfNgNnsMyT05YrG2Bb%2FquGUTjNFqowncZ8Ou5uMcsaaxNk3e5j%2BJjgYx4xtNVlWo0qa2gHRWzF53SkCD3dogzs3w41lsWTYhmuQSfnRy8eWdg9Fqv%2FA6%2FqRgvtGquYZAspVOY7RzZbiKrOIGJ%2BJOGI1oyv%2F9m9YrJs9qZDAz%2F54Zrh%2B9raVERdATMKaZJwRg%2FTiq771R3ORO1QM5nJZ6U6r39YEmgZ7c8rOo2OLoPdfCgQRwXUYZchHjX2fAq%2FDDR3tfABjqkATKKmeh1oML%2BE4lBvEL2EQtInpeqvgjw2POoGiqFgipIxA0urd1bimMQoZ4o%2BycFWbU2W1P1icXdUmV9EeYaNo1L0slicX1lsQMQsFKU6%2BX2zuj3oKImGO2YfAyPHkEYCrttqy%2FFbPZY0CEhm0egnB2lEy23mMaIuaJ%2F4AWcNZw2w%2FvsmIAgSOMMpPcBTM28T6%2FrMutqRlN2tz9SW9awEQEbQX9U&X-Amz-Signature=1bb2321ffa3402049ed48632e7034ea7f7ca67e34573137d03e2efaab5d8900d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAHTKTK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDU5iweg0npDpISUuDzbnQTwF2AYUMcudf73WOoWorwogIgIs4R3nLijwmrGhsVIidxOynM3N6%2FD3M7baKY%2Fs50%2BwEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6UjWcLMk2VDzDZECrcA5AVNop%2F9RxT8%2FbkeuZAZ448HhsEu36%2FpNBKWjikrRZki93CFdbj75%2FBAUeOqOC%2BGTvOOAGoHt2ibmjulkUl9B5CiXCJTtCFy0PjlbDTy%2B3%2Bxh9oB5tfMZKsKvEw5C1QY57o61q009sfkw6AO3ZOi%2Fw3bzZd%2FMjLKGk05d0mjDAmZIPAdkeGByJ68m02B08jns1T%2FaI90ZqdX1rS4Qb%2Fb4IGqA1Zd4fkp3QmlFyUb7Uc4lY3R2y5JAA7%2B46waHOpdEj8gBgzR6gh7uHis6SVRVZrvgBw%2FjUAky8nYFyIo9QVutGpQN%2BCq9oSgudY6uVKT0JiAZNni6%2B4NM7d%2BMhLY1dqf7gMTJ1tjQ2njsw3oXgyQBC6%2Bt0p4BjWNAelJyznG2u5FG3usSuLocaNIvlEQuIdl9nBd55%2F%2FMVzP8L17fZTIdAZTd42Br2f2FPnweDesu%2BUvKg3cFxaya1fOJxBGvHCugt7TGEEBGJ9MPFRhjmxdkcOWYk0P98k8lJGMkEavParOdUrULDkUkhZLk60DIeyaGWY4S4TS8LXU%2FWT3tlVV8p9mp%2BG1eXoj4geOrxLDq6gV0Jo3bxsDypUDbNrFIUZuXxZkMjZSMlW3pVsrLQdcbbt1XAx7zkSf%2FDPMIXf18AGOqUBHXWCRe1b8CJUccHGPASmwU2wlu64pMlgsFK%2FO8itto2defByamwKAz27rl7U08VnNIha0WJvTDSVw%2BOivUwYRpA7VoH%2Fa1tQ8P%2FGcKrVzAmbR7wbHz4CMpKft9jkQkNsS%2FNiMOW77BfvYNz2xigEqqYm9c1l49xZg8ovatAHKvsEYIWNCw04fv4GX%2Fm%2BWAFDg5i2lFx6zP6MEAkxXcxprn%2B9SXRM&X-Amz-Signature=21506863177cd88b6bcb8a1b80ed693f9a5737f4b0e54ba2a850d4c7e5a6571e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
