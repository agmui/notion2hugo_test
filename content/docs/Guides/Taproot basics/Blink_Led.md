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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWLRWS6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFS2l%2BULMDSvoDpEp8DLNusX0Dny2SD6jZm4SU5ass0vAiEArXlk%2B%2F7gmfxIXhl0q7h6grNY0gATxwc51PNIgscEnmEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDI2rK5XztePiSBISFSrcA7nwHPewd6C8hREI6585S%2BJebeZLCGrngVh%2FNnFs0cyForF5QlZxxptDpVP5A1Q9skLLFaGS3FVUguv0e3108%2BEilfBEHt6IkpLoYXSohMeLaNwrrhRX48ZnjA1FWHkmM6cT0MfdtP%2Fgr6xlPIwCcebveJ2vCFjcmUTAlxCwezaiHqtsFWDCPxo32yalCuBr%2FA17HalaxEury40bBFxru6gT%2BjrQ%2B%2BL3F6LUcbCp1iDyKt7qru4VR5PsETQIA0DFDIdWbcJTMH4gT2f3FfUTassPTEn2h4AE6wD9tfRc2eU1yTyZszL1AXhUXQX79wXuCqEPp2KpJDClA3cD3czQwQPRtnNTouFOL65x2L9PshUw8GsWb06RmDWWTY52Ulhbn3v2HshE3K2PbYMpsLzVtv8C80OtGcnZkqCgW4vNzpH4NRm1T93o%2FE0V9pZLnSKwHSYtgDoXJ1PPisRHfUO8ctBBm6%2FN%2FS7EF6Y9ekuSV7hKQAbGgQZBnYpNcv0UeEmaY5ONJstM1KV6XAd0o7bjqfev6yAkyyYZh%2FvCGw0DdIObZ5iILJGom9wSUjWY19AngrHFfD7xBPqJU4dsDzDx82A0Pkz%2BAgW9CIjdfTTz%2Fn0Wb5zkZxSiQU13bcqTMLzGwr0GOqUBpyS4y97ZRSLz6xTTVWMNDLulQaTAHZDuKSKqsN00ivcPKu9qg7jr14sFQVzLEJAxNzyBn9jtdWQQIJhNfEix%2Fpwx78VFjlCeOwoqkzM40ji4KlP2dVh0ZDZI6kmcqf2d7mg7y7QIlfsFt877qAhq7tnfEGqwBST5aeidBkO682hhI111lT6h1Jf9wd%2F7K1OVIiMsxofpRtO7nkGgmMgsc7gnUcMJ&X-Amz-Signature=c7252accac60dd0174c2e2b8006ac8ade2647d83e55cd07f12935ee7678a0651&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646E3XRKE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGyHpgdPJEzAvyWRyue4IavEGynVuIzNyWxMt7W0fQebAiEAlZqM20dfmQl4kBZrGaXSSg1gj6SpnDi7j%2BUAVRDbIlcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJ7kLUnw%2FFC7%2Bk70cSrcA9QjC4pKOyM6e8we067ZbAgA2xQAyc9RkvuPVoqPpf2CMPTk05dODabADqT8wr94JQEOyfYPIxCmeiFkVSkovKD1O2Ycks5GAXzSghzV8ngPxQgMC4Lg0gYL8qMMI6oTsgZchjk%2BTrjZCfjptOI%2Bi3EcMf2VB%2FFxfVqjbwPFa9vw8Sal6EV93OEBddlmXY4ikONhcgPJFTbG2wmsxHjF5bL%2BE4icV%2BZZx8i1mlnMQr5qLjkM1u1aD3rdt0orELMiNWzUc1DxakWkKo9JB1h4gqfYStFSucY8%2BZuy3Ky9vKHvpHr5oom8j1kCH1FzE7zhtCXx%2Bq196U2avaBAw1zhV8yBapbSJTCN%2FdJyYvoQ7ZgH9BpvpJWOVIhELjWwxIDj0As0gTv4j8BXgsO4gZTjeytR4U93%2ByBsRpajhyWcU7nNv9GaBDYf9Wm2iPRoP9V59gjNrLKesu29ebQ1NywdoPKExzu1yXjIMdOTvBQuKxv6m5Tlck5ReCCXmKcyJ3MeL0EvRi%2BfoWT%2F5LCwtllzQWIf%2FO3j3GsXSF8KH8BHhbGHec%2Fj8hM2DMGKThFMnuGsr3G600ujw4rq0MfoYxDyN6H6nevIm3k%2BWmSlguK63SO0m4lBybjS6g2uQoKIMMLGwr0GOqUBugxLnEXuONWygiTkK%2FkWFtMnU7TO9tZ2Ya6jOOXnQdxP5Xe60pd0abh%2Foe5xwQYgBJTBm4%2F%2BIPbg3STQpEBoUmcumM5PpxqisZcNOX1%2BfL8jOHAkBag1DHtFBs5aE0DBJuxlp4F8WpqtPNlhEZ7dUGJxySvjPryhLzBNVne4RaabrrnBmSgBCHXSsxUBlEeSWYEIz%2FMzhGRhCK%2FQgwBLh45DZWH7&X-Amz-Signature=6b43e30cfaca83788d71be8a50687a433eeb3f442ea6b8240077a45fab43008e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
