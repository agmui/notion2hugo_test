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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7ULD5R%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFZ4%2BY5b1jL38K70%2BtDES9P1Muw2GQB%2FRvxSxnNhJUpnAiAxvoEDeZ7drmuC%2Bl9EgHVk7v63qMJ6%2F62MYybcmHhUNiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCmcuaWEm%2FnORPRofKtwD3luqDKn3NLOgo5TWH4g1fcaTwD5uoNGntzXiS2deRX%2FlyC0lJFaB2M6ylrJs1d7xzMKd%2B4txmvhp%2FEfRSx9%2BtxX9%2BVfyiGCs788HdJFxtFNDxtcePVKN9Co9o9DLk6hCMrv%2BBFEiLoV44PuOrRGHQwXpKp7SNshBKprDUFoEY8xrnMpDCBfmYy2BlsSk1PIUm1bPWlpd12OQCkQvhhg3SD0US8d7L8F7pzOrb%2Fo%2Bp%2F8nstqEu3wsnFsjoPU%2B81bNtknN2ZhvGGqZS4HtmoFMnqRNGo%2FLxLHheR60X05HJUcjKcOVzlXIPNEppQwEKLLfdYoELPQCDoZrgMeONu2DdYXWqfsmxBfUPJItEKptmrPXC9y46kQDPpZRzx6fXOHUhelkEThA%2BMeODS4edb6sHR9fJ1CtUqwmcCeMYyTwxuEpsV87LF80drmDSUNbxiYtysJGFlx3YyahYrD9wDWd24%2BALTQ%2F6Lfh4%2F0IdcnsjSiROEt5Gfbg8nO8yk%2BUCE6K1QR2Ay2Sxx9WA7k0LViXy7A6mf12AlZN5bi3iQxkCIgsrv4o0hI4Egw8rs1a5eG0GGHoxRzIblfZ1ivNrR3Oo0eItALfah34gLkchxYmOlXmpKJaJQN%2FaYmL8LEwievbwAY6pgH0EAN3veb71Bey9Y2FzeNYgJwB2L3VFLhOIztMCk6fG97Zbp%2FiuJ04nB8yrsKmhXxKwHXi5vhzAWkDJLesUHUdsal2Fz539a4gGpmQz9jDSCQ2sCQ%2Bd1BzpbxwOOdnjO6%2Fl7palDu46qzINfdNkh1Fu%2FzoE1JAii5Kd880%2FhTA0p%2BN1j0A%2FpAqnpTN3SrfhxnO8wl08EvFbUYKCJMMA2SfnAcIaNqC&X-Amz-Signature=55fd9a508fbdd3fe699fc43cdc9edee5568642ebf58c89f5907f67d267cf4691&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQQP2RY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDTqVDn0zqWpCWUqvhqP5kNz%2FmWgYyrIFRs8RBVvqtgQAiAu%2FhXoPigJLKLTnE0KaniV6wDxQEvWNWbLwJfVBf1JQir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM9hRUlKO4kEwZyI%2BTKtwDH6x6FHoQBSki1NbVPwwaf4wDK9Lo8FsnovR3RksCMoZB%2Fgv%2FbMQh3dHzHyiRC%2FWkhdoQOts3VzVtiX81TAtYe55CraT2ixXDhOZVfVCa9TqVRl2MOa%2B5VtvNxeJmm%2F8Uw09B0GKK%2BQN15PT%2BNOuv4s6gfykp1yNRXxbzqQ74kBVLMUo%2FyedxkUR%2BJSGwrOCR88anVSTz8JeYJe86ttebE1OHwkI2GisoyeVhI%2BjrrOGQis6MFvvUp0eyJ2CP8sSFofJ3yhxQJ%2FUp8i0z6nXiVTGt5jmwIH0Ivuwjka5tIuBkdtN7URdrO7syHmqYl6Ce9UjXddT6yK2dqncb%2B20EVMB8htbF2VySkdqoNkZm9ziux6hfOWmETBhQvL1KuzmWdH386Cofxk%2BOHvOq1QCiNGEVFFlBHQUcf1KDxMPZC6h7Yg2EO7mFVlUzQyPz8hWP2fBaJDDL66t1UBMFfEOvOpTPS5TUQookAxf1PusvW%2F2vxpgqbrh7BEXMiZQ%2FXCOxne1lxPr8cg%2F2mzUX7zIfIJpoSxVlXmrLlvtTrqM%2FJXxTXu%2BLkqJR%2BOMW%2B6MijJWm5omt%2B6cWeEvDlCs6UPUA21APrEflaxzeD%2B%2Fe4BmyM9BM%2BjMZMGVnlWbYpdkwjsHcwAY6pgGD9ljqC3Zf4kUIsp2uQU%2FgMEYJS1LPCiW0Xy3G0zpetMa2Qqljm2vVM%2Ffv%2F2LiU%2B6eiDSc7CBvNX0tk9ZI1W8WO1k%2F4WXTnwBaqX1NfZIJfXYjyF6k%2Fzejrk2Px9%2Fg1kV5bCw5T%2BMO9Ux9I6psBwqSwKX4iYgGyO60ALKu5InUpOlFmXMxS8xDoNLjLNrepianTycu%2B6n%2BkNPhdzSFdWb2NXiUdAXX&X-Amz-Signature=a7d70973a90494394ebf780eaebaf37ee40dfc636f655903f95a5c5e3af3b058&X-Amz-SignedHeaders=host&x-id=GetObject)

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
