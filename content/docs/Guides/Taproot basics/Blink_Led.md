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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGUGMOP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHRVYnuiYDFIcTyfa7f4vALNst%2Fi9P7X3QMDbq5t6n2hAiAMKAxNbwx%2B1s7IZXVoM3X6dL%2BRbwx1xQMEuJo6vVPaoSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXrmyBJb%2FWBCwiJv5KtwDnEOhAk8mUrt%2BfmUAwqN3JjOwNBze9OqVZyiuNCGCaxY9RyFE9c1Lr1zzk7d3HmHtkj0QMpI5S9fXVeITs3f0LZRQX2bdzQ74zCooZ1sus8rJCTtdwPBY6NsL1BAYBS0sT3wo8y3G1TEK27Q1cWkW9jWYz4Quz3fLvEIhvScaRzhkaZ9rL3jRUaND0YuJUZJMHAWlKP%2FPrZPHwtwMiMQ6Ci3AtAQC1RJ2V5SkBOeT8ac2HJGmIU1yYLgC%2FtkdEvJQjRa9KF3pgSl494gEltQ0zuGn%2BXz%2B3djKBnG%2FSNf9Y%2BryheLX4dq2e7BuSyvJZBssGOJdni%2BNN6QBYFRWtZ2hPfZdfhIlESYz8yyBbhY%2B6q7JGdBOTZdrwqI4%2Fwg0A1o18LYdIyU0duyOvgyvnZhJjHGho9CQkeQq9LwfLGwRP9tHfeUFMSP31FCCOLVJP619OjqGWQZneY%2B%2FhjI5Ow71%2BU09r0aKs%2B%2Bw7Nuspc1ZgOQCnqtZbXuE%2FCSkYokISXCps5FPaeDVWK1ZPM9zultFjnFdK75kwA60yPLf87Rl1PBe31T8AALr%2FzzErjZMX1Yp0KCdbGTBDM4O0yAnK22Rb26FyxgWVRN%2B8UORLvrYMM5Recn7lMLkeD7AH68wzLzWvQY6pgG3tTgk%2FQf2jAUbjfDeHrBJr82ViOGuCI0dSndlRwsqMUjBRaXABrteyJXwUTQre0U22222e6VyvwJkgRyfsQD083xYAmLMp%2B0VURk%2FrsVFvzcScos9uiB9tl0%2BO5bsyadv0M9EQP4eWKypZeQZMGa6k7%2FCYbXlqNv3vehc9Y3pMshE%2FqHEgIt4VaMv0woVejuI1ZeIXfxuaO6LA7HPQ1RJHMLfCWeR&X-Amz-Signature=67b47d4616ef1ddb0223d0cbec0c837a83418d52f6985c43d246e96c43a53af7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHRMM2Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGg670TOrgiROI7tvqs7PClzl6ZCyf9IBxLVIWRFnoqWAiB3Su1cFx1pONSVYGnipX7p%2FrI1dYFVj3rH9T6%2BEqIhfiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDrzrOQXZNhVmEPnKtwDfDLJ7now0akkiKDOgPZxHcxWXIPvIr4d5fgWcbEcygX%2BzTrbx302RCHcwYqNkNJfC3bzWNij2H6wsAQ5F%2ByX1HEQzLMjbyQEzYF3dbm16%2BazJfKH1ssKzq7Kea76W%2FwJqeH9gDGhYFOYj1VzTPgm7HWrXeitFfFZqJutrRmSkKgQYk0K46Cmc2nvkO4Jq8k7FNvpRTiN4cZ4mMnv%2BKYlaGRZGOyLFq%2BWB90wIB1K%2FIuJVLVkf6b3VHNtjkZDcAtNz0nsxmHRPRFwNP0nWyVlwIQY2feuOjXPdSSbmfVPiN8AqHjSmRTaMb%2BIrgO9pz1F%2F72DCxksweFf7bq8AU7mJtmGsmeiDgtyO3QlVKDcZaiCg9wQjzuNBNCgSn7tVDHMTGGXQbjjJMvllWVW4M1MoXC0VNsEzVGRJO5gxBwEE0eAdTWMouVJ0D2i0aIfDLxLJwOeJ2xRDrNyJG3M68LH8P1UjBdrz2BI%2BKTT7Hah3z1wArC4oKBqc5cMfjnGMKH0A47JL%2Frf%2F6GCyX3ET%2BkojaWztyv1L1QdQHRSstzXTtmTCXQ7CtmhJCBUnTiJkmomYRByc59EnZY130NtxvXXQ7teAyu4E14Cm7Je5oznrzvy0Ax%2BehQ7QDdcmnIw4LzWvQY6pgEmgeMv2gUBAm6wq8kio6TPZxyYmIEVTQ0plL4BsW9PvZnebLjTihvgHTvfEhCGeylGJeyLTgKdk5Tp3Cm31pClcdy%2FBus7m1hvHXWqGCVFMEnytrqiOQg9O%2FFgCkQl5%2Fsqr8g%2FEegveMJQHAm0%2B4euLh%2Fyq0LTC57pHn1a5GCSEOsCDbnZ5WgW7iApQn%2Bp8kvOy5ulKNMC7VMMvAv5OI94H6qThMUc&X-Amz-Signature=dc3c87d0e4b0bade9a90e04de9e2747221181dac97efff5d5ebf0687bfb63bff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
