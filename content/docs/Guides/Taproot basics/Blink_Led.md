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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXN6KFO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F7L%2Fs%2FWxV6dk%2BCPR5U435nbkrDv3lcfVfSnHp3k3idAIgT39ySZiaXk8DZY1MgaMenxl6NkL1Ze115eWVKSHtAa0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ8z21QgJyjkuD2wircA382r1%2BOK4DrsnnYx%2Bg4DxsmIBMmhKRSW%2BTKgqvG5vngcUcivbP50cm%2Bcih%2BSlAdlMsYF8qbJnyC3yUNouLJvIB%2BqaIS8Dq3FUx4gnyKDzrS6gHBWjRGGhbnTko2Rxw1agvHPRQK2M7vFxTLKc9S3ZWBtU%2BJ%2BcZ5hUc17aSScLXupOaRleq0jrNhSGAlLq7qmTYQkZu%2Ffc%2B1uHrKrIb0t6%2BloBgyeKfYTeTf8Jv4Buo7qjibTJrrTfgUsvb8nR4sBfZJ3f88GS%2BheLM5fWgvKBDoKJShzvJPB57c88X5JbGZlbSCZVp3LZqGQvi55cV5KtDXPO9Zuvl17eQV9j5NRuCOsxhpxkASldLqmCsFc1sujpdsCKu8bm2fZOeBelBiWkQ7O4czIBTSi0PQ0N4%2FXiROKk1N2X7LQsE1aVLrEJMOR4BrfQ8t6YCZXOSWIM%2BGEJRKtDyzvfw1fOF%2F6y18xJOyy%2Bs5jAE00RQ8%2BZb8I6LCEiTM%2BzRngvrIR9r%2F%2FU6Vyu0GOrpPgsB%2Bu8nclzl%2FFoNS%2F5hVKbPfoB5etA7139p5ZGMSD551uaULWwEVCOZ1uP5RS17ldOHDKLSD0zsqArkMHPr6O6rgYm8g00r%2BN%2FIqVzWnqdl4xpLCgo6mMMLw%2BMAGOqUBDoDIRrrrh9UMHsH6iSauNIYVmQwv6dt6rrITZm6uoQRqREG88h0F1zunjbem1fgn%2B3l8A%2B6oFvL5Jgp7Pn9NhLehWsrzQsEXvg7iMPZINdDw9wB%2FeGAMDAC8AvGaRR722Dc2svMFOi62sAJcWw2Q2ieWE6Zi%2FYvEEjGB%2BLMB1kLYL8co%2Bnubory0yGTimJdyfIUF%2FPXb3O7fl5GG4QeEV02%2B%2Bfhg&X-Amz-Signature=1bb250587eb0c36a4225953597fbc1a7380a3a1a85eb0d067bfcb7211bc66655&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIIXSYG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYzeGR57MRvp6wdVbUqiHeI2Ed8AX4KiIHpwxhAgjpNAiEAz%2BKt92vER%2B1PzdldqKC81jSAaJb6SVFnMMstM%2FL6REsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNUKXkaPtlQYRLnIircA%2BwPYssK%2BcfvGy0eKsSUnDO5EbiO%2BsN5LFuWfws6H%2BwuWBdOW%2BiFy0GX3eR%2BC4EckbPVn2p5E%2B5geQHXXxmAyFhobw23y9YW%2FUJQDGTuxMZPb0CYKw5xjrQj93kk5Afa3Ku8jRuWRpw%2Fv7i5iib8qW1OB6gDsp9SgJSgh3MgTpC%2F4utVv5Qnc2W6BnvSMzcQoSQDJSiUEYp9M34J5sOL2nz3O4771iAqYjUJ6q4GutBUU7u3IcqOfR8P2Gj9BmDv1fvuap4fJVjhm3oSJWeYatTONauB6w0yuyzS4NPsTw1yKlu3%2F89cibm%2FJcyW6dYHsrMQ17wxZ4n2vY0900EPp00UJ0JTFAs2lWGtj9EaI8gw%2FV8DVvyzVtzQpJHP5GFpINRPDBI7H2H6R9yMTaz6Qocscq5%2FDm4%2F9Py4de68xnF3hNNoLwqIxVefLn1CuZYz5Z0JI6hMp7nTGMq6BiIjl9eNZYJpn%2BqhbTV9MOA4pBDA6OuKbSUkOt1n5n57H8uMX1MnwS4FLs%2BwoejXFkoFOhGM62NqsSqMDpxWkNRZSW1joc4otaCrOpvNv7VwD8HCCqIQ47Qk49%2F2jNQ%2FrGI2C6uSSFvB42KqdBQQqRecTE8ZeopLB%2FBHA5mho6R4MPPv%2BMAGOqUBwKWOCp4f5Rm3rISj24cTzN5nOsT4tcFgyFS8iuF98my23fdtHAQ1oP1p1yhPvfP7uM7icUS8vsAGUCVVhDpA0QryrSrQhMp7bTab1sMMgUBe8mC9HaVy9IUggM%2B7Vj2vZT36yWwtsRv5O2b5Spt%2BG9VjVQRIgs47dPwi%2B1ayHhvReL31SwxlF4M%2Fnemab8EwhRaYMy8Se7h1%2F3%2BdwtSJQXHDVm62&X-Amz-Signature=744d8bb75df11770d905805f9100a66a7eda95c57ffbcce9be451cecfcf6534c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
