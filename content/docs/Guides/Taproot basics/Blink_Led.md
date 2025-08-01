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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXFZSEP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVF0NQLwMyDVsS20lZsqCsbxrzrwwxnYXdhkpQxUno%2FAiEAg9lnKwsim0Q3udklpudJC2aRvtOwfxUxRaL7g2v41pkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEadsQIyDGpeatWKCrcA6aMh%2BbSPXJ124cz8PpxNKMRNQAzapjrA1L1Lt7OCx2OJJNjTpD%2BrQf5FC3OhDVGVokfFXJ0biTEwJAZM%2B3A7gzBeHaxNDY86rN1%2B4yQVEJ%2Fsx3F4H%2BTBvTs%2F1AO2%2B9tMsZHbyfGsY0qk8HsYYIDTkrxEDav%2BRCs9H6v0d6kzO3nwdxzk%2F61ZB0NDG6WEYNRTpBdqBoOtIrVdmDh%2F5BfLIOf48Z%2BoxkVBmlEOBeHTrXAog12YrH3X1y4ATt%2FeVB9bAqv6jc81JXDLmrvATIyOtbaniPVpePdHE2qvYt0qB3UYBfmAOzHPlJ7we06sIoRboewz5mq9yA7bWo3nyDYUGgLYtsZlG7DUZRX04%2Fwi89ZA%2BAbwQrDBrvDvEdnEcOK9K9nYH02nfEXA2gN6nSkfsh6SV8kyOxA%2FQj8fO4fIFXyKDJTqGG59o4hoHbXRQGEh31pMVixIkyyz4NAzPxukvUbFbm2EgjzerCryVxMLEQr5qf35txiCeReAGSJ0%2FhUPnfvwbHjoCeLSZan7jt0itObQ33r%2FZ147zLWI%2FCH%2B9ZnWeGMA%2BoLSo3V7v4egK%2B%2B1F8a7MJwzeob2XOQ7O68kJSIrhP557nZj4O3PLKIepBnQoGR4WW4ZJfAQuEuMNC1ssQGOqUBLr9dZAxiG15aZpCPmqAyRwpvX%2BKOcqxC%2FtWWa8Z%2BHZGGV2%2Bs%2FtPf4BXVbLU7cM7sJciRdKkDOvahmSL8DoBnXlGPn42c5qqO%2BTaqeLd%2BLoA3NvP7Ef7y0Rcs3HG6K%2FhnmixGEoIxI5CZJACxrdkrFID%2BiWjVhAn5V9Jo%2FWfSgw6Vkgi%2BL0IvaQDnhb3d1Mvwa6tPjqkXWRS9PhsG5lMQJEbz4%2BlW&X-Amz-Signature=0290911f0c6837a3b881fd4c39419c493a338e5eb213592bfa1497ae0fc1d002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGMBABW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIzd9yLWnLQr77fc9pC3ds7kSiJJn8BxbwVAZfq9RuMAiEAlh1czG8%2FlekQB%2Buoe26CkcvDeA6%2FXpLju193fSWtrfcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnY%2B9Zkr45HYw8gxyrcA%2FcczZgMypv6wqJ5B3pM%2F4wxggdJygvbqikfFlfdtuCRN7Pbu5egAaUXdEn24H8CB2AWUfSAiVNQPAFFn6WdWYL%2FVtjT3YfwxXgGWmKbhr1%2FUMhzd0nCbTAkqdyC0qa%2BMiZ2jkRvPBtud2Y2Mjjp9q1CCSCZbixTzxYuWwIB2aEqfwYqfgYhw7dEEdryCg6BACVDGTGHH1K%2BmKXy5qs8ygF09BbRnbJm9oNVPtw2XI4Pnj3mvEOE8IfgbXULa0FPHTmnn7%2Bsp2uCg7DSktnFEWoZw2bKV0swKzWRT9VeaHzGBl1JhyIgUOcFYrHblttPkRg4XdfHjJz8AYzId%2BHLl%2FSMgjo8unpna%2BImatUUGkRWbhmp6MGDrIKJUwrxEP3RdH8LQNLRL%2BhERUzOco76zmcgXoGP1PRMf6vTTAELY3UALzn9%2B34KdUWoUtz1MJAbgng7WR5wC0GAxf%2F6gx0R1iV97xhEaMccAS55pWfreYEdRsdLF5icPPBQQWR19562Pr%2B0hUELxzs%2F%2BTI4e6gG4Dpk24gBOeWLFkTSVGCH2qFTIuA9kvQLnAssRRXsnixEWz0m62gelkSLrWwgfNpOgA0KAS39JUyUOCPaWK8JQko0up6DMPIxokTsyZTDMJe2ssQGOqUBHJ5O0hMsgCg%2FBbKqjF%2BQ%2BD6AKc0PGdTVbdvsKskTJyuqaQ5o32VVtWZCrWRwZzFOccajpL3HV5bd3QBqFbyHHlrwVMwC%2B9Xu7hEKqm4Tz05A%2FQ6P0auuZUmtUy47pVE%2FNMhs%2Fu58vPDk%2BKBlcxMXV06CgOE9uuQ%2F2BBfP1CFhqKai29UEFFCThooV6KN0mtvwh3byZM2DraSkJYl2CXYjoRzg39%2B&X-Amz-Signature=2025dc790ecdec8afa66227b96a162e1f4278ecaaf63ef1dcc23303a4138cbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
