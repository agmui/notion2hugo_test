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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JMJCGJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC94vdtQ3kY5MN5TbG3%2Bc8uJKGiWbrMqVbzA1KeKQREYAIhAOISjyFVOrLJ28rx7GAHXgoaxdVPjJrjSM%2BCXvGS3yqFKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR8xQc8EuRJsi4TLEq3APVpOup81N7FdRkUJAxR0ulag4f2D4gDZ%2BKtjw%2BMHQ2uDBxco8Pzi%2BvzOydOJtz88PMzuSj0zr%2BbaDcz0mIKjRd0tVErEubWdHRoqyqdmPzlrxyl91xsPObPT4Oo3vRDoKdO5%2BaLKbWkRzMXAXjfPI5d1nOY%2B7SqMMp8Zls21Le5pCg9lcr3Qso0s2cE%2BZIDLLfYEv8yrzbeRKSqjXowUnFSXRHYAhu5RFgPEZpYz%2BcbamRDx%2F4cBtPETizcTptY%2FCpZYgjL3I9YyMYXfJ3yDM%2Bbbv7Ib8eOf2bWZ7cbM1waQDL81mRFdcggh%2FdWSglGryjFWS2f%2FD92U7o7WrOrB1WDXjoHwiyq560r5IFxMGnZ%2FEJRMj0NZh5mSzElPLSrnDGtkdQt8tLN9SPDNNb7Ko0HIawv5%2Brk3AJzavQzUi0BkKv3T2wJVXcKgcz6rOrBT13R%2BYAUUGVatHrQOKTe9eSzGVNdTkLG9umxKI7%2FsatXjP4D1PT1gFNLi2IG%2FCxgYceXlp%2FiA3OQo3N%2FB5M1kP58bMKwCbtSMVk2SD5i4klI48FHBJmWbny1pMcvYQR0Ww2wJgTmUh5Z%2BMh%2BVN9JBHl9Q%2Fd54ot58tQ4JXMm7vsZhykZo62W%2B0uk%2FDl3jD1jd69BjqkAQvYdZQPWg8w%2F7zNsX4AXVJ8b0eoCokXmHPoNpx1051MRD4sZDCg9wCMvdA3Qo2P56x1VfNGSa0QGzNDB2zJ8hhm7Fm4oVGiOaTAh%2BpXiftjWRf%2BW47Y%2FzUrgwoj6JefX%2BCniD3frGR0xm%2F0i3QI8NgFZdQmoYAdRFbsiWqD1jZ3HFTZQKp16dWXgJxz8mcLrGPMxIqJRCfKkIexF7jHvfmPVSuW&X-Amz-Signature=4b4cf5ec8c30ca2f54bb74c4d3a5d7dadbd18d32c03b0d07edec52fbab728e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XY3ZCW4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2u5l9nw2asVKgJ%2FqGl9sOvmv8HpEAIC35GyaeE6ArFwIhAOzwL3BNPBDUessX76yKh9%2FIqu4I8OqZp%2F4LbJRuMadQKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfd6vSzlChSY%2FVFJAq3AMV%2FpPJRQmWuBa%2BymivcFpmDuVC6kyt6uAJusBGAkyNIy9xQe93%2BeQ9mAH45zk2nGpmzkLLXH6ptVA6Q%2B2%2BemxgILhjaNM%2B5GVmqvcL%2F4g6DXS2%2F7PcgcgcnfzaOPX13BFO0FULWJAGk7eem3vb3g7PIJOagBixy196ZUTd46cfgztBsEKCZjeY7tOWhHkE%2B%2FGN4TfptThuKslaxyoXWKSdiL3N%2FC%2FImpkFd3m96j8zTt4ei%2FK%2FWXk1bEFIK2Tdw4tJjG3n5AGfTfslOUT2dfSKD2yp0AQv0RaW7ssFxjpUArsVU8PJfGSTtLtmFfXPT5zpNyyFto6QR7gvESH63X72Pxldf5R68h0a734NLCP4GhH%2BKwpyxuYnYtc4xGC9mlH%2BuAmNEXlNw%2FMVQTpxrq%2B8DZA6ypT1a4tD4f3yQIQq4NHj7hqQ6UsN7GmU1BYc7rL%2FR6SQe%2Fs9uYmFYVz8i8Ry1y%2FfPEHU8WL%2BRzGwOnf4uPVgHsa%2FJVOSpJF9CXabZFABPBekpFO8ByT86BK1IreipgfmZjNVFCK1cSTpjzYbYoS%2FZ9IRq7zhommSWVUkddcK1%2BObEjRX2RUFVvDdxXdXkysWodvGfgh3S%2B54jp308RXsQj105RVPaVC9fjCpjd69BjqkAYJ9XeIFQchUd%2FDOIl5IcXf8XUGqdEkJXQT0%2BAAeSKD6uyyIJpvee%2BGvkHfuPl0JWJ%2Bnv2cww%2FkVbGGD2VDfhGk3avEbJjtCd%2B4kAiYUDbuND5ZjDdVpKMAFWUixxOZNWS9ckJCpSCKU%2FUKp6ugfT1oDZhqGAupt4DdMlSQPEV5W36qhgPn02sNeJhyeQZ%2BfXH85vd4tRMKhp39nmuEkoZVJDydg&X-Amz-Signature=625072e3bec42765b4c0377cb905e71344bdbb093ef878afda67719f7d348ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
