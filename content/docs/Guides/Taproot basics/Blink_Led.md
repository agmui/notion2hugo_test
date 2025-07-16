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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABC5DO4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIB3khcqANU7i1G%2F1m2fj5ed9qlYSH3zyis64awtZG2FSAiBAQ1eOrhUUihnSp0lqNWhCerI%2BorxJzcSdvPxLbMCWPyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMj8QcGawpABgJKZ9qKtwDl45eAE0RF3b1B8SSu9HJbQuVHA%2Fr3kVzJetnylGnIT2QLdR549XqERCp6TaQs9MmEvHnjtUJgIuzuyxWREgluK99aGq8Xhfynl%2FfChW3ReIhsBxo%2BQz0KDwdX0Of3rNCEGOq0MvOCJrgCQ77%2FKYZagmu7r3692Sx7TySGtPpZkwh%2FRJbpnwjsfQK1%2FRv70juXzdGWncK1SJsj3NwCdiW6mvEB0aYkrYZMfpgvhK4ksxiVQWF8IX1PStCELDPjosJhkJrWHqkx4VHCSYRikSxu%2Blvfbv%2B7JMCKqLzoX9m91SsKx0XOI%2B910tga955%2FiKFl6Zrv4lgUPAIxAUy4gL8X80nwDo%2B3wgskbASybJaoZmg7g7J%2F22%2BeM7jPNdG1F0LmKHwvjqpf%2FwkoSMutbWrdNt%2F2iHRmvxsT7aQ0jcLKUkIa0w6B3EJMzUPO7hxmuueoqeTEAU%2BjSUg7EOXOMbBQP5QZS9C%2Br4Enzl%2FNELac%2FE2NTRHVZEa20ig0EYdLHhJ3mBRUvreOjRDfbMu0QW4S0JG%2FF3emNFS4kHPSqvfaW910yrfaxcVT6KLWyS1S3IDN0JBDfqd7UFYPvrgZDxtgSoqBYTh97JyQqw9Kr5%2FVAXzLRlcAhL4NsPssewwxJPewwY6pgHTJcuQc3MrTWDZaeQx3SY%2BB6FqPwwfrjJrarr04tyYLj1F2STrFYH1jC%2F4D5u0YpTsVDLu0PrWbEwLGmSFrE7KYophVX7aCLoDxKXOxlv2QDuk1txDLM%2F7Lba%2BIvohK1AIFXU0auhRIZcOoT2UGpIJKLxCPbIicLU%2Bk26XEDr7gtryTHuEmVKK64PiUkiUoKl%2FycWZJxLC8oTFeFs%2FiU7ARQQtvRV8&X-Amz-Signature=19ffa3987bbd3886f9b2888fed51823106a39e1bb2815d97c19e19a257816ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUAEUQB6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID76H17tgroAllQZG0xX5YwUCDi2AurrR%2FG0aUmymTykAiEA4S5cw%2FIE8FFLnifCBr8I%2FrH%2BStqDmzmqEZR7WidTo%2FAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPgqF9l8rAgLhT%2FXNCrcA8auZZsshpc3VKFekSX0QdtNKbm6F7pYE1w1a6MG%2BirXJFiOlixkZU0keAzyB6kivGrl1pgoIk%2BbmAU5D3qQJfpTcZzV6mLsvyYAdEgoftIEHx3E9qIAiVH1B%2BZnKO6Mrl2CWXh%2F7gOHIg6PqKYCiZTjYgZb8gnMbNFyWoK4fLov86m8DSgbP2kd7ErthbD8HzNn5V5g%2FqvEWodFIvxqBL9CzmQrPu7T2C37yramaP6t7Wv01OGD0NCs8FvuLnFDcPaVPkzig3CmF8FItnldhbmlWzJ%2Fjvss8QhvuWmMnK39P%2BrIzWkWyFD9lV7GT7UU9qm8bg03PinHhnBjHLaQ7wYwGvd%2FZZzlK9fqO3RKVMd3aBoXo%2ByxBUPfKpSkpmQuPHu4mYg2T98oJiURZKOwCmfi9MPr3eFis4W3hWBCX07NtVH6LDw1gsatYfa%2B4fh2pwtW1hlHNknAxb8DBdilUagn5fxlDTkbCMI1%2F%2FdM%2BuE4dZzPJvvc0IkGFdDnE8dPpycryblR5rms7kj5UrAY7Sr89hJ%2F72ypE4ubrGz0vmSuCDYnYR9oJAWjlYStFv0iDSTkVCzXc0Hnm2Dsg4NvxQ6ojMALvOjSlMqHfHq47ynj1iklCc%2BvWTTyxB0bMKeT3sMGOqUBbk7QtXS3sg%2F0ulCjLkGmFRL3MjrpYeeYVY99GwuW45vxFxQU4Xb98qAyCsoDb15xaj9BrOqQ7tbS7Co9WiYnwy%2B9ZE6tBg7SkgNYlPy8dtbnBwQK2y%2BIC2NhGAXXUupkQ14BQHuSWT3lFP%2BY8r75tS2QpL83dwyyeH3NmxNGEmEHCLDOOtfvu%2FEX0qS%2FZyLilsU3VgRZOjQS7y7CpGq1hlnQvFzh&X-Amz-Signature=a66a9a25bef257d0e1d45d53b42c003b635596a7ff27d25ce2d0aa21bda1ff14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
