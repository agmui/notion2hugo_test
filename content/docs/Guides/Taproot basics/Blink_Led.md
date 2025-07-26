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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZOD2VP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDkvpwTOvNtC0bXAfD8PEwt1bf%2FVlIth3GYj7ywipM3wAIhAO8evInclnON3g%2FCguPANan0LMzLrhUcoBb85MpFBmNqKv8DCF8QABoMNjM3NDIzMTgzODA1IgwxyYOnFGJO4uw2HJQq3ANBGyFRBHk1czuTtBcWWGnzxSzw7qN%2BocwMBhybpKoc0BayOAILbG8Nl82d6Wr%2BQB0aoGD82jjq0oCvWFwrwaN1wgkTIC4YdKk45T0nEPY4yvKowZon5oiwgWP2lBbVkZ4HzS7x5zIk077nio%2FkYPYNMyJX3NaGW7Z5K5l4qor%2F4WpUPhI%2FxMbtg4LtWgnqE6OtVjhLrKTeh6GH8IR3jZylRjZxpCHPCrgczBVuutaLF8VFSFhPp8eyHHmtNdseus4CtcO6QrV4%2BVdeKqqzTXBj7nt2bjW7xzbW%2F9MaGfledAu9H%2FCxMdTKVGAf8d1lv4IOc5qHUMiFsVKtuxQ%2BPRoxLXXtTkI7MSjKqemNmA4%2FkUO%2Bb4TBm%2Bad6sKyrTOJ6%2BYHAQYFsJn5MEehGkdYr%2BH4FaljTp7mOfOAOUp3WOdHSHZSCRbgU%2BqIef6boTPitXEECiV4VZDoqKZ0hyta6Js%2FO4X3T6bZOWDghGIOKnSyEmQAvn6fDd1JppDHftZBzK5DaP%2BUuVszeuODmzQZy4Hsscqo%2F7tNppaTo%2F9SFqDrxbMrLSY2Qlen0PbBfROmTJamwdwB%2F1wBDymCiHGL2JMINygJRw1pRKxy6nBDUKQCyWkg%2Bq4QTrHHiywaZTDIwZPEBjqkAYwVUf4K1E7I5iY94%2BFtK9ERD6hnxac%2B7IVGxh4pQzCdU%2Bgw9b41eNWmtWl6RvV5F4GRtCuanB4uvYDIlKaDio9rwUzwmgB2sF%2FjyD20%2B5bDsBPDLMiZH7yrfUkw0u5%2FNIw58VNkW14ou4uFxwMVpWli4RAkxU8T2wGTdMdhJYCyAszQkSgXwAeg2%2FBiQWzCxBoIGbPXCgqeVsIAyhDy7PILBJyX&X-Amz-Signature=90e201499ea5cf26822f3fe793bc05cd39ecf6f1cc3c310761d0604acb750fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWWWGWK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICQSWEYNgT4LPz3JSfXVyl7ycxQCDVttFOZYMOjgZnCmAiEAiH0yeqr2FsXGBe281UI4pM3Bvf7d8EZ8T0f4QRGjxqQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCN%2FdsQxdwGKCSk3JircAySZ9PHevzTk7UK2LlIQdahlMEwJKdLFlbRLWrfS4rPycuRiVHTt0uwQ8%2BlGhSak2aeFHp72z9%2FVkoIAfPjbs%2Bl%2BdmF2JObOpBCtDX%2BafFIBdDKQDnge0KPMYcKstFJYc%2BfJ6S1%2FXRfcMPXH7oh%2Bmt0eoWhcpLXVRNx6ZZp0kpLUsmwihBC0oA6cWoC0PPe9s2sIgDyCIBGrTpTLUyWcWIaMmfjhwIqXZlW6VyEIB7KKAw%2FC5SlxsfJWe%2Bhq6Re6TuE6t3OecznJxL6jygixY6CDjqp1l6hG1baKSR2LetXv8PRRU1ZN1BtHXAEX4EIZdE%2B1B1CByfe2gixFr6cXwjLs8slSD4e2bj%2FD7nd6%2FvphPxU7WulWayaUS7VVdZNX5mtN8K3G6JhysEXcN4g6DLpCLQieWSF8%2FfQ9%2FdFWC9qU0DLaYRkVR0PvgSd8CS9GfnWZAgE%2B7CW1tfOBiG85cHxYUJiPpT9kNwaP03vOJJLK4Z%2BTvP15FS11bJQrAFSREgeByT7iuOdZd7pvfm0hJpOrJ3lFIA%2B5La3aYTV55JtCmquhdZ6zOH5vKRiHaRr8dUDhhDDuKapxx%2Bd2bXKeQVhp4Pv5AT5l8YcpJKZvqAC3zZVKtlBqRFjKjbSTMMvBk8QGOqUBG1FOBgG9KLnK4esdpvyQZgnPiGScTtN9UuhluV58zm8yxTCu9O%2F27SdzluaU7tpkNAEguL1KHxAa1YHx7SoS8vWHGv44QlhQqL3kFOuFB2FFAOHSDi%2F%2BAEyriE7F7SucJtQ1IhfIrPMTEG7TJvKIoA%2FTUs9oOxQp%2BBYTh7ITzkqQ53zHSwXdLBPH8E%2BWvVwa3k93kBE3F2%2FIo6lmPCoBLhOL2zoL&X-Amz-Signature=74e4684bcaf918e93d022f433ad7d996d131b5c7d4ef7a1628ab11068f066555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
