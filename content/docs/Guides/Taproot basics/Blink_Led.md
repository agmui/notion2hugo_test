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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2SM5XFG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC8ELPWsrGPrFqUWyt8bGzR%2BVGjBDQevRb3crIRJIIhZQIhAMyU6GnU5BDfGfJYXLY%2BcCWmiNXHxQ1z4htsH2zHQNUQKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjz87%2BgYiHXLJhEB4q3AMsLMypwWdq6gTIKZ%2Fe4rdkTIxjxWwBIRFsPm95lSTKDfreoZHmbkNMTVdh7l4geotJd3xwnBsPsEmypcErpYtI7JgnjApJx%2Bu5mjlwHKYCVsEVnzKy8n%2BS1LSnTlsr24DFS199iSOdLvizXfeEgnzroatgu7%2BdO0%2BcdjdJxuDmB9I3G4%2FGqhigpn7%2FAg%2Bd%2BDysw3Q1n4SWGGCmcH1%2B%2F3FnrxNSfOhRf11t9e4KQAVS8ZWEGws4xWZotF3qZ30696DvhY5idHPrN%2F2%2F0nSIdzBp9KY%2FUvk83Bv6v%2BATsFf9D7lISlQ3cwxxUp819ch0tEzzW%2FrZy4wYTkvdvEavC7waXLGbHri9ksAdELudQZtE%2BlAErrVGwdl57LVbmkqspqD2eEfXph5EBumqKdwAtwsasDAwQh3M8klp8EDxp8%2Bbl%2BevGl2ptZurkUDEcNFDm04KjuaNrM3j0SEbxlIr%2BGQE3iK6FQQZABHOn7MURO%2FYYiyg6PPnkXYmJj%2Bfptnr4Lf%2F1%2B%2Ft9hkabGJEWJJ5e4WvENvOGQoz8V6sRhD33BiZ9YiowCKnkUJ%2BgED%2BcqZVECnzVj20O0QZSEyEyu85Hu9cc1B4qMzN7Wb7EbieKorEuQidXEwm6lX7fFGlbDCosq6%2FBjqkAf2504hy8mqqZ1fbj7Spr0%2Bj7FJiPq2FUNhb9PSRPidOYGBCX6Q8yRLwzRTW3l2djJTIjEuELh3KKgUCuy43mxtzHYkN8BKktASQFTA6yRx%2Fn3LR9shbkzkws%2BojemY8XVIVULFxHJnHmUremniMa9qU7ISzLVZYpiCIKYZnroLvg6iKBvdCqFqkb93jgqeZYc0Mg%2FdO0S4d0gNttc%2BACAvHUaKm&X-Amz-Signature=e1209c64f60034286b89591a60f830922c7c43bc1ada394dbbeecd78dbf2567f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHKYN4V%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCSDiDyDMqn0l7RB6FJ1fAOciSA%2Bh4WHs6n5TyuFKbraQIgZKUjiKWnl4jypPvLK05O1QRaJpHXD0ai%2Bf57LyjVlrYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz63DPnJuDAIvrxCircA7pwY2jnz8eg%2BXoLkizQCw4vEG1E05jyWLku3qjOlAzsTUCJPmlOLB4DkLlCvAsQskHu8wRLYP%2Bn3QGbcL5P6szVMPhSq%2FYItbLVf9%2BTZcp%2FAUnIrQK5CPsG2VYXeF1YGvj72x0Cv8hSkQMKef%2B24AKwIbOjiLtgWORjht7EMfz30gmgDwivbpbOyZ789BRLxAl8%2B%2BGb2lDOM3BsTurK6lwsUwUu0AqYNjlBqTRuTR4qkOsFUYOJQYZbFWToaOqmU5EAmFUYuNSxVirB7Mr4slt3dsrBqcesy0Z%2BjBdx5WiO%2BhDgavdPVN8PDX%2F7DhhHvHDGV8hnaJ9mT7tAW4KQ8W4zijNMHJRdUK0P7OgzQo%2FMh4XCeHL%2BSqFhsdd5ISX%2FgGgDXtUlY7c%2FmsiJdLgv1BIHympDds6RDh0JAK%2FN1e5m%2FpSVpApK6fF0WIH4TyjgtQRSLLUALis6eq5dJ%2FZudiRwjoNOARXTHF1Xy5XRUU7BI9y3KHjJWg38ruLJBJnRtQSHlXmPSTb69w1eb1zhYGsUOqQlV3%2BUCjGnUdXRg4ETo8b58Ulj6ZBIarkMLMn%2BjQB0R15BQD6oAhfgVyoTX8nqAGMYV3FBzCWX3imSfhOsWUhtHQjNXv%2FPLfo4MIqyrr8GOqUBEWjA35UVjCutxOs0pGjK86xkzVqY7Nb5XAd4jibcKPwFySsCn1759xxqmTG%2BSTvjBu1KQBQkQkE3Pkd3do94bz2E9mYmN7ts6sD%2Bu6UakC8p5OWS09kjafn%2BWm74MdA4ZOnuKiOMQZ2B9vxWtRk9gf69lnoqth%2B9d%2Fcm4Zns7POqXOuYkNqROCyOmoDbxRiHwBAYWcgwozgDu0bzOyIr6i2q5UWp&X-Amz-Signature=3aa9901225186954e58a47408e131a9cee218e9ddff5d4167ba60943de6ef76f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
