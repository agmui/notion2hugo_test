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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVG2XLQS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCiNdFVkCN2pJzegMlvwBPyr0I2Tg6pl1v1kjHiW67VbgIhAK%2Ffr7VpABVDpVGLj3wVfS9%2F8V65nRWH%2BT4XJ5HJRCTMKv8DCHsQABoMNjM3NDIzMTgzODA1IgyFZfiC5lSCn%2BxOmKMq3APJAVh6k0ou8rHqvVVZRz3affKtSftfyWSPUQtqtDFd4nGr4k6ChK5zA%2FTTUGf4fRk0suqDDYdK2MXXiv%2B7O4wVCk1usqLR6GNq2LVfhmcev6u%2FYCW8F9aT8df5owKDrlU%2Bh5fUCxDwv2RE9gJ0tAAb58lLY1t5%2FzA1k9O3JLfO6O71sObPpZvEVxrM9XqJRGqStZjNHhCxcerQCa92fOR2vBm%2F%2FuzR4S2BincrPXDIWpy1yl%2ByxBWltsl8bWmDCb4Ah%2F5N9bk1mPBlRXMxmIdv%2F5jrmVpw52RicCz%2Fin%2FMVyEnzZthAhYWow3c8kcCRrSU3ZS9zE%2FJMduQU1XWTZt312L4%2FV3QWD3i9ITt9WUgHQspy1VanX0T1FamRH2sVGJ1EeUB1CFXga4fRpL5x8AHRET6mmcJD%2BqDZ0Wj3vzvj9qNbG1ZS0RYxkHpSVnAvM%2FSZHTeqIz2xK0XadMpFiIYxKbnEyz%2BmccLcCP8%2Bv024MlyPbeNrNuKWRRJxX4Pkhj4ddTmuR5lKwtBl7WvuR1mq8x5gDkHkHCw%2BJUykeZEiP5u2DAZpqCCQd5PfMIOK5nT4MscCRjmblMHTyb9ZyyDUobW2PVDk1xokR7iCk70qvmkqELYtk5ihQU73DDzlrDDBjqkAbax4mT%2BSCzZmmUbao85w%2FsbKUVUE8iX3ZCF%2FlBLp2h%2BV0Of0TbXa%2BPo3spM779VgKazRIKss6y8ckZfR7x%2BN5dL82vELpDBP5FizmS9D2QhZnlXQ3qxYm8PrqG0qVYLyTnSyKxsA2apHES6P9TiGn0ysvIBpdThP4FmHqI6yM%2B134t8mgq07orIRd89V%2BF6wXpCg3iFa3iKuAhvNN5vVLuRERRI&X-Amz-Signature=1e7f294b95d23cfa4305244ed1136ff873a501954f99b92884cf0d014a1db0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L75TKYC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCSEgsJZC8YFF0F0N6puEYqz5LPZPi23EuxLcXV0sH4NwIgLa0dknA2Q0JNreLB2NOzlLiziHpfopY9amDM%2Bch9JY0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOK7KF3Gai6S5krrpyrcA0OMQguc%2ByOwLLm3ljlLmRfvi%2BWnH%2FYgIHrdmRGKPLwIDY2O%2Fo9iFrzbV%2FMGyaeyoHb%2B%2FP0VMs%2B5bM2kDYSPvufBv%2FTpJXfvppT8iYwBbNm6WT%2BMXFrWmdEuuSXIN1MubJc5h3wPHkLMhtYBd3YFL1zxS3SuFoQ7pREy7vakxNLsNnJ3VuKafK5L5iIJn%2BOZ1xuGNe5PY6x6U9R9gfSy0uYmbZx9EqMnL213ZqIj6TtWpd%2Fj2XojG5rJQdlHZ9p%2BZCWirZoVVUYjwFGGPIOqNFv3PAI8PpbwbXn3QA0oHIJkDWzzxUgv%2FNdR10MJSWme6Ay7pOHtyxIno3nApOf0XNLAkzXjGePfZCaOWQam33pV6foAAKpD5tHzAoaE3cpwlmdkr6RlTOUz6cvOjuDSKT1nvUzFQ%2B1QidSDSCqDsnBLWwOvDGwtkQu0N4G8XELjJ1LcX7sqUrAd8bVnP7FttbpPOukz%2FO%2F%2F%2FP0%2F3SJ%2F86BTuYamvw3%2BaUqMIpGsQd3spx6FqOnAG%2FyBIxKpXOdwxF7V63mkJyhYiMdEryTVMdK5RV%2BO8yDAkqP%2FTbVp2cKtxn7SteVeu5NE2g7XI0%2BuyZmA0TpwZzz6ssgdVzjPwwZGum8yQk74DIBDyhXfMM6WsMMGOqUBxgmubWl8D4NqYC4LWlAKJ%2FN1aQcQWXQhr7jMe9C3XzwKF%2F1s7owhwRkvwE%2FUx6XOAzDkRG22gM%2FlEkjNXp3ZmljB%2BHS%2FVMth%2FzSa2RGbnXnbWsayrrjJxfWWrJVpXVaWRi3s7HKhKqCSYwXTtB3YQD7OAmjPe55YHxwqqjxPQhM6V%2BXAP4SrCcORQjYFxt92HRkWA7DmqQxDM815BlwcnqgXWViN&X-Amz-Signature=eaab8e3d52f5d18594ea0571f4563bcd6bc065dd19753457801510e375c51617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
