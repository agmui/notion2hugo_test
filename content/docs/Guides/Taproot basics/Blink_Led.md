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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7YSBDC2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDz3zdUYAZb06O97I8czGZ5a8LupboypFDT%2BOk%2Bj1LdcAIgZQFzuN0OM6kS2Ob%2F6gzoKIg4un6H66MOPnNd3EWJuEEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI6wdFCNmALAWYovtCrcA%2FK%2BEc9GnYt0UBvrwiunMd4iO1Mp8%2FxVEaqQhfWUN3tRO9X1Y%2Bh5SYMnn8RbQx6xYZ3aMf7OjFdkrqYeEP5%2BjjocJoDT%2FTnqzjY4JoFGExrZ%2Bmhj2ZFOdLuf9sCQRoOJjujOV8dCuMJz0UUAJv3ShL%2Bqkuk7y8kOrE2CDNfqtTZ5vEgdqZ%2FxRvyGwMQdKn41DWTXdf2PPNXouKHklxAW2moV%2F%2FTb9S%2BDFN637kKaCfAFO1GZx%2BMAfNwCoRVKaYYL2mH2Txxr19gK23RUUtlg7BdqYGIsNyWm9eY9C4DKI%2FuNnSJnEs9PYMHaveWVHk3dLVdqJKvzHkrHuAT0h8BqZCxuEcEq7sroVUkFPGca43CBa%2FcJPGZNqIkb4RxmBlWdSCUhYdzNAfxYrWvOI627E%2B5DViX8HAYzlAdpwqIHVF%2FPDXtQm7BPO3nRkNcU7kj1dNo1jS4WPTQCPsbVsGFVC3tOTYW1eooFDbtiCQV6LhMbA2JVa%2Bu9jrb7UgpFpIivFmsFBp7n6jD7ElkOpzjE7i3gfYN3fVazENAn3ziHE4cZz5Zlhx78ojyIWNRt4ZzAJsjWyJ1LHshdhhYB8A2DOX7apA07wBRrZ73QbeLn2ipYGmor%2BrzlWzNdixzOMP7khMIGOqUBtP%2B0mdy8FZfbQwH2fpwysM2LVv0a0AnDzWPloBp80OZAZ5wlD%2FF1pPpUX1vf1BUr5kMBHEppaXXocNV5dlpdk2cHtUxnvZ4MNKGZDRnl8oo85DGYb8TXUFTgztMr30lWVavYF3z1oZ8E044RBjmEQ8HLI%2B%2BqHHjjblWjx%2FNI9AGs%2FVBzGxv4hrDqVmw9S8m%2Flh9kG7N2v%2B1disdxE81vqNSWYgr0&X-Amz-Signature=66841d711c15ad090eb5ecd776b47a3e4e46271f2149d254271cff83aef9b6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC25VJB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDEjKoKl%2BrK5zxPi6V67erEeSgSQ%2BY%2Bky3E59%2BXIfM2dQIgQRMPWHw7Yu4tj7YqWbX8SnE2PN3t8glFgaA8D%2F6glIwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMELN3QxuE0kgbzbDSrcAxqgrjgXTaF4AvC93OCe279FgZTXZOAOFBMx029q85DQ01ZQyrITX3tIcIb%2BdzFF%2F1z5Ww7vEXmUH%2B%2Bid4hczG1rTsj5WvzLdi8oy0E420XMV2cEjgEPS7WZyU32Y%2BNCQav3n8%2FFpUc6ioMxyxU%2Frm0G5ShxFp1BvhEnDeHaPHAlm%2FSXT2Y5%2FOfYw6hLmNmhd9JhTRjrtRT2Lzj%2FjHjGY5VN0%2BJy8XSx3mODebDX7qRjY6uuHrJoGKl68yHeG50jJntNfeb%2FL07bRXuXxneyGCVietytYrXL3JFQ6UeCmxYawO0Zx%2BbeP85KERUjZKwDQTsF69xd%2Fg191wW7LZ6yztTwixPbep5DrQuNB5rKxefeqR7zMPWmw1iDWg%2Bu63wcjdiP%2BX7G8j86WkrOeGozyCvUbkUvDQkDBQnoKF160jZdqQ%2FNBgTAqfDuxSk%2F303uScz1Qt5PEkwvrFKqUlz8ifDYrpEN7cLyCA%2FHVnVs75xwOwKW45kicxjadsXPvYIcuo2dowjWJZT84DiMhKzkgpgSHtBhaeAy9lS%2FVZk%2F9YC8kdIONg%2FFBalbfvto%2FFYY21V07i24jZqXH0JB4SwsqUWgETg8b1l%2BJtKzuSe0EkXvbBIzfL6fsa4SNvXEMLXlhMIGOqUBih7p%2BoAMblxaSG737jgq9%2BOuVOIm0tcRm%2FQtEyDUpCOLDlMdpORYnxfg1d5ObAh5D%2Bxue%2FxFX7Gg8Hb2YSnbAnr0sALMK9JsMxOiMH7ZoBmkreNCwGT2uIT3K9iOsKqKCJcL2hd7wzxSygH3mMeETOpksOxsUUkX9OK7Che%2BdjYp9wu%2BsH1jX2cZ5DASfkhUcy2GVROHiNqdMYbf2v%2Be1EgY%2B7FY&X-Amz-Signature=e96eca9cc7f3427f60b7511512494ccca245204a274d180d4eb206b6ae17019d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
