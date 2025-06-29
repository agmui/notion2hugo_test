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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AL5BQUC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEYp2Ye%2FdAd8Km%2Bj01t%2FGhEPhnOjqLhEmhnMYr%2BMAyxwIgLfdedCYEeMwchrsLr4fbcrs3M%2FkcKOlF2MOk%2FQINjzUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FPmsGvB%2FLDhNgWjSrcAz2SwGCLEOLKIUtfReZ%2Fo%2BWnh%2FNCsQtohAtxg9xtzxw3zBdVjDlMQRadZ1SStDdBFoxs%2FkhY68gFCpY2qtmfZ%2FtBygCgIygA5zB7KolU6bTwTwNDsH2txI6oQWc0FiV9cmZhHyIC35hy7nYJ6op0n9q1o7gMIU6GZpwViYATTE6R9fw5Hbf8c5Uwz0gfg4eWVeG7B4hjd1ee4UvNQZUVyE7wTuVYW2aLPZHq16tPRzZkqm0nc%2F7o7yOzsuRF%2B6P%2Bk9uNm%2B8TnHEoir10mu4JFe%2FQJjUj2fYPWudD6KKYbwNIwDuLziNThEDWM%2FAxKLCp13UXlJ2k9EmNmxun5cyVx9LQHrUvitUttpv6nQj1kVUN%2FXEHp38f2icK7kf5VejQE8YHLcGq6Z8olKGJsAhRygUDm02GjhrN8stYsvoek1gn15g6E5wIeHEfcbbGgtpc5p%2Byukxh5wkHpYNSWfhZwRJE%2BIqeUXkvBOYFXhax9Sr9NdVoDLOYMg%2BzjQVCyljD2IHWjcIJ6VF%2BcfaL4b00ovuj3c4MnNg1A1k7%2BNThlMhJC3mhvClnlFaGA%2FDw7ymLco3o52%2Bd7Qo9RNQZOBPHy%2BWfk4rLDdYMn2JDnNuWdAmhcNP3dW1wD928KhtlMLjNhsMGOqUBqxvGqkJcJ1GgDJBDRa7kXxfIHND3aUCtjW0o5lqIcXrHHd9GntWhYQOf3CCDCxyL7VURNDAuPB4ArjJP8642GBt9e8NhhnYfkVjrzPrcPvusKIMIu9N5gbEhxfMQrMPLrnYDsuMPWXGqjO1awIjR0EJWLIIneq%2FqpDN32%2Fr7Cfe6aE5LcIaAk4V2oP6oIFJDiK1%2F%2BjZsplBrkIAYWitGt41fMtLs&X-Amz-Signature=089e918ddec4ca27b1d2dd4ac7c85bd604bfc8a792ecc283243e446212f43976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IV6LHTQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeih2qupZ%2BxU6zuw19Q0340da%2BdA8nOqGJP1rOT4LZyAiEAqY6ZSklNOiBxtRZF0rrBQL6O7D7EjYJ6gyqcZ8TKFaQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwqf%2FZc7NWRYWYIkyrcA4VuO0qalt7OeSpp3146bF7%2BzCWrnsTdT%2FTc8RwEh7fXXDjgmZ2QDk4Rn2meGErdU%2F11tCfvVTVbl7TOGu%2F7CU4KmbAFN4T8xmzmxHHv8gV9uKMd7lSkhxaIamXYBKtkRBVsVrr2x8UqOYOtnhNEwVMBSyxvhDZGZVmpV7Xyx5%2BqfLRoqpdbWXI56oRJzx1NTvlQgY7c9BtmtYFcjpazGdZRZBJSHlhgsaWiLDwFDZp4kdkAP9FRna%2B%2F61oEm%2BrPy%2B2dA7hXrJhrknz4v4BaWw5pyOq2zLfNqPrNehV7Fsu581oYpoFNGUVbzwG%2B4Rk0o%2FWCr8kaGT5eA5nklsffuGF73vton02tqzrw%2BMTvLrgr4rAXKoR4%2Fty5ZIkn1fevwTQKVctCWyihqS%2FBvvjRVi8tTP4Y3VJmttSMjxjSKYoahJJ2mf6ErNjyeICl7fMLVWknAX8UV8rGey%2FclnOnEmOIIgmaTbUhpRxeqOMK1sSqHHdCj7R2sup87IiZ3Q8VygbpObeLMQV2NZhGB2vLjnwdoX72jz1XYxLNTiTtySBo4%2Fmcv0XnIZpcqOI0RJx7ePDiwCRN0geSGQ6v4fS68m3LNkO0X%2FNzzyN2krFIImGWE7KO9bg4Tm3o1f%2FrMJbNhsMGOqUB74WkHCJaE0qkNThjhdIIEiMfQ7SegD%2F4rBuFwepnfXkLtO%2BoRz6sNbWt7p9RUoZWtEMvz0zP4l5SJF8AgugOPRg4dliHBZVU%2Bvx8X6HmeIeHZfjgwJweQNx%2B7Ld3sHmPlWwVj%2BmlWvSqkhO5G2k3W2ygGW75%2F%2FXJrp1sAXLpR%2FPeDAG2cgxl6rU2R6RJgMk%2Fov7RoHWxQTUuXweK7gwGKRmhLUnC&X-Amz-Signature=59a6a89f3ae23c921b6316a44c263cb5f9a8549077472d1787206c4b076458f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
