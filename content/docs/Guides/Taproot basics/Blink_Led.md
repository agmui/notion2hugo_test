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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7UD6RQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8dVAQxUJd00PtJbd63ud2jIuqumUYNkH%2BH9klMzytbAiEAhLIPQEh5ivikfDks2wQr8BLKLipt1kgP%2FRbScN7RRnMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD8Xe9InDyWU3q6QhircAxcOZetnHAkKZJcLhYNXjYFgqfGKzMNkNfX2JLoaumC591gPW0s4%2BQUhnm%2BY%2BEMkwdNmyHzlp8lEHJxIjJjOHR1dPwf5tyyVT2KIQDiudF8Z7QzuBmL9if0l37Y8T4SOz3fZyLRmjroXp%2BfUwhDzrfnH3r6H0noQkkGVpMA7o7dLGMUn%2FHyuL83p%2FG0QghWpj3ejmLdywsT3M%2BtAGpc4%2B%2B3N07F5xjxdmoeo0lQDMKhhwKq1USa94sC6oAmVIN5hSyB8ZreJYCLs5gP5BwxggwmX6lQ0ZmC6ymVSf0Zli7JfzbT60B5O6rARI78%2BMlfBRh7oiblGIzVAyIjDvm2AakpYjZgQNozOtZNgHx619HIqUCastBWRm1Dp8I0LIJlwsNYH6UbI6bcmaDVQVKmBmlm2XsDnpJDPHFejJ%2Fev4X2dsnRnGxh%2BZzjJh%2BdEK%2FhJHezBxFjTw6XFKn316fhhRqkJdOxTQxgmBaJgCO9nykMyGZ0xKxV3YdDxQkPn1pDso%2BRW9Wi%2BEH6wJv5%2FX2F77F0iuVdqfZVrvhYM%2B36Y66Y6zzid%2FdvG5wDiq5ypdOr%2F5FwzZ5tTlQsJcokPLopVntwxgTAD%2FIiuwoD%2F8ZBUmc5JLtRGJhX0fNWMw5dsMMGV9b8GOqUBnvl6oagIt7UA4ioEhQEb%2BeONP31RF%2FHodVof4HFqHVm0QQW09gxdarrJXH2NFegd%2BwHnfgGXT2fJUDwt4AuswNDGu7VP7sDI1kmPy00dEDXN1SiAjwwbPs9gySZ5zlG4Azj1yx1SKIooVNfOjr9Ym7AFwGumWuZJjKFuNa7LY2q5maHwUHoOA1c4%2BAPvQhjDcbJmPu2XlEQJly%2BXmQLz2w71REwW&X-Amz-Signature=179cd3a10bd0ea7e8f56c9c04848b79388d610ef04e46416fa7473aef687f76c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5PR7YS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKAihqxEcp28yPeCdUiOy9c32TqQT3rLh5kGxCi4R3owIhALB6b8%2FZ%2BX9bIL3miYIW5xOuyo7Sillmpfu6299iDmqhKv8DCBsQABoMNjM3NDIzMTgzODA1Igx9gLKirhz5lhA8eLkq3APEW6VD%2Bn5xEJXIEP%2F%2BpIjqxNXYfVAATvwqpp19A3FYbXBYbrM1xVOv5dnrLoqJV51Qb1rJckmF96GYhUqnjmNJBLNAknGCMSXmcJAJpBxPUjrtTlXM%2Fnbo567ISj7HSaCBZklhS1FFcBHyijrEHY1nWPArwCa%2BNlRT0u6cEHy8OMKXtqaIrp9nl%2Fe4m5VAVC2OqpzvGsCVQfh%2Bij7P2yYY9bdWao%2BZOcYljUS9%2BAySooYi8ZMQ77TmL2onbb9W8Vsixqh4BYzqkUfdzBHrOYTb2kfcYWuk%2FvEtOLfjlXgJiCNJz45LnkIiG%2FcN5p9V2rRkq3HSsO%2BRQ%2FUXrnt38xB404xN88%2FkmlXI3cF8cn%2FMx63A%2FSOckFPj9N4H1vnDm0L1uUyiBk5l8TYhVksCYQbwUDY5C4KHiMNvgx%2FUK708YyUlLRIPVsjgfXrszEUdEL%2F7sWuLe2GDy7SpW1Ow75PHxDmtgO2c4T1iddfLzDiEpYhcdFHy1wEx2NyQ1TZybUFOdrwbFhikh3GK43%2Ftud0%2B08uR%2FMpDU%2BNaG93OFdbm2L2TEHaYrtrnuN%2FfLSpvHY3AbLlZEFJX7c%2BYXffT6EyKo2PnR9Kxq%2Bib6bX8nSqJwLKq01BD1pBRecxIYjCblfW%2FBjqkAQGO7UazYd563Tdik07VUprEISyCNOyEJ0a%2BohBxbo6a3U%2BtP5esCNCF5Iw4f7hRYS%2BK87i9wEV2qUPauMXW2sIt3ipflID%2F5i%2BNQBgcZdKXMEG8mSMIh53r2WFiCjjM7cvTiO618miQ4Kz4BPZtIqI2TsP0K8fFZm1TbvM838%2FF02u75Q1V5VehBsNX7syiGCYALSmfLkV60rYVBil6WOhrQX%2BF&X-Amz-Signature=9b40f9156389b915d07dc3eb914a165b9ba42c93feec3123f89dd6eb601a2d71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
