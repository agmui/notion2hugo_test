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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEMPOQ2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbJD2MhxfAXRjhDu%2FEt0WgGcV1CPjeJwgZX%2Bygw4FUrAiEA%2FNkWrBKejHnWgtT912Z3REosHajj7fiqnnp1bOnPFrwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMNTo%2BKqLnohT6YUJSrcAwE4HWHGFEnLAQ6%2B%2FtTdxZishUOOtqRZM%2FN8OSHfQ1nTbGp9q3vK0nYj1QSma1bRf3GVo5C%2FHLRih06T%2BAzlR3b39UZ8WeP17TbsjNW3d6l86AOpD%2FhqPJZ58iUjP1NWLEADkY%2B6wxuLq4BR3jhVVYw%2FKZqfWF0rMmalB%2Fj8zYdrUfsOPz6xw8q4SAMjQPtwwAJFpfyD1Bk9a6BvtDbh6gSizLbDUxy2YCwodpNNBM07XaB8tDqs%2BMiMdiIBNwc1sZ6CrMnyi3Sewjz7bUxo6Am20QOR3xGIlSledAMwm6JjQ2Vo8jrYd9T3nkZkFVmHTINOD6n8rUumu%2Biq%2BWM31Xq2S2xg1cuxajDQD94mZcOfbkNUw0a0qdOdfLQ2icTuok%2BrGl%2FeaO6CaJDQ%2FqyJyOqZdqF%2BkNNPOxW%2BSDs1VhRz%2B%2FfOa8VP3%2BDNYiME%2BJkNSVs5KjitOnSectk0r5aqtQWtqB8kwqxpog9YuX3fIw%2BYiYsIWNRI8I39dSFj%2FvGl1xqIczOAqTMdZ%2Fu8jujkl1adNBCrTyNC8bPX2obVzFPdA%2F869OOdulZLt%2F1OGy9xU1cu37mKdsYRIYSEKOQrRlZsSfSnDFAXjJalazLGx%2FhLlKxhJGlGJ5aqbwT1MPOysb4GOqUB81bQK2k%2F5rRHBWXBvDIlpVk7nSDAFspXb9i6cMZTv2r1l8PM5WFD33UZ%2FK5GjP4meymxGEdeFFDW%2BCF0Rteij06NrjnnTW7Qa0zGAweuy%2Bmuakyrk7pp0Evm9GjwuP8RHw3gP2dxtfpvec6ehJ%2BoRId6tQ8Yj%2BhQZcAtdIsRMBTSLC1oM%2BO0YoZM5u%2B4Jh4x5UOrVYkyGhjMyBY2PmqKGBkviu6r&X-Amz-Signature=9c55e6880c2484df345be555540a42236d6b8acceba26bae01e8854a44efb5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYSYUGT%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDSZ76qYnzOqij2pG7WAPoPyqFzs6xOUlw0V8wIMTjshQIhAKd0WPflaUJ%2B9bkzyAuWSsBzebuyRFb8gbq%2FEGfktRYwKv8DCGAQABoMNjM3NDIzMTgzODA1Igxrqb6cTTqnB9iS%2BS0q3APyUDkFzR4HT%2BMTJ4clALYuijaBhVtFTC9Bt7gwIuCzJy5CMrnfyX%2B8%2B8sSpZd54sRu66DpShHoAge8RYLqLevxOkOmG1VXuXsB5hy4fPZg%2BiDoyTUydYmnkaI3%2FX9YjHBUWDOPY5M9T3%2F2qR8JcRkCVB%2Fs7QAV9AO%2FVQOLNM2Z7KClIdiIiZP%2BbHPqtJq9GCzkb819726%2FLCUXQZTsFC98dFfGE8srlljkWewZJJRz65JraTnssPq%2B%2FC48QiSa%2BBICufO6Vf4JpcRUHGeMlzdjGmoNDWcLI7WfLShpDF%2F01AbsoCMelfzB2ZX1ttPFn02LQYGTGf8qX7rBZGDACzzGYpJEBvyrqY1N5%2Fvewn7Jp5msiZAJBsi5Xbi5VGEyYtn%2BN1AwcP36nIgAs1Z9xFucKlC1ln1peb2M5G4taEKgWEG4qz8bEeNR5pxCaGX9ZG8%2BcfWQCxHfpZkMOxGeudutuJO0K3F2IThpqJjH6xFRiuXJJ5veFglY6dYr3ixByQOhXIabz84B5efI53Ry5ga9CSG1ucjwTpO5Rg4df8rLuqLsG84oATuCdD8rIs9vRVYOWNiZ3AU6axD0Wl2%2B5Ga14Ikeqe7REk4d4rLBKl9H4FzsqkfaeBl33WNSXDD1s7G%2BBjqkAeVjNaS0bA7HkDZBML%2BqK%2BJPIcv78Gyz9McYyUFOAv%2BaWBj0VwKWmoYSJ65piKZsp41brJAgwM1b%2F%2FC%2Bvmqch5t0clPk4AmIN9IKjbxU7Ge%2B55%2FIzKJRbiidc10ea6dDwGPcqmxpE2z6vOR1jpT8Zv8Iv6xcrFITPepr%2F0LXnjHYZQJOmmWQ435Lo4wlLC9M8wISYwE0wfFWc7FYJEvxpzIdyfI0&X-Amz-Signature=cebc56d4c60d5a9e7aa5b85807d015cfc34666136b756a7c19586bf174c4d5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
