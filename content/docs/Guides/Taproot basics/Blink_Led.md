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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLEJJHO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDjtlY69KXM9btxK96%2BB6neV3nuMBghmXbBcxOs36YPKgIgXzcf%2BeYD7IxFQvu04E6SPO01ZZKSZrYtW2AoCZYpXPMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLZhLdDXFnXeE6IircA%2B9tHzghTbZEEUldQhAPS%2F95s49IIVvYIWXZ5Bgx4wYp6xAFf8tk5yWoQYZ8Cyauk06kINPcaSFkQj0OXG0FJEsBgW3nJhERf61XOssbuNUMTg8ivGE6yCxRVswlHKhAf3OyDj5GLPjYl4fF2ghYOV7vrrGBumH4QVqBv0jNKTq%2F61UpMQT5eY95qs4Be%2FDbdi9t%2FMOATix80tjqiXJw%2BP78cAmL3e1IGAwjI6mvhpefKsD23cAsKeiU5RgQVlHy2eRE5ajX5VFgR8khbiQovBnxW7fz8sV3BqNQ%2FYBiU4LvdkW0LhCjdJAZLgYjn4q9YA2T5c2WVJTygvQZjcxN7%2B7wint0M%2BLc1vSAlj9eUBLQ9in9nbzf4OioB%2FZ92t319QDmQ5pF1J7GDK6cSPscD0RotyI5GDLcv1WFBvFX1VOK3xCBPaYuPedsqYvtbF5KDR4oGDi9HbwbfnAK40hMiYIVTfT21dzhN93Z6huRFKvtMGXbY1IWk%2FTlBUdTdD4xORt8BadC5hPt2sXkDqW3AOjwJzM9%2F5JJ0vmM7zuA2LJ%2FECT3cFUeStXcP0ZCMeoHFf8CN%2BARu%2BoLyu033i2HQU5pPshrKiIlCUsrvStb76bJzDlzkidNGb9p2%2BTpMJn6xsAGOqUBjtOdrn%2FafknKLt5b4V84Lj5X3T3%2FUeoGNVIoeS2vq9U8dGC3wZoeqGPFWicop56a85UjyTABWchLX%2FnDAR0bOLMHpQ%2FvDQhDxZ6RI9QZrd7nYGY6zrXOiBhZcQALoipTfExNwo4wzJPGOMZYLn10En0uvveELb9qzNeFoScLArt0RRkm2mTgb7YnNfUZHC04R0dSCTeFg3XDtyp0ojie%2B%2FteUUcz&X-Amz-Signature=5041f1c5588be1286e219deb895508ffe9ecc4e4ea43c223e1a2e9d2b7bc6eea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLEJJHO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDjtlY69KXM9btxK96%2BB6neV3nuMBghmXbBcxOs36YPKgIgXzcf%2BeYD7IxFQvu04E6SPO01ZZKSZrYtW2AoCZYpXPMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLZhLdDXFnXeE6IircA%2B9tHzghTbZEEUldQhAPS%2F95s49IIVvYIWXZ5Bgx4wYp6xAFf8tk5yWoQYZ8Cyauk06kINPcaSFkQj0OXG0FJEsBgW3nJhERf61XOssbuNUMTg8ivGE6yCxRVswlHKhAf3OyDj5GLPjYl4fF2ghYOV7vrrGBumH4QVqBv0jNKTq%2F61UpMQT5eY95qs4Be%2FDbdi9t%2FMOATix80tjqiXJw%2BP78cAmL3e1IGAwjI6mvhpefKsD23cAsKeiU5RgQVlHy2eRE5ajX5VFgR8khbiQovBnxW7fz8sV3BqNQ%2FYBiU4LvdkW0LhCjdJAZLgYjn4q9YA2T5c2WVJTygvQZjcxN7%2B7wint0M%2BLc1vSAlj9eUBLQ9in9nbzf4OioB%2FZ92t319QDmQ5pF1J7GDK6cSPscD0RotyI5GDLcv1WFBvFX1VOK3xCBPaYuPedsqYvtbF5KDR4oGDi9HbwbfnAK40hMiYIVTfT21dzhN93Z6huRFKvtMGXbY1IWk%2FTlBUdTdD4xORt8BadC5hPt2sXkDqW3AOjwJzM9%2F5JJ0vmM7zuA2LJ%2FECT3cFUeStXcP0ZCMeoHFf8CN%2BARu%2BoLyu033i2HQU5pPshrKiIlCUsrvStb76bJzDlzkidNGb9p2%2BTpMJn6xsAGOqUBjtOdrn%2FafknKLt5b4V84Lj5X3T3%2FUeoGNVIoeS2vq9U8dGC3wZoeqGPFWicop56a85UjyTABWchLX%2FnDAR0bOLMHpQ%2FvDQhDxZ6RI9QZrd7nYGY6zrXOiBhZcQALoipTfExNwo4wzJPGOMZYLn10En0uvveELb9qzNeFoScLArt0RRkm2mTgb7YnNfUZHC04R0dSCTeFg3XDtyp0ojie%2B%2FteUUcz&X-Amz-Signature=ebda706158d26a8b744f0da3212cb60c56e51ac22d68248eba07f7285e61412f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
