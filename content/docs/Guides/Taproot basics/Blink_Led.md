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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIIZMZD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjG33UpqryIyelPZY%2FVLgWrbtgc7d3z6yVLBuvYCyQYAiEAvRZ8cJzZqyjfNPo3Cq1iJqTtUABwoV5pKY9jB%2FaitkoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwFAQ4e9LQ%2Fa7mu8CrcA2GY4KY2folsGwo0g%2Fdw%2FljssKrTdFdWE5IFAzQg1Z%2B60azli9tfOfx1DuvuocpodmU6S7D7zrjmBSF6PXHB0DR%2F3Ie%2BgxDP9VE0bTP%2BnVAUg5ku8iE%2FCz1S4HabOTz6GHYIUicr5t5xtxHRSi%2FjjeMlmXBcmXVObtHaPqHOtDizSGgeZJJAR9x7uEyLMTIVW1GrNn9XXkmQJn3atPY%2B6uPSdGrOBptloofKduRARyevEiihbdMud8AsDaOpdBTzUweB3WAlQcueye6s1BYylLWLhQsbdwWiPkF%2BmSCzDr689YT6L0osHqEAfOH1BuaZasoRt%2B%2FtUwleXs7MpG%2BzFCaf8CGVrQ5kc2un6UI391Br2yL4pj9aMYIOf6aBWV%2BU3cbcodCRxDBnkgr3sdiR0tzGBoIQTD6iodz9kI%2Fpw2FMFl%2FmeCPixk%2BUJR%2BmOwBfOWHaGmmRMKKIHXbYUHHxIh4RUYeEQSwV82avUAU8rlKqVpUvFJETClewdomsqRadTIS4V%2Be95FZwbfjHMknXDuLZ1aZgAghSlWsDNGDHCGwYwbVHOqP8Ih%2BR2pUYBm7tanI1EQ3cYTm88AbTGKOGGpxgG8EXDRD5WWoWuqfFuzmE5%2FfETfYY9lX6OnRZMN2zzsIGOqUB%2F4cFv8qa2RNRPPfBHbd14HQO1ktreUAkR49lNbI%2F1j2EV%2BmTVJbXYq4ArmExx4No9F4iCC3ndj8aytgBuz7%2BzhPw%2B7GLXsNxT%2Bofy9%2B4IIqInnvN90AL1Z%2BOeMUh53pwCsyyZd%2FJT28O4a7FKHkr9bnUP%2Bigb5PtVrVUp87fDJl0%2BGP%2FsU4TTCmWpQwNmmVLORyvPoLzYl56tsXx9CzdW94HBLtz&X-Amz-Signature=04ef09e4521978b6594d04c3f68d22e8c068bf309e791d6aabd73538002fe267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNDTGLM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb5mwwfRfuqPgC9EL6a%2FmcvW8G1VhQQY%2FsmGN7M9bvzAiA7KHXzF5e%2FTqL8N%2FZqRdSiv%2B5NTwJE3Opcd1IVpqORLiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLjo3pVjpfdl9IzYwKtwDBXhxEt65hKWBurrdx%2BQGEGFCIy7VbQHsFZQK2IdyBeJhWxRdNKiqbkRfdLXOE64rqlkfMZhIkn53LGlI6rJhaeeRL442ttPhVZg2NViUm%2FUdtayde1k0hWEAWIN6%2F6vucCkPwu7TnxFH%2FpuxrmvHKGDcCfGCn5gXK9m1LlUqQYjn5iv3D8ydLQXoW92zvIh%2B5QEJ5ZDn5SLafpkfx6OKGItMveMO26ZTNXDV7f%2BE6QtZhN6awOQSyHyzp1dh8qWDw%2F174mkkegbTp0WuPxiOSKwj9A%2FN2kAX17DCj0A%2BFJLnQnGFWNu%2Br2GRcazSs1Ekb7Hk57Du3Zl0wrae%2BafHTA7pNoJcJ%2FO1WqEaPgV9W1EZzjx6u9pvfwtlTBc45fR0u%2B84Oy6oIUHNsyaCCXK7ei6U6WS0GHtEWt24LzWryj2KK7nVs7TmEWwRr94bK7iEJdmBEkgUCZEKshqAzwdgwxdinaNdd%2BrAybh%2BX8hiRz8oPaVn1NoSRw8Gajd%2BclRlhJNWQd1QjlNLAjyaOoW%2BzrY0O515EMQfnA4Gq1e2YKlgZlN3AV72ttYuAadGx1YSdAwFLs13XvJEt8LCuqam0tzforvs8ePgsfRb0zdWBqoZ4Jp7Y5rbm1nhv1gw87POwgY6pgHV%2B0NXzfrSaCFx8WVwWraFH2BIztpXlj2rVPc9zaBPwjA0wSdr559BOufpnzawUk8EUIItAyxKqSN7wtQI%2BA%2FhClHRZE8WQP7wONBP9qaGeiqqfI7ck3tF6HqcOmdFqh6lY0cK7E%2BTl7pYbzURvRonZsx8vTxNLD%2BQKIx8khtetFg1IGUCj4Ylo5jQQd94kBlDTDEOeyjKpYjdabKmVWOw0DfKLSv9&X-Amz-Signature=237988db9723107193cbc8415ed2e0a17d6793d4f1ed7ce1f2a454cf6731a13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
