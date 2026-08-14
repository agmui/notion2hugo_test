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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFDTZOJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIE%2Be2nK%2BGiIyeYlhZQKGBMx%2F6wcxyLcIrL22YTGVzpuOAiBvmXZoeTOZySbeVfhHV0u15pBTNLRmGnhB3gKt7cnJoiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp8e9z%2Fl7qeqMs7OJKtwDfyO%2Ftqo9zyRz0EMqpXz5sAokUt6z053cxUlB%2Fa3SXrLcK5%2F4AphkfqPgEc1%2BEI1Ylwp7JKmTOBXXWC8HYVkOwW2LwTZ%2F%2Fufyg0g10ckc7vHB0KLgCEkZWgrE5ZP9%2FfoBitgYzwQxDVUsBfKbljRmEBlWqp7GmypEUgkK2lva25sYLBa7BIXuMewBRxO7zn8JRI5NMqyFp%2FAvdpqfG2aCOvZHgdQucjf9BdsRhZke5Gb7Onvw7Ks2hnmhBO%2BmeK0kZDno0MgdLRTyCFH%2B%2B0DBMjkOHZBiafmrofsoboSuMbdmCPPbyzmPyA1df%2BWdTeSoNdhRvTrSBSMA6uMqBO7meMARwKO0NMkh2TCVosZDbWFkDMZPI9P6s22dQenyOfKA3Z%2FKW6r2nY5LbOaeKxYO9w8cThYZqIeXV0rtZiSziWfdU7JF%2F44xkF8AF2iFjMsx%2FweRwYzSfF7eHbxAlHcy96Lblzx%2BeMwljgT4NPdPGzBmEaLEO6FNO2U0K25xZUCbZvLQWtiJwaIXOX0029skw1fOJDontue4i0dFKv8w5pSYWhwXPhqH%2ByNSTZb5vUlrjP90pHp1yvyktjKEvhzxIKVe5Ng5XzojSFE6QBvAqcnjQPASb0zUYjCzUpswgrP50wY6pgGgxb3pjWWXnPD5lySwxYI5UsbAp1t522dSmki3z1oV1db33oqFyvem%2BEARBYpFmceIgWqfEG0cw%2BFVy259N0jZkIwTIaEFgX2rmlSNEy6OHUi%2BprVEWenRF4OlR4qouaSv2d7nsZZbwrz3LsBe%2BDAc9AjBzJe6phm7FWFz8SIljHfw%2Fmj%2BY1kc%2Feudey5ePQMmwR6J5fi6ZL2U6zWp80kZm2VRsyel&X-Amz-Signature=c89b37ad54c03176c984ad362f0cdebe2e3daab0d9379b7b9b7e6087d5053bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6L6BAGQ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCFRaqnODEWwioJiFYkOxyTajeGHv7GKnSFSiOA0M6A3wIgG7eelYtWxXwwpdzf%2FWTztHbMZw2tmQraHvpIJDnxQu8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp%2FroAfhfgQ2VdMCrcAzlHd5hCXnBkfyvzWMp2zvjgT4GuYtHYIpOlYM2rFE7Hbqa0sIEsthVlgjalkZCdRxuhIzC9Qdly%2B0frynhpfwWIbsOS9436LmFJGJ%2FYQ0Ujec6zMpbfwz0smr2IFlQIFRlT1vWhhTuQIaoLxL9XdOpZdQKwcWHlIaaoHWyVKHn37yPqrjjPzEopwGNYiaWLNd2ywsvP0Vt5dMV7Men0sbbhZ16xNELVWQVMDZr1C7LlRz%2B4gdk31RvJrQSZHVVTYpffy7HMd5CE3rt2rU%2FpBV9XlOzDjbODOwjlFIDtvzZaWehokIexQr8l6oSfbNdrzsRCH%2FlH7UFdYw%2BuZWtxhjdSBlQ%2Bsze8tVzjPnmJliuBiLvZKdxQ2dtdJ66Bb%2Bmvw0kWGKIdCKOOYwkR8LgPGKwrUJRgTAGAm8AYDjUR6dK8s%2FsXrEiFh08e%2Fx%2Bk%2FcqQsjHo%2FqOoSaoXExwtYHhdsrPyo8z%2FMt3qxroAL6GfuZY3yPY8Z%2FuLj7Jc%2B3xDynY5n45wnK6zH6iRdo8oPuLLkaH51K2aQHaWUPym%2Fqh5PWjGJ7c54awZO%2BiVSEBY7Jgw%2F2LIcZ2FWMsoZpxFz8QY16LI56VDZ4BqZo2brjRpat7oAe7hScW7%2FPqltIUCMKay%2BdMGOqUBcsE37RLehXsnFtvlhKFvh4%2Bn%2FlGKsI40KUdWDTNawpf6ibhi0aFFgqh3AfOlLY7etBRuIgE5Flv3YBRWx%2Fnsr7ehoF1B79d47O1MukRv7sJxP%2FoCrzVpmzWZZY5seEfpIVMwmlvJuX73%2Fmpr3rcl%2BlFaJqFegtHvOCNtcTZwFPLJdnZ%2BiHJ6sDaGIGO69cyIkBJJUi9OVWQxDEdl%2F7%2B%2FJSHlH64I&X-Amz-Signature=81b52caf99fa2fcb00ea84cf059461063e1e4d9690dd534cfadd1834c4de87aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
