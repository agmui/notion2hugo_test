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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKZ3P7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIA3F7p%2FjFm5CwHM%2BxLiA16qwmg6eX1RMBhdJpfmC3y5WAiEAvZ9kfSIiIMeJzepZ2jKG3Da9SJYt6Th6HYC5aOuqpU8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJcygHVpDSFY%2F0UiJyrcA0pGFwVf%2FSGQsbwI5NSY76PSkXHBnMjxa2kAH87IQvTe8GklBBqRwe8TTOfeMGPIJlTqqPBYo2LiBMgqA%2FjQTFNAJwZrCNGi5pwb7OkU4hpFBdYz5PZh5bcH%2BTMStcL0TzCtloPMw%2FcOwyrbWwnaXhcBWLLq%2BargndcFoJ0lhFEai1UoRme43C6rhYrQy1Ls3oQjrqoR0dPTtQ%2BeooTYcM7SACPIsGVioJgTewjgZPoLiVfCk3cC7bNqbdWkl08GBhFInR76SlxtUDI5%2Be4u%2FohhRiYYcAVhcYE2vJ4SDT%2F4S7jYN7Jw5WEUU6CJQT1g7QGJIFbqzsex3Garg14fj4lWqvwttUvxK6WnvIqCefoZdIonFxFTVnW5b4k106dENl4DaZj6bkqXvF77MeAcxc2uEZVz2fbO2JCr1Pq3Xe7HVGXJO0WO5NtuZilJN4k5D0HyX%2BBr4RdO%2FF367OhdC25ksYf3GxvUwbA87bOLSX%2BRpaNybfLEPMslkcAXD3UqcNQrYZwG8xgzN6V%2B%2BFmhZlw5esA%2FjSEyRGCClsFK0O6PgN%2BtQBjut0XyJXKEkr1v7Q1pdy7bSgqlpmv2l%2BamcYZTosYGQRfKBPIy2lnJYd98s7vmDhgZvfOeMIpAMPDHqcMGOqUBe%2FZjxgoWwZ5rwGVRwB1EeRl%2BU4pq%2FUK73gv1VRvz66YZLIfh8JUK%2Fj89xWNiMPIGKSjJ4AvyxdwCaHFyLAXAvGRT3ARbcMHKkDvtOk%2FGWktVE0Ty1YVN8wvUCBzG3lJvVDqj6YyE%2FbRbZbK0xs2jdX364nv3%2FDUsYFMOzAulAICuShYibx7OMEGqtMJyDogHbxLUjKg8hCVfyh8iCaHJKm2bk5m%2F&X-Amz-Signature=6bea67057d93e33f819fc07e7d95fcb3771bcc9af4fd16064d6f61dd6bc48b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEGBHOE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAbLv3Ai2cxXsTENR2EVNeSJvq8%2FLoNYCJslhD5ZxTUtAiEAjJFWugUSTqKYpUzUnaUy7eFrtODiWj%2FEI%2Bj1Z3HtWBgq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJT95woFoRMBFVxWDircA4cmXzY3hGq6%2FOsFYPboniU5rLlcn34POTGE22%2B9rQnAgKknngafD71jDsdCNRo4mlES%2BjWp71ccdvcwCJNLIeyuVby%2B3qhCJvOtUzIDrXv7bRmFzAGW8F6jJqpLNQCWWIuw1P6P%2FuPAdQVtok8ACvzEd%2FnASvDtxqlsD1bAGg005mZ1UJTHSR48NkdWjiFzAzGInRgOZjlxVij5X3nPcbdFkXIOfLFv4NTZvDaMbp9ywqaSqC8H0G8mpeKq8ILFvL14nhxhtLmhfGJCQpglcgaf1zCYQHZ4q13m%2Bt69uukdK%2FeYJBbJoEsr4MJM%2BggK1e4bUKKLpWvbHT9BoWLkUiCpIfZ4ngodw1qCho7O8lJVh59b4ej%2B6Qv9Vvdk88JXRfd1MGefvKCMIA2giKvZQZcoOgaQkqEMOAjtdRiQQmzIBUwqKnWYSP65pvXhdSauuvrJDyIGMtUYup7VcBBs%2FLA0bcTddu5vHj%2BWkQbbsh4YzyweZVOkJ5xg3%2BVCyl91RKexScv4JugXt8sxZc6H3fQZtf7Yk7oLNlRDysCPZZPILBmhU2cfr7jFrMl%2Fn3NT3%2FHWQOU3TzhCYtKubRjHSdukE4w%2BgOMyVv973h5SlCE8a%2FguFQddd%2Bs2AOG4MMfZqcMGOqUBfGAdznA%2FeU1q0CkOer29nJfhqG%2FMd9DsbdxfHpI1mY6OTqqKkQ2j0NgjhJA33FAYR8w%2BVgDRmEvYzNiz%2BZdGZ9gxuV3rPHU28upIo0rCSUx9xjOJbbI2NXChAhnQadYSCcqAwb8swWqlBbc8ikiekGdZwXFTH7pOFEOell5DxYpZretYetSjhCWjwUv7F68MmNnGKcMq1z8Df4F2mtd%2BU8HQLEwg&X-Amz-Signature=69f8e6df225b89c8712230937ebd51732ab8e843284ebac4eab952d4737d1402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
