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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5TSECE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCXwR4XudpdDtNdgFGeB6EFWBg%2Fb4BUQBDTp5DNSZdzxQIgeNbBja8EoqFb7f9IfXB9t2R5T4lacPynzNTo8gUZ440q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNfoYhlwhO9qsBtXbircAwjvJDvHJb1XRiFc%2BCcrYRJD%2BecsiYT6NTysAUye9rUFSDzpPab19BvFAK6e4KDwKMYB5l0Zg3gJR9T5x2z6b4rip7pTRuefK%2Fz8gOshlzF9raeLI%2FnbifoKiUeQMz%2BCJA1YimLJq8FjqBSJd42cYBOrYcCPJqz7bFWH7EMZJIj63fu95vpBKhyKCYR4morSPRiYVQHBYSXXZiBCo%2BfgVCxY6G24PtiWUlI5ORDSLbFbRa7abJ50QFy9He%2B%2FQYPBKvpHeuL87VQx2eqFGzAd0qvwztgGgyKFNwa9NFmD8GR8meU0t1GCKaWP33lTW8%2FqFJgp0v7Ezpi%2BK9gGW2RasrYqcuj9z47VaOoDDD7p97vCd%2B%2BinbULNmYoFICycznUyPdCv%2FLj2Fn9FggnTTPb67%2B4YURgM5XoIrarK4rTbnytmkOiKwumImRJfcsXItxnpeSYAQ%2Bla%2FjAem00q1FtzOKqxgMPDACMbogRbHcGxdpghCbFcZj7UJeLUBvLtdwzmcIZrFjTL7Y5XDNOqrCp%2BsR9IYNKgyWZcQlPw8lWKhKm%2Br36p46kH1lkmLpU5COUWIxoU6IwWQEJUZuc2ryjqW6Nt3rYDSN5IUs9%2BCvbaO%2FpOK557dQKtAiOFzJGMKzUmb0GOqUBERHJr5X139IwFyQM7g898pIViwgJsHm%2FgW%2BvttDymYYRP%2BMsL4ZJX%2BHcSIEmxwlPi07Xr5CkCkpVcEOnJfoJpz%2BG%2FM1OkKWIaVcS4pq3taPoW4y3eEAdaW34fErLo3%2FM8cXN03SBmkA3%2FYyTigFgKs4SjRSgRcegKW5JGC0TboRT9NhaPRZDP8k%2Fus7432K3RjUy%2F2riP84OfTU2SpvHXU4wdXmW&X-Amz-Signature=6dec512414862a407e6697d92f49afbc3b7efd894a8103e52835c15d0c71e94d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLQES52%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE9Q0G2IS5PnF7Q8ah8HcAj3RhjvQvm3vbTFZlaKUkspAiAGpcO1Fa0WJ58IXDYf%2BuMAkvPD0GXofNnjkIcppDaKnSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMLNRefgpSAn0yDsUIKtwD4TFmk9iR8T0SaSe4suRskJTFl1HDbA0ECN%2BwkIoOOG5GrO0iVMyYwwFvBRtkbGD%2By0WkawNsMQ8O38N7PH0XWQFaif%2FoKvhh0NXxus0QjmJVgncG2luzxp%2F9LbkyMfrdH3VZEHazlYXgGH1t14AfhFjMuQRAZRu2Fj9jR%2BiF5O8%2BLya5r01%2F%2BKhNuobsCoRf0kvQMvx2Vfo%2B3KG%2BL5ZbfSXfFZLc%2Bhh2iJKIwukG3n9MDXLP8JpZ4I0j%2F8ljd%2BnvpgwKxdBhGhLUnw%2F7fUMLTgbaYJcFsx7ffcaX6qscRy5tneiFCkxZMejCeu57A2Xc7nFVXn7kDIUdxygiXnMhWpr9%2BDEbH%2FaG3LM1VAZ7FgXLOB4UBkJ9MWLxkjjZ%2FxoMwElM1F5aucaJmYFbBk4AThC%2B2gXTOBf90e7xyi7aBZTesTXhuGbq%2FywmII6RxmGwz%2BmW5VPcwOpVft86JDvoVyvfCu2HUOzV7unTTxj9VAaiia0YbWq1DrNI0yXNJeXO8DmhUotf4OAnA5Jfyfxm3V50HTRNIdO60rKaTHXc4izhf9G1LDI56IA%2FI2L3o%2F95ga0jcBkqefqig8Ebjpt72J6qxko%2FPsBsHvk8rS19nwxQeWU4QOn9Tzdk%2BnYwttSZvQY6pgEJ%2BLwjrL9DMtxwOnu4irzMGMoV5KIcVkSui1RTyUeErj75771rE%2F57jLUQn1bfwznYvCXEalQgvT%2BeTgfGLmJ4jHtmGHe90PWvk359WZXpJ1EIXDombdgHnKSoq9KTVe%2F96fa8E739H33b73ISDXOvN2daALMiHMimccRKN%2Bogi6m7xUdK2BlhnW3FyVmiH%2FYRzdtylpA0bk4F0trrP086XfW7L3gj&X-Amz-Signature=55b73f55b6fb42df7f627691bcbbec09ca3b1b62b13294a12028b6532516f30d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
