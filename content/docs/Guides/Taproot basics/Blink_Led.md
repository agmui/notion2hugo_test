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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMR6P53%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAyxjima7m6M53L0AMqR4qxMqInQoxPdDuVUJVV%2F%2FZX4AiEAgSu%2F%2F8RVuTAozYUCSYw6fsZ4OCWwnry4tOXwNN2%2FMKAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN3nJRrBz5clxKCuCrcAzbaZiVNr6BriS45Ge6I9pJioyKAfa24xTzdrFNtyQGTtCpXh9bn6b5eut2TeTjBNpyfFKyr3pcc1c8wfkc8%2F0bezopwzSWE2kAv6%2BCJ3KOmD7zieSJjYEXeBut58e1ZLZBOPfZXMoEnE3Ssq8Ol0p%2FF5aIz0TnWLI237aaggz0arj0u3teiZhlH0OycICvmnXHUfjcVL52fONad4E3jgJ9vuRpheQ6JGpU6Ph11mLmFiSRqmLVwlvL8DbBoVkpQnBJuKJvJ%2B%2FjKbI4uPdJ5Usdsn7o4vf3iJpi7r8h0toqUU8OZ8d%2BNExB7m2WTMoeJ5JyfJWXXelEPHPyK4ACaSyhLSNONyElIs36PTQOW7AZj%2BTLxiDnTGUKjCvQIfV8iRqHfrftUMehr7PNJ8IgJKFTSsa%2FzF%2Bohi5%2FupyioIQeJHJkXS6Cuk11VJjoYS0fhwURQdGP%2FI8vi9d6Del92C4F1mRTbz8j3URMZ6HmYMiJEHrtsTXEV0VvG08vBjYIkfSRjt5adHVL8%2FPnO0NRPjKTuYfClGT0gBOl9ECYw%2BLTzaM1W0sRsincO9soBPRleZUIfJ4Klf%2BNJxnSq2xxHv581Uh%2BoH16MXGJ0qTR2T%2BlFle996Sv2mGa%2BtmcWMMGxwr4GOqUBgetU8uNfKldfDyGPmYBFoMgQlpfl%2F7H18Glaso91r2cQ9I4tsmAdvH3KfAs5RGwd7qan40JRlZtHo%2BzjJG23tUfsdPUBbUCO07MLtWOE9jpuqwGwDDmZWA2lUULUhJci74oGeOXIbyr6wEiku3Cd9Nft6%2FDbUV9WIZN3lRjvD0CTcimOSYnbfhqzNp4UdVwjyGFLWSs1DcNFZ2MsJhLIE1xcf2fh&X-Amz-Signature=269afd273928e244e27f43999bd4192b09ee65584cf5d4c19b165d1b9765bee2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYHJ53P%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGt5sRmObp5eB7GyROg%2BzJEepPyfRqgeeFGGOguFxSHFAiEAsDEgMmlfRLhd0iuhKNTeyrjy9XN4PUdgk560iocFZB4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpRgPtnp0ysqe%2BGZircA1z2h8M5I5F8x3JbnZRNkQ%2BClp7qyQA54Tu9vtp5pgBrWgVynTOYi7m6jl9MtoG1RCZ3K55gue76yDfa9zbleNL2X12G5kC097dAWLGDzD4mDMhPXyQi%2F0pyYVoHBpQ10NJJW80t158dQoVT6A8q1s2wWS0ePioja7YCapC33KY%2FGLyocOJTmzNZMFD%2BIcYSx6NxmJM7O3DCOQyW95Bau%2BzmTnf%2FdycJR4swPxixZbInGd4Xf3Jtq2436zXQV%2FdCeaST6p2yPObPXGWRSFt6Ms16gdXzE85zqW1oCCI%2BO8C2ZSMQZFh0MbqKKL9q%2BQJ%2B3smnGiYAMjJcGnkNyAdV3cZJVIdgf7Z5vIuGOeL4aZ2L7KVDOXp%2BYaDGemSfxnHNKo%2FPuv7j6AC4p5Lk1Q%2BcXjS9uVLMSRhrgMs3sBRRXLUotJqOt7z2qnM3%2BXmcf0FcWx5d0se35e1%2B7xbHg%2BemxDHrEw3dq4ttw0cHZORqbZkSpdQXQvlzgETXiu5I36nD5ucnwbZgz4TWyUSlcH0W6rtul1czAbA40JYSNmY91niFrIGar70GbYhSc5dFJAiq1BknA15fwA2QY0wXRAZ4HXxYkyWuqbbWz3kevkIcJafftXj9FArSipPjFta%2FMKexwr4GOqUB4FU0ZRaXv9eDApxjQsX1BhGLCidYLx%2FCcKyY1K6xQ7DZH%2BbS5ZaxOj0lfFQvYGQl1%2Bs1qhZC1KJ6TtTuKKJa615gPxrWBpGuf0SF7rLLyKYp3ouD4pHd0UWC3Ute8b3ks6lwpdaJP24CYHfuMGBXTf8xAZTzuVEQ7xwW0vrqJJ1NCWtrtc5Fh%2B02ZQQus6TGdN3U9YbqvWj2sZXCzVPKeOtvYKVS&X-Amz-Signature=771917bbf8a26893c08f090eae96ed82a9c3572d1d1fae7aa489349c5b14c2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
