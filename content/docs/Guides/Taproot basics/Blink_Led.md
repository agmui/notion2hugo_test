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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFT4PBQB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYaZjRemqrnyLtRfCo49U5kPKtoI4pktmMF3nygo6ltwIgds3FM2E5oeNEdBHNgFrMpeXbSSTP2ODed2HgjrPiBmYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxYDL8dSDGaN8QK4SrcA%2FIKw7SJYFv%2BZfaw5HxtcffPAvGjqkNYm5EL9u4Yfoqe%2BmRYSeuT0UZQT1ugrsk1HgfdrNo70prRfKXBsHOaRcIGoroL4MIXQYAUIF467vTfEBdaelSanjSsjCJl6klYoe4OROdM6p3sDNbaYF45JJRgyn6Wx%2BwSk1RqVrT4Zq9cF5CcKHjZXnUa780gBbcRUC3b3WyHoTsRm1%2Fa1p%2BBST6ir9ZwCQhYHd%2Bp20oRyYzOCT3BLfbXaeVCMcq5u9CQo5ZBdjfh%2BJFCw6VsiiUTKSqA6b%2FMe7gjR26HNrDOrqLk%2B0HV4igMfa3qy2AU2wmWu3PWRQ2XuIr8pgDE%2Ff1JY8GL5%2BhTdE38JU%2FzHkzgpA2uZJ0AneTZfcZHEasBB1W2J8YzUOpQgJV9xOb1hc1OIqJjPej11Ff7X2ahQkhIm9PGvjhX%2BfHHC%2BYPgQ2i1pHKkk996VcSJMpw5moAHf4CuZ8kROIxy57QXIPdzJXb3gB%2FFc4mya9tGSekrHqEk%2FWDvBz%2BqKDX3EFjigFBIMM%2FVKyN0S9Am1av%2Bfmv9Y4cDJooPfUHbO05Pj2yAjhxUQK6jDD0SbMUgb2sWDfZA10WeffhLDAlSE3yLbJ8qL5PUfeW4te6xGkOmhA97tWiMKemwsMGOqUBy4KeS4V2F73o0azlsCrBQ4L4EIu093B%2FDWiyllhehw%2BSvi8%2BifdFb6KJY9Ya5YyMOwKmjkvLr%2BbtXlJufjI78Yb9ahoIH7Qa%2BpLiW0lxGnDXkpLEd8L06WhF1xB2AxFlpcBgSLBPpw%2FynfF0V9lT%2BmifqiFWSnUGzyGVwJEnW9MUO6GZFLxrMVAg8owHEQ7HI57tf2kNTh8zsSwn7v%2Bpp7I5aexv&X-Amz-Signature=e9120ba7545cb422df39ac10e2a9736188460a0f0ddd550060d344262127b8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZRJTEY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOtnMFgdeV%2Fc2FX96ol3YMZ3Lcde%2FJyqGGHgvgjoM03AiEAiiRzs2Mt5nit0UHKaQPf0kx%2BtV6HhRe5H%2BYr8lNo%2FrkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZoLeLcf56xbb97KyrcA9O5S9K%2B0g7bBuyNtXcireLl7OOvo6v8KW77ulPV%2Bd247oUekjVZ2M2ZBKvPzH5E6kzNkboXb9Y1DGXJVIH10pvXoOai7OlkHP7L8jETLrlc07RGQ4K521p%2F7V4STeNN%2F7z12xNADwe5FBXP2NyQeoo16%2F%2BvuqXC7iBB%2BX4J5JNpaY5OEi1hlbaucb91Rjc3Q1NwpckN5b0tNQKhE8HndWJbwLroLGLX2L5bp%2F5Ll64j73uFFy2pDjI4K4mgPfvxmDWYXdYxUkoLwQpbb8GbfvOmBgjsAFngSN1U73AQMczs2wE7ky7ZZwSeucUo25XXK%2FCpGIbn6i5MwmjJuqru2Jrmut3PmbWP8QghxDvTaGP5vEywscTNu0GdQ%2FvB1CyTdVihxbsdHf%2FnHxWS4vjOSVSBDVb7nIsQP%2FOWMT2wDtiL1Z2Fi3FX0G2bgqTfTvkMUXMQOU3ti3A6TbdfE0hQvNcsAiC6hOGNl9AhUjeH2Zza8IerAKnWQp48bTFZMutAEYW%2BncKn%2BsVIFpotJwtEZi1UEG0SZ1ftWOtQjlcAZzvgkBa9uMNb3Y4eM2SFlhW3VSnJcV%2B1z5tzwgWxIZEGjr3voTgIwrXqAt2Ro0V5Pyx%2FO%2BBR0PR5HakiLUlQMI6nwsMGOqUBvE3UoWlh9YvSz8ogwoUewbBeSOUZ6MolbwvUgS3hDTU3DtQq48nO0avdrLyfEuTK0G21OdlL1vugXVNx1TGqcvZPWwmGdDw4Elf92wCJQcRdV1AZr5lZ8nogi3C%2Fwb%2BX7o6hhrXrNlpl62k3Vnj8C7kPo2Fa6i5cZ6AnpF6hgCs%2Bbi5e%2B2Z9lHL5FRf4PNcO55Pf9upKF0lFAnO8a88ZCvxA2HMn&X-Amz-Signature=130c0b43c70e33c0d529cbe7f5ef830d9b2487d39838cff60e429b1005f783cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
