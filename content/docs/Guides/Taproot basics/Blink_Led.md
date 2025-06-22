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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IVYLSU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5iUEBd%2BHkdgJP4S66%2BU%2BJXNmvw5XzfRThdQwELdV1iAiAq%2Fzb4%2FribUui0ZhBhSCIp2%2BnJpvmQR3TaJEFu70zA7yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksFWx%2FxfPJCIFFxDKtwDdqshJwbgTTtvHwx0bp9x%2FENgXNm7rmWQ8P93IYSpVA98adh%2Fx%2BVt9iSig2N3DF%2B6WLXX6keSsvWCNU3Y5vsUR1ZpzwoD8jFK4H%2BwPnZJ9%2FYV1QC5qnT9S1ShnnTjfJ%2BzLG4i7P0FWPJA4fML3iBnSXDQing1tNALHct2Tv0e0PHwFGLBInQSl7gKOIygViNWWpkX4k7hiQK2vmYtgZp8CXzsAD%2Fh2U%2BVkSAOSORKbUoYs368Lc3F6ymobgUvQMuX0XT0SvQskn1IFcW5agDT3b2Xy6EeOMX0LNLsJ412hNw6k%2BeT5rZdyRaOJzI8qP4Do9jvwP6jxwUolhH7mWW9%2BQIaxE7YskAJBNvLLtTYBQ2MpG8wxvBsTaOuDUhAPcdqEBR1IDyKNM%2BeOT2r7IcJnzcAndNyT5R3RiTIyrMwrMSpdle5f7l2f1lAos320vsxId%2BMZKPSH8EEQNwlK5rpQR0astgfqGp5PsTTNK6kDMjWWr5WVVv5TybOP%2F1UHXg%2BAq4YJJxezAE8WvAghXEEUKIEqOusjmpk8pBEDLNh8v9yxt2aFuvqayi772y4Lh9PVa3R6fPaQ3loRoyCTXAPxiKcAdM1nj6Q%2BN7XYSUdWrjA%2B0GVazDqRodLYNswqq7ewgY6pgHnW0OFNBq2PbZTt5Qbpoohhc0WKIPzV7MZQ6NAavTsmnCrdVeBry8wWNfO4NZBRViM68TMytAoRRHBu7aCStMTGY6jXW4tW8PmC0qCoOHY6GHHHsP3vNhyx8LN4QMKOkaH9C0W027AtI499Ub3ZBpeFKOKqMOkztjBKm1HAt6jHh%2FK4wwgrMvuqgXOUdvkiqlWagA%2Ff3rTP8kZOe5gJXn%2BXvuXhjfv&X-Amz-Signature=e474e6078cc1c03568541631be242cb06a8f9a41915a6f808c9ed045fd4d13de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMD4N7RM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUP%2Ft4nWCSBs8XXyWR8vxBO9bxdk38%2FYxJ3ir5M8SkRQIhAORyvY991jGAYFDnzPXsotsRdyL4Tz%2FPOJH53hvhjLfLKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIa3TWRVZ3wwm7uN8q3AOHe22UPxUzxtEX8QuM0%2FjuUZ%2FtNehFgIkplgkZAe1vjd%2F%2BrP5ZimyKh%2FnVSSiuHCZxgmsgVG8AhYWDtnMgY8WahV3tGKT0OaC%2F1C4C0%2Bx1Mm13zLB4bGC1UFJKspTgTShni0NUN8NsayB9i90k4iCjxI0Gj5R7Zd9BQVAJB0x%2Bzid6aBaJsEPkNGutrRCXyLYH%2BNjqdXtu%2FVWy4qG2ARfr%2F0JJu8JDD064%2FQZwJtxPxXdwbF90oygWNGHwF8FQRVKxk8414xPVVhZVaT0J2J0k1amDs34eawzf1gCxYsjLoiivclkeqP5VQc46dD3N6WqwVc8SFN7lCV4WQtTBa3I7rZ%2BNAAwQgX4i9vn0I6fd37ekdrn4mtXcTuP8Rsqc7r0g0z5MEzEuA1mlZVnwQeypy75JjMvJNrCctGK4NN10LUNl3CHaQXjV%2F855wpMZbVE0erC2wYiMTPZNXQb2RMTYBmYBwGaCz4aKt2fmyrWEBSsz%2FBBBBBbwZv9MrQRSH3eIK5o9Toz6TnMx2cO35Vvs%2F%2FD7kzLzlVb3cM6nqmUDrRl5vgk8WN427abjUs041qP09ml8fWkFB5Y19Qkbcb%2BDgy50tETiGwXEklN%2BDitJAXTJfFIorcvGj7JnrzDPot7CBjqkAVgzsM5i0Cp6aTKLxHhV4l%2BY1ZcvOHJmC4i%2But0fLLo1KbXfvt%2BiaPc4q%2Bidrk%2Fw6JdSIEse2e7%2F1fGDVfY%2FDaG5ZLLfYRPnpQxMJrmZxTuPKEpJAsfPxkCpPV7WBOskrbkys8rJCuvquof%2FDoKJeI2JwCVYbm3M0ROxbp%2FNqTJMadXG9o8bThV5lTzdhcMAdibMcAJ8qM24EJ5qapyJsVTvn1j9&X-Amz-Signature=f519c8f22514691e8ee1c8b570acaafa1f18ff98f53c1dd4a255e3949e293a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
