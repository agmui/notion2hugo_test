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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXSVSK7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC%2Bf1PaaD63veV8gPVH5sITtR6zH4VTGXA0Aq2MHYRSbAIgZFTllhdiY6v5dslEdD57oXYpelWAVuM99hFdoXelGdUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFgUpVk%2BaFRuX7NPcCrcA11yi4VaL0u%2BwbWxLzKkTvgH98tonTTE2DUzE0D4yiWbcqbIh7oTzttrNmjfAV4WctL3loH8VeZXO3NgGbmXzXiUehXbYp5ozHbZu2INb7n10N1%2BswJNuml2uuZVHz8cWH5NPIAEM%2F7FhbsgVRUnvnbUmXQnM6Ig6GP4aBpJU42ezwu5pTUKycdCNAMS9fWwPoISifFD4%2FdQgSmKCGltgUfc18eveI2QXeJW0Dl%2BZ%2F4%2Ft9Dwhp5ht68i2JyHFBUGfeZGbTxnKsBnmz3UGC32KA8UPkajuG7oO5CrFQgc5%2FbpeKwLCf1shN0%2BTqioHt%2FiZUAFpZfmX9ILNblTUHDui7LdfQm0IQkzk%2BImR0qW1v%2BaaVuofXPtgybWg5VR6uJM3yOJMDh4Gw9S1kJNJ6gvaeIMsVLfzTJ0Mc%2FuQPG11CSAjJK15dCTd1WOGH05nicxZVISWRpa6JdmKxstb57zARMIr8QdMInxJbDo18rgZ2fJsGUF7ZaSPdJe0mMkMwowp%2FV4V%2FipCyQShAnrl7%2FVoFM0R5QxX%2FRITbFYkKICPvLiqaUnP7ityUU83m9a5aG08GQwYFuVk8L3W1i9Bcb4ethsJEhHtKsDhek3%2FKaa4LDQ5bTXAxNJYL%2BBJK8IMIioo8MGOqUBpB3Yza7S9pENIP3ZuqFgY5930v1xFTfrX8XKearp%2FvExE2175G4tLoMnvjFLI2W6M7wMCZe5mp1citiw4WmlDdI25mcHh42GquRgVP7DmEFD08JXQIEJrxo2PzLmidvqha%2Fxw2Stbi1%2FhbDqr0j0Egwla0n13sdjKhRnnfk6E3nFVFQAKF0Kz7y4j2AcyQau5tRHdMyMWi7ZgcntP4Q5wmgS5Q4V&X-Amz-Signature=f0a83f41e8256ac683545b1211f8e221645eaa87dd52cd5b1efc72652fba4587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWWJCSI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1b6nHjV6Pb5KGStV5M0IhjqEnqHNMmbRa8ts2CWJH4wIgbaMQHBKDwvn9f11%2FqzyuXzSsp1ptrEZTTMgn4aDEkg4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHDnwzACtlPH9UPypSrcA0cagxCY2q72bhdr2L4%2Fc2Z0ZC2gJI4FnpXVWYSdkj8Y8MZcWYK3d5Vrhz371a8UZTkPCQULIVVozxHIW2hyt2VEcTSKn8CXDh964bqagbBcetCnVzyb01I9lAaYRI8zw0zC%2B50H93RjGABeW5lYX39GdR49s80tyibyIWb9CF2OGf2%2Bn7gRWXFTy3h5ZIZn7gLR27sPONQa5cWUshIbin7gqc2DBg0jVN%2Bd2n0EHZ2h5n0%2FTd%2BLI97rQlL%2Bj6uz2XGtBcZi6Sf4nKlZxmmK%2BTykvTgSjLfilJaTO8jCvN6Ww0ALHTuh03KkgeuRAgzp9QipUcOylwndCXxJ%2FNYBLimeHM%2B5ddIYbdS8WlVsqXmHo7RIBzFoAE5GvgL9V2J2kLTDhu9hyCei099f7oisklChR15RXOAl7BC7tIF9WoaZtqQLQlZi5BVU0TGOqk18q5TEA3MUdv%2F7zBhdJlApuCJmW%2BwkeWeBUQVHgRL6Q0%2FOToYca0ZLzjav9L43ihG82G9QgcJVGJYyOkaOOAjFSukHYwdwvP9tRtF%2BzLm%2B0USMw%2FNIjJuI0DSCMocx9HRuLvv509jw8IxFLxjKv4Ie%2BD0GEE0Y8AactUtpbrQmLfeq7vtt71gVkM2zaBVbMOaio8MGOqUBfnnO0aamxroXHeeLzEFtlO18Bw%2FeM68qqi138mzbuPZ9CneNwTbA4L%2BHPgR0y%2FZyY4E4lNUc3YEZZdO%2BDk%2F23S65%2F71N53cFwrSyN6r4%2BaHI%2FiZmvWUWXomLFei70%2FEg9o6LN5jR%2FrMNtlyalJJtF5U%2BFLXyCijwH968y%2F7IdHrwvFI61AlZ64p3QeS8P1gGybsOX5a8Pq0QdZPRhy%2BvFUF%2FNrmW&X-Amz-Signature=1f8bb2144d5da71a8023d8bbea719c00d2b221f4e65272e01499f969cf81a941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
