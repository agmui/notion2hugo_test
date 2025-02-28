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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKW4I3O%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCMkCPbbQJgc7iwSMNiue3w9o4lk4XA%2Bbp4Ob5PvVm69wIgFyYvy8pc9hSgpCIxUlYhn4BurnF3fpBTkipFnu3WJKUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGukJHPnL6b%2FbcPRCrcA9X1C1Isd1piWgZwRHboeJxyotgW7kN0kD3p2vOlpoR4w31D8ZXmrx7V7c%2FqNUCsdnigTMZNDMt4QOOh7y8o%2BARDNSy5ANXt5pwTqpC%2FZN7TAjwhLcExCiA7em9BWJhs4NnrvHgO%2BVnWAJYrSU7Lyp%2Bi1cOzzz253FJBtBvb1DT6T2eJRhYARfZXxypzYsB7NH25Q3cVya1%2Bw8di2JD7Rwnqb6i8QFiNeS5ija%2F49CcAlvQBcfBHSm7ab9EKlgwC8KGcN81EXsiyc%2FTLFbpVXzV2Fwvr5WUj69blUUeDL2kMGJGl2CG0nOjFNOlkX6y32Zuu9qYTkZXoAPBrvXHafhpE8g4ar7Q3Igd43BrIYm3dhLpjQdcCbph72Cb9u8x4%2Ffc8W8J7PTqXmkqa3m%2Bz2zQFc6Zto%2Bf%2BCIK7qgLy6zOjzRfHeKVcIsf0MxURZQPCAWBsc7aigPu5j1zrlYE673dVGh9Gsf7a1HDx1ghNDzKkuSy4XTD%2F%2B9a4GQ8kUZP5oRkuQFDGM75zoVOl6cygveumgPchF4Ni2LNzXr66UmlEx8XxHUkuwtIRlLQneNlMhCpr5JNtolD9Y1vUBRhDcnHtCwaqENJyJMYv8FTYUwZyVs9j0PASbzeGsK2hMI%2Fvhr4GOqUBncyz6G9VKVP67nF2%2BMazzgNETsZ1zmdtYPo1byehyeXfizguTt7FIckm0bgui2bpB7wefMCM98WIpGGHH4fy3ylNIanoCr96HYiYJaar%2Fit%2Fk%2FqTuE21MpJKe3TkBuLmhC6PO%2FcSxnYZVcR3v5bYEon53kjstQJyTMaF7p%2BxHazjmRWXZwwjKIdHu%2FSKnOLXj4asAQfsFX5KFMifzoazHuGuTiWx&X-Amz-Signature=94d22c4f1433cd617c889ad48b44d598ed7be07c4d6f5c6ee495e9c5fa33cca8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QONXQA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBHh6U%2FEwr6e%2F832GfTVpvsANng5jxM2CjriWVQ9wfs9AiEA0c%2FHzjzPuyyTHpP%2FcfIA4MvaI17PwyII5eUxhsRTKigqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjZtpSDll%2F3WJHgoSrcAyXzYOHtZm%2FWjRjuMmI6a%2FPtC%2BJ%2F4cM70L4idEQafRi0QEeBycTtYRVixAEewzYYhKC6Vt7kBNmAt0GoEy9t8UYco0dZvb2J2qq%2BRzY791BjJSaVauTHqr1XEBmXZbMSUXlDjPriX69C5CYLvNStjsVANM0wAos3e%2BzQT4OCheMirx98eO7vTOOTuHYlva4FarbJEeQQDH2eS%2FUkRiG51u4OroL4vdIhr6X1S7UG7ZHyepwYeYpkdGvYttplVBaOxGQzELL9H7nYMfOmTXuS5L9bbwP0vmX%2FwBU8CJpAlXIkKqAzDNKRKDjN78mBe1G7IDS01vjJCWS9lrvHG17qvNcfjHLcyfN%2BbQRpSLFgQYLgRqBAVGP%2FutGlGHzmZzUcizJNSUnW2H%2B6lsQOhaAdbzPxQy9eiReIyfprwWD%2FiBIVwPDObySBRKcCOvu%2BNY2xCK9I58mB4v7cXGeNob4oKuttsshIaMRrehTPWj36imXu7Nz5vOTXBmpIH%2BouZ45kucGjMAaF8G%2B1PiOvasa3J70JkxiUgAsK%2B7Nr66%2BRb6fY2UbdA47DQoEMsWXFn5pRgHsWyCfzF7gTVj8Dp6O9HlLpCC3fRKfePAoWNLjWffEZPL3QWJLIHg1me%2FRDMPPvhr4GOqUBu5rD4kwNmKkIVXc0Mp%2Bufrihp2U8BNmsts09nGtFhyKtGy43UAbZGzAzhAXCmV78mpg7%2FWAE%2B%2FNoHMol6UuLhDvglhsaJXccD1RkCuRFSgul%2BarXoUbuscWUeD6p5CJIXq5IbcQENqbV1UmNlxK2MEkmYildsYkX%2BmrXg1ZVnFKMJfOdkVt%2BuLcwXW%2FYnFSslZQRDTRKT1kjxplfMMkRp067%2Bjlj&X-Amz-Signature=f9e96f3c8528473cae780e6040c1dd46d50f955765902a97e790227ea686f6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
