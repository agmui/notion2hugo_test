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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUE3SXBI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHYPm4ZrszJV%2BCYWHMbxRAwy1vaaZxQ8VvhCvawAfzveAiB1mPGIQyIlW1b5ccyEBwN4lJPjPbj%2BhPsMSAF2N%2Fk5tSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMSlGIZmi6Puz2mNCDKtwDGabN3GnGTVVwEKyjk0OLEkCeKzkrAw6nClZ1RbvsCdI%2BxTrhzMFrvlwk%2BNQYaOrvxNgBaZhsz%2B3Ii7dBhoFc17bEXvNH5YH3eqq3pAEwQ01FfrVBToRIS%2BV%2BumfNSVsBnVsv3SHGEeSm7LrO8blgGgdym%2FXZnGp2NkKsTU5gWrdLEw6clHJXop4DovSqJXLE0qsfHi3csYT1yg0%2Bo%2FI8wxW46tFpu4L9R%2B4YiECbTRSfIFS4D%2B4dkMw2jSlDL6B9LrbHvMNDq3kQO26bxemtFSlAWsFpElrbO8u9EhTKmy5RgDPHESwzWxoNCs165UvIC2PfP0bFtpe%2BLkdl5fz4RwMT7rd993bCVNAiemWAsz5xVurCZJo%2BK3FRqwXuVXMjd2VgkuKZka27jT4ShLWztWE63UTB2c0b9d7Ke%2B2LtBuPqQ1br9NDp8HfG7zdLtlu4WICCcRywQqE0ICBaSHzmJrz3I5N5LDbq4w3QihfHaAdTUp%2FTk63Vm81rVNT63N4pckM7fN17d6mtZR1ZjlE6lf1QJkbFE0lnQOLFaB7q%2BPougR5HpTQaJwb22SlZ0%2BkzcL9e7jCJEZ1hcrjqPDd1g1tyr4RsxnUheaqXNgrDMdH%2BqFPvLLJggLpyLwwntKxwgY6pgHh6YQZGahn1v4xaIYjoL8oFX0%2BszmHZkYkRuUPdIfJy39o1X6WPKgEgPqITWVsJTO6Ys71hzhfc46fTuZBSkpRmKkwIsYh1UyHoY9ME%2BT77R8G1wQOcu9QmOp3xwQsr6kR60vBmTlvVrzKPF%2BBH55EoJVCyzukVn7Vrt%2BVUlz3EsO0cfNd4Diw2ZwQewz%2BFtX%2FTJjA5BbWESAhynX4NEjRIaKTaHSm&X-Amz-Signature=ed331296885c537fef6721705b522dcb9212e60023e014a7b7d73d14bd26782e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQYGQ7Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDoFDoMJxmVMlHjKixLP1ecztVX8dhU0bWZr9t%2ByWnxaQIgDgEBiibeX2JBHw6UFt6p%2BEGAWzzZPZZ2aQ4AlmvMogMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNrOqgTAp8gdB6ravCrcAzQzEoiLqANTR3zTclHxqloqk9YLD3pbqh3DqxpqiAIg3BjSaInFNMq%2FaGdS%2FgJRw7%2FWjgk1Ll66fa4zxaY2IaUBLZMgCS6gvFTL%2Bh74CAv7pu97BIZc%2BJI8rxfiSWs1TyBRNWXTelmRFd9JwA%2BJhO%2FzdjZpO6Spd%2F7BRhLEtsd%2Ff%2BKS%2FzY2G8DaPMT6j9p9XgW%2FCxPT%2FijQrEEXBzR5Vq16CEeL3QBqLMWUylWN9r%2FnCzWt9FcDL26JOU3DLU8yjqVzxoBE%2BJ0Erdlv280zknhHXTk2NVpenYFgIvt5K9b9Ta9tMVEzaIJoev%2FzEEm%2BLnJ5PVeMKHzoFgdliv1PJAxMYl%2BbPg%2FWDqq69GkW10E82PYid77%2FmYVMV7Q9RiS6TQ0TuPAQP5rktfv9d9jRDSsbmI010dWimJ2j%2BptN6miDnKGsE3d%2B5muwwNn7KjATZJTt6Dfe0nZ8AJ1VJDo31azxoPWsyXLj4L%2BSDw%2FOVdMys0fg2RWn77AE%2FaVLeECv3%2F81RJ4hsNrdBqevt9vJ0FzmHOhLQIw8Sh1xmVSEIO1lnfaV6eH%2F6JGrezu2ouYgsJiJ54nnaf1haye5LgQ6lqZFtlWBdyFiRvo6Wz2Kvw7BY4MHY6jKJAI%2Bx6m%2FMKnSscIGOqUBnLdY9BBTenPrE3LMiNtbRrwrrzdZGnM652MZdB7G2c%2FawzNnyWrVBdYhL9P4NgdQEVdmGVtfiHeb6Zr1XvZ28wtjHjEO3SpZhG1Llo7iDhEwablB0vD7KY8jL2z7N7uMN%2FH6co%2BwbjtYuQ%2FZuNhebsvQFlk5%2B2yAt358hVnUOZ2jk4tKbXXk4aSbqL6PMr6P5YboCOwZWs%2BTxL%2F2G30C41YYK%2FcG&X-Amz-Signature=311e4cded38a7feab02753f8c3eecdf17646ff5aadf4ca43fced23c8cabca35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
