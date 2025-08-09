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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC267LKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0gzacIi%2FrdvLWOKatLDeCUpSLBv6pFkvELdInyjSxkCIEP3Dq%2FMKrIhsv5fmivSy9mKH3RUNBONciqq6kFjpgK3KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrE%2FNHCfsrExBb%2F%2BAq3ANfQwzUEWrq2SYVEE7YLxW7uhaMCZTnwzwtTqIcydZqq%2B7UTVHonwGxJvq%2F1CiK6Rsvgt35KK%2FURRkNYXdXOHY00BA7MLs%2FI6T35ZxQTqOXGp%2BoP1bcLC%2FtfpmgG9V1BMF7L8qRXyDsKUa3xGAgEi5NM7aJA1uYf136hLb3vCc%2FPXXJ7kgxS7IbgctgX5Uuh2JSh4Erugt%2F%2BLJ%2B7x4KjQt%2Bizw9reytQWVhKgsBPuwKj78nDwKoGMCyUZCcT8jqpXZiA%2BMHiXZseacThWN%2BzoIEEOjoUmLCQzD5Bchh8dxVubUzGXGyNtInxk66H9MXSK9BO47XiF0AjdK3GV17kLCQ3D6AjrG4tTiGtSlr6pf2UIaXAaY9LdW6AhMKmSlSq87fZsMCJ8zujnb%2FCEuEaL0qeqRJFXqirITZgDwSP0k2RhsDR0bo4L6CNh6n3DV3CXnt9wYetupuG57DcqzMlPlret%2BRqUGp%2F%2FYztfg%2F4pb8o8pK3R6xOjHQDFkGgSLQzX0t9mlxiqsKZwqgYPOmoo1FdUODHke2ZjuBybWJCj6zNsZXWnYPwjycY03vG0bKQXt60HlzCLRG1yvVk4jB%2BcPP66fqrHbUn8Ax7TSt2VOcjdYqVvm%2F3B6P53CqzjDvit%2FEBjqnAZPlUixBBrWTPuCFVVnIht1EA4kiU6ztbnx8phutdL6byFMHGh31fPEp052N7RaPqYD25qMFxgWnZOuhUP%2FqChBa6CSWWF0W2FRrkzUbvOys7ByZi9aBNOMNv45LEFJ8u%2FhyXjxZwtdaWppx4UnE2Xultp%2FzdwUzEmGx3V8Oeh3lsSK4748YQuHnQwpa%2FKEzUgV%2BkXEK4XErPcw1lg04c643kU46ekB9&X-Amz-Signature=f7720e9a5efb61aeebc38aa11ec17161bc6a2d8a9833331d8c0a58d58c29b71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3MR76V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSohXwJvmx3VzoT5gDeO5MR75my8%2F9DI6zYxT%2F4ZwcdgIgQnUHui%2Bynq0MKA9B0wN2Hn%2FigEVaVjRePxpLDsI%2FdvsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKELXpnRsNqDPqH6EircA4LXPme29G4QonWVu90P4VbFj%2F2aYTs7%2BcF%2F27WGRvKwJUiTa2ZqD0J4koDjvqsv7BQxiJGyOCWU%2F0cEna4%2FWI%2BG8B%2FSsHQSCjPrQGEC%2BlpNEaWNKr%2FiPbeqQ7%2BkDrt0EiXO3OyewPqPIUTUUFg9zvZe900ssNVGXuy3j0pM411l%2BcCLEmC%2Fq%2BXL8HV0mGl1VMyd%2BifMs9qFMDu1voVPXPx2Um%2Bf5X1H5ZShnFAGmXDg3T0R2sGPneUG0w2cw%2BPKo2v6dY2hOydG9WJ9TxCiVMgOCprmu7BjTKJ5UO0lyHd631k3O7jZ%2FeYWb792W3SoycDIvaRza20nLpGyw0BaytJ8JEuwXwrQiPWSM0tCcrg2p6g%2B%2F27hZaP%2Ba1NhXK1z7O24i7RtJmH7jNtATzt6HRgkwwnueyHFrKP5MjzNRieHblniOyme666K9hrjccywLkyAImBnwaWqqW0r6pGfgCq5iwqeX5QA8raJ4MMk4IqrGN5JJkU6XJv9OQ5PJ9LfkVLBiqZc4aKPLL0M5A44%2B2GVR4bVqeR%2BJzMx7z%2BNBt7sNZ%2FS5%2Bozjn%2FtRCRsj0rNBnI6%2BQN3oNO6RIqYflrrhFtvCmcouuMAVRUi59tRcSZQTjDskFHEKPOdWKzOMJuL38QGOqUBHY%2F3FenbODLvLyFlNVnA5LKHONXl0s0UVdTJGeQ33MjkfCPjVWYrd5NKYP9JvA2jE8MioeGZgzg3PODpppZarRqKezqPwVpkQUZ%2FtvPhstANTpARwB6usfkOA6M5KILSTl3uhv0NI3LvkneNizFd%2F5Y4yqdgH2ZiM8QTkqPBZYSxIwflgPF4TYNnaD0Ys6lUopTWEJFpiCs7huESGHT2intf5%2Fzh&X-Amz-Signature=78897949476919923caff9abb505edcf80773935db424d4656e28cb658173f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
