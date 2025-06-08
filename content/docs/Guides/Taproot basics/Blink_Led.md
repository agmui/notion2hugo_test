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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FCBYFEO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9%2BlZW3FgihS06Bbc%2FsmwZmK3DUwic5SSY1yg%2Bv34VuAiEA%2FI0PAaIIi3u6aA7bF51S%2FUlipW%2Bd7DMclW6hdpURDhYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJs1G%2BGtTBMHoTpqSrcA%2BBUsylGN%2Fs9TQXkEuIA7qaISqe0k23Ju1WmKAE2GLyez1R4BnCCFOUzbQlbx3%2FAIfcSI3QNQ%2F9kA9NV9EPM6l%2BUHFLWTwGetUkNq5qnxjYQirVazRMhjjTDs63U8DSJqTGfj073d7%2BkS10DsoJHSXxXWVkYE%2BTgZ%2FFeUbxOhVRdsHmoZfTwpi4nKbVMPLC9CJI%2F6GpACfcR8jpXe8nC1%2Fs2TklplwaOwRdKhUb%2B09MtRrvGdvyJJA%2BFoRJI3qMLmdMWLCQ0h5jpHTvYL7ybrS135QVYzXC3acHt0UHAUdXQfcov3aGLpyfC8XPMwUYVCw7g2ZliBw7zQGp9EL2AlLJBLQP9Aqry7kTc2Eq%2B78Vf1GFBQPHnf4SB4ELJNh4v%2F40Z6wiofgvRtecvJjBbUZINfL6F3XD%2FKVRtT4IFj4i7aNjUq4tY2VagmfBFuXPPLxt7jnbtoK2Oj1uvxlK6gYQD6WTEisnzkZs70dlKuitHFg0KAmpUL0A%2FLKiXqdB9tAkck1A7vsiOE%2FZ9bsK%2BL0AW0EOlgqZ%2BrGzYHSFN7lyjc1oSS7yV3%2FoRjkcUeqnQ1IZwazqct5ge3B9KE3%2BLFI77VmzfozAiOLpOUzwGKGsx4%2FPWgaQyA%2FkbxUQpMPCwlMIGOqUBUfksk5Z28HH7ajgB7nNE0rpfHaSjwTms7ARByIPt%2BByvJfXf2AD6uNlsRzA%2B4PD8M1geYqLTJDZKNXBf4mcvGvU4QXXsClo5h0gFNo49oWb%2B5BH2Q7O5EIlQSFAjS1M3eGN58F2SSuz6MC4FJYmaLZa1el8H9rs3fmnJQ3%2BCuZOWsmA91ZSgjOtLWzgVWBG13jRne5UN32gaOsQZvP9Ry0ssa6R6&X-Amz-Signature=83603b8ffc4a2bfdbbf7edee714e2f4b49964593f391ad9030170ea9f10f4bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BEM4UN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaEUhYr%2FfiBflboNqKMRbVfuA6gXTmSTb%2FtBtMzL8I6wIhANuQ7JLvShBwjqIObinRIxQqghbLnXbsuW2mv51W5h5zKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPyTGD%2FB%2BqNMMaL3cq3AM42STZPogoAUvHfBLc3Udllsio%2FCH%2F7kFpOTDn4%2FRyBKuGsRI3NtQeOWkMHr4bH7OKRlxs1Bx%2F%2F9D8conv8NCNmE4jJ0FIBeTVw1i0XFYZtGRJBysbhnGYnfYvzLxpc5QLdDrZQmhaIQf2167HV9iYDzwlRhQTTbZ%2FTW2GpcHQYvio4mo4O7Zw1AxfSWoyvbRhaVtY3L4WW0nw0NtSUqwCIAB3%2F%2BHg%2BQ2jrF5GqspdsuvLfV582T2DlKHXiM70wTm26KMVKZEHOjL9U04YgS%2BmYNmrDq6X6fT%2FIeyLGEzvCivtTwWwoFuEJHnZWIkQdsAonyX9RIH%2BtM58nqv%2BhMBVrR9%2BbcDqy4F98BWBnuzh9LAfR3Yqj7YC71UfvP8vLNRjDTQQF43aykWbD5xzaXM79QPYdzB5tgaKPdy9JwQgiKGQTHFee8hxrR5d1Xn6pLpe2BYtMNVyUcJQEe%2FBqJNoPvYEYVtxOeBdCQOZLUWJ5eStWApXjJcvejIgi9jfSgecDUnGITkICQzF62ptpIFW2nCay6iXCS7W7%2Fn2W4sxB2I3DswCk684y4wnX6%2B6IjCAVTsONtcZBpSKsKhN563g9KINXMpnskz45NbIZMP0VRjQMIxQbr6cJ2M1OjCfsZTCBjqkAUsSnmasZAnL7j8FU34Fb3gXZ2M3Iw7PoXwzZfAFizz0ACNcsKDEeMTSLEqfl3mhHpeJgDiHRLvKPpgAB0QjY2NGdJJgwxdYDENzi%2B%2BlYW%2Feb9zJ9KME22sL4N20Lp0sVlAyADYxznjhqZzcFUH0wmnl9WIxVd1wH8gz8qtN5AQMl3L7Xxr48ULRDAObRF2%2BHhfiqMoq8wNZzNCkUS7McI2vuAaD&X-Amz-Signature=a1f7290a7013b4892b67ca31d5096a0d02c0368cdf9f11705a2b2e020b889598&X-Amz-SignedHeaders=host&x-id=GetObject)

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
