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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSRMU4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6VOZpnh3hXjuYCqnh3vzZRoRmj3E6eum%2Bd9F6AO2ZwIgVX5J2IMaomN7ciDDod%2B1OdB4XdVy5tBk%2B%2Bh3LTO3T0wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP39aQuXCTvXQY0LlSrcAyrk30wFJDgJ19w40w5ItaD%2FQSy188BwKR5sYrjWlLhk1OvdkFPFkeT01EhK6UeTySqMW2vjbJ5Y1olPqF2UbsFAD1IUDkyA1TVOH9w16Rr36LFWc9J2xVzqBQOlGw%2FpdUS1%2BodfOFL3qsB4SPA%2FQyc1NLx9qstbYu0uMZ5BoJqOg2Wt%2Fg06sWvUg%2FkY6bQl9alZHOBMf2HmoUa2cprGZlgoJ9GKlZywvdWHmGqYVEuy1AIsC9RuQVp19g2LQ0NK9qHpC9I4XRUhHTmq%2FD4Z8upLi9ZrctLGGoTkrBt2jTxkIDNhIcAAbZR7f56EB0Lgy7OQHttIq28Fks%2Bdf0pRF1sSnxmAUmV%2FW14vR12PjMI6JYGhfklfqSJH6ld6Eo4VuoYyfxeVEKyJRb2%2FhyYhLo1oNs0ZVtItZeeaLK6w%2FJh05UWj8ELnmaTMXCIT3R4M0N8x0UodZFXgnDPsmqESErkvf2ZvxmkqcYvV0tq%2FYgII4lDvFcGhJ%2FO5jxgRv7g6vJd5UCkjsWR4BhjMdY5ohls8glmVKIzzGkhCKrVAhYXZsUvN97DpbHuazbBflsrVjDNhzTkq56zIiaeaOE0djuKECB13K2y1%2Bq8or0YA%2Faw9tSgplPnNeWKOBUwVMI3278MGOqUBDabchr0Tqd9rblxLXi8lO%2FWGL3nK%2BbtOklBnO4X68kzAXAIiWVKkDE%2BPfIp8NRiAUcxCJmu4xSP7TTJoGT0%2FlRyiaybQz8LdJ%2BNG8PmAtCJbndwfvgRqgcIzTx%2F4s%2FE7Teq2roMM6sof7I4EjalRplBKHX3YwX8v7sUzgtX2b8iqIyRoS0MSsad1%2F74K%2BgBICrdGWLWSAnn6gCtI14mX032kordf&X-Amz-Signature=85df57a69f544b897a4da6ca7e4659f15ec8c5e640b99c29d4dd178de175a4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LMTG76%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB24DxyC4nvhFEAlmE146bk07gW%2F5I%2FnFG7oRSzCRS5oAiEA5jaLLgKSH0tPQTE%2FMZ0D2uRP95hRqG8ASvKNffPGGuQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw6nntK7TXvhrzIhSrcA3LUMAh0ZuzP3Uy%2FJC2eUnoiXZqfgsVgSDgSB%2FwoUzFgempg0D204WtIo6nIRc6wbqzfH5L0ClkSNhDtSTzEDgTrG9Z0PZ4sm9GUXBp174oqnf26kJc6jSb6gT8R9E3E37OkSYmfR6NCRm501ZQh8rHmp%2BXO5NTT56LoRVCkuAun%2FbWOz%2BjjimjtAViZTtvD5P5VUSAbdDSk1h%2Bzl11M4hlH3yvnKLgu01sGZODOiy2kA%2BCf1oOVPRmkP5IWU22eRV2gY6itBawCIK0VseqhfOTYrNQxJ2h6UpkT5mUTx0qa3z0%2Feu7JVp62uS9qok0S%2B4aDdMUj3N%2BdhWg2ztsROI%2FYT09YnsmD0%2BC4xN8mODMFnhHuGPoEDrr3WIrCEhoxMRYCcvYs1DHxMuhJLoVwiB9jLpifYf8C94B5O0sA2ITydrdScoRKPKu53tEAFGe2mILZ7DC5%2F1xIL7N6SWoobDI3et9YhoqLP40RMLU4RMBUnPqxdgg9%2BiI8Lc5heApxkOL6uQ%2Bzxt7SXOaxDoh6Szzwaa%2FmnQVGCiHsZmqKIGKHWjpW4AIJMRLb4N4N54XmXSm1j5PxBqfHTEwhVOpUdCKEfM0egvk45fyTc9n0%2BtsduZvNGTdg0qddn0bEMLf178MGOqUBLKlpU3nLqaV4xFmB%2FqSPYHHc3LqOho%2BXgiM6u6avvymoZ2eioTxD7kGJYvIKavl45JApHTgzMhR%2FbbgeFhd1vYjyQ5VzjgHozEjEF6hdRZXeDMKS2H7Rmm50SZjfVFrbjE87ju7OQcgQ8ua%2FRti7%2FQwJgZo7t%2FktC2hn%2BrdKEe16XrTbi5VeSIDERkPTt41QM%2FQiWfDsdTcDUB%2BY6x4L1ozXQ7ZP&X-Amz-Signature=da186dc8085fe859b804c927579bafe3ed71de926e6086f11388292076b54b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
