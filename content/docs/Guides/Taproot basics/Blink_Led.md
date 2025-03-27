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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6FYBBL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZM7IMiHpDWfqn%2F%2F%2BhtHKnDdQXutKdxOX1GwuE5sGToAiB%2BdLqSVK96SGvp2yUo%2Fd4H6LPSR4jdeM2nraYI5LSjaSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMGlzMno4Z8M6fW9TDKtwD%2Bq70r9QeTH7WKVoUvgQVYhmODDzbeaE%2Fi9ztQbMbmVClkyxGn2qZS%2BY1h%2F0m5qiliDjob%2F0a9ZfzSri%2BlzCP7O4dZlcb8xhwRg2AnfzhGPBa%2BIPuiz0tP0zeqGKhWrPHWopZSRukfphEdTBbmcJay7soI0nvRn%2FhPi0F6kjHHLFpLtqHZygD97q7yE1vw3IZLWnFxZuP9JaBEacggi%2FxqE1%2BrI1usFfzEZbb%2FmtrRfMU0WoqTUnLgxKUV%2BIoNG0b048L1dg1j5UyHiQEGHLUrOJwZWePLR5cYhuFXGmQ4pTLyaMnI%2BGQy4F%2FfYtdNXaMYeptT9xlpACKzF54X2GvvP2UbcaIax8QRIU9GvI8T%2B%2Bgiuid%2BYmoCavgQ6lLcAE%2FFxVNsfPvgfaPEcvhIP3YznFUi4xjZeIaA%2BraFejDDCzPEXHsVeO3MXz77GLfgRK5qPwVUWbqz%2BsXVOOn%2FCD320wKX%2FmTSHmIg7l%2Fz16kRbfR2XRMFPb7thsU6LoPsjvY1Nz9za6RiQWqUCiRxv5NDHmqEHDTWKrB5QBDMrZTlLhn9s%2FdwvpwuDtxVxYjKbAcQljRFmcFU0kMYRjZdx4jwgATtIWT0hBRBpSv0mPYbjqBxNY2yXaSpX03Z0Iw7o2SvwY6pgFN0w%2B8Os7lwNu3Q1vMCBZH362dHanYRK6ENw4ILb3%2BbJqVu18WKlBxuTTVgf8rFsmG0LvZrZaSZ4gf3pdu4VrWIML8dtSmTm2efcMnT2KWNi%2FiaeDybRS1N7ZAUNI9U0cooFDnQGXrXfeM4wNWHESB4DPeMadKWhUEfmQt64Kb%2BnVm%2BzJtAQy7I5rS4BdhEBX8PIVNQkEfWQxhcAOvTxxlUVcNo8PV&X-Amz-Signature=85b9c9a622b275180569c0b75ded322e61ecec348058c76b76392d55e267c502&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XPQXSD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZmlRnn2w%2FZ8FSNv6U0ATiNIlkRTG0EydZbdZbLqC3vQIhAJXnbyuM%2B%2FB2NJvJXla7R42RYLsMcFXMwMJ1FZp%2BFiqnKv8DCDgQABoMNjM3NDIzMTgzODA1IgwFK4AAoNq2T50StI8q3ANoXiIjJ4mfjXyX%2BStdGsx1FaQEhyBieHxK0bnlBoz5RmxWLzIlaJ56b%2FB32XznWvbJtogkVgiX1gGHU7bnt%2FmHW5HpH4P%2BqK2iTx1YVU9r9evky7PyfgmBlS0p1RwiNJk2A5LL9w6XPc3SoA5OSWummtEkSFexs8M%2FpQK3IE00Jzuweha82K%2FRHni5iZft7KF5G9mSbYFldmNSMPCbMUcB8rSgpbZjyDnW%2BE40ACZ%2BdQlutkmO9drLSFH4MkVv8meCelIKtpLcI61oPIZ3f9DzteiRk%2BFI8anSheZUglKo2sWFvTRSkeSZC1Vl9Yi7GIcoNbmuiSoL1iuOjA1KeygcepYHPDeF%2F1p%2FpB51UcT%2FKN8AUXVt3ZVR6S5KatxR55CJpFkL3GBAfcIeiPooc%2BJPtDV4rObmyn1JaYN0Cuk585cLBVsVR80uuDvzwqwTwTUKvPuOXIP5bdKbzBn6X4qUeVf2rEe5FJAMODWuoep%2FQeENyz7ADVyJFWKSm3gnPYJ%2BdmqTx3ENrtu5dzB7dpy9M1p6wJeLDv4WbaBeChU4EKJ%2B0My5Gag8eE5XvpcaMjpEONCR8hnjQTc2FcQnDOwOdFSExIkiN81bg9%2B4fiL7WlsEveoM7nXfGOUJfzCWjZK%2FBjqkAZPKtnatAabR%2FCVouCCsPPqPUDkbL6xepCSRPa4Hryz9VYKO%2B6s6FLO0K8Qc6XgmWNPt0vjEvYjC1K5DnLl%2BrzRBdN44fGZUuHyyy0tWVuJ0XxATvkR445oObHkmOiE1sDUfBo8isryRbwXQkKDZDBPW9O%2FpW0BpqyJb8pY3TPdwhJBzC8GcAZqIknWlygMesneEWD7dYHwdqWAxTZ7rwSn%2BAqHu&X-Amz-Signature=2080c5492bf504d2cb655747be6fb68041631d981b657b89c9470ba0bb258341&X-Amz-SignedHeaders=host&x-id=GetObject)

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
