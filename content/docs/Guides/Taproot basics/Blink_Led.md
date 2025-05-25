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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKIWVLG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDv2QtMSjBAUiqIItas99YSHtRyP8FOpqpKgNjIZ5JT3gIgFbw74eRUj2DlLTIOcV43BRD0VlRFGCNpIHa08X3t3FQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPS%2BjTS8DNq9Sh1%2BdCrcAwfOoZcCdarAlZvyi4xjI6H8CUxns76jDLZ%2B%2BXP5wo6vcMFVvZd45ZKGm6mRhaixL0958zDQJ3eZggw0ZY4IxuI7lph6JoowAVe5dV%2FYZRmNtEOdm%2BcJKHt2BosLzIf4975U5jF0KVCUbV%2BW13QIG%2ByrzzSd4nybAQMj22yxuEp0Gshk%2Bn0NRMWt7hU5lSKXZ5Q4pgVIRRZOLecKs8%2B9XrVOWk2GBZNYxLFSAwrvmEaA2zPts26y5E9Cb5dqNWws2Dnb2B7yY9%2BeNb8RCERneJ86wZGEZCIcP7ewZpqSqgDRW2Dkqb1WmmskS%2FtWZ75g3P8PIR0udG07pwtRWYb98WZdcB1Q9O%2F62rnmyhm5fBXdS1CLkHs6%2FadRfGv9B50XtAhaa8yGXCJlGCYp47%2FXrgT55LIH6VNxOE57oZAE0N9yQH%2B%2FaracbsY5Er57cxkge75CgSBnOkbxR8AN5h5bP0Ti9Y2xsPXXS3kRslarzxU%2FW7QQMZvqPKjrAi%2FKH8e8%2BPicImOvngw9XgZp0ZNhDjqPKlSmQ7T5763apXE%2FpYZFMCPsuTCWiKPaWJ4vCkvqxocZ0HGpVFk5xsfh0BvVr6KDtdGhIlG5AAUPWWg7Ymg06tz7HiTxHlGvkbojMOy4ysEGOqUBuvE%2FsoPwXt0GQChOzMZ7FdzEmgRmRbTg%2BUkc7kLmnhNTgUmAe0mjupRYEY8waNWbnmOyx%2FgIEdVkQF2ZClv9R59vI3%2FMdMOuVh62zK4nDAAVIuzn%2FsO2tKL1CoECbdj5inCDLOBqSnZE6CQuY0TuXfUytkIBKPelUzLs5S80tkoBDXOgcxVujn19sIlm81QEevfl%2BiwO4cqXrRc91ad1he9qwlV9&X-Amz-Signature=3973ea1d2a3fa4e6abddd3e6e4a48a0acd63b3253d7a9ba501038e3ef4121186&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYRKVTW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCL%2FuHOX137TiwAZK2ykbmDBPfmob4fM6lgomjzKPBygQIhAJBwpMKxofbgeodGBhQJeRkohpTr95mEZ9oJwvix3O3EKv8DCCYQABoMNjM3NDIzMTgzODA1Igx0s549FzJsBok5SLQq3APuLm9v3xZ9dWHAScjn7H63yry%2BjU29pB55ijxUgbgs5MDyo2KFx4XFVm%2F4g%2F44RUU%2FqgPd9MvCRLTRsrqDO0RhVKpJfIc3JDB5KUEDgRFrmdPrH0PbKvQ%2Bsav6GRTWMfUD34annwt5YWQqOAwZZe46se3NuGiH6fGXkqP3XYZKJGoGMDianP6ZPCRgXebN1QglsBfq4wfwC8kbEJi%2BUOGciAXvH4D24qgAqWoJxqv4ZzuI6elEC1bHOdywAqma4g2%2BlHh364%2Btht37mbGQVdkO4PDWQUpNtMcGRkaUQNgyLqUnaVlE0YyI1idhnldbzAz2hYau%2Fgz66dGDdUm5x%2Fp9cXWtVG7boqtqk3ayi%2F%2BVjiip79oOi7jPS1IqkGZiPBfcd8Cu1X0olWlxx4LkXY4y6yHDK%2BSSYSalznAT%2BhlX%2FvTJl%2FmcPtl6wpH%2BhjLqzRcQunl9yuo88WDrmv6ZUXH75q3RW0DqJzmjmXNNktVVBxOz0F3ulcb%2FNiJUbJ4JqgcUr%2Fdi4psuHAswlrC8EeLBxoZ0G%2F3ttlXh6PtcS77%2FiVyew4e%2FRtaxbp7pu6Pyenb6lIr134nw6zIXnA2GkV5WcEhVfTinTEp5Oyecn0U2ew%2FOJAcZxPJQjg1ieDCLucrBBjqkAaOnUwkPJOUGV044stG0Ii%2FRfutrPpPK2D6Ua9dYIzXqwAvYtYwK0KdFF6oVNfPjSQYu2arBvU4Pwru%2BedioN8ZtPjr%2FYd%2FwtfPDEZn2LIxDN4TP2h23%2Fx2jvGbfk%2BnkF6a2k6SuWc7AcBV3Tgs5MyvuhkUO1prieGFR0%2BnNqoHsDe8dptlrMEbaQKA0doTEPuk1FtXeP2UwSvjkPIsx4ge1Fd3Z&X-Amz-Signature=0d60124810824dd051af3fae90760804b4d6b48521161f77030713e39eccff61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
