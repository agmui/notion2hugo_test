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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJEF4V6%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6eaAnpISJagwDrp7xHVKX0kQJByhJVzygN%2FOT4Jp2pAiB%2FNz1o1J9MSBTUs5qUfNHpTyCadVwnmr8%2Bltw3eNodQyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM7w3FUdntJDPLqLrYKtwDvDBjJGg3%2FnJ7yIghj%2F3nQ633%2FZJ01DogqmPilZYVtyqDqG7%2BsH1Hpa5VRo0acLT2Rh0I6zSOkAkYuZHVdvgki1keCp3eQvBQkBpl2MCfAxF0XoE3ykg19gm8esr1EKfFxoUxOqvnir1P3tK3dAVPU6aKLWGJZWGp%2BKIALrOixgO%2B4h58%2BL5Xs9M5fsw%2Bc%2BzkfZRiYRm53nwNkYkKl5CJ30mA6kdDGr8Upi8hk1sCuTtoz2RTcn2bly0nkmukL4AQfG3qxu6ZvgdDliTrUqliOVNmRZuAtWfgxQx02EFa5kxtBp3%2B%2BYwN9LO%2FbE4OiabJGRN5Myi%2F53BoXcqP0RW3sYT649maeZeyxxMGpIb5qbi44PTF8SRuU%2F4BaxpmeAlmmz6zE2c8GpHx2aWytxC5YMDItBoauZoD9SdgGKqQWsjqFQqIwiU4sti3%2Fagjtrjoq%2Fa8qqzVrRmf7soXZhKqhjs6rMvy%2FvqKGmMT7Fr1dxwgAztWnpnDs%2B1kyJ3MBeNwss6k%2BmZerL3NmtpSXkzzC3YGoIgqbhOB1B838libJMeE6rM%2B9Cs1y0SiSQYcylnZZ7MgXAM%2FVmzzfJPNUwQ9v%2FY3mCCLjm0CqQJ2zt45Oi0oDycjiTI5nkpF7HMwo6m2xwY6pgGsQ2CZMR%2BMwqhJjVKm8c5cN3O%2FuZtteDYZaQxlnt6EBCHTvhpY5D2u8wKrCUj71I03RHwGohAl3w6BPbjqENW7DIb%2FG0EdWiV0VhFObdQGs6lJQJfAYIaNNosf5E4laDhUc0nTdtoPAXMUgauspgzJzx91HOdeIb7tGae6RuOtbiEKoY%2B9ox8uBe%2BEfPpP%2FT%2FyK4JEIAc%2B3ON%2BKHD6mzluplOCoqqh&X-Amz-Signature=d4bdbf9da1451a47916b261f325004075c7ec1df8ea0161b1ad4d0008213aeaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYTQYH2%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHrsk5Erp%2Bc1IcAMweglFh%2BKFwD9TVX6%2Bv%2FT7snTdfjAiApr0bzwRdxNFYCz%2BqDe53VvNScTGvlYhiJOcaexHamCCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMochhffQEXu7QuTEzKtwDaHLSpbeaSqCfm6ROl6rXH%2BioB7AIKl8gJnqv5u8MlEAguFfTqXA2lBQd8sXCaWLDK6sI53IFu%2BAHr4rJsPNO34cZVfZZRLF3ZzBnzNf7YWxQEQz%2FN%2BdJlx58nBf1dy%2BlTAi1ywxkdmA0E6SkYr9PVgppWTQ2b2LXrqp4ceatQSzUzcLCZrPdy6m08xSFT0Hw3cndXJQ6JykUp%2F%2BFfLT3WrxkI%2BRp3%2BQ1Hp%2BXqtxPUACFOSGvvPwi1i3jVRHgDcdxmiM%2BQjMPcp5QRh00BluHCnX0rVtuHaKMYeIqXGr7YbTWY5DZHXF70a8rv9j4UC6mA9VA5OfQLA764mB4tiIeozelHqnyIoUtEDRiEiG1oZkk8CiT3JFIwOzSuDBoERnxZMx7%2FCjjpPVvOub4s%2B3g9uc4D8ekZmGv4MytmpWJLDuXllbysl9wKeFQ%2BvHMyQQOKUgzPxgZ6npS9x1RY6XiuNk66T8%2F7%2FKbt9OB%2BQHS7E17xigVr%2FaJOGBpIk%2FRA74hGI451rpssFHtTEJQCfElkrzjFwwpVUKZ2ODYSSx%2FoBEM8UIPNs%2FVHUKhCrjEZe%2B%2B9FVbaoDzd6FjpL%2Fntmq%2Fg%2Bmg7DBdz0dNHBJRp9%2BpwpWZnlq0%2FKSja%2B7Z1%2Fcwiaq2xwY6pgEDnCrI%2ByHAxnTnHbLIntu6dfLF%2FadWUMFm8pDy9PbId4%2FfoUhiuDg6Ucmx71FTZiMKCqneh5LsHxLyPAt1H6f%2FOB9PoUuAnR%2FFSKdF5pCGjO1HMg891hWPdeVHjGDh%2BKougeAc29%2BVbBI4W9Bo6yQZc48KsdMU7aYBiRZWO96dG5vDCrWWbBQIp%2FuSwq3VRovC%2F2LAzieqkchE6ZOVdyz4uq%2BRBID6&X-Amz-Signature=b19f15c34eb507f561236547d1fcfd02a4334b8c136d641b570b990e9cef615c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
