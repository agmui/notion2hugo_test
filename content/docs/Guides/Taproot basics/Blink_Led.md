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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57HICEA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIAS7R6zFZjZXmFdRqDut2UnVUzyWHXp7Mf%2FfNCVe64dkAiEAkvdnFRMN417bYMRktF%2F2NZuAIku8UHUU7FyUITwJf9Iq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLL6Y8qlU204BYNODCrcA4gLF4A7wCQJt8TVVupILxZUkHi%2BCa%2BypFRzy3Z3SfhhxHTsCdZIwkbUsR6%2FahoxGOW4JRHU1DP7AjMi8X2TUXt%2Byds1nrglApmb6MaZ1CC%2FyzoDTIVa3iybZ7AV8Wj7AqJ94DwV6%2FrIayntVvWV4jpJQs%2BfOnqY3JbSGFmzrIU3Ab73VROdd3uz%2FhtxzalJyo1kAxeeaatQLtGApSh%2FBkvhTTlH4koeKXZFZocycmLeEH1y3idvGZF1EBM3sqlNYE9fBq7QsIsiDBFWc8buRCc2mvlgOxU5PXeu7K5zwPeuKWqQyA77WrwXQnpH1%2FfoOoN9ukvPEsnNMzHi4KAxs84wYp4EJKnd1dzyEOC3YMUVe2oeNRr%2F%2Fy0iHDrJfOecFD10S0SAixcMCK57oQsXRKoLzJCXTHrr8OQSH5os5gCcPfK6iKeOiNGBlbyTV1FBpSp3uXuRNEM2tglPtae4Pc5Ib8PniApLkZLjlB7zhDk8o0vpncSQY6WEpQoVtxec6iDn1XS613%2BnO5lYWLT2QqjD%2FjfUX9Qoqp%2BsFrruURSefQffW6fS%2FPT1zNZ3YV8Td0m2Zu1uveMKexv22eEDKkji8gCeOi9MyXXjMEr1x3%2BsfsQU%2FSzEQwRPS9sZMJqV6MIGOqUBKoHg8iDcQkAqDCFmrQI%2FCoFZ7wJzWmmaMWCgBHQZi0inxodhxY00hPYDnomwveNM6RsfTctE75iSRPO%2FNy0GnReVTkNtBrYpyRmxTAFT803HbTGdFzrqno41ZOZfoQeATN3RoG2rNqSoqSy5WSijsbcLHJ7V9SlsoZIHW2VSCr6LXT4%2BSrHbYhzOLGhlPUOcCdoGc5CDa1Yl3SPTXjCkzTdVbS%2BT&X-Amz-Signature=0686b9b3449ca09f38ed743c22b39af6e9d5f5952f49be584c0f8890936391a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2ZDXYW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCovSDm0AsofKGaF5z4vUzzFFebOh1w1KTS01XJjqkI4QIhALxFKx9%2BG03S0yXJGliHPUIH8o78Qr4HURBUkY390%2BzgKv8DCCQQABoMNjM3NDIzMTgzODA1Igwj6hi%2BwInNBi%2Fvmuwq3ANfjnLMFpQTLO2auVo65gn7KO9iLS4g8OcCKYIj0PDYmPMSvnI7LaL8In9bhNMP7mHX2%2BUNbERZG%2Fm1dSjwmzD8PcI2vTif45QLYMgaJ%2FCiXvvXzY8wNV%2FjM5ZD1KcZgefijBNSiShE3lg3O2mxo0En3pZLUlNU8A95NtZlU6V6v2V%2B21f0bLxD8jSJAyjWfRmGHTJ%2BL4PeJtv%2BTZJEu%2BssjxGM5x8w5CptNAoNvJeCFdfEjoaXhqmkDQKX%2B2%2BetG50ozrDgAKlCOfBU9RtOIXrufxBBuWQ52eDhI0RxVU%2B599CSnTpxric1vm1MCTdfluYijAck035Wdvj9GUjBo33gZH4IU0uqksODoj3eAuov8Yy4ixwx8ggA3Zrf910%2B9P3sstCvrHUGL5WqUNoO1Zk03FL57MebgOLtyK2w4KETBeI8%2FzNfUZLNe%2B6CGcN1S9uVwNsbvv1fDYWYNByWLzoZa96yCrZqAJYjG9ewuEAKFTVZkhtpqFBgkDEuDG1D%2FmSLk9TGwOH3q0edb38Uje18MM6H%2FR8P2TOY8uFIGYM2ATWT7CPshst7D%2FEC3o11eaQ%2B35sLVwgrbeEZEi0LD%2BVr%2B%2ByMX9eWKyGKcG48Rdv56lETI9aj4flrhzIhDCdnejCBjqkAUAuDFwQQhD77jOLaYf1Q2ilp9rC4Xv%2FP2xSObTUF57qDodYhm%2Bf7daUCIQ%2FWhiWUL4S0sWd2qYHeiCC7ojKPiVh2s9JqkKfBSWPR%2Bkfe95Qhv9huO8ALXbLGKwNl9kUiTzSWbA9BqfRi3dFOcnCZOUuG68QGnEg6PqUJxP95BTtG2eCMNhZtqbch273%2F4U5hxgy4HTBRKv3mD3TnjGEJkuJnTEl&X-Amz-Signature=dd80f1d9fca3754f321d3ff68c1af64d956ff5466df8a08248b4358e248e72c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
