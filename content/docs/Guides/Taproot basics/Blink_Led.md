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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNEYUGH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEH%2BrGtndS5779EBGVFfBp8Kx80SjKvtj%2BQej6B%2BYljnAiEAmViJAE%2FcZiebBVJrNi209obugzFKUu5NiqYnKbc4sOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKjdH1gdyQts32NVTCrcAxfxBWWWYsK4n11VblABVJrk101HpTWfJE0OcB4xHDVzzNKAB5nkFsAa%2Bnm6O0Q0%2FvzU8jdm9%2BvIx5WUioHXDUHGE46L67FLfM6FphsDABdbCC%2BCQEGV%2BGwXo9TvxWAmVLw3IWa7rYgfC8nhuw0AZCXXSGJ8DvdAKF4Nzwbr8Ixb1qB0RQzuj5oKukCfR%2B%2BW3Exnzwzx%2BpTp1Xo2l2WscTBk3FsX9TrX9Caq6%2FovmWC3PMRAftbYbe6IkRIpRTDwt16mKxl4t3oMq%2BRSMdsjWnF2d2oLV7MpdrvyWbFgynTsADrjXdAU%2BIAc5fHpvRl%2BywUv5or95tvBXgyXlboCqp3pi9uFGgzQLBS%2Bn6VtYunaQfSKxmmxZctnFww%2BXFn0qpV52HfsbIHJkRU1l4ppU7%2FeZ%2Foq6Q%2B%2F2yvyU51pmpw4z9ERTUaOfB%2F0hjJq0D7jB2L14nk0jlEVQeTgwj2OzRl1G%2BOL%2FURabdQvJSUbMhDa7g0fndKZ4jlrMAGBG%2BUq8b8BQxqq2b5ylL%2FyRi2LRLxBMEhFFLmUoQpevFoSft2GwHHs5qkXoMRZNmg6FlH%2FKiupqtd5D2I6GfplhVkKqtBu4%2FLWPA4ZsVS8wSJ%2Bljvypd7EgG7EJmFJYHTOMJKD9L0GOqUB8kELajHmdJnprc0MJjRNIBTC40X%2B4ab2ELuG6ZdqAS718A%2FK6S3jWbL0uLyUpzmBXGq%2FutSLHcqo%2FQwVZ%2BOeok3Tx4b016HENRe84wIujw2v5xK%2BzL9H28rgv33%2B58zXm%2FONEeFTc2OJvRgWOt72wRFthaKxO4eaHq0KaFJfsrkcWgQNX7oghOKDNXUz5x5mpUu11eDFN3xG3L%2BoS96gi5oeoMX2&X-Amz-Signature=0453be34f832192b50c2604ce8e9f26b454900b5acdb9408c77672b8ee642c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DOLKGBI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC8%2BOdUDEbFT7pEyZGqTQf0pqNQ21u7gJZa2n0tF8M2GAIgb4ZyIbCEicHkDORemzHLL4tm%2FPpeMmpHz62BpzeoPMkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGoBsRbc01trxlElHCrcA0RNz%2B4%2B6s2gLw%2F1FGhZFADoLvj2k1UlrDhSsx%2FU6pnFwR2pPqDmVO%2FdYbEK14uxJwRY04pveKfa0dd3Q2YzHMZ1h5AcBneNaBARdhPzStm9X59Dw%2FGKp6T%2Bcm5ArhsgPUat%2BFoU870iJA6hwZJ0SPZi8o%2Bj%2BhSXa6zexDGYbyfIWSnSGb7Vj4wGVtitxLJUUFBfPRDY1ZQyM10Wvg%2F35kp9tfKoUA5wKE3eP3wRl3GgN9YdAMFyPYGucXncwTptM1%2Fh2apYBNXLU9IoVJcDBUSrqJ5YNz1o3pd8fy67oOL%2FMBBQYMgaJ6NYRqHy0sEoySZVaUghjeWrXlTHl5Z%2B6r2C6D0vh%2BUZI%2BwyW7AMfHTSQh5u2TbUp4dH5LGUDpKWS9JYRTssAriWTx1F980YKNd8fSkaCZDcE3LkxAR4bxsnajODSev36RxGjmk7oqirNKynpebXlx7WGDO7I9a6BKBsAQiosheKMPaZWqU5OkBCcjiOUSrgxdDbEAVkACfq%2B43cMQhoArntgbIfWIigCkWVhGrE0513KXSqzTByd8PQ2AAIP1v8%2F37P6bP0DWE%2BHJbV2%2F4L60%2F%2FAXx%2FnN%2F8rxkGZeS2%2FBTgLQNAvyfoAeANVsecb3IWgZ4qtU4SMMKC9L0GOqUBXCxrzvjW5oLqwoyFAdGBe2kJvOSO5RUgF3cfRpcse%2F0N6om6vjn3wqD3d3%2FZaAgq0exXilRbPSBXxlHiMgLaEX1LQyaOvyes9vvLmhUPu5ssluIVRXAMZ8QOSC9gAJ8W2%2BQd0TtFxbH2JEMqiMX1G9rjZxQFmuaho%2B%2FBlOE%2B4hpF6QukWzprPhFQEA6JqkPEe8aIfmKhrR7b8E5cokrWu4F7bzmT&X-Amz-Signature=e068c3e3f23875665fbded06f845112c1c7c6404a6bdc1bfc47522fc1e185f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
