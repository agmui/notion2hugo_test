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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63SVAL6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSQuvJznVJ5rXPs0%2FYDHdZ%2FkJx%2BeTey2XRSggUQk2S4AiEAiFSRCFRthqN21X6eviN0cm3S8rhT3JQE7%2BHTB5HIOIEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIe%2FRsnK5jbRJ5Py6ircAzIVA7PTtRmyc42843noI2R9Lh7W%2FOEf3as7Y3MTl17oArc01NYuRF2U64IPiJyNPPD7PB0KfHDse4gkeVbrYf2RUDTcV%2FR83zamiraTcKXRmHkdNSEFrQRXhikZw%2F1T87JfMU%2FbfxPxXfabk8Y%2BKLPbFsZ8pc5OfGxzuIXyj5Jdm2%2Bm7SFv0FEzMaR%2Bg%2FtgEN%2BOykQn9p7ySt%2BQkdc15Ppo1ECnbWciBv4V%2FP7MpGILpsUIU0c9dNiHiUs7IfQELmH2TNwnD7YTLHvcQlfAodWHWha6ZlwDQUPm60q8tDhwm4g8ZuCV2tTnxCcatOHj7nmZutqoFr0RrxCuI7mdRGNdH8QtXk10vonKvu0%2FfHvwJyqo3%2FcDvGPNygapRXX22jM%2BYFH0nmkod%2F4mFA6hF%2BT6x7s%2BcZOuYGbYzU7Uf8opDuNevTBNwGQLtGl6Qr5aziO4JUp88PaSG%2BiLCSPCf1SBpjrlsETaYhbrwmA9FmqjdAuhDTZORVlpXb7EGZ2ubPaPa5Txd%2FZ8n9DhJDYjU7Kz5opXZfG%2FZdO4Tk7F81nHwZqVtjxl2%2FuKFxDrEvlIZEbPhIs0haEPKI7QtEDjgBA20OAFTawACQCF3KoQpJrEWeRnEpwMdbMvQanNML2AusQGOqUBcwLpWmJn22vZWE7ovU2ETWBRhbvBVeChuWlduau9Cf2IljrUuTRwbei%2BkriknMUoNz7fLVonO2TH4RLFfTY6boGgUmTvtbgNeWYdNB4NZVn9ysaL67ICrx39Cwoe70hsqfeV09LCFPtKDBxMh7zi5WuJpuzzJH7OdnJ88K9dGxkRT5kAQicySlo%2BT2BSEaefixkqzZmvL7hduftFQYh9pSB5Ehfo&X-Amz-Signature=b911f97e3db81d93a33829ab39918881f88bc3538e817a0bd95e2c9e423e58f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBX2LWP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEIPLcPLX4uUUjmO0Lyn%2Bet7igwSall%2FZcHSEXgsOVCAiEAy5YtTtTzicuAIVObJRCADZBK0mRc%2B76UL0kXR1tths8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJiXu3H06M5MC0VfgSrcA4m%2FnN4TfWrXL5S2HUelazBu0vIYmgyLhxN5gMQ03dkWOmOXi0I3auPU6MeAWroStGd%2BfwDnxFqUdwrqv3RWTBu%2BGW1uYew4JhLQA2ufluiHpKVPKS%2FHfJSzkR6%2B0C2Xo3rOVD1oRChUaQ%2Fv%2BYSrtHTK9YlUzfX7KOn5twVdcDC8IlJuDayKpv1uhYdkfCs30WLlq20zaBy0CiO1OwmVkXhJpA5RzWAcx1El1FTmN6FfqNqI7EMiZZhvx6dSZpMXgZ6I5kL8yYi0gjOzRDGyJv6oIw5KdYe6b52MKX5y9ux47WqzoNwarWBih8FzzYgYJiggi4C7hETugwC10FSTHEyjDqn2ajENJUDccbQ740DfgIvSsUcfrSZBpXIPJmK1Fyh8IdKh13aHWLXomBqce2TIL87L5zw77ncDmHoaDLDMVWsybnj8f2Ac%2Fbz5D6WZdMF2A0w1fx29eSPc0wmgXT%2FToYyn%2Fe6DepD%2FbS9jEQ5kL9Xdhsr5mEZ6VJ2%2FdN2EVDFQXzxk0fBapZBdKT9RxD9LAyohYtBdBvcAx2eOplNoMd8WKmj9RYpGI3uPIcFgCUKqSQslidz%2FU2E2yi%2BkgI1AdeF40w5VZLbrHW%2FIUTrKUNcn1BKvkTLsaQ6SMPKAusQGOqUB7%2BT5GkJJlvJJsiVI1ZhbZaW1Xs0E2WLkxvBhbDhkN2iHR8nVnvQQbu7BowunKF40683IRYmYRcQxal9xBVzzE%2FU8SrB43%2BHR2ZWNWTm%2BZJDYmCjhVPWDdIlghvKNQD51NI5ItJXC5T%2FXbCEaxf90ITur3w%2B6t%2BnNOPeIq8%2Fsx65W1o7QpwrBDoNjj%2F4b3UCvHk0HKA0talZj5GsOvz7X8f2qGnzn&X-Amz-Signature=0572e1147b58571ab2df062a0ddcb248e929beae69e4fc85afb0860e7907ce2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
