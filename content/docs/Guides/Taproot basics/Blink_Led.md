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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4KC6LH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDRZ2kAgnW9wzAzZYSCEOtoDK6EHWyrXl8Vck%2FGcbjAiEA5AeECdTvHNQGcMB6mxY%2FgylKPa%2B%2F8z6e1%2FtI0BhDvQEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKnhrGB14F69cz9HqSrcA%2BSStnKHGDZGODUAY01luqJXiGOSSNSYudhRWG%2F7qHtbecB36Lo7cfGWnkgHgeUVcINjy3%2BBIjXfFSdXXNjt5ENJ27nHMbXH1rl4k%2BxlAX2aJz0L4B8bWyxIMSS170%2Fmn9lEI3M5NPIpRlh2Hyb83EbJuIEMh6T8MXNKd94SIDy0j8YT9QeiW9qqdUkAj5wXXxWMr4dIZbpOCcVTJD%2FS%2Fxb%2BL5q5o9iPTkVfVDls%2F%2FRldCVWiLDdjHLhWDwKk0uqwh9jFsIGXA3XGAeXtpQ4shrxpfrlRb1YMhVUGZznLa0B0ITK1oad50tWFT8%2FaSUTTqANahaDhvNC%2BxKHx7aebiL4T0TsXlYxqpJ%2FM6jFmDwOz2%2BlH098FcvhJ67p9ZI0i4Io06%2F3VvzD7sa6F1AvqCU%2FAMGamXawMuP1dMhToay71rtA8Z9tHpNKpxgyvv2Wuu9vezqVyvwiY0RVxhg04NnnMhp7mwkY7pqF0y4hElgJaVr0PSYETOt9eFi72%2FPJT%2BwArwGGMQZjLULT9nEWNZDx%2BV%2FqXCdyk3RBpAJQ5XGyMkLYmloKHZQ1Gt9xeSkCHZawOA%2Ff7Mcqm%2FsNAQZbBinOXWOOU5g8orls3aDAPYEFyLaEpCutO6BglTEhMPauoL4GOqUBqOO5UGXP04dJLgn1SLef4c5074wAz0EnKc6%2BnwXVQatv8pLN8eHUgJ%2Ftq6mh86%2B3AElac2ndq%2Bmd61jQ1%2BQ095DIwX%2BdjpCNMe4GGbRWolPJlwZiKaWcnPk4Q02sqCKI7pz72GxI3X67NWte9aIaMnBtKMtzVgh8KI3Zv8luB9xUegYEc0Sth3bHYZ%2FetWWiTXSTo5iUFcNG6WCc3edE9AVi%2BoJ3&X-Amz-Signature=e78407b3a6d580a436c8464efc919d08cb5bffd93c700971ffa41cdbfef1f040&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCXZ4MG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyvgfoqsqPadcMhClnDoDLeLmSnqSylV%2F9Cm1MpAbcBAiEA30wiaqn1SIFzm%2Bcg0wktSHgFia851002l9Q%2BB3o%2B55Eq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLX%2FxcGMM%2FFlaUOPGyrcAxIKCCD%2BuqpQEgCfRh1EUef%2BUZdezWJp8GN%2BfaRoTr8JJfms9pOwgFm8U1wXCqvVvEy407d570oF3Kv3uqkuYYAQqkDZTtai51Rhyyjw%2BmrKLNt6SC7IA41xfrj8zbMNTkEqRG8%2BYt2WMUlNjP0gaavQfUIrcVRnq1qkmOrEjCkp%2FBIFV5ZncdsXImC0XiKJJLdtkSD23YH9kqDSCi2inwDyZvFrTRlN761pqROaVJKqlwXyNRYSCVyGLukvTGop2jSpwVrgjzAYFi22bToPq0RODN14VSSK%2Fnj6T9fPTBSSoXh%2FkW57TAy3q8M5%2F6J8%2Bew4T5v4MmngC5hoCC21yGdp8YXYSbudwwyUf89AXjnmBifTXK2OuxSlwz0fXmeBYlmZHL6%2F%2BLsUctTH1ChKurDm9gUYa08VwCzRNav2owlLSe2EQ802eP%2Bq6idv2cWnzTlhJE5xkLI6LlFgLz%2BoxFNIlXGW7QX%2Fvy1PSi2%2FWJPmVfuybJRZ4deMcHoovLyFegOqKR6Elpt%2FK3dSS3CDSBTED8LnX5kXdctnoe4EfZsWQGcffClIWU%2BYpnlADdBH2yUJmO7QP9gNeC4qso77zHsCf2xWG9%2BG7nWcpDwVL1UgLDUFqsmwV8HqENC7MMivoL4GOqUBMmWV9VKSVVzPW44o61Ek6wLFSqTUAdVTV2b481ffrRUswsR71386xyPVIEG3PpYoFxFxdme3qK4mmJiguqPH1MURNwjBqTp%2BXxt1ifAEytQyXuvJtxEabIsPLqKyJbyzt80SlyBeSLEsI5Qtrx8R37O179gyoxrEmvFD%2Fi7LJ2lGScMDrPiNi0KN6Dd%2FsnBZVheI56wTnqIY%2FXPPeQMJMLvJH3Iq&X-Amz-Signature=6fcb5116bce9583f1af2a4417cb65cf789bba31b69477db84be6c747ad8d57ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
