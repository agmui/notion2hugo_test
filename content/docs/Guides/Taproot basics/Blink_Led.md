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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUB3D6D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIEoAkfEc75kkr5L%2FT3z9qyxG8gGKCpxqZ3H7vjGJwxK3AiBKlbmeu4eBrXh9YxcSsuKWjpuoyDnzD%2FzEyMw9%2BeMmkyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrjtzSUJkA8vevcPzKtwD0SGfrd8RdLbvRquccj0a2qqrNthKRxB4BqmQzZwR7uaus6PMRq8vS9Ch1GKNrwnE3hnsaiMN1ghcFJv%2BDZIfosGokTnWTNd3cvFUnja%2B%2BhnLO1Ra%2BdKGwvrpQtZch%2FaeEVzLlU0GVUenjXhbz%2F5wJ5dTySL4dkMr2Lz0r4424sBJGNXxScvyTLOh5ZmvXSBms%2BIL2DYkA8dM8w%2FuXdji7rW8JBcCGgj%2BEhVIHph8XjsyiiypoYDjOxjWQ%2FoZShSv2tFBZ5IUebaqESa4DXslbgX1NEuSsYlXWYr%2B6GRAnEezmU1JqaKSPCezfTNgijrXLiEjPVTBxCrO0n6OUJDB7ZW2q0B70ulMhIQbuThgT2TuczTeSGCkcTJ9ms9eZx7WFtquhOKTF5srKPsQ8Zmn9itaOD8dMsLyCobTHxfGMyVTKoHMYDQPtsoXEyXTfsDKNnYMzuSdxC0mwAE0n5LpK5%2Bi%2BX5BePg3fiThXlJciGJp88YGxHaWCffmtWgy7jJwbis7HSrBe7O88cxMZwvjNtRY%2Fv2PNNYeu6zZSSE8%2FCsgh4yKK0HBYi43yZjHH3twRyL1%2BMGDetaYLaurgo1LlQlFRSm28oRQR8%2B3LwIJripZT5Qd%2B2n7poIB67UwiNmtwgY6pgEjuIqIzGumF00V4oOES%2F2fTJTRgi7uNQJ7Vdxt%2F9Vn%2B4fK9XDAEMgSVU8iYHbebhnVQxpwsFaqMENABO0gh%2BwmXjin5i7PDTpf%2Bt80xxp5czmFCtiW0AIMwUE2QekP6YogApi1lLcW73PfAInrkv0ZsSlmD8s5PKex3gdLdP2hy13lawvofcK6ISHEgkqSGGwtEyuZLMODR4eiyuHjAl4h%2FNLX1A%2Bz&X-Amz-Signature=4b587e989b36e2c6ac7771f1e5e4ef55381b5844b8a9b509fc2e1044ab756f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZ4DNXG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDWo5P%2FTcqzoG2P%2Br63%2Fxkq7kUGR%2Fs2nfvas%2FD90FbjIgIgSVcnKDE%2Bslfb3SLhNYNkqoWqPRt1eg9oXwy8uJ7JWncqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFah7aS2NIdOGgtVjircAyZrFaouawFS6N8TgqyF7b%2FBxdHA%2BvqdCeGiBwFPQFIyNZssdFC2%2BvGFtd1j7bkqsVM55tLkhXrhcD%2BMWACHM2nWThMMtJu34BsFJLes3OBsDGlNQhbg9uDnXJgbR8XP5wa%2FLOgj8Jrteizo3jqgHu6eJEGXBMWC%2BF0jap9pAKlNdrY%2B1OhYTWca%2F1iDlmKBIFeAckGcT7q%2B6AoEnaLa%2FPWYtyKICBPy0GgcuAM9GWg%2FwUg9Y5lLwbohrrWEpeXQ9xCbYs1ckyAxj%2FDg5lICXthc2F3ywwNpPQGh9d7mtwjZQDjI8Q68QQKJrBfs2lXw9y1%2F3F4M505G38X8alGwZ6Xv8EsM5%2BMIDEkTE2Mx4t6EyuCjer8koKq6mYUntyOjdLLKRrqxYQy8DRJ0FNnY5vx7tfqnC3PP%2BiMnyfq96Lt%2Fcsut8I26G7Fmx1lKoByfmEvNtpVZOW2FwRMbONemYkezXiLG8Md90sFPppngwCWrYlgg8L2PDvmi3T2YVf7etzqeW8%2F3EfRscDNDBGGxKdPRMH049g7GCH3Q%2BEYd3fkXeYlzSt3V9TQzK1bt6PWs5v7WtvIrEf9ksInm6W7F%2FLfg7HXePLELZwa9HXTfgO3S90GXlnkSZDeNa5F6MPm4rcIGOqUBFtak2%2F05enbomR9tvDJdNCHoSgm1ANUJ9l9HdqITgCEKFWDjrBy9ODmyM8ujO0XADPikdXiRRef9jeyceXXVUTQtGibLLtv%2BIrBrViAnwbekmKNgIdhg5ZO3FZy80kz63SdMD6qaxZl2JUWbm411cMGpS7lcfyLC5JHs9Gjf9sjyHTWXHsQKGdNYVq72ySBO5djF%2Ff17GAegjw1HsA6GtfzrTbJP&X-Amz-Signature=46172148c506ba19b1de480f22fd3fa1e50d0923c8ec6550449d96c9524b02d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
