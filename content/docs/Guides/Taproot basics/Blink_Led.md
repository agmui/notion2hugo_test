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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L3X5GPU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KnO35D9uwuYgcGDj9wpe6Q276FbiBDzTaD%2F%2BGzjr2AIhANI3td8SMIPompyAIsGiZYn2jIezCEkMjRwB2AXSO5RlKv8DCBcQABoMNjM3NDIzMTgzODA1IgxiHpL4O2%2Fwz0xvu%2B0q3ANIpvTFQSlpGVww8RbA1Ao6%2FTDJ7AdpG2r0T0q9TI6VPjb2PSWt8JevLbJ11Y%2F%2F3diFbqbqOvtRzp8G0eIoiE3h8yD9L7Et91rfdAZozxl9ZoPLNGUSJUwaUpaGvMT%2FDTlCF1aYfbrC2dvLKq3hvmiHhh0vqyAhyUC9c7rHJc%2BjjAQEQOLjLnub0ozxseTTREKZ0NBnGXCb8kAdsY2zcFaGHaePtYYu9Nqa%2B2xKkRw0PvR4313MnJw4b1IfKT9uRkL0Wb%2BQzwGgFSASV4%2Fe3qeaQ5Yq3%2Fd35cQ6G0%2F2VjSpvJZk7uKwjVmo0UWMNd1nn%2Bk%2BMyKQdtr%2Fiv0Bv4c61jYQJiUCjKuTrV8cpzYoE%2BcD6fXLOnP%2FPnN4Oe%2Bow3ryNFYymKhKJMdP9JeD0gOJAS0kfnmsk5BuYNvpZV5ZObTGfB33RXRb1f2j3YhVsTr6yC%2F6tziG4GRUb905bX1dWNzL1wiOJYv%2BV%2Frw887EyJTIZdUYbcB044oo206LDqfH3uXNSrnqaZxpNBoTRNGCjKqK8LwHxGS9f2xelbmVjYdDurCMvvEJpLdD5vUGE%2FxiFaXyMUBb7svC5VWLxfJu%2BZByOvJbKcEcs8EVenj4No6G5vVeOloENR7cF0RFszCJuaG%2BBjqkAbsqhDqctm554NjqoJMqNnDTljEdl72FHG5oEayeUgmRfpj%2F9f2O9WntsyKqHO6kaUjpcu0SLbxPBD%2F78TVyGwP70qj0R0yrpWqK63rsmqbfZzEKcwbLW5cHgeg4bb%2FMFCwVbv6FMNmrcFhAuI1hLZfUOoHBP%2FCSU1Yc%2FVo1N55Mx8DeGSAZ04JyOOjY9H%2BrCzWs%2BugQNu9Syrkn9St%2BpuruKUmx&X-Amz-Signature=bf6fb45b717b82f62dc2aadc466e2bb440a012fbd259b1302cb8e42c5101a811&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STM5NL5S%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVGPEa8anbfIPNL0qJ%2Bih4WqEbwA8N06XCxuUTrVSZlgIhAOWb%2FOcMZL0PywX%2FSMfGqNqwJwWGvwKox0juYVh22Wv%2FKv8DCBcQABoMNjM3NDIzMTgzODA1IgyJ4NbTvLJ46zW%2FCIcq3APyKSsmSx0O8CxEW3G3cUKCuTYI7IjxQSfIKimX7mQP4OhfWCgMMxw4I1kLV7vwHuphO%2FvGdl89dyspG%2FHFsnRKFGsAKCBP2hOFQfHhEkLOGwBbVt86EE8%2F1PQ0gEuhheaKJgpFcpg7t%2BYFm6IkvZNOuVUMxVhHeBZCZ%2FOy12F3YJqJNVEpdnhJ6MUuPu7fSM4IiIaoEBBys1iJXUyaB596SepVgBo4WU6XJjSB2w7AQOjJpsVtXD6YxGGIJoGiYW47we9%2BNmbLVfRNp51WAP2WlIULphmbWsuL2NZ6xVZK6CeOtAxXdaYVYANKAT2jRaeqrz%2B%2FrTh%2BszOkE8WAjRCHnICmr5cmrtE%2BFbOzxwwMsk%2BTByqMvwy0hPX7WDeVoWPf4asHc0%2BsmEEGxdbkhZOudPrFObnbsX%2B0vf8Bnl3wtZ67WEDubgKWZ%2FvrTVojJEcpqbMd%2BPEJckOXWA2UpT0sDFlAPbIhxuv%2F%2Fu1UbgNZLFmntfoJ8hiKir1RfHVnmc8qdj97G375%2Fx2m2UIjIAhqawkkWM4251SxdklB2K9kFcamzmIob3e%2Bx6dYFIEW9bKO4oGhNGPSrRdLf%2BJEyrNGe07nQGEMFrqmK%2FxB%2BukszjRM0U93SMJXbSqYkTDNuKG%2BBjqkAXT9x8m2fnUQ8yuNxCxfH3mYe%2ByI6m7FehYLOtZfNZmqzVqKQOk%2BXPNtsVSxsZTJN4Kk7gyCGbtDSOluUvlFSNdoLWm%2B8UawRH1pCZozzCXdiDQo9UNaxaPlxHFAaIeL5Jjp8kjNAovXdmkro32zYCq33gR8Ybju%2BmkGdp1CxSm%2BmT29Swfc%2ByR6BchTrQsXTRuc6S%2FiiVnJnVu7tHyP9DaZ7eRn&X-Amz-Signature=d8f82f091d9ae64a8f8cf7aa18f59ec831713fd306016904d4f3c85bd1c66822&X-Amz-SignedHeaders=host&x-id=GetObject)

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
