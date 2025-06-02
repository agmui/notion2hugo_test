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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZRQ3Q7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCdjR0HH%2FeoTgz7%2F6LpHr2MBigDC2Qlg7dbCyMGXmx7gQIhAIoHBcV1QAv8bOtrNj45c6YN%2F4GJXw5tqUlCVb8Do8d0KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXRQKHQxZ9Fj1vgJEq3ANw44z0W6otVyX6JbUnzl1G6V1nywxPLYxIdxvDD5Kepvqdh34UfDanLyPlVoTCZMJFaz5rrmAZ1xk3n%2BQmv68A3SW3BKRs6PwC5y8q%2F1KfXC4InzTYH8qidETwLFJdZ79hbxLTgjY6%2Bwk3bku80K0H9H7dawvZzy7zx7QY50HQoIa66tNOnOEl2HgTTHyUumlwz0tVjDA8VztZtSE8ItMFWj5AgsDrGkZhMGPWnbkg4kRu0FyU7idYSn9654aUNbuwP39Uu6hwT06%2Bl4uN7tADisaZWMERgMaF6umYq1V2e%2FZAAsP2hcY94WjeNqIaaZg7ZsvVTtHDAQzhG8vQEYhHNXF4GKLn0MvKiRnHDoPPq8MJvgiA0juQbGPIEiPGQ3IvIU17tWjLU2GDgBPGIp1pSZGDnFmPTOwyyjLaFTa4S8OxBrIAp43dHIuxkBMwLoAGYhhepGyQ4Bvf0K9sJsviLSp9db0gslGpXkwc%2Bh8ghZvXdOSfdhRYbP1W%2BWmBro80vKjfczjGUlh765RssLJU1QP%2B9hhienrabMTtlql5Cl4INBI%2F6T3F3O9OjuLJ8Ek5eLNIzO6sAFjb4BixPDtKswFGb0yQxeMIFC8i8%2FyTPaoV86W4bSfojCnKQzDYvPbBBjqkAYfjhcM%2F8qjYzOmZQ%2B2HNkTbfjjvVAKUGoVz%2BlBNDN%2F%2BOhwTOMKlFj3bmnwJd5Q321bG0vZlmdnYZoq9f%2BGBrwGxCXlz1ocEBgjUA2Jx9bxuz%2FLS9o0Nic07rA%2BNhQCgJIFrvs4QTe6zrl0fBpPpoUfz8ZBXbvKz10nLlM3i7Y89k9MOQYu9pXC53F4Mfajjr%2BDyAXrIaE2ZXtgkL0AbMOgQTjWH&X-Amz-Signature=3cf3c06833e59cefad22e9b5e8bbd8346c9be8a636acd8fe2a6500aaf60ce074&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7P7SZD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDd7FYMW7T9ebx%2FsZY%2FGAN%2BomIHXfTV2hD7LOXBsM1K5gIhAKYwxf6n1t0NfE7MBd0wT5WKut2tz45VC980tybX6w11KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy38550uyH0xNnYb8Uq3APuv6u%2FSbfRxNVJZKaSR2G9eajLteOR5Vw8J6x%2B8pPzDOpp8o1zjssF4lcYP11teMOBpRw0GDJon7ym9Vxw4PEKBlCwdwKYRbQ%2FVROJFETmM7kOVktT3vocED01cXyD0YUcwAKzOdM%2F1E1g%2FO0jChwRDZPufD6eApdYH80qh9yW3b4Ceu3b2UNxd4NbNvjse6DgR%2BBNEHVojx%2Bex2SEI2BV4BTKLTudFO3kibUvEOKJOvrI4IYdWfhSH%2FUqs5rBmukDtpNKyEU0WP6IFYi4VPgB0JCK4uAHvXUXSwgGWXp6yB%2FvseGRFWfpt78Yo4g9GoWuB9smKkLXA1EIjUgQFGqHK7koEDnUuMmWpAlWS1ZMil1ylsNgXlhLSdl0itu1ozv79nMvUIuyJ8hnSnc2MsmL0JtX1UEW6WLvcO0G83j05fTrvUkao8QD8l%2FqDFlFPqCHE%2FJ6NhX3HA%2FmGi4nwJscQUONlyThIxRJmtADsbgcAbmc0N94oicr1g%2BhNwZoTMkflbfF6oGqMmpuv%2Bu%2FxgAP5m7QBD%2FJj8gQISquX%2BzXj5PgmOlHJfmiAyQ4h7AUiD5iUx%2Btyiv3360W650B5ZaKuyR0L%2FQXLYoJPAPrLCt4nxkkxr7v%2FiAMH7akxTCltfbBBjqkAWehUDiAKyuDCBYqFTEYSHlRQdItBH2CorqJHn%2BL673ItMJVE3qKSa9yiSzTRnO4mgwFqX6Sa7iHa4XRdu9t976WsYPOCtUh7YcYZvd7F%2FbSwLMUbsJl8Uj8kGf2OmoSq526Eh4x8o1zNK%2F%2F%2FLm%2FXDUoyLPvFlJ20%2BLfHlHA32ZEGCqPV8ALJnPi1AGDIZyqg5EYcYBaL%2FZ%2BSiQKlVPPwo5PWuBq&X-Amz-Signature=4590a4a0ad5685deb909d2147200a3c0fd7c4d06a248555aeb2cf9efa380e0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
