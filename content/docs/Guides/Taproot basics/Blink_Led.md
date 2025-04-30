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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6E6AHEZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8iPWqWwcWMIlwxkYxx6%2FEFkfhYDE6Y1zF6uJu5a71hAIgeaHnOzMLsw8k36O65rufcfhQInsVkx1Pnrgx6CShq3kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCleLwzj7OOZ31jItCrcA1H5nXMpE2JSje5n02Ut3269Cvm%2B0e6hBgKrozWS12KEXEnX95TXT4foJ1q4SrF9%2BkIbcNyKXJreSPXm6Bj0Jq%2BvJz7Se9rtjlHywx2ldR1MWfgQG7HqWJL8%2ByWLPgLMsDmZOxoqMSgIaTyNtwvT1mpBa6%2FSQS%2FBitW8k2FYjlOyHHtSXaKTgU2C7yUkA2D8ybJUE%2BwtfQ890V5SxtamV%2BeFqVkq8Z0%2FBW8DzRNUxdxWzY12M3elz4XpQ3PDIjKGS6p6%2FEhj4KCQ%2FAatuHWsfGVTiRPwsidb77Ct2EnuuFAGgenwJMzM0nk1AtWOWC2mEn0Q%2BJIEtHzos%2FgfHdCZlC63ApzIeO39%2Fm7JRiVgQRzXqCvUrW1FjfAOvdCwzMvkna5XWwadtbARF9rLfrre5PGKHn4mAtSbJt0bN3TYqHmjDTpotM1NRkdHiahGZc1A2G96eFYFp0qTw1d4bpKCQeR5BS9SzdL1wVAJKaJ%2FKXylEJHBwb05k7jBcMV5qh4HR1Ud%2BSHJwe7vzaa9O8k7EwOwS9r6ws79dsE6oRpZ4IzxtvSi%2F0udmz%2FoEK4vZUjtupd0J41LdljgAVuD0Ut6mfAhtWNVre2dYXuFf3jp5lGQahRfcSNoLE%2BZ8URTMMOmyMAGOqUB2C9ZhqOF1TQM9NqoZJxb%2FmpIaxSUjAhJNWYi6FZAk%2F709QaEAekuYOufNp67exEkeBVd6PfvLLfdc%2FiRBKYs7XYlj%2B%2FOFvRT3CYewjd6o0K5N3zFbGobi36LwZQOLjCIWojPLrMZdvJU8rW8F9icuRjoI3oNBYjTpVffxbATj7nnNzNvf76U4cLLuAt0pXp%2FMS9CKJrLcwkZkr2Xp3zhbX22j6O6&X-Amz-Signature=8bba5048d1be100b8c9620d2440721c3b1f22106aaf8b904e4455eeca658f73b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVJ5M72%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDm5awtXDt69l3lp2%2BjGhKabHLvSl3AS1fdcV8cQpkQAQIhAII49DYHhy6NkzcPFuMSxwsrkBAcIs2i2z%2BgwnHz91SaKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFludXO8a33fydbR0q3AMuCoDgjhn3isAQ7s0mHA7vREAQuXdQr7YPGARIZbqg3qF7BBfBac4lnCQ183Z4vBpYx05tIwdedycNWDKfjP0gLMzdGYwFqv3r9CAG1u%2Bn5DzSG0mYiMmL9r6zppytvDtBhhg5tyZqwy7o5%2BLPc4z7giKyYXGC%2Fpk94be69oxvcdtsbquuzbsbiw14P4KFHNxyq3kty45%2BMpFepT1VInJ2a4Va4%2FbVlVfRBO1yeTGA88nPrZLUOGRrN5kMb2iVfghU%2BUFs48CD2RK9e1h5XAn0uQXMSbmk5U0G5rNKHsakXJFPYffGy428VFdb0eWvm7JaypnBiJUAL0ymdeRx50yVVWMPeLyGdOFO0NGXn6O4r2qnW%2BYoVYsffUwEQ3h%2BWViGS0jwWh%2B04bU%2FCCxijYBuS8iPBThyyXaAddL8QmQ9A5VxwhBCX8HGo9hFkBn9SsY%2B5mQ6quDAXDk2d2QQYBzpIqQ7Fg%2FrukR4yRU%2FgHIS38iCcbXkp4kFgxwE7Ye7qnQVnBQfVYmpwoKenhPIOgNTZcSr4d8Co9N%2FaR99hSLCFJIjpbrIZ25CXqNuIt71plqcihLtVjTdJrR4x%2Bl7nykz4L627Ye3I5cOfYVk5ab2Slw8dEXIS%2FjkTvVtgzClp8jABjqkAa40fZ%2BjEV7AimS6PxQ%2BcEXl91eDA6Bg00SVqo2bYRAC56dUo7TYRh0SEu5NjPBGcMWpYxFWNggwFpNgCt5yrUl4ic8Wwo1qb5s%2FigwqvtzrpOFVlVfDF0QOcx51GG7RTJz6gLSNJ6AjR%2BRvrysHcPpYeL2HR1CQICwn1b74%2BdYu0eFSkdb5g3uXZ%2FxPyULy4E7BlS%2Fc5WVOGJbAVWU69Msd6k5P&X-Amz-Signature=f1b679113c673344610d3d74d98c5a8caa82b8c74e0ea7bd380ed99021146cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
