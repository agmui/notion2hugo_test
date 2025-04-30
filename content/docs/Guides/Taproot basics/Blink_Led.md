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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2OKHGA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJFMEMCIFeqNIqAusMkkDr5%2B1BqZALsYJjUsUN22eNKxTt9UpSXAh8NF2oF2CXJN9qepi3JrbPQwdmMmRFSFfReNGaXx5ytKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwTlr5KAUF69NNSTgq3ANdu45bGudmo093mLZFy4ThptK5GUWZLbi%2F8l%2FHziIzrOHgtZ8ZDXFYd5jkY9eg42940p4Ni%2Bxdo%2FD6EsfcpQ4wfSRz%2BtkeQ9fDNbwdoPd5lbLsMbclhLB9PTEt5fkB%2BYgYP3GaOkmy9iEgRbkJXFxeZwGla6NFPPLWtbHo4eDTuVQ%2FqEPK4JJRG8VcoU%2FVPVKPa%2F3ETg82yj95y3bqP4tuzz6Sup2qvxY5S01LbVI65QFn2xlgoD7rsFNn2FwFzvcwQRBJLG8WNPaUXW5BiLSPgueaN8iNAi%2F5RPr%2FZC%2BhrjHIoeW7Dpzn6pQUlKnhEAD6y4YM11gUzMbeiDYCSWlCDL3zV64TuaK43H9VrpHzvLD9O%2BaCWYLOy5bNWQb7BxB6vfgzeLdwB4Msmgcmx5SoeTyLvqVOe1AUJ5EqhVZVX%2BWx%2B3znyBdZ15NVVnjdpbaZXGfZLrdNXAmhgmYtmB75iYnm5urGPJgT41dBb87i%2Fl2s%2FAPgr29m%2BYngO02kk3gcEqRsW0%2FqpCxgA6ZPgl596zjSJoA5lsH55Wd%2Bo8tH%2BCKeBA4nvt%2F6gvdpRUYU9hqnX4wHdS9MbDlEzwpsUwNnC9osI3mH3ivij%2BngMLuDLX%2FxZi0fj9bCmhWrVDCA4cjABjqnAce1w1y%2Bjqm6pE1kkeI%2FsCYiF3lNG6JeOmI%2Fnac0ECcgVfOh5B7Ou1hDqLj2%2Bjqg1USSBmHYDyxUeQvTT2uzRjiva1ROpbf%2FAmM6E3BMJlBt6qI%2FuOnjabf5U41d9y7ar89Qwbk20EA0M2IKEQ8782E63mR4%2FhEKfDcY8QuSVbZRTYaXpuk%2F%2Fgo2U5sFuUuxfD2o4PDfULwq%2FbDgQv3C64zj5Mv0Hiu5&X-Amz-Signature=c2f78c5828ee42badd899eeb818c75ac14ab6d6373f3b81084d2da5e5946e54d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHURQZX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAMxjzfO8uEfNNoEhxeD3%2BI9OSBk1g4q0u4zRFYF7ZtiAiEAt8nyeoyeAAYTlXiNdLchCvFNEORzNczkmZaW%2BL81rqMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBTkA54IuyIESZ2NSrcA4mqjJunvXRsvzMyLL%2Bvzl9B4tGlveEzJKxZBxfaW2Tq9yi1QVywWDIiwF2OFYXACZSZoJI%2FQGyttzL69JDN8cundMeNfrouG3Zxmv1csva4Ds06xgGrbtM7mp65AqvdMKOSqyNA7rJZUy4202Mmy83U1h%2FZ5gMHRiXFy3Pk4yAwvCTqXFjnGtp5mncBUIhUTK3YSPbBNR5eRCHTSYAiGjI%2Bz8y3zxC3tByKp97dHgIBzCMMkxcJVJn2h6nUAq86vHQDiCS6IxAKULy1Atu1EPAP%2BIa%2B5DVS%2FoFj4I91N9qL%2BEr9IXeUpEKOWTPzgwDmvhu4ln2GzfQa4orvCCMEeeoAPzyd5n4PZEr0U%2B7KZou4doQpnkj8j1RX7GA0wm%2BvTGrGBMnHAdNfk627Eagmk%2FMpOJCq%2BfkLOAPidTKB1aaQAKCcxFarKZZ9X0CPbEMmPHaRhkoXTJgDav%2FhfSaX%2FqsxeoqlscmG1V0IG3PlEDU8RN%2B1NuiOulLWqj5cYswD9Z9DI9YIyTr6ROBT%2B2r8cVa9e5pIe6cD2o7UUYyig5X%2BfR4d0p1YyZoRMpvVlgOiOxlyiCjHuNOOatrnSOQq2GdH0atcwWUc%2BcUUbqeXUEsmw8LXHW%2Bw73aCAHrzMLjhyMAGOqUBOtaTirAgUmCI%2FEAgZWJ%2FkqmDTsx4HE6lEnVg9vUWqiBZp5SW39YHdOS8Ehs0jKbZTa%2F3i4b%2Bg07V6e1MUZwns32DrpVsNNYcCeenr2tbPmq%2FL8WYiLrlhuaIDAfz7wZCr67zG7wyuoHk3596PqllZXISEc2m%2BTmEL3kpdno08Z66dRLhAi3QWHL25zXo1vzu7rcoAHEfVFbT37RUC9pSdPducCrE&X-Amz-Signature=0bd617fe6eeb4752422431b0df283d5c239ade19ed329bcfea2401e0e87fbb46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
