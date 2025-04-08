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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAWV75T%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCf5o4dk2Z1PhytVBtkPpi%2BjiG%2Bny8EaZtE6%2BT%2BxJ%2FqvQIhAMnmSTcW09GlfABQu%2FiQUzzneDgK9ErkBW0wSEcYfut%2BKv8DCH8QABoMNjM3NDIzMTgzODA1Igyn5y8QnvXjFs%2FcWxwq3APuDAlNtQuwc8w9BMuMfgmLZ7g5e00C5ytTr4t5GrpKqZCl9Vtvmpi5gSiPdh%2BsGJ0Nzv%2BPmCx7yghuYRKkbf5EP9yXwNiBimYemxoYft8sOi3iSESI2b6scGyKcFjj%2FfYAJhLgRUS93Ibe1Blil1NtSFAfVgHrZ0g1NaVbxe41GVgU3z4sKjCLnXvDtInkXYVL3Tgyg99T3jVELdM5VHOl%2FlZrtXrO6Uh47j4Y9lW2Dr1ryhod0rdyOz7uBbsjz%2FkFueVd86HvGtzqKyEN5dtTWwyM4slkl3f%2FifUq4ma5CshWWYjMQssAANS7qy5DqWcHyqf8foKcOQ%2BahPQrEwuWGuEF1mKR3ERLN3l%2BPCrzVdr4eYQSBVs1ObqY3DCmgzpwPsdHciEI1Dmi7W%2BzzypzHaoXEU4CPq5Gxi7uAmcszaJIVHhgwuOTGRBNURr35W14L4PkkGJLuSUMSafnugK9Ft%2FrVk%2B23WIZAhSH7zrYc1u1BjfSfHz1i%2BUcRQR%2FYAQUxcOZwoIIQZSwpFgYTbmzhj3HQtGlMLJ5LgAk67NKE3A6EeTM2%2BCwYUoiCbJqzsXXW2AEVIyT8%2Fv7JZuki31QkzyMtrtO30jHNNZJZpsHMbfqjYAgms9qoS%2BW7DClqta%2FBjqkAfGaQvU55%2BRaJId%2BuVMRUD%2FZf9Bp5ByMucc1cyIwta1vq2Qg2s529PyrL1trEJsIKeVEd1zpHjlE8dBr%2FXdNrmH2xRWvJLddM3LKuoXgKg8Fr0Cm%2F8GVtBmGIhcohHiDjm1OdtzfOOhUDXOJ9gpRFBEeZdVX0ZCHVOgiHfeVRR0P6Rop%2FHsv3gBjmnQs00Y9vGLdlGDyZ1CPW7Tjiqz6de264RXO&X-Amz-Signature=e4bae97fe9725f502f4fa84a379d8212509c374c184753f467f5670adbc9c9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRJ3PHA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCnUPPyztJ2V1yNo%2BaUCXPC4wd56EFtHsML%2BWgShgQd4wIhANs0Lu0xBeVj7HSo0VN66zap83wVL0mMKxNhoeEvtqTlKv8DCH8QABoMNjM3NDIzMTgzODA1IgzcJmWfxzUBpMGPI70q3AOrrUdj2eiiJe2ZdgQq1Z4xi6Qxq2Fk9hi0I65jF8oiFrir%2Fmk9%2BroUkIbuuNrosebGn5I4sjeKrSLj6DTXuJz6WS1H5KlpF7ykfBZer3tf6nA79zGKGtt1gHGMVsIDHpgI2hrboh3w7rS%2FvvXkFKC16lbWGjVdSXFncltCEBbPacLlXLg8Q1zjA%2FKg0FCjYSjDAvkrqnClxvSWeS21ed1KFiTG2c55A0UPkdNFMtiFed9CMlM5vKdAJnis3BGgQY827xQJciWz%2Bow7FjAd0lNQE6Wmwj4yeBc%2FBlJ%2Fv9W1cl9eMQwI84dc%2FHLf6EuC36aW%2BUNHe%2BUQ2xPUqqKZ87O6sAsUgLJC2%2Bm2o6DkxwxNOFz1TjT38NVh%2BIeT6Tco0hQpoPPS9pjbFkdLSzq%2F8JqWC84Hwrsy9YXQcGTE%2B1ix%2FsqLU8MZI5MJUjx1WmrKQw9fdpWiFsSrVuoetM5BCwsV4jlPyvl1M8hbc4z1Vp60YZprJG877oWxdews7IQhlbxi48%2ByTihbLZ7mudxEj0hA%2B9QPbBSxUboxsggezfosWwsI%2FGN7OhpU%2Bxqj1mtp8GM%2BQ2jSOFwHBRdWd4HYe%2BnzI0oSC%2BUniRjW%2Fi95mYADYdImdVhmk5rnxwtItTDsqda%2FBjqkAafJ0pW%2Bxr3w%2FsVmzWSTMb2kh2%2B%2FwUyjWLH9boMhfJQjsbUakQyVSoJoflhtagvhJhCKbvroWmfqazTc3kVxnouiYeC3xaGg3o43Arl2a2WdQTxJDhG0d3xlUDAP3g6YTu0hoC4k15uWrT9L3rtkT0r62s8H1598aJJWRtMnHXHLM9ud5tTiQ9uUQcZXb2NkURC5qLWPFk5n%2F61g5isGVtIJNUJN&X-Amz-Signature=9634a8ecac5b94debb9dc3b0a34b159ffdb8d39d2070087e510ee21b164123fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
