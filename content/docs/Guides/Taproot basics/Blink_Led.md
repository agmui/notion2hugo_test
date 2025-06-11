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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4OC4QZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaltEXxEPWrYDWTKUbrQBtHz4MvPukPniSUJjk3TEmHQIhALxsAexiOnio6h14ZIlwNtZcX6V7HMaape%2B%2BpRZDa0ysKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl2x6uWPAinb4znxwq3AO6cjKvC0fJAklurWnR5aB3wXhfKDeNJMl%2FCOudCddg1G%2FUjUM3XT89UegPyudt8FSSydbscP2TJGMK%2BpCUSdzSBesJ%2Bx5H5zZAXx4Oubd4UF6WLjuHUTyQpFfEklMn7xQ%2FT7ISnVgkX%2Fyi8Rysg21KYniBmsDVng%2B89aUQzkmKdW5TksEArDRbdbrPIQ7i7NZfJSj249cEiYcAv7zTqxZZrzLFYz99uBtFVdna4ntvd6aR6fjzDRcm46aNcAyTgTrtDE8nIvDELNsXLyqbarnE0wX0yGMahDcbXrxyAGgji7Br0KBjMTXcJpGMspxvEiZrT%2FG8A5l9d6GV3C0bRdJjGbVE0OXUi8kJuAygZpxKjg3%2BnFlDbXQeYNzEqkLs0IST7HddCExWpvmvbmuDLmBT0lvqzluf7L55NZycZb1OjT2xdksJLfr7dQFz0etvNXIIdYXVnhfvOAuLbCKPxRL0htJRNXtnH0iJt%2B%2Fyjba7J2L%2FaJfvW1ssnOVlQCYJft4Hm4nrecbC47p%2BqUxB2CF60sWZKIyhg8K8YXMPOZ4SLqyKECI%2By5mBPo6Wi05PcDPBoN7yKOp5jegf12%2BiEjYkAeFYogivfXIdbpLpTX78CETCc%2Fgwk6jfvYy9rTCFyqTCBjqkAeqmaqxquaFv53gXevxdWJW%2B7Tf74bt7Rhl7cJI7KA1LabhniGR7ePoSZ5vAOv%2Bi4wTFhRY5dWNgbEl7gyNSWTYDYBlCAEWamBKvz2bIIm9PuW%2F4gxzDWIKR%2FUOUkcWGO0qxCcvLfZ9%2FSa4%2BFOruXBvwfkJiUZH%2FwstEO7gyFqW22c8J%2B1B4SQQNIZqNAZCM9paFs2uhgq47Rilj0qvatNMx3row&X-Amz-Signature=1716397526977c31eeea520a3e7d28d1cdb8844c856ab7accf6212a86fb301e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVB3WXH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQIQNGRES%2Bg%2BZmccfjsxDGj66c7wzJnistA3zzvDdt2AiEAl2pR84DLrWawfTpVZjl6YwDgceFfm%2BXuUNxHKPjYX%2FMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBIYWSOS02t9a96SrcA%2FRA%2BwOfXCBi7sUXff8nHl3vPnAhizwJ3UCCivlaLvGa8TI%2ByHlbdz%2FkxCIMYdMKSWRiojMVa%2BY7zxwmciNkn7jBoWOAX0IYfCZ24h9GPQn%2B89Cz%2B5eNHrbz2pGDI1ClkhXyewzUkS05Sylcnwn0bpQJVotQV48cYglxQwO6Tn4Nfc9QhbY10gPosmXeG2IDx%2Bo4%2FoEk3tmPrHdszDeiOO6MKIYkF8GrrEN0LGY7TXL2auU7eCMLZPZfJDj17oaR0aP0pIzd%2FIXpb%2BsPF4%2F2%2FExVNrZEpqG7cpts6bWSjVF%2FaKABfBxBM8AMRsNJtss9ms%2FU%2BAkSNfUGBxWjRLUNqphOK8K8JlEJu1Zx5y6vzh1zhf0xMUJ4gSYxmLOOHXXX6hoy9Zx7QZJx8ndflIgN2KYfI19ZQFsYavQCoZuYBIPhBFk%2FKpyqJH6WwqvbZjvxyUGmeKJY7WJaoEUz65z7a%2FCdeTlrevD7BYNPeJUd755Z7WtZ3A6HPz4O9r7wQZ154AZY2i1SsG91VPfShg9dGHniRMjSVSIMwXbTRCia%2F%2F2SJNWxSG9HQR3fvQabR3E%2FGIrdpNjUq8Fpb1OIW2woXY8gJPXLZjnCQxHg8d%2BJ%2BsEGP8%2FG4yYqAWUkvnU9MP7xpMIGOqUBHRWU4BJ7ri7Z3iv%2FxKlInx0oSbbdIglsq7YOG3NzAoXcloefs4X45a6YTbJy3Uc6%2F%2FGnBheGCGv23FBACaqNTFXYaRUCZ2lS8f5zqBWgqIT2dfK3u%2FRImQ1nNcXjRWXNJfS0gg%2FeWcIajqDrFC3g8hHBfeHf%2FynmUOfzdjBj62fXcovm9JfPQ6Du8YYcQ8OidtON7n%2FU7%2FeXvV5la0Q32%2Finl8OR&X-Amz-Signature=23cf3ef0f277d323c6acc91dae32e66b4f9d8b426a7980e0a2647eb8721e7240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
